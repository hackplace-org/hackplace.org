import { currentUser } from "@clerk/nextjs";
import {
	BadgeInfo,
	CalendarClock,
	Coins,
	LocateFixed,
	Map as MapIcon,
	MapPin,
	Quote,
	ShieldQuestion,
	Timer,
	Vote,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";

import { Opportunity } from "@/app/equihacks/opportunity";
import { Sponsors } from "@/app/equihacks/sponsors";
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
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Grain, Heading, Hover } from "@/components/utils";

export const metadata: Metadata = {
	title: "EquiHacks",
	description: "Monmouth County's premier high school hackathon.",
	openGraph: {
		title: "EquiHacks",
		description: "Monmouth County's premier high school hackathon.",
		url: "https://hackplace.org/equihacks",
		images: [
			{
				url: "/og/equihacks.png",
				width: 1200,
				height: 600,
				alt: "EquiHacks",
			},
		],
	},
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

				<div className="mt-24 flex flex-col gap-y-8 items-center">
					<h3 className="text-lg uppercase font-semibold">
						Thank you to our sponsors
					</h3>
					<Sponsors />
				</div>
			</Content>

			<Content
				as="section"
				className="py-16"
				outerClassName="relative"
				border="bottom"
			>
				<Grain />
				<h1 className="p-4 mb-4 mx-auto text-6xl font-bold text-center w-fit rounded-2xl bg-brand text-sky-900">
					Info
				</h1>

				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-y-4">
						<div className="flex flex-row gap-x-2 text-[#e0c1b3]">
							<div className="shrink-0 w-12 h-12 rounded-full bg-[#d89a9e]/20 flex justify-center items-center">
								<MapIcon className="w-6 h-6" />
							</div>

							<div className="flex flex-col w-full">
								<h2 className="text-xl font-bold">Venue</h2>

								<div className="flex flex-row gap-1">
									<MapPin className="w-4 h-4 -translate-y-[0.125rem] my-auto" />
									<Link
										className="text-[#e0c1b3]"
										href="https://maps.app.goo.gl/cYxwbzeUdgTRWcLi6"
										text="500 NJ-35, Red Bank, NJ 07701, USA"
										external
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-row gap-x-2 text-[#99d19c]">
							<div className="shrink-0 w-12 h-12 rounded-full bg-[#5aa984]/20  flex justify-center items-center">
								<CalendarClock className="w-6 h-6" />
							</div>

							<div className="flex flex-col gap-2">
								<div>
									<h2 className="text-xl font-bold">Date</h2>
									<p>
										Oct 20, 2023, 4:30 PM - Oct 23, 2023, 8:00 PM (UTC -04:00)
									</p>
								</div>

								<div>
									<p className="font-extrabold underline">In-person timings</p>
									<ul className="list-disc list-inside">
										<li>Friday, Oct 20, 4:30 PM - 8:00 PM (UTC -04:00)</li>
										<li>Saturday, Oct 21, 11:00 AM - 7:00 PM (UTC -04:00)</li>
										<li>Sunday, Oct 22, 11:00 AM - 7:00 PM (UTC -04:00)</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="flex md:flex-row items-center flex-col gap-8">
						<Image
							src="/equihacks/venue.webp"
							alt="Mathnasium of Middletown"
							width={3024}
							height={4032}
							className="rounded-md w-full md:w-1/2 object-cover md:object-top h-[252px] md:h-[504px]"
						/>

						<Table>
							<TableCaption>Hackathon schedule</TableCaption>

							<TableHeader>
								<TableRow>
									<TableHead className="w-1/3">Period</TableHead>
									<TableHead className="w-1/3 text-center">Begins</TableHead>
									<TableHead className="text-right">Ends</TableHead>
								</TableRow>
							</TableHeader>

							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Opening Cermony</TableCell>
									<TableCell className="text-center">Oct 20, 4:30 PM</TableCell>
									<TableCell className="text-right">Oct 20, 8:00 PM</TableCell>
								</TableRow>

								<TableRow>
									<TableCell className="font-medium">Hacking Period</TableCell>
									<TableCell className="text-center">Oct 20, 6:00 PM</TableCell>
									<TableCell className="text-right">Oct 22, 6:00 PM</TableCell>
								</TableRow>

								<TableRow>
									<TableCell className="font-medium">
										Submission Period
									</TableCell>
									<TableCell className="text-center">Oct 22, 6:00 PM</TableCell>
									<TableCell className="text-right">Oct 22, 7:00 PM</TableCell>
								</TableRow>

								<TableRow>
									<TableCell className="font-medium">Public Voting</TableCell>
									<TableCell className="text-center">Oct 22, 6:00 PM</TableCell>
									<TableCell className="text-right">Oct 23, 4:30 PM</TableCell>
								</TableRow>

								<TableRow>
									<TableCell className="font-medium">Judging Period</TableCell>
									<TableCell className="text-center">Oct 22, 6:00 PM</TableCell>
									<TableCell className="text-right">Oct 23, 4:30 PM</TableCell>
								</TableRow>

								<TableRow>
									<TableCell className="font-medium">
										Closing Ceremony
									</TableCell>
									<TableCell className="text-center">Oct 23, 4:30 PM</TableCell>
									<TableCell className="text-right">Oct 23, 8:00 PM</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</div>

				<div className="absolute top-0 right-0 -translate-y-12 text-muted -z-10">
					<BadgeInfo
						className="w-[25rem] h-[25rem] rotate-[15deg]"
						strokeWidth={0.75}
					/>
				</div>

				<div className="absolute top-1/2 left-1/2 -translate-x-20 -translate-y-72 hidden md:block text-muted -z-10">
					<LocateFixed
						className="w-[25rem] h-[25rem] -rotate-[15deg]"
						strokeWidth={0.75}
					/>
				</div>

				<div className="absolute top-1/2 right-0 -translate-y-20 hidden md:block text-muted -z-10">
					<Timer
						className="w-[25rem] h-[25rem] rotate-[15deg]"
						strokeWidth={0.75}
					/>
				</div>

				<div className="absolute bottom-0 left-1/2 -translate-x-20 translate-y-20 text-muted -z-10">
					<Vote
						className="w-[25rem] h-[25rem] -rotate-[15deg]"
						strokeWidth={0.75}
					/>
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
							Where will the hackathon be located?
						</AccordionTrigger>
						<AccordionContent>
							We&apos;re an in person hackathon, but we obviously don&apos;t
							have the means to support hackers overnight&mdash;we&apos;ll use
							the Mathnasium of Middletown building during the day.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger>
							What about the closing ceremony?
						</AccordionTrigger>
						<AccordionContent>
							The location for the closing ceremony is not set in stone yet. For
							now, expect to travel to the Mathnasium location on Friday,
							Saturday, and Sunday (Oct 20-22).
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger>What should I bring?</AccordionTrigger>
						<AccordionContent>
							Make sure to bring your laptop, phone, and a charging cable. We
							recommend using a hotspot connection on your phone during the
							hacking period as the connection is not very strong at the venue.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger>Will there be food?</AccordionTrigger>
						<AccordionContent>
							You are not allowed to eat inside the Mathnasium building.
							However, feel free to bring food inside your bags to enjoy in the
							hallway outside. There is a communal space where we&apos;ll also
							provide snacks and refreshments.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-5">
						<AccordionTrigger>
							What is the &ldquo;Workshop Project Award&rdquo; prize on the
							Devpost?
						</AccordionTrigger>
						<AccordionContent>
							After every workshop at EquiHacks, you&apos;ll have the
							opportunity to create your own mini-project using what you&apos;ve
							learned. We conduct a mini-hackathon with these projects and award
							a prize to one winner on the{" "}
							<Link
								href="https://equihacks.devpost.com/"
								text="Devpost"
								external
							/>
							.
						</AccordionContent>
					</AccordionItem>
				</Accordion>

				<div className="absolute top-0 right-0 hidden -translate-x-12 -translate-y-12 md:block text-muted -z-10">
					<Quote className="w-72 h-72 rotate-[15deg]" strokeWidth={0.75} />
				</div>
				<div className="absolute top-0 left-0 hidden translate-x-12 -translate-y-12 md:block text-muted -z-10">
					<ShieldQuestion
						className="w-72 h-72 rotate-[-15deg]"
						strokeWidth={0.75}
					/>
				</div>
			</Content>

			<Content as="section" className="py-16" border="bottom">
				<h1 className="p-4 mb-4 mx-auto text-6xl font-bold text-center w-fit rounded-2xl bg-brand text-sky-900">
					Your ticket
				</h1>

				<p className="text-center">Under construction</p>
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
					<Heading>Take EquiHacks further.</Heading>
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
								the <Link href="/donate" text="donate" /> page.
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
