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
	beforeAuth: async ({ nextUrl }) => {
		if (!nextUrl.host.startsWith("equihacks")) return NextResponse.next();

		// Redirect equihacks.hackplace.org/X to www.hackplace.org/X, except for the homepage
		// equihacks.hackplace.org/ -> www.hackplace.org/equihacks
		const { pathname } = nextUrl;

		const url = new URL("https://www.hackplace.org");
		url.pathname = pathname === "/" ? "equihacks" : pathname;

		return NextResponse.redirect(url);
	},
	afterAuth: async (auth, { nextUrl }) => {
		if (auth.isApiRoute) return;

		const { pathname, searchParams } = nextUrl;

		if (!auth.userId) {
			if (pathname === "/onboarding") {
				// If a user that has to complete onboarding signs out,
				// then bring them back to the original page.
				// If the original page is private, they will be redirected to sign in.
				const url = new URL(searchParams.get("redirect") ?? "/", nextUrl);

				return NextResponse.redirect(url);
			}

			// If the user has just signed out, don't do anything else
			return;
		}

		const user = await clerkClient.users.getUser(auth.userId);

		if (
			pathname !== "/onboarding" &&
			!user.privateMetadata.onboardingCompleted
		) {
			// If a user that has to complete onboarding tries to navigate to something else
			const url = new URL("/onboarding", nextUrl);
			url.searchParams.set("redirect", pathname);

			return NextResponse.redirect(url);
		} else if (
			pathname === "/onboarding" &&
			user.privateMetadata.onboardingCompleted
		) {
			// If a user that has completed onboarding tries to navigate back to onboarding
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
