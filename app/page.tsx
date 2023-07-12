import Link from "next/link";
import { type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Hash, MessagesSquare, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Content } from "@/components/content";
import { Discord } from "@/components/discord";
import { Button } from "@/components/ui/button";

interface MarqueeProps extends ComponentProps<"ul"> {
	labels: string[];
}

const Marquee = ({ labels, ...props }: MarqueeProps) => {
	return (
		<ul
			className="flex justify-around min-w-full gap-4 text-2xl font-bold animate-marquee shrink-0"
			{...props}
		>
			{labels.map((label) => (
				<li
					key={label}
					className="relative transition-colors border-dotted hover:border-solid hover:bg-[#00aaff] hover:text-white border my-auto p-4 rounded-lg"
				>
					<div className="absolute transition-opacity top-0 left-0 rounded-lg w-full h-full bg-[url(/noise.svg)] opacity-0 hover:opacity-25 brightness-100 contrast-150"></div>
					{label}
				</li>
			))}
		</ul>
	);
};

export const channel = cva("rounded-lg", {
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
		<div
			className="flex flex-row w-full group gap-x-4"
			style={{ gridArea }}
		>
			<Link href={href} legacyBehavior>
				<a
					className={cn(
						"relative w-full transition-all group-hover:text-white group-hover:bg-[#5865f2] border flex flex-row justify-between p-4 font-bold",
						selection
					)}
				>
					<div
						className={cn(
							"absolute transition-opacity top-0 left-0 w-full pointer-events-none select-none h-full bg-[url(/noise.svg)] opacity-0 group-hover:opacity-25 brightness-100 contrast-150",
							selection
						)}
					></div>
					<div className="flex flex-row gap-x-1">
						<Icon className="w-5 h-5 my-auto" />
						<p className="my-auto text-xl">{name}</p>
					</div>

					<p className="flex items-center w-1/2 h-12 my-auto text-transparent align-middle transition-colors group-hover:text-white">
						{description}
					</p>
				</a>
			</Link>
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
			<Content as="main" className="py-8" border="bottom">
				Hello world
			</Content>

			<Content
				as="section"
				className="py-8"
				outerClassName="relative"
				border="bottom"
			>
				<div className="select-none pointer-events-none absolute w-full inset-0 bg-[url(/noise.svg)] opacity-25 brightness-100 contrast-150"></div>
				<h1 className="border-l-[10px] pl-4 border-[#00aaff] text-6xl font-bold">
					Our team
				</h1>
			</Content>

			<Content
				as="section"
				className="flex flex-col justify-between py-8 gap-y-4 gap-x-8 md:flex-row"
				border="bottom"
			>
				<div
					className="grid gap-y-4 gap-x-0 md:gap-x-8"
					style={{
						gridTemplateAreas:
							"'a f' 'a f' 'b f' 'c f' 'd f' 'e f'",
					}}
				>
					<h1
						className="border-l-[10px] pl-4 border-[#00aaff] text-6xl font-bold max-w-1/2"
						style={{ gridArea: "a" }}
					>
						A vibrant community of...
					</h1>

					<div
						className="flex gap-4 overflow-hidden select-none group"
						style={{ gridArea: "b" }}
					>
						<Marquee labels={labels} />
						<Marquee labels={labels} aria-hidden />
					</div>

					<Channel
						gridArea="c"
						name="announcements"
						href="https://discord.gg/zveRDRvEPP"
						description="View important hack.place() announcements"
						round="top"
					/>
					<Channel
						gridArea="d"
						name="support"
						href="https://discord.gg/paZgnXkeha"
						description="Get help with any question you may have"
						Icon={MessagesSquare}
					/>
					<Channel
						gridArea="e"
						name="lounge"
						href="https://discord.gg/QmPdqegQNb"
						description="Socialize with staff and members of our community"
						round="bottom"
					/>

					<div className="hidden md:block" style={{ gridArea: "f" }}>
						<Discord />
					</div>
				</div>

				<div className="block md:hidden">
					<Discord />
				</div>
			</Content>

			<Content
				as="section"
				border="bottom"
				className="flex py-8 font-sans"
				outerClassName="relative"
			>
				<div className="select-none pointer-events-none absolute w-full inset-0 bg-[url(/noise.svg)] opacity-25 brightness-100 contrast-150"></div>
				<div className="flex flex-col py-8 text-primary">
					<h1 className="border-l-[10px] pl-4 border-[#00aaff] text-6xl font-bold text-center">
						Ready to get started?
					</h1>
					<h2 className="my-4 text-2xl font-thin">
						See how our programs can help you{" "}
						<span className="font-bold transition-all hover:text-glow">
							level up.
						</span>
					</h2>

					<Link className="mt-2" href="/workshops">
						<Button
							variant="link"
							className="py-6 pl-0 text-2xl font-extrabold transition-all group hover:text-glow hover:no-underline"
						>
							Let&apos;s go{" "}
							<span className="ml-2 group-hover:animate-[spin_0.75s_cubic-bezier(0,0,0.2,1)_1]">
								⮞
							</span>
						</Button>
					</Link>
				</div>
			</Content>
		</>
	);
}
