import { List } from "@/app/workshops/list";
import { Navbar } from "@/components/navbar";
import { Content } from "@/components/content";

import { Grain } from "@/components/utils";
import { Heading } from "@/components/utils";
import { Hover } from "@/components/utils";

import { Medal, SkipForward } from "lucide-react";
import type { Metadata } from "next";

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
				<Grain />

				<Heading>We&apos;re the teachers we wish we had.</Heading>
				<h2 className="my-4 text-2xl font-thin">
					Learn the skills you need to{" "}
					<Hover>build the future.</Hover>
				</h2>

				<div className="absolute bottom-0 right-0 translate-y-24 text-muted -z-10">
					<SkipForward
						className="w-72 h-72 rotate-[15deg]"
						strokeWidth={0.75}
					/>
				</div>
			</Content>

			<Content as="section" className="py-16" border="bottom">
				<h1 className="p-4 mx-auto text-6xl font-bold text-center w-fit rounded-2xl bg-brand text-sky-900">
					Workshops
				</h1>

				<List />
			</Content>

			<Content
				as="section"
				border="bottom"
				className="flex py-16"
				outerClassName="relative"
			>
				<Grain />
				<div className="flex flex-col w-full text-primary">
					<Heading>Learn, build, compete.</Heading>
					<h2 className="my-4 text-2xl font-thin">
						After completing a workshop, compete with your peers to{" "}
						<Hover>build the best project</Hover> and{" "}
						<Hover>earn prizes.</Hover>
					</h2>
				</div>

				<div className="absolute top-0 right-0 -translate-y-12 text-muted -z-10">
					<Medal
						className="w-[25rem] h-[25rem] rotate-[15deg]"
						strokeWidth={0.75}
					/>
				</div>
			</Content>
		</>
	);
}
