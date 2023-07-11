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
			className="text-2xl font-bold animate-marquee shrink-0 flex justify-around min-w-full gap-4"
			{...props}
		>
			{labels.map((label) => (
				<li
					key={label}
					className="transition-colors border-dotted hover:border-solid hover:bg-[#00aaff] hover:text-white border my-auto p-4 rounded-md"
				>
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
	description?: string;
}

const Channel = ({ gridArea, name, href, description }: ChannelProps) => {
	return (
		<div
			className="group flex flex-row gap-x-4 w-full"
			style={{ gridArea }}
		>
			<Link href={href} legacyBehavior>
				<a
					className={cn(
						"w-full transition-all group-hover:text-white group-hover:bg-[#5865f2] rounded-md border flex flex-row gap-x-1 p-4 font-bold",
						description && "group-hover:w-2/3"
					)}
				>
					<Hash className="w-5 h-5 my-auto" />
					<p className="text-xl my-auto">{name}</p>
				</a>
			</Link>

			{description && (
				<p className="text-muted-foreground hidden group-hover:flex my-auto">
					{description}
				</p>
			)}
		</div>
	);
};

export default function Home() {
	const labels = [
		"builders",
		"developers",
		"creators",
		"designers",
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
				className="py-8 flex flex-col md:flex-row gap-8 justify-between"
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
						className="flex overflow-hidden select-none gap-4 pb-6 group"
						style={{ gridArea: "b" }}
					>
						<Marquee labels={labels} />
						<Marquee labels={labels} aria-hidden />
					</div>

					<Channel gridArea="c" name="announcements" href="/" />
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
						description="Socialize with our community and staff"
					/>

					<div className="md:block hidden" style={{ gridArea: "f" }}>
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
				className="font-sans py-8 relative flex justify-center items-center"
				outerClassName="overflow-x-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-700 via-sky-500 to-sky-800"
			>
				<div className="select-none pointer-events-none absolute w-[200vw] -translate-x-1/4 inset-0 bg-[url(/noise.svg)] opacity-25 brightness-100 contrast-150"></div>
				<div className="flex flex-col items-center py-8">
					<h1 className="text-6xl font-bold text-center text-white">
						Ready to get started?
					</h1>
					<h2 className="text-2xl text-secondary dark:text-secondary-foreground my-4 font-thin">
						See how our programs can help you{" "}
						<span className="font-bold">level up.</span>
					</h2>

					<Link className="mt-2" href="/workshops">
						<Button
							variant="link"
							className="group transition-all hover:text-glow hover:no-underline text-2xl py-6 font-extrabold text-secondary dark:text-secondary-foreground"
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
