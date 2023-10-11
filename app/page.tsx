import {
	GraduationCap,
	ImageIcon,
	Megaphone,
	MessagesSquare,
	MousePointerClick,
	Pencil,
	Ruler,
	Trophy,
	UserCircle,
	X,
} from "lucide-react";
import type { Metadata } from "next";
import NextLink from "next/link";
import Marquee from "react-fast-marquee";

import { Channel } from "@/app/channel";
import { Mission } from "@/app/mission";
import { people } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

import { Content } from "@/components/content";
import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { Grain, Heading, Hover } from "@/components/utils";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "hack.place()",
	description:
		"We train the next generation of programmers in the Monmouth County area.",
};

interface PersonProps {
	person: typeof people[number];
}

const Person = ({ person }: PersonProps) => (
	<div className="flex flex-col w-full group">
		<UserCircle className="mx-auto w-72 h-72" strokeWidth={0.75} />

		<p className="mx-auto text-sm font-bold transition-all group-hover:text-brand">
			{person.name}
		</p>
		<p className="mx-auto text-sm text-muted-foreground">
			{person.roles.join(", ")}
		</p>

		<div className="flex flex-row mx-auto mt-2">
			{person.links.map((link) => (
				<NextLink
					key={link.title}
					title={link.title}
					href={link.href}
					target="_blank"
				>
					<Button
						size="icon"
						variant="ghost"
						title={link.title}
						aria-label={link.title}
						className={cn("transition-colors", link.color)}
					>
						<link.Icon className="w-5 h-5" />
					</Button>
				</NextLink>
			))}
		</div>
	</div>
);

