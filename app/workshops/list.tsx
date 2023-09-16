"use client";

import { cva } from "class-variance-authority";
import {
	Bot,
	Calculator,
	CloudSun,
	Cookie,
	DatabaseBackup,
	Disc3,
	Palette,
	Server,
	Wand2,
} from "lucide-react";
import { forwardRef } from "react";

import { CardItem } from "@/components/card";
import { useCards } from "@/components/hooks/useCards";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const workshops = [
	{
		topic: "Intro to HTML/CSS/JS",
		application: "Calculator App",
		difficulty: "Beginner",
		author: "Maya",
		Icon: Calculator,
	},
	{
		topic: "Chrome Extensions",
		application: "Color Palettes",
		difficulty: "Beginner",
		author: "Sasha",
		Icon: Palette,
	},
	{
		topic: "Intro to Web Development",
		application: "Weather App",
		difficulty: "Intermediate",
		author: "Anish",
		Icon: CloudSun,
	},
	{
		topic: "Intro to React",
		application: "Cookie Clicker",
		difficulty: "Intermediate",
		author: "Anish",
		Icon: Cookie,
	},
	{
		topic: "Intro to React Native",
		application: "Music Player",
		difficulty: "Intermediate",
		author: "Aditya",
		Icon: Disc3,
	},
	{
		topic: "Object-Oriented Python",
		application: "Discord Bot",
		difficulty: "Intermediate",
		author: "Sharabh",
		Icon: Bot,
	},
	{
		topic: "HTMX and APIs",
		application: "Clicker API",
		difficulty: "Intermediate",
		author: "Anish",
		Icon: Server,
	},
	{
		topic: "Databases with ORMs",
		application: "Guestbook",
		difficulty: "Advanced",
		author: "Anish",
		Icon: DatabaseBackup,
	},
	{
		topic: "Minecraft Modding",
		application: "Magic Mod",
		difficulty: "Advanced",
		author: "Anish",
		Icon: Wand2,
	},
] as const;

const badge = cva("", {
	variants: {
		difficulty: {
			Beginner: "bg-green-400 text-green-900",
			Intermediate: "bg-yellow-400 text-yellow-900",
			Advanced: "bg-red-400 text-red-900",
		},
	},
});

type WorkshopItemProps = typeof workshops[number];

const WorkshopItem = forwardRef<HTMLDivElement, WorkshopItemProps>(
	({ topic, application, difficulty, author, Icon }, ref) => {
		return (
			<CardItem ref={ref} className="group">
				<div className="flex flex-row justify-between">
					<div className="flex flex-row gap-2 group-hover:text-primary transition-colors">
						<Icon className="w-6 h-6 my-auto" />
						<h1 className="font-extrabold text-2xl">{application}</h1>
					</div>

					<Badge className={cn("my-auto", badge({ difficulty }))}>
						{difficulty}
					</Badge>
				</div>

				<h2 className="text-lg mt-1">
					<span className="font-semibold">{topic}</span>{" "}
					<span className="font-thin">by {author}</span>
				</h2>
			</CardItem>
		);
	},
);
WorkshopItem.displayName = "WorkshopItem";

export const List = () => {
	const [refs, onMouseMove] = useCards(workshops.length);

	return (
		<div
			onMouseMove={onMouseMove}
			className="grid w-full grid-cols-1 grid-rows-6 gap-2 mt-8 sm:grid-rows-3 sm:grid-cols-2 group/cards md:grid-rows-2 md:grid-cols-3 text-muted-foreground"
		>
			{workshops.map((workshop, i) => (
				<WorkshopItem
					ref={refs.current[i]}
					key={workshop.topic}
					{...workshop}
				/>
			))}
		</div>
	);
};
