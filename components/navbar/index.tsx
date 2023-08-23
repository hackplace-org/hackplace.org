"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { pages } from "@/lib/siteConfig";

import { Logo } from "@/components/logo";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/button";
import { Auth } from "@/components/navbar/auth";
import { MenuItems } from "@/components/navbar/menuItems";
import { ThemeSwitcher } from "@/components/navbar/themeSwitcher";

export interface NavbarProps {
	currentTitle: (typeof pages)[number]["title"];
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

					<Button
						size="icon"
						variant="ghost"
						className="flex my-auto md:hidden"
						onClick={() => setMenuOpen((open) => !open)}
					>
						<Menu
							className={cn(
								"w-5 h-5 transition-all scale-100 rotate-0",
								menuOpen && "-rotate-90 scale-0"
							)}
						/>
						<X
							className={cn(
								"absolute w-5 h-5 transition-all scale-0 rotate-90",
								menuOpen && "rotate-0 scale-100"
							)}
						/>

						<span className="sr-only">Toggle menu</span>
					</Button>
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
