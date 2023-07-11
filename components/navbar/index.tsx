"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { Content } from "@/components/content";
import { Logo } from "@/components/logo";

import { Auth } from "@/components/navbar/auth";
import { MenuItems } from "@/components/navbar/menuItems";
import { MenuToggle } from "@/components/navbar/menuToggle";
import { ThemeSwitcher } from "@/components/navbar/themeSwitcher";

export interface NavbarProps {
	currentTitle: (typeof siteConfig.pages)[number]["title"];
}

export const Navbar = ({ currentTitle }: NavbarProps) => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Content as="nav" border="bottom">
			<div className="flex flex-row justify-between h-16">
				<Logo />
				<MenuItems
					currentTitle={currentTitle}
					className="hidden md:flex"
				/>

				<div className="flex flex-row gap-x-2">
					<ThemeSwitcher />
					<Auth />
					<MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				</div>
			</div>

			<div
				className={cn(
					"justify-center pb-3 md:hidden",
					menuOpen ? "flex" : "hidden"
				)}
			>
				<MenuItems currentTitle={currentTitle} />
			</div>
		</Content>
	);
};
