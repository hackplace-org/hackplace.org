"use client";

import { useState, useEffect, type JSX } from "react";
import { useTheme } from "next-themes";
import { Loader2 } from "lucide-react";

import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export const ThemeSwitcher = () => {
	const { resolvedTheme, setTheme } = useTheme();
	const [icon, setIcon] = useState<JSX.Element>(
		<Loader2 className="w-5 h-5 animate-spin" />
	);

	useEffect(() => {
		const currentTheme = siteConfig.themes.find(
			(theme) => theme.value === resolvedTheme
		)!;

		setIcon(<currentTheme.Icon className="w-5 h-5" />);
	}, [resolvedTheme]);

	return (
		<Popover>
			<PopoverTrigger className="my-auto" asChild>
				<Button size="icon" variant="ghost">
					{icon}
				</Button>
			</PopoverTrigger>

			<PopoverContent align="end" className="w-30 p-1 flex flex-col">
				{siteConfig.themes.map((theme) => (
					<Button
						variant="ghost"
						key={theme.value}
						className="flex flex-row justify-start gap-x-2"
						onClick={() => setTheme(theme.value)}
					>
						<theme.Icon className="w-5 h-5" />
						{theme.name}
					</Button>
				))}
			</PopoverContent>
		</Popover>
	);
};
