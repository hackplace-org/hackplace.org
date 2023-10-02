"use client";

import Image from "next/image";
import Link from "next/link";

import { type NavbarProps } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { links, pages } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

interface ListItemProps {
	item: (typeof pages | typeof links)[number];
	target?: string;
}

const ListItem = ({ item, target }: ListItemProps) => {
	const soon: ListItemProps["item"]["title"][] = ["Seminars"];

	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					target={target ?? "_self"}
					title={item.title}
					href={item.href}
					className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
				>
					<div
						className={cn(
							item.color,
							"flex flex-row justify-between transition-colors text-sm font-medium leading-none",
						)}
					>
						<div className="flex flex-row gap-x-1">
							<item.Icon className="w-3 h-3 my-auto" />
							<p className="my-auto">{item.title}</p>
						</div>

						{!target &&
							(soon.includes(item.title) ? (
								<Badge>Soon</Badge>
							) : (
								<Badge className="text-white bg-brand hover:bg-brand hover:opacity-90">
									New
								</Badge>
							))}
					</div>
					<p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
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
	// const HatchIcon = pages[2].Icon;

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
										className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
										title={pages[2].title}
										href={pages[2].href}
									>
										<Image
											src="/icon.svg"
											width={250}
											height={443}
											alt="hack.place() Logo"
											className="justify-start h-24 w-14"
										/>

										<div className="flex flex-row justify-between mt-4 mb-2 text-lg font-medium leading-none">
											<div className="flex flex-row gap-x-1">
												{/* <HatchIcon className="w-4 h-4 my-auto" /> */}
												<p className="my-auto">{pages[2].title}</p>
											</div>

											<Badge>Soon</Badge>
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											{pages[2].description}
										</p>
									</a>
								</NavigationMenuLink>
							</li>

							{pages.slice(3, 6).map((page) => (
								<ListItem key={page.href} item={page} />
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Connect</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid md:w-[400px] gap-3 p-4 lg:w-[500px] md:grid-cols-2">
							{links.map((link) => (
								<ListItem key={link.href} item={link} target="_blank" />
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href="/donate" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Donate
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};
