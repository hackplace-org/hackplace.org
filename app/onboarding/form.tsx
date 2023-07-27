"use client";

import { z } from "zod";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type ControllerRenderProps } from "react-hook-form";
import { useState, type Dispatch, type SetStateAction } from "react";

import { activities, workshops, days } from "@/lib/siteConfig";
import { saveResponse } from "@/app/onboarding/action";
import { Heading, Hover } from "@/components/utils";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
	interests: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: "Please select at least one interest",
		}),
	workshops: z.array(z.string()),
	availability: z
		.array(z.string())
		.refine((value) => value.some((item) => item), {
			message: "Please select at least one day",
		}),
	suggestions: z.string().optional(),
});

export type FormInput = z.infer<typeof formSchema>;

interface OnboardingFormProps {
	redirectTo: string;
}

export const OnboardingForm = ({ redirectTo }: OnboardingFormProps) => {
	const router = useRouter();
	const { toast } = useToast();
	const { userId } = useAuth();
	const [workshopInterest, setWorkshopInterest] = useState(false);

	const form = useForm<FormInput>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			interests: [],
			workshops: [],
			availability: [],
			suggestions: "",
		},
	});

	type KeyOfType<T, V> = keyof {
		[P in keyof T as T[P] extends V ? P : never]: any;
	};

	type ItemInputs = KeyOfType<FormInput, string[]>;
	type ItemList = readonly {
		id: string;
		name: string;
	}[];

	const createItemOptions = <T extends ItemInputs>(
		items: ItemList,
		name: T,
		trigger?: keyof FormInput,
		callback?: Dispatch<SetStateAction<boolean>>
	) => {
		const onItemChange = (
			field: ControllerRenderProps<FormInput, T>,
			item: (typeof items)[number]
		) => {
			return (checked: boolean) => {
				if (callback && item.id === trigger) {
					callback(checked);

					if (!checked) form.resetField(trigger);
				}

				if (checked) {
					field.onChange([...field.value, item.id]);
				} else {
					field.onChange(
						field.value.filter((value) => value !== item.id)
					);
				}
			};
		};

		return items.map((item) => (
			<FormField
				key={item.id}
				control={form.control}
				name={name}
				render={({ field }) => (
					<FormItem key={item.id}>
						<FormControl>
							<div className="flex items-center space-x-2">
								<Checkbox
									id={item.id}
									checked={field.value.includes(item.id)}
									onCheckedChange={onItemChange(field, item)}
								/>

								<Label
									htmlFor={item.id}
									className="text-lg font-medium"
								>
									{item.name}
								</Label>
							</div>
						</FormControl>
					</FormItem>
				)}
			/>
		));
	};

	const onSubmit = async (values: FormInput) => {
		await saveResponse({ ...values, userId });

		router.push(redirectTo);
		toast({
			title: "Success! Your response has been saved.",
			description:
				"If you are not redirected shortly, please refresh the page.",
		});
	};

	return (
		<Form {...form}>
			<form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="interests"
					render={() => (
						<FormItem className="space-y-2">
							<div className="space-y-1">
								<FormLabel>
									<Heading size="sub">Interests</Heading>
								</FormLabel>
								<FormDescription className="text-xl">
									Select the events you are interested in{" "}
									<Hover>attending</Hover> or{" "}
									<Hover>participating in</Hover>.
								</FormDescription>
							</div>

							<div>
								{createItemOptions(
									activities,
									"interests",
									"workshops",
									setWorkshopInterest
								)}
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>

				{workshopInterest && (
					<FormField
						control={form.control}
						name="workshops"
						render={() => (
							<FormItem className="space-y-2">
								<div className="space-y-1">
									<FormLabel>
										<Heading size="sub">Workshops</Heading>
									</FormLabel>
									<FormDescription className="text-xl">
										Which of our{" "}
										<Hover>existing workshops</Hover> are
										you interested in?
									</FormDescription>
								</div>

								<div>
									{createItemOptions(workshops, "workshops")}
								</div>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}

				<FormField
					control={form.control}
					name="availability"
					render={() => (
						<FormItem className="space-y-2">
							<div className="space-y-1">
								<FormLabel>
									<Heading size="sub">Availability</Heading>
								</FormLabel>
								<FormDescription className="text-xl">
									What <Hover>days</Hover> are you able to
									attend our events?
								</FormDescription>
							</div>

							<div>{createItemOptions(days, "availability")}</div>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="suggestions"
					render={({ field }) => (
						<FormItem className="space-y-4">
							<div className="space-y-1">
								<FormLabel>
									<Heading size="sub">Suggestions</Heading>
								</FormLabel>
								<FormDescription className="text-xl">
									Do you have any suggestions for a{" "}
									<Hover>workshop</Hover> or{" "}
									<Hover>seminar</Hover> that we could hold?
								</FormDescription>
							</div>

							<FormControl>
								<Input
									placeholder="It's okay if you have no suggestions."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Let&apos;s go</Button>
			</form>
		</Form>
	);
};
