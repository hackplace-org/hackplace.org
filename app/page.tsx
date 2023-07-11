import Link from "next/link";
import { Hash } from "lucide-react";
import { type ComponentProps } from "react";

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
					className="group relative transition-colors border-dotted hover:border-solid hover:bg-[#00aaff] hover:text-white border my-auto p-4 rounded-md"
				>
					<div className="absolute transition-opacity top-0 left-0 rounded-md w-full h-full bg-[url(/noise.svg)] opacity-0 hover:opacity-25 brightness-100 contrast-150"></div>
					{label}
				</li>
			))}
		</ul>
	);
};

interface ChannelProps {
	gridArea: string;
	name: string;
	href: string;
	description: string;
}

const Channel = ({ gridArea, name, href, description }: ChannelProps) => {
	return (
		<div
			className="flex flex-row w-full group gap-x-4"
			style={{ gridArea }}
		>
			<Link href={href} legacyBehavior>
				<a className="relative w-full transition-all group-hover:text-white group-hover:bg-[#5865f2] rounded-md border flex flex-row justify-between p-4 font-bold">
					<div className="absolute transition-opacity top-0 left-0 rounded-md w-full pointer-events-none select-none h-full bg-[url(/noise.svg)] opacity-0 group-hover:opacity-25 brightness-100 contrast-150"></div>
					<div className="flex flex-row gap-x-1">
						<Hash className="w-5 h-5 my-auto" />
						<p className="my-auto text-xl">{name}</p>
					</div>

					<p className="w-1/2 my-auto text-transparent transition-colors group-hover:text-white">
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
				className="flex flex-col justify-between gap-8 py-8 md:flex-row"
				border="bottom"
			>
				<div
					className="grid gap-y-4 gap-x-0 md:gap-x-4"
					style={{
						gridTemplateAreas:
							"'a f' 'a f' 'b f' 'c f' 'd f' 'e f'",
					}}
				>
					<h1
						className="text-6xl font-bold max-w-1/2"
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
						href="/"
						description="View important hack.place() announcements"
					/>
					<Channel
						gridArea="d"
						name="support"
						href="/"
						description="Get help with any question you may have"
					/>
					<Channel
						gridArea="e"
						name="lounge"
						href="/"
						description="Socialize with staff and members of our community"
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
				className="relative flex items-center justify-center py-8 font-sans"
				outerClassName="overflow-x-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-700 via-sky-500 to-sky-800"
			>
				<div className="select-none pointer-events-none absolute w-[200vw] -translate-x-1/4 inset-0 bg-[url(/noise.svg)] opacity-25 brightness-100 contrast-150"></div>
				<div className="flex flex-col items-center py-8">
					<h1 className="text-6xl font-bold text-center text-white">
						Ready to get started?
					</h1>
					<h2 className="my-4 text-2xl font-thin text-secondary dark:text-secondary-foreground">
						See how our programs can help you{" "}
						<span className="font-bold">level up.</span>
					</h2>

					<Link className="mt-2" href="/workshops">
						<Button
							variant="link"
							className="py-6 text-2xl font-extrabold transition-all group hover:text-glow hover:no-underline text-secondary dark:text-secondary-foreground"
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
