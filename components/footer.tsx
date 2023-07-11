import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { Content } from "@/components/content";
import { Logo } from "@/components/logo";

import { Button } from "@/components/ui/button";

export const Footer = () => {
	return (
		<Content as="footer" className="flex flex-col py-8">
			<div className="flex flex-col justify-between md:flex-row">
				<div className="pb-4 md:pb-0">
					<Logo />
				</div>

				<div className="flex flex-col gap-4 sm:flex-row">
					<div className="flex flex-col w-full gap-y-1 text-muted-foreground sm:w-72">
						<h4 className="font-bold text-primary">Workshops</h4>

						<p>Build a Custom Weather App Using JavaScript</p>
						<p>Create a Cookie Clicker Game with React</p>
					</div>

					<div className="flex flex-col w-full gap-y-1 text-muted-foreground sm:w-72">
						<h4 className="font-bold text-primary">Donate</h4>

						<Link
							className="hover:text-[#00aaff] transition-colors"
							href="https://opencollective.com/hack-place"
						>
							Sponsor our organization
						</Link>
						<Link
							className="hover:text-[#00aaff] transition-colors"
							href="https://bank.hackclub.com/donations/start/hack-place"
						>
							Make an individual, one-time contribution
						</Link>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-between pt-4 gap-y-2 sm:gap-y-0 sm:flex-row">
				<p className="my-auto text-muted-foreground">
					© 2023 hack.place()™
				</p>

				<section className="my-auto">
					{siteConfig.links.map((link) => (
						<Link key={link.title} href={link.href}>
							<Button
								size="icon"
								variant="ghost"
								className="transition-colors group"
							>
								<link.Icon
									className={cn(link.color, "w-5 h-5")}
								/>
							</Button>
						</Link>
					))}
				</section>
			</div>
		</Content>
	);
};
