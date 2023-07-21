import { siteConfig } from "@/lib/siteConfig";
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: siteConfig.pages.reduce((filtered, { isPublic, href }) => {
		if (isPublic) {
			filtered.push(href);
		}

		return filtered;
	}, [] as (typeof siteConfig.pages)[number]["href"][]),
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
