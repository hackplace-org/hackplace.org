"use client";

import { useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export const Discord = () => {
	const { resolvedTheme } = useTheme();
	const { isSignedIn, user, isLoaded } = useUser();

	let src = `https://canary.discord.com/widget?id=888441920651669534&theme=${
		resolvedTheme ?? "dark"
	}`;

	if (isLoaded && isSignedIn && user.username) {
		src += `&username=${user.username}`;
	}

	return (
		<iframe
			src={src}
			title="Discord Widget"
			className="w-full h-[500px] outline-none border-[#5865f2] border-[2px] rounded-lg"
			sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
		/>
	);
};
