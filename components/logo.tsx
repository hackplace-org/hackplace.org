"use client";

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Logo = () => {
	const { resolvedTheme } = useTheme();

	const [logo, setLogo] = useState("/light-logo.svg");

	useEffect(() => {
		setLogo(resolvedTheme === "dark" ? "/light-logo.svg" : "/dark-logo.svg");
	}, [resolvedTheme]);

	return (
		<Link href="/" className="my-auto">
			<Image width={105} height={20} src={logo} alt="hack.place() Logo" />
		</Link>
	);
};
