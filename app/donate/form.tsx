"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";

const sanitize = (n: unknown) =>
	parseFloat(z.string().parse(n).replace(/[$,]/g, ""));

const formSchema = z.object({
	name: z.string().min(1, "Please enter your name"),
	email: z.string().email("Please provide a valid email address"),
	amount: z.preprocess(
		(n) => Math.ceil(sanitize(n) * 100),
		z.number().positive("Please provide a valid donation amount")
	),
});

type FormInput = z.infer<typeof formSchema>;

export const DonateForm = () => {
	const form = useForm<FormInput>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			amount: 0,
		},
	});

	const onSubmit = ({ name, email, amount }: FormInput) => {
		const url = new URL(
			"https://bank.hackclub.com/donations/start/hack-place"
		);
		url.search = new URLSearchParams({
			name,
			email,
			amount: amount.toString(),
		}).toString();

		window.open(url, "_blank");
	};

	return (
		<Form {...form}>
			<form
				className="pt-4 space-y-4"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>Your name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormDescription>
								The name you want to donate under
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>Your email</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormDescription>
								The email you want the receipt to be sent to
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="amount"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>Amount</FormLabel>
							<FormControl>
								<div className="flex flex-row gap-x-1">
									<span className="h-10 p-2 border rounded-md border-input bg-background">
										$
									</span>{" "}
									<Input {...field} />
								</div>
							</FormControl>
							<FormDescription>
								Donation amount in USD
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Donate</Button>
				<br />
				<Label className="text-muted-foreground">
					Please note that we incur a 7% fee on all donations.
				</Label>
			</form>
		</Form>
	);
};
