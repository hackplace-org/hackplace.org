"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { type NavbarProps } from "@/components/navbar";

interface ListItemProps {
	item: (typeof siteConfig.pages | typeof siteConfig.links)[number];
}

const ListItem = ({ item }: ListItemProps) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					href={item.href}
					className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
				>
					<div
						className={cn(
							item.color,
							"flex flex-row gap-x-1 transition-colors text-sm font-medium leading-none"
						)}
					>
						<item.Icon className="w-3 h-3 my-auto" />
						{item.title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{item.description}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
};

interface MenuItemsProps extends NavbarProps {
	className?: string;
}

export const MenuItems = ({ currentTitle, className }: MenuItemsProps) => {
	return (
		<NavigationMenu className={className}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Activities</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<Image
											src="/icon.svg"
											width={250}
											height={443}
											alt="hack.place() Logo"
											className="justify-start h-24 w-14"
										/>

										<div className="mb-2 mt-4 text-lg font-medium">
											hack.place()
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											{siteConfig.pages[0].description}
										</p>
									</a>
								</NavigationMenuLink>
							</li>

							{siteConfig.pages.slice(1).map((page) => (
								<ListItem key={page.href} item={page} />
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Connect</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{siteConfig.links.map((link) => (
								<ListItem key={link.href} item={link} />
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href="/donate" legacyBehavior passHref>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
						>
							Donate
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};
