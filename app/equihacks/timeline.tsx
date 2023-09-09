"use client";

import { useState, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { stages } from "@/lib/siteConfig";
import { type LucideIcon } from "lucide-react";

interface TimelineIconProps extends HTMLAttributes<HTMLDivElement> {
	selected: boolean;
	Icon: LucideIcon;
}

const TimelineIcon = ({
	className,
	selected,
	Icon,
	...props
}: TimelineIconProps) => {
	return (
		<div
			className={cn(
				className,
				selected
					? "bg-brand text-white"
					: "transition-colors hover:text-white hover:bg-brand text-background bg-foreground",
				"grid w-10 h-10 rounded-full place-items-center"
			)}
			{...props}
		>
			<Icon className="w-5 h-5 " />
		</div>
	);
};

interface TimelineStageProps {
	stageIndex: number;
}

const TimelineStage = ({ stageIndex }: TimelineStageProps) => {
	const stage = stages[stageIndex];

	return (
		<div className="mt-8">
			<h1 className="flex flex-row justify-center text-4xl font-bold gap-x-3 md:justify-start">
				<stage.Icon className="my-auto w-9 h-9" />
				{stage.name}
			</h1>
		</div>
	);
};

export const Timeline = () => {
	const [selected, setSelected] = useState(0);

	return (
		<div className="flex flex-col w-full">
			<div className="relative flex flex-row justify-between w-full">
				{stages.map((stage, i) => (
					<TimelineIcon
						key={stage.id}
						selected={selected === i}
						onMouseOver={() => setSelected(i)}
						Icon={stage.Icon}
					/>
				))}

				<div className="absolute w-[calc(100%+2rem)] -translate-x-4 h-2 -translate-y-1/2 top-1/2 rounded-xl -z-10 bg-muted">
					<div
						className="transition-[width] h-full bg-primary rounded-xl"
						style={{
							width: `${(selected / (stages.length - 1)) * 100}%`,
						}}
					/>
				</div>
			</div>

			<TimelineStage stageIndex={selected} />
		</div>
	);
};
