"use client";

import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";

export const Logo = () => {
	const { resolvedTheme } = useTheme();

	return (
		<Link href="/" className="my-auto">
			<Image
				width={105}
				height={20}
				src={
					resolvedTheme === "dark"
						? "/light-logo.svg"
						: "/dark-logo.svg"
				}
				alt="hack.place() Logo"
			/>
		</Link>
	);
};
