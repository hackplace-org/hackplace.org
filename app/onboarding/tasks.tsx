"use client";

import { type SetStateAction, type WritableAtom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Baby, MessagesSquare, Unplug, UserCheck } from "lucide-react";
import Link from "next/link";

import { OnboardingForm, OnboardingFormProps } from "@/app/onboarding/form";
import { TaskItem } from "@/app/onboarding/item";
import { links } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

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

type AtomType<T> = WritableAtom<T, [SetStateAction<T>], void>;

interface TasksProps {
	redirect: OnboardingFormProps["redirect"];
	progressAtom: AtomType<number>;
	discordOpenAtom: AtomType<boolean>;
	discordCompleteAtom: AtomType<boolean>;
	formOpenAtom: AtomType<boolean>;
	formCompleteAtom: AtomType<boolean>;
}

const NUM_CARDS = 3;

const Tasks = ({
	redirect,
	progressAtom,
	discordOpenAtom,
	discordCompleteAtom,
	formOpenAtom,
	formCompleteAtom,
}: TasksProps) => {
	const [refs, onMouseMove] = useCards(NUM_CARDS);
	const [progress, setProgress] = useAtom(progressAtom);

	const [discordOpen, setDiscordOpen] = useAtom(discordOpenAtom);
	const [discordComplete, setDiscordComplete] = useAtom(discordCompleteAtom);

	const [formOpen, setFormOpen] = useAtom(formOpenAtom);
	const [formComplete, setFormComplete] = useAtom(formCompleteAtom);

	return (
		<>
			<Progress value={(100 / NUM_CARDS) * progress} />

			<div
				onMouseMove={onMouseMove}
				className="mt-8 text-muted-foreground group/cards gap-2 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2"
			>
				<CardItem ref={refs.current[0]} className="group/card opacity-50">
					<TaskItem
						name="Sign up for hack.place()"
						description="Now, you can apply to Hatch and register for workshops."
						complete={true}
						Icon={UserCheck}
					/>
				</CardItem>

				<AlertDialog open={discordOpen}>
					<AlertDialogTrigger asChild>
						<CardItem
							ref={refs.current[1]}
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
							<AlertDialogDescription className="pb-4">
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

						<AlertDialogFooter className="flex flex-row justify-end space-x-2 pt-2">
							<AlertDialogCancel
								className="my-auto"
								onClick={() => setDiscordOpen(false)}
							>
								Cancel
							</AlertDialogCancel>

							<Link href={links[3].href} target="_blank">
								<AlertDialogAction
									onClick={() => {
										setProgress((progress) => progress + 1);
										setDiscordComplete(true);
										setDiscordOpen(false);
									}}
								>
									Let&apos;s go
								</AlertDialogAction>
							</Link>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>

				<AlertDialog open={formOpen}>
					<AlertDialogTrigger asChild>
						<CardItem
							ref={refs.current[2]}
							onClick={() => setFormOpen(discordComplete && !formComplete)}
							className={cn(
								"group/card",
								(formComplete || !discordComplete) && "opacity-50",
							)}
						>
							<TaskItem
								name="Select an age group"
								description="We'll need this to check your eligibility for certain events."
								unlocked={discordComplete}
								complete={formComplete}
								Icon={Baby}
							/>
						</CardItem>
					</AlertDialogTrigger>

					<AlertDialogContent>
						<AlertDialogHeader className="text-start">
							<AlertDialogTitle>Select an age group</AlertDialogTitle>
							<AlertDialogDescription className="pb-4">
								Activities like our incubator, Hatch, are only open to middle
								and high school students.
							</AlertDialogDescription>

							<OnboardingForm
								redirect={redirect}
								setProgress={setProgress}
								setFormOpen={setFormOpen}
								setFormComplete={setFormComplete}
							/>
						</AlertDialogHeader>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</>
	);
};

export const TaskContainer = ({
	redirect,
}: Pick<OnboardingFormProps, "redirect">) => {
	const progressAtom = atomWithStorage("progress", 1);

	const discordOpenAtom = atomWithStorage("discordOpen", false);
	const discordCompleteAtom = atomWithStorage("discordComplete", false);

	const formOpenAtom = atomWithStorage("formOpen", false);
	const formCompleteAtom = atomWithStorage("formComplete", false);

	return (
		<Tasks
			redirect={redirect}
			progressAtom={progressAtom}
			discordOpenAtom={discordOpenAtom}
			discordCompleteAtom={discordCompleteAtom}
			formOpenAtom={formOpenAtom}
			formCompleteAtom={formCompleteAtom}
		/>
	);
};
