"use client";

import { useTheme } from "next-themes";
import { useUser } from "@clerk/nextjs";

export const Discord = () => {
	const { resolvedTheme } = useTheme();
	const { isSignedIn, user, isLoaded } = useUser();

	let src = `https://canary.discord.com/widget?id=979086159022030899&theme=${resolvedTheme}`;

	if (isLoaded && isSignedIn && user.username) {
		src += `&username=${user.username}`;
	}

	return (
		<iframe
			src={src}
			allowTransparency={true}
			className="h-[250px] w-full sm:h-[500px] outline-none"
			sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
		></iframe>
	);
};
