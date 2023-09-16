import { pages } from "@/lib/siteConfig";
import { authMiddleware, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

declare global {
	interface UserPrivateMetadata {
		onboardingCompleted: boolean;
		nonce: number;
	}
}

export const fetchCache = "default-no-store";

export default authMiddleware({
	afterAuth: async (auth, { nextUrl }) => {
		if (auth.isApiRoute) return;

		const { pathname, searchParams } = nextUrl;

		if (!auth.userId) {
			if (pathname === "/onboarding") {
				const url = new URL(searchParams.get("redirect") ?? "/", nextUrl);

				return NextResponse.redirect(url);
			}

			return;
		}

		const user = await clerkClient.users.getUser(auth.userId);

		if (
			pathname !== "/onboarding" &&
			!user.privateMetadata.onboardingCompleted
		) {
			const url = new URL("/onboarding", nextUrl);
			url.searchParams.set("redirect", pathname);

			return NextResponse.redirect(url);
		} else if (
			pathname === "/onboarding" &&
			user.privateMetadata.onboardingCompleted
		) {
			return NextResponse.redirect(new URL("/", nextUrl));
		}
	},
	publicRoutes: pages.reduce((filtered, { isPublic, href }) => {
		if (isPublic) {
			filtered.push(href);
		}

		return filtered;
	}, [] as typeof pages[number]["href"][]),
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