export default function Home() {
	const labels = [
		"builders",
		"developers",
		"makers",
		"designers",
		"creators",
		"programmers",
		"hackers",
	];

	return (
		<>
			<Navbar currentTitle="Home" />
			<Content
				as="main"
				className="pt-8 pb-16 flex flex-col gap-y-12"
				outerClassName="relative"
				border="bottom"
			>
				<Grain />
				<Alert className="flex flex-row justify-between">
					<div className="flex flex-row gap-x-4">
						<Trophy className="w-4 h-4" />

						<div className="flex flex-col">
							<AlertTitle>Announcing EquiHacks S1</AlertTitle>
							<AlertDescription>
								We&apos;re supercharging middle and high school innovation in
								Monmouth County.
							</AlertDescription>
						</div>
					</div>

					<NextLink href="/equihacks">
						<Button>Let&apos;s go</Button>
					</NextLink>
				</Alert>

				<div className="flex flex-col gap-y-16 md:gap-y-0 md:flex-row">
					<hgroup className="flex flex-col w-full md:w-1/2 gap-y-4">
						<h1 className="text-6xl font-bold">We learned to code.</h1>
						<Heading className="text-muted-foreground" size="sub">
							Now it&apos;s <Hover>your turn.</Hover>
						</Heading>

						<h2 className="my-4 text-xl font-thin">
							hack.place() fully immerses students throughout Monmouth County in
							the world of programming through{" "}
							<Link href="/workshops" text="workshops" />,{" "}
							<Link href="/equihacks" text="hackathons" />, and{" "}
							<Link href="/seminars" text="seminars" /> that teach them to use
							the most current technologies.
						</h2>
					</hgroup>

					<div className="w-full md:w-1/2 md:relative">
						<div className="flex w-1/2 h-full mx-auto translate-x-0 md:absolute md:translate-x-1/2 md:mx-0 rounded-2xl bg-brand rotate-6">
							<ImageIcon className="w-40 h-40 m-auto" />
						</div>
					</div>
				</div>
			</Content>

			<Mission />

			<Content
				as="section"
				className="py-16"
				outerClassName="relative"
				border="bottom"
			>
				<Grain />
				<h1 className="p-4 mx-auto text-6xl font-bold text-center w-fit rounded-2xl bg-brand text-sky-900">
					Our team
				</h1>
				<h2 className="w-full mx-auto my-4 text-2xl font-thin text-center md:w-3/4">
					We are a team of talented high school <Hover>programmers</Hover> and{" "}
					<Hover>engineers</Hover> committed to teaching kids what we know.
				</h2>

				<div className="flex flex-col w-full mt-4 sm:flex-row">
					{people.map((person) => (
						<Person key={person.name} person={person} />
					))}
				</div>

				<div className="absolute top-0 right-0 hidden -translate-y-12 md:block text-muted -z-10">
					<GraduationCap
						className="w-[25rem] h-[25rem] rotate-[15deg]"
						strokeWidth={0.75}
					/>
				</div>

				<div className="absolute top-0 left-0 hidden -translate-y-12 md:block text-muted -z-10">
					<Ruler className="w-[25rem] h-[25rem]" strokeWidth={0.75} />
				</div>

				<div className="absolute bottom-0 -translate-x-1/2 translate-y-[20%] left-1/2 text-muted -z-10">
					<Pencil className="w-[25rem] h-[25rem]" strokeWidth={0.75} />
				</div>
			</Content>

			<Content
				as="section"
				className="flex flex-col py-16 gap-y-4"
				border="bottom"
			>
				<Heading className="max-w-1/2">A vibrant community of...</Heading>

				<Marquee autoFill speed={25} className="my-2">
					{labels.map((label) => (
						<div
							key={label}
							className="mx-4 relative p-4 my-auto transition-colors border border-dotted rounded-lg hover:border-solid hover:bg-brand hover:text-white"
						>
							<div className="absolute transition-opacity top-0 left-0 rounded-lg w-full h-full bg-[url(/noise.svg)] opacity-0 hover:opacity-25 brightness-100 contrast-150" />
							<p className="text-2xl font-bold">{label}</p>
						</div>
					))}
				</Marquee>

				<Channel
					name="announcements"
					href="https://discord.gg/PCjKJeU75H"
					description="View important hack.place() announcements"
					round="top"
					Icon={Megaphone}
				/>
				<Channel
					name="questions"
					href="https://discord.gg/vU6SnRbbrq"
					description="Get help with any question you may have"
					Icon={MessagesSquare}
				/>
				<Channel
					name="lounge"
					href="https://discord.gg/D9CAbAMspX"
					description="Socialize with members of our community"
					round="bottom"
				/>
			</Content>

			<Content
				as="section"
				border="bottom"
				className="flex py-16"
				outerClassName="relative"
			>
				<Grain />
				<div className="flex flex-col w-full text-primary">
					<Heading>Ready to get started?</Heading>
					<h2 className="my-4 text-2xl font-thin">
						See how our programs can help you <Hover>level up.</Hover>
					</h2>

					<Accordion type="single" className="w-full" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger>
								Who&apos;s running this organization?
							</AccordionTrigger>
							<AccordionContent>
								We are a group of seniors from{" "}
								<Link
									href="https://www.hths.mcvsd.org"
									text="High Technology High School"
									external
								/>{" "}
								(Lincroft, NJ), ranking 1st-2nd nationally among the best STEM
								high schools (
								<Link
									href="https://www.usnews.com/education/best-high-schools/new-jersey/districts/monmouth-county-vocational-school-district/high-technology-high-school-12808"
									text="U.S. News"
									external
								/>
								). We are passionate about computer science and software
								engineering, and we want to share our knowledge with our
								community!
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					<NextLink href="/workshops" className="mt-6">
						<Button>Let&apos;s go</Button>
					</NextLink>
				</div>

				<div className="absolute top-0 right-0 -translate-y-12 text-muted -z-10">
					<MousePointerClick
						className="w-[25rem] h-[25rem] rotate-[15deg]"
						strokeWidth={0.75}
					/>
				</div>
			</Content>
		</>
	);
}
