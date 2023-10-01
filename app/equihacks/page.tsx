import { currentUser } from "@clerk/nextjs";
import type { Metadata } from "next";
import Link from "next/link";

import { UserTicket } from "@/app/equihacks/ticket";
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Hover } from "@/components/utils";

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
				<div className="absolute blur-[300px] -z-20 bg-gradient-to-r from-[#99d19c] via-[#5aa984] to-[#357677] h-[300px] bottom-0 right-1/4 aspect-square rounded-full translate-x-1/2 translate-y-1/2" />

				<hgroup className="mx-auto max-w-4xl flex flex-col gap-6 text-center">
					<h1 className="text-6xl font-bold">
						EquiHacks is Monmouth County&apos;s premier high school hackathon.
					</h1>
					<h2 className="text-xl text-muted-foreground">
						We&apos;re excited to announce <Hover>EquiHacks S1</Hover>, a
						48-hour hackathon for middle and high school students in{" "}
						<Hover>Monmouth County, NJ</Hover>.
					</h2>
				</hgroup>

				<div className="mt-8 flex flex-row gap-x-4 justify-center">
					<Link href="https://equihacks.devpost.com/" target="_blank">
						<Button size="lg">Join now</Button>
					</Link>

					<Link href="/donate">
						<Button size="lg" variant="secondary">
							Donate
						</Button>
					</Link>
				</div>

				{/* {user && <UserTicket username={user.username as string} />} */}
			</Content>
		</>
	);
}
