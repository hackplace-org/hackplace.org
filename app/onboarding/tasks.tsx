"use client";

import { type SetStateAction, type WritableAtom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import {
	ArrowRight,
	Baby,
	CheckCheck,
	type LucideIcon,
	MessagesSquare,
	Pencil,
	Unplug,
} from "lucide-react";
import Link from "next/link";

import { CardItem } from "@/components/card";
import { useCards } from "@/components/hooks/useCards";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Progress } from "@/components/ui/progress";
import { links } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

interface TaskItemProps {
	name: string;
	description: string;
	complete?: boolean;
	Icon: LucideIcon;
}

const TaskItem = ({ name, description, complete, Icon }: TaskItemProps) => {
	return (
		<>
			<div className="flex flex-row justify-between">
				<div
					className={cn(
						"flex flex-row gap-2",
						!complete && "group-hover/card:text-primary transition-colors",
					)}
				>
					<Icon className="w-6 h-6 my-auto" />
					<h1 className="font-extrabold text-2xl">{name}</h1>
				</div>

				{complete ? (
					<CheckCheck className="text-primary w-6 h-6 my-auto" />
				) : (
					<ArrowRight className="text-primary transition-all -translate-x-1/2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-0 w-6 h-6 my-auto" />
				)}
			</div>

			<h2 className="text-lg mt-1">{description}</h2>
		</>
	);
};

type AtomType<T> = WritableAtom<T, [SetStateAction<T>], void>;

interface TasksProps {
	progressAtom: AtomType<number>;
	discordOpenAtom: AtomType<boolean>;
	discordCompleteAtom: AtomType<boolean>;
}

const Tasks = ({
	progressAtom,
	discordOpenAtom,
	discordCompleteAtom,
}: TasksProps) => {
	const [refs, onMouseMove] = useCards(3);
	const [progress, setProgress] = useAtom(progressAtom);

	const [discordOpen, setDiscordOpen] = useAtom(discordOpenAtom);
	const [discordComplete, setDiscordComplete] = useAtom(discordCompleteAtom);

	return (
		<>
			<Progress value={(100 / 3) * progress} />

			<div
				onMouseMove={onMouseMove}
				className="mt-8 text-muted-foreground group/cards gap-2 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2"
			>
				<AlertDialog
					open={discordComplete ? false : discordOpen}
					onOpenChange={setDiscordOpen}
				>
					<AlertDialogTrigger asChild>
						<CardItem
							ref={refs.current[0]}
							onClick={() => setDiscordOpen(!discordComplete)}
							className={cn("group/card", discordComplete && "opacity-50")}
						>
							<TaskItem
								name="Join our Discord server"
								description={links[3].description}
								complete={discordComplete}
								Icon={MessagesSquare}
							/>
						</CardItem>
					</AlertDialogTrigger>

					<AlertDialogContent>
						<AlertDialogHeader className="text-start">
							<AlertDialogTitle>Join our Discord server</AlertDialogTitle>
							<AlertDialogDescription className="pb-2">
								This is where we send important announcements and information.
								It&apos;s also the easiest way to get in touch with us.{" "}
								<span className="underline">
									We highly recommend that you join.
								</span>
							</AlertDialogDescription>

							<Alert>
								<Unplug className="h-4 w-4" />
								<AlertTitle>Heads up!</AlertTitle>
								<AlertDescription>
									Without joining the Discord, you won&apos;t be able to
									participate in community events.
								</AlertDescription>
							</Alert>
						</AlertDialogHeader>

						<AlertDialogFooter className="flex flex-row justify-end space-x-2">
							<AlertDialogCancel className="my-auto">Cancel</AlertDialogCancel>
							<Link href={links[3].href} target="_blank">
								<AlertDialogAction
									onClick={() => {
										setProgress((progress) => progress + 1);
										setDiscordComplete(true);
									}}
								>
									Let&apos;s go
								</AlertDialogAction>
							</Link>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>

				<CardItem ref={refs.current[1]} className="group/card">
					<TaskItem
						name="Select an age group"
						description="We'll need this to check your eligibility for certain events."
						Icon={Baby}
					/>
				</CardItem>

				<CardItem ref={refs.current[2]} className="group/card">
					<TaskItem
						name="Write a short blurb"
						description="Tell us who you are and what you're most excited about."
						Icon={Pencil}
					/>
				</CardItem>
			</div>
		</>
	);
};

export const TaskContainer = () => {
	const progressAtom = atomWithStorage("progress", 0);
	const discordOpenAtom = atomWithStorage("discordOpen", false);
	const discordCompleteAtom = atomWithStorage("discordComplete", false);

	return (
		<Tasks
			progressAtom={progressAtom}
			discordOpenAtom={discordOpenAtom}
			discordCompleteAtom={discordCompleteAtom}
		/>
	);
};
