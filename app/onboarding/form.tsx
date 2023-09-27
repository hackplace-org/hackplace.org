"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { type SetStateAction } from "jotai";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { useState } from "react";

import { saveResponse } from "@/app/onboarding/action";
import {
	AlertDialogCancel,
	AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
] as const;

const currentYear = new Date().getFullYear();
const minYear = currentYear - 18;

const formSchema = z.object({
	month: z.enum(months, {
		required_error: "Please select your birth month.",
	}),
	year: z
		.number({
			required_error: "Please select your birth year.",
		})
		.min(minYear, `Select a year after ${minYear - 1}`)
		.max(currentYear, `Select a year before ${currentYear + 1}`),
});

export type FormInput = z.infer<typeof formSchema>;

export interface OnboardingFormProps {
	redirect: string;
	setProgress: (...args: [SetStateAction<number>]) => void;
	setFormOpen: (...args: [SetStateAction<boolean>]) => void;
	setFormComplete: (...args: [SetStateAction<boolean>]) => void;
}

export const OnboardingForm = ({
	redirect,
	setProgress,
	setFormOpen,
	setFormComplete,
}: OnboardingFormProps) => {
	const [submitting, setSubmitting] = useState(false);

	const { userId } = useAuth();
	const form = useForm<FormInput>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (values: FormInput) => {
		if (submitting) return;

		setSubmitting(true);
		await saveResponse({
			userId,
			redirectTo: redirect,
			...values,
		}).then(() => {
			setProgress((progress) => progress + 1);
			setFormComplete(true);
			setSubmitting(false);
			setFormOpen(false);
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-y-4 sm:flex-row justify-between">
					<FormField
						control={form.control}
						name="month"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Month</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant="outline"
												role="combobox"
												className={cn(
													"w-[200px] justify-between",
													!field.value && "text-muted-foreground",
												)}
											>
												{field.value || "Select month"}
												<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>

									<PopoverContent className="w-[200px] p-0">
										<Command
											loop
											className="[&_[cmdk-group-items]]:max-h-40 [&_[cmdk-group-items]]:overflow-scroll"
										>
											<CommandInput placeholder="Search month..." />
											<CommandEmpty>🤔</CommandEmpty>
											<CommandGroup>
												{months.map((month) => (
													<CommandItem
														value={month}
														key={month}
														onSelect={() => form.setValue("month", month)}
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																month === field.value
																	? "opacity-100"
																	: "opacity-0",
															)}
														/>

														{month}
													</CommandItem>
												))}
											</CommandGroup>
										</Command>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="year"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Year</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant="outline"
												role="combobox"
												className={cn(
													"w-[200px] justify-between",
													!field.value && "text-muted-foreground",
												)}
											>
												{field.value || "Select year"}

												<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>

									<PopoverContent className="w-[200px] p-0">
										<Command
											loop
											className="[&_[cmdk-group-items]]:max-h-40 [&_[cmdk-group-items]]:overflow-scroll"
										>
											<CommandInput placeholder="Search year..." />
											<CommandEmpty>🤔</CommandEmpty>
											<CommandGroup>
												{Array.from(
													{ length: 19 },
													(_, index) => minYear + index,
												).map((year) => (
													<CommandItem
														value={year.toString()}
														key={year}
														onSelect={() => form.setValue("year", year)}
													>
														<Check
															className={cn(
																"mr-2 h-4 w-4",
																year === field.value
																	? "opacity-100"
																	: "opacity-0",
															)}
														/>

														{year}
													</CommandItem>
												))}
											</CommandGroup>
										</Command>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormDescription className="pt-2">
					These will be used to calculate your age.
				</FormDescription>

				<AlertDialogFooter className="flex flex-row justify-end mt-2 space-x-2 pt-4">
					<AlertDialogCancel
						className="my-auto"
						onClick={() => setFormOpen(false)}
					>
						Cancel
					</AlertDialogCancel>

					<Button type="submit" disabled={submitting}>
						Let&apos;s go{" "}
						{submitting && <Loader2 className="w-4 h-4 animate-spin ml-2" />}
					</Button>
				</AlertDialogFooter>
			</form>
		</Form>
	);
};
