import { currentUser } from "@clerk/nextjs";
import { Coins, Quote, ShieldQuestion } from "lucide-react";
import type { Metadata } from "next";
import NextLink from "next/link";
import Marquee from "react-fast-marquee";

import { Opportunity } from "@/app/equihacks/opportunity";
import { UserTicket } from "@/app/equihacks/ticket";
import { Content } from "@/components/content";
import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Grain, Heading, Hover } from "@/components/utils";

export const metadata: Metadata = {
	title: "EquiHacks",
};

export default async function EquiHacks() {
	const user = await currentUser();

	return (
		<>
			<Navbar currentTitle="EquiHacks" />
			<Content
				as="section"
				className="py-24"
				outerClassName="relative overflow-hidden before:absolute before:-z-10 before:h-full before:w-full before:backdrop-blur-[300px]"
				border="bottom"
			>
				<div className="absolute blur-[300px] -z-20 bg-gradient-to-r from-[#e0c1b3] via-[#d89a9e] to-[#b9677f] h-[300px] top-0 left-1/4 aspect-square rounded-full -translate-x-1/2 -translate-y-1/2" />
				<div className="absolute blur-[300px] -z-20 bg-gradient-to-r from-[#99d19c] via-[#5aa984] to-[#357677] h-[300px] bottom-1/4 right-1/4 aspect-square rounded-full translate-x-1/2 translate-y-1/2" />

				<hgroup className="mx-auto max-w-4xl flex flex-col gap-6 text-center">
					<h1 className="text-5xl md:text-7xl font-bold">
						EquiHacks is Monmouth County&apos;s premier high school hackathon.
					</h1>
					<h2 className="text-lg md:text-2xl text-muted-foreground">
						We&apos;re excited to announce <Hover>EquiHacks S1</Hover>, a
						48-hour hackathon for middle and high school students in{" "}
						<Hover>Monmouth County, NJ</Hover>.
					</h2>
				</hgroup>

				<div className="mt-8 flex flex-row gap-x-4 justify-center">
					<NextLink href="https://equihacks.devpost.com/" target="_blank">
						<Button size="lg">Join now</Button>
					</NextLink>

					<NextLink href="/donate">
						<Button size="lg" variant="secondary">
							Donate
						</Button>
					</NextLink>
				</div>

				<div className="mt-24 flex flex-col gap-y-4 items-center">
					<h3 className="uppercase font-semibold">Thank you to our sponsors</h3>
					<Marquee autoFill speed={25}>
						<Button variant="ghost" className="mx-2">
							None
						</Button>
						<Button variant="ghost" className="mx-2">
							Zero
						</Button>
						<Button variant="ghost" className="mx-2">
							Empty
						</Button>
						<Button variant="ghost" className="mx-2">
							Nothing
						</Button>
						<Button variant="ghost" className="mx-2">
							Wow
						</Button>
						<Button variant="ghost" className="mx-2">
							Missing
						</Button>
					</Marquee>
				</div>
			</Content>

			<Opportunity />

			<Content
				as="section"
				className="py-16"
				outerClassName="relative"
				border="bottom"
			>
				<Grain />
				<h1 className="p-4 mb-4 mx-auto text-6xl font-bold text-center w-fit rounded-2xl bg-brand text-sky-900">
					FAQs
				</h1>

				<Accordion type="single" className="w-full" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>
							Placeholder
						</AccordionTrigger>
						<AccordionContent>
							Placeholder
						</AccordionContent>
					</AccordionItem>
				</Accordion>

				<div className="absolute top-0 right-0 hidden -translate-x-12 -translate-y-12 md:block text-muted -z-10">
					<Quote className="w-72 h-72 rotate-[15deg]" strokeWidth={0.75} />
				</div>
				<div className="absolute top-0 left-0 hidden translate-x-12 -translate-y-12 md:block text-muted -z-10">
					<ShieldQuestion className="w-72 h-72 rotate-[-15deg]"strokeWidth={0.75} />
				</div>
			</Content>

			<Content as="section" className="py-16" border="bottom">
				<h1 className="p-4 mb-4 mx-auto text-6xl font-bold text-center w-fit rounded-2xl bg-brand text-sky-900">
					Your ticket
				</h1>

				<p className="text-center">
					Under construction
				</p>
				{/* {user && <UserTicket username={user.username as string} />} */}
			</Content>

			<Content
				as="section"
				border="bottom"
				className="flex py-16"
				outerClassName="relative"
			>
				<Grain />
				<div className="flex flex-col w-full text-primary">
					<Heading>Help take EquiHacks further.</Heading>
					<h2 className="my-4 text-2xl font-thin">
						EquiHacks is made possible by the generous support of our sponsors.
					</h2>

					<Accordion type="single" className="w-full" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger>
								What kind of donations are you accepting?
							</AccordionTrigger>
							<AccordionContent>
								Money, merch, perks/credits on your platform&mdash;you name it!
								We&apos;re open to receiving anything that we can offer as a
								prize.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-2">
							<AccordionTrigger>
								What will my donation be used for?
							</AccordionTrigger>
							<AccordionContent>
								Your donations will be used to fund the prizes, venue, and other
								expenses for EquiHacks. A full list of expenses can be found on
								the <Link href="/donate" text="donations" /> page.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-3">
							<AccordionTrigger>
								I have further questions. Can I contact you?
							</AccordionTrigger>
							<AccordionContent>
								Yes! Our contact information is available below.
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					<NextLink href="/donate" className="mt-6">
						<Button>Donate</Button>
					</NextLink>
				</div>

				<div className="absolute bottom-0 right-0 -translate-x-12 translate-y-24 text-muted -z-10">
					<Coins className="w-72 h-72" strokeWidth={0.75} />
				</div>
			</Content>
		</>
	);
}
