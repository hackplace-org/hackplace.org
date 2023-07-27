import Image from "next/image";

import { Navbar } from "@/components/navbar";
import { Content } from "@/components/content";
import { Heading } from "@/components/utils";

import { OnboardingForm } from "@/app/onboarding/form";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Onboarding",
};

interface OnboardingProps {
	searchParams: {
		redirect?: string;
	};
}

export default function Onboarding({ searchParams }: OnboardingProps) {
	return (
		<>
			<Navbar currentTitle="Onboarding" />
			<Content
				as="main"
				className="flex flex-col py-8 gap-y-8"
				border="bottom"
			>
				<Image
					src="/icon.svg"
					width={250}
					height={443}
					alt="hack.place() Logo"
					className="w-20 mx-auto h-36"
				/>

				<div className="space-y-4">
					<h1 className="text-6xl font-bold">
						Before you begin your journey...
					</h1>
					<Heading className="text-muted-foreground" size="sub">
						We have just a few questions for you.
					</Heading>
				</div>

				<Separator className="w-1/3 mx-auto" />
				<OnboardingForm redirectTo={searchParams.redirect ?? "/"} />
			</Content>
		</>
	);
}
