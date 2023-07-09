"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface NavbarProps {
	currentTitle: (typeof siteConfig.pages)[number]["title"];
}

export const Navbar = ({ currentTitle }: NavbarProps) => {
	const { resolvedTheme, setTheme } = useTheme();
	const currentTheme = siteConfig.themes.find(
		({ value }) => value === resolvedTheme
	)!;

	return (
		<Content
			as="nav"
			border="bottom"
			className="flex flex-row justify-between py-1"
		>
			<Link href="/" className="my-auto">
				<Image
					width={160}
					height={32}
					alt="hack.place() Logo"
					src={
						resolvedTheme === "dark"
							? "https://raw.githubusercontent.com/hackplace-org/.github/main/light-logo.svg"
							: "https://raw.githubusercontent.com/hackplace-org/.github/main/dark-logo.svg"
					}
				/>
			</Link>

			<section className="flex flex-row justify-center gap-x-4 my-auto">
				{siteConfig.pages.map((page) => (
					<Link
						key={page.title}
						href={page.href}
						className={cn(
							"flex flex-row gap-x-1 hover:text-[#00aaff] transition-colors",
							page.title === currentTitle
								? "text-foreground"
								: "text-muted-foreground"
						)}
					>
						<page.Icon className="my-auto w-4 h-4" />
						{page.title}
					</Link>
				))}
			</section>

			<Popover>
				<PopoverTrigger asChild>
					<Button size="icon" variant="ghost">
						<currentTheme.Icon className="w-5 h-5" />
					</Button>
				</PopoverTrigger>

				<PopoverContent
					align="end"
					className="flex flex-col gap-y-1 p-1 w-32"
				>
					{siteConfig.themes.map((theme) => (
						<Button
							key={theme.value}
							onClick={() => setTheme(theme.value)}
							className="w-full justify-start"
							variant="ghost"
						>
							<theme.Icon className="mr-2 w-5 h-5" />
							{theme.name}
						</Button>
					))}
				</PopoverContent>
			</Popover>
		</Content>
	);
};
