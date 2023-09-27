import type { Metadata } from "next";
import Image from "next/image";

import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { Heading } from "@/components/utils";

import { type OnboardingFormProps } from "@/app/onboarding/form";
import { TaskContainer } from "@/app/onboarding/tasks";

export const metadata: Metadata = {
	title: "Onboarding",
};

interface OnboardingProps {
	searchParams: {
		redirect?: OnboardingFormProps["redirect"];
	};
}

export default function Onboarding({ searchParams }: OnboardingProps) {
	return (
		<>
			<Navbar currentTitle="Onboarding" />
			<Content as="main" className="flex flex-col py-8 gap-y-8" border="bottom">
				<Image
					src="/icon.svg"
					width={250}
					height={443}
					alt="hack.place() Logo"
					className="w-20 mx-auto h-36"
				/>

				<div className="space-y-4">
					<Heading>Before we get started...</Heading>
					<h2 className="my-4 text-2xl font-thin">
						We have just a few tasks for you.
					</h2>
				</div>

				<TaskContainer redirect={searchParams.redirect ?? "/"} />
			</Content>
		</>
	);
}
