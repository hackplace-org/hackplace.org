import { type VariantProps, cva } from "class-variance-authority";
import {
	GraduationCap,
	Hash,
	ImageIcon,
	type LucideIcon,
	Megaphone,
	MessagesSquare,
	MousePointerClick,
	Pencil,
	Ruler,
	UserCircle,
} from "lucide-react";
import NextLink from "next/link";
import type { ComponentProps } from "react";

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
import { Button } from "@/components/ui/button";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
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
				<NextLink key={link.title} href={link.href} target="_blank">
					<Button
						size="icon"
						variant="ghost"
						className={cn("transition-colors", link.color)}
					>
						<link.Icon className="w-5 h-5" />
					</Button>
				</NextLink>
			))}
		</div>
	</div>
);

interface MarqueeProps extends ComponentProps<"ul"> {
	labels: string[];
}

const Marquee = ({ labels, ...props }: MarqueeProps) => (
	<ul
		className="flex justify-around min-w-full gap-4 text-2xl font-bold animate-marquee shrink-0"
		{...props}
	>
		{labels.map((label) => (
			<li
				key={label}
				className="relative p-4 my-auto transition-colors border border-dotted rounded-lg hover:border-solid hover:bg-brand hover:text-white"
			>
				<div className="absolute transition-opacity top-0 left-0 rounded-lg w-full h-full bg-[url(/noise.svg)] opacity-0 hover:opacity-25 brightness-100 contrast-150" />
				{label}
			</li>
		))}
	</ul>
);

const channel = cva("rounded-lg", {
	variants: {
		round: {
			default: "",
			top: "rounded-t-2xl",
			bottom: "rounded-b-2xl",
		},
	},
});

interface ChannelProps extends VariantProps<typeof channel> {
	gridArea: string;
	name: string;
	href: string;
	description: string;
	Icon?: LucideIcon;
}

const Channel = ({
	gridArea,
	name,
	href,
	description,
	round,
	Icon = Hash,
}: ChannelProps) => {
	const selection = channel({ round });

	return (
		<div className="flex flex-row w-full group gap-x-4" style={{ gridArea }}>
			<NextLink href={href} passHref legacyBehavior>
				{/* biome-ignore lint/a11y/useValidAnchor: NextLink passes the href */}
				<a
					target="_blank"
					className={cn(
						"relative w-full transition-all group-hover:text-white group-hover:bg-[#5865f2] border flex flex-row justify-between p-4 font-bold",
						selection,
					)}
				>
					<Grain
						className={cn(
							"z-0 transition-opacity top-0 left-0 h-full opacity-0 group-hover:opacity-25",
							selection,
						)}
					/>

					<div className="flex flex-row gap-x-1">
						<Icon className="w-5 h-5 my-auto" />
						<p className="my-auto text-xl">{name}</p>
					</div>

					<p className="items-center hidden w-1/2 h-12 my-auto text-transparent align-middle transition-colors sm:flex group-hover:text-white">
						{description}
					</p>
				</a>
			</NextLink>
		</div>
	);
};

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
				className="flex flex-col py-16 gap-y-16 md:gap-y-0 md:flex-row"
				outerClassName="relative"
				border="bottom"
			>
				<Grain />
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
						<Link href="/seminars" text="seminars" /> that teach them to use the
						most current technologies.
					</h2>
				</hgroup>

				<div className="w-full md:w-1/2 md:relative">
					<div className="flex w-1/2 h-full mx-auto translate-x-0 md:absolute md:translate-x-1/2 md:mx-0 rounded-2xl bg-brand rotate-6">
						<ImageIcon className="w-40 h-40 m-auto" />
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
					<Hover>engineers</Hover> that are committed to teaching kids what we
					know!
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
				<Heading className="max-w-1/2" style={{ gridArea: "a" }}>
					A vibrant community of...
				</Heading>

				<div
					className="flex gap-4 my-2 overflow-hidden select-none group"
					style={{ gridArea: "b" }}
				>
					<Marquee labels={labels} />
					<Marquee labels={labels} aria-hidden />
				</div>

				<Channel
					gridArea="c"
					name="announcements"
					href="https://discord.gg/PCjKJeU75H"
					description="View important hack.place() announcements"
					round="top"
					Icon={Megaphone}
				/>
				<Channel
					gridArea="d"
					name="questions"
					href="https://discord.gg/vU6SnRbbrq"
					description="Get help with any question you may have"
					Icon={MessagesSquare}
				/>
				<Channel
					gridArea="e"
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

						<AccordionItem value="item-2">
							<AccordionTrigger>What are our qualifications?</AccordionTrigger>
							<AccordionContent>
								All of our teachers have years of experience in programming and
								computer science. We have taken related courses at our school,
								and we have also participated in various hackathons and
								competitions!
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
