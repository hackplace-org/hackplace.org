"use client";

import { useTheme } from "next-themes";
import { Sun, MoonStar, Laptop } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

const themes = [
	{
		name: "Light",
		value: "light",
		Icon: Sun,
	},
	{
		name: "Dark",
		value: "dark",
		Icon: MoonStar,
	},
	{
		name: "System",
		value: "system",
		Icon: Laptop,
	},
] as const;

export const ThemeSwitcher = () => {
	const { setTheme } = useTheme();

	return (
		<Popover>
			<PopoverTrigger className="my-auto" asChild>
				<Button size="icon" variant="ghost">
					<Sun className="w-5 h-5 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
					<MoonStar className="absolute w-5 h-5 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />

					<span className="sr-only">Toggle theme</span>
				</Button>
			</PopoverTrigger>

			<PopoverContent align="end" className="flex flex-col p-1 w-30">
				{themes.map((theme) => (
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
