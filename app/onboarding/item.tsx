import { cn } from "@/lib/utils";
import { ArrowRight, CheckCheck, Lock, type LucideIcon } from "lucide-react";

interface TaskItemProps {
	name: string;
	description: string;
	unlocked?: boolean;
	complete?: boolean;
	Icon: LucideIcon;
}

export const TaskItem = ({
	name,
	description,
	unlocked = true,
	complete,
	Icon,
}: TaskItemProps) => {
	const enabled = unlocked && !complete;

	return (
		<>
			<div className="flex flex-row justify-between">
				<div
					className={cn(
						"flex flex-row gap-2",
						enabled && "group-hover/card:text-primary transition-colors",
					)}
				>
					<Icon className="w-6 h-6 my-auto" />
					<h1 className="font-extrabold text-2xl">{name}</h1>
				</div>

				{complete ? (
					<CheckCheck className="text-primary w-6 h-6 my-auto" />
				) : unlocked ? (
					<ArrowRight className="text-primary transition-all -translate-x-1/2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-0 w-6 h-6 my-auto" />
				) : (
					<Lock className="text-primary w-6 h-6 my-auto" />
				)}
			</div>

			<h2 className="text-lg mt-1">{description}</h2>
		</>
	);
};
