import Link from "next/link";

import { Navbar } from "@/components/navbar";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/button";
import { ArrowBigRightDash } from "lucide-react";

export default function Home() {
	return (
		<>
			<Navbar currentTitle="Home" />
			<Content as="main" className="py-8" border="bottom">
				Hello world
			</Content>

			<Content
				as="main"
				className="font-sans py-8 h-80 relative flex justify-center items-center"
				outerClassName="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-sky-700 via-sky-500 to-sky-800"
			>
				<div className="select-none pointer-events-none absolute inset-0 bg-[url(/noise.svg)] opacity-25 brightness-100 contrast-150"></div>
				<div className="flex flex-col items-center">
					<h1 className="text-4xl font-bold text-center text-white">
						Ready to get started?
					</h1>
					<h2 className="text-secondary dark:text-secondary-foreground my-4">
						See how our programs can help you level up.
					</h2>

					<Link className="mt-2" href="/workshops">
						<Button
							variant="ghost"
							className="text-2xl py-6 font-bold text-secondary dark:text-secondary-foreground"
						>
							Let&apos;s go
							<ArrowBigRightDash className="ml-2 w-6 h-6" />
						</Button>
					</Link>
				</div>
			</Content>
		</>
	);
}
