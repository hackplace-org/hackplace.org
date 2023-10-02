import { Content } from "@/components/content";
import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Grain, Heading, Hover } from "@/components/utils";

import { Cost } from "@/app/donate/cost";
import { DonateForm } from "@/app/donate/form";
import { Anchor, BadgeDollarSign, HelpingHand } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Donate",
};

export default function Donate() {
	return (
		<>
			<Navbar currentTitle="Donate" />
			<Content
				as="main"
				className="py-16"
				outerClassName="relative"
				border="bottom"
			>
				<Grain />

				<Heading>A little support goes a long way.</Heading>
				<h2 className="my-4 text-2xl font-thin">
					We&apos;re a small team of <Hover>high school volunteers</Hover>, and
					we rely on <Hover>your contributions</Hover> to stay afloat!
				</h2>

				<div className="absolute bottom-0 right-0 translate-y-24 text-muted -z-10">
					<Anchor className="w-72 h-72 rotate-[15deg]" strokeWidth={0.75} />
				</div>
			</Content>

			<Content as="section" className="py-16" border="bottom">
				<h1 className="p-4 mx-auto text-6xl font-bold text-center w-fit rounded-2xl bg-brand text-sky-900">
					Proposed budget
				</h1>
				<h2 className="w-full mx-auto my-4 text-2xl font-thin text-center md:w-3/4">
					Here is a breakdown of our expected costs, as outlined in our{" "}
					<Link
						href="https://drive.google.com/file/d/19foeIdAijQU-w3npaZz7MibnJMTaY_M5/view"
						text="Sponsorship Proposal"
						external
					/>
				</h2>

				<Cost />

				<h2 className="w-full mt-8 ml-auto text-2xl font-thin text-right md:w-3/4">
					...for an estimated <Hover>$111</Hover> in liquidity and an additional{" "}
					<Hover>$2,500</Hover> prize valuation.
				</h2>
			</Content>

			<Content
				as="section"
				className="py-16"
				border="bottom"
				outerClassName="relative"
				id="individual"
			>
				<Grain />

				<Heading>Want to help us out?</Heading>
				<h2 className="my-4 text-2xl font-thin">
					If you&apos;re not willing to shell out a bunch of money, that&apos;s
					OK&mdash;<Hover>every penny counts</Hover>!
				</h2>

				<DonateForm />

				<div className="absolute top-0 left-0 -translate-y-32 text-muted -z-10">
					<BadgeDollarSign
						className="w-72 h-72 rotate-[15deg]"
						strokeWidth={0.75}
					/>
				</div>

				<div className="absolute bottom-0 right-0 -translate-x-12 translate-y-28 text-muted -z-10">
					<HelpingHand
						className="w-80 h-80 rotate-[15deg]"
						strokeWidth={0.75}
					/>
				</div>
			</Content>

			<Content as="section" className="py-16" border="bottom" id="sponsor">
				<Heading>Are you a company or organization?</Heading>
				<h2 className="my-4 text-2xl font-thin">
					We&apos;re also accepting <Hover>larger-scale</Hover> monetary
					donations, <Hover>merchandise</Hover>, and more!
				</h2>

				<Accordion type="single" className="w-full" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>
							What kind of contributions are you accepting?
						</AccordionTrigger>
						<AccordionContent>
							Money, merch, perks/credits on your platform&mdash;you name it!
							We&apos;re open to receiving anything that we can offer as a prize
							in our <Link href="/equihacks" text="hackathon" />.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger>
							What are you planning on doing with the money?
						</AccordionTrigger>
						<AccordionContent>
							If you offer money, we plan on using it to fund our
							organization&mdash;you can find our proposed budget above. Any
							surplus will be used to buy additional prizes for our{" "}
							<Link href="/equihacks" text="hackathon" />.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger>
							I have further questions. Can I contact you?
						</AccordionTrigger>
						<AccordionContent>
							Yes! Our contact information is available in the footer below.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Content>
		</>
	);
}
