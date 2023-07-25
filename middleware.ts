import { pages } from "@/lib/siteConfig";
import { authMiddleware, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

declare global {
	interface UserPrivateMetadata {
		onboardingCompleted: boolean;
	}
}

export default authMiddleware({
	afterAuth: async (auth, { nextUrl }) => {
		if (auth.isApiRoute || !auth.userId) return;

		const user = await clerkClient.users.getUser(auth.userId);
		const { pathname } = nextUrl;

		if (
			pathname !== "/onboarding" &&
			!user.privateMetadata.onboardingCompleted
		) {
			const url = new URL("/onboarding", nextUrl);
			url.searchParams.set("redirect", pathname);

			return NextResponse.redirect(url);
		}
	},
	publicRoutes: pages.reduce((filtered, { isPublic, href }) => {
		if (isPublic) {
			filtered.push(href);
		}

		return filtered;
	}, [] as (typeof pages)[number]["href"][]),
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
