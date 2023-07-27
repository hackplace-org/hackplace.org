import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { pages } from "@/lib/siteConfig";
import { authMiddleware, clerkClient } from "@clerk/nextjs";

declare global {
	interface UserPrivateMetadata {
		onboardingCompleted: boolean;
	}
}

export const fetchCache = "default-no-store";

export default authMiddleware({
	afterAuth: async (auth, { nextUrl }) => {
		const { pathname, searchParams } = nextUrl;

		if (pathname === "/onboarding") {
			const url = new URL(searchParams.get("redirect") ?? "/", nextUrl);

			return NextResponse.redirect(url);
		}

		if (auth.isApiRoute || !auth.userId) return;

		const user = await clerkClient.users.getUser(auth.userId);

		if (!user.privateMetadata.onboardingCompleted) {
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
