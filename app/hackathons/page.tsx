import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Timeline } from "./timeline"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Grain, Heading } from "@/components/utils";
import { Button } from "@/components/ui/button";
import NextLink from "next/link";

export const metadata: Metadata = {
	title: "Hackathons",
};


export default function Hackathons() {
	const FAQS = [
		{
			question: "Is Adi rlly rlly cool",
			answer: "yes"
		},
		{
			question: "Is Adi rlly rlly cool",
			answer: "yes"
		},
		{
			question: "Is Adi rlly rlly cool",
			answer: "yes"
		},
		{
			question: "Is Adi rlly rlly cool",
			answer: "yes"
		},
		{
			question: "Is Adi rlly rlly cool",
			answer: "yes"
		},



	]
	return (
		<>
			<Navbar currentTitle="Hackathons" />
			<Content as="section" className="py-16" border="bottom">
				<h1 className="text-6xl">EquiHacks S1</h1>
				<h3></h3>
				<div className="flex flex-row mt-2 mb-6 lg:mb-0 gap-x-2">
					<NextLink href="https://discord.gg/QmPdqegQNb">
						<Button>Discord</Button>
					</NextLink>

					<NextLink href="mailto:support@hackplace.org">
						<Button variant="outline">
							Contact support
						</Button>
					</NextLink>
				</div>


			</Content>
			<Content as="section" className="py-16" border="bottom">

			</Content>
			<Content as="section" className="py-16" border="bottom">

			</Content>

			<Content as="section" className="py-16" border="bottom">
				<Timeline />
			</Content>

			<Content as="div" outerClassName="relative" className="py-16" border="bottom">
				<Grain />
				<Heading>FAQS</Heading>

				<Accordion type="single" className="w-full mt-4" collapsible>
					{FAQS &&
						FAQS.map((FAQ, i) => (
							<AccordionItem value={"item-" + i}>
								<AccordionTrigger>
									{FAQ.question}
								</AccordionTrigger>
								<AccordionContent>
									{FAQ.answer}
								</AccordionContent>
							</AccordionItem>
						))
					}
				</Accordion>
			</Content>
		</>
	);
}
