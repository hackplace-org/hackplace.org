import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { Content } from "@/components/content";
import { Heading, Hover, Grain } from "@/components/utils";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";

import { Cost } from "@/app/donate/cost";
import { DonateForm } from "@/app/donate/form";
import { Anchor, BadgeDollarSign, HelpingHand } from "lucide-react";
import type { Metadata } from "next";
import { WorkshopsList } from "./workshop";

export const metadata: Metadata = {
	title: "Workshops",
};

export default function Workshop() {
	return (
		<>
			<Navbar currentTitle="Workshops" />
			<Content
				as="main"
				className="py-16"
				outerClassName="relative"
				border="bottom"
			>


				<Heading>Want to learn more about Coding!</Heading>
				<h2 className="my-4 text-2xl font-thin">
					hack.place() is happy to present a few workshops to
					{" "} <Hover>increase your knowledge</Hover> {" "} of this world

				</h2>

				<div className="absolute bottom-0 right-0 translate-y-24 text-muted -z-10">
					<Anchor
						className="w-72 h-72 rotate-[15deg]"
						strokeWidth={0.75}
					/>
				</div>
			</Content>
			<Content as="section" className="py-16" border="bottom">

				<h1 className="p-4 mx-auto text-6xl font-bold text-center w-fit rounded-2xl bg-brand text-sky-900">
					Workshops
				</h1>

				<WorkshopsList></WorkshopsList>
			</Content>

		</>
	);
}
