import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { Content } from "@/components/content";
import { Logo } from "@/components/logo";

import { Button } from "@/components/ui/button";

export const Footer = () => {
	return (
		<Content as="footer" className="py-8 flex flex-col">
			<div className="flex flex-col md:flex-row justify-between">
				<div className="pb-4 md:pb-0">
					<Logo />
				</div>

				<div className="flex flex-col sm:flex-row gap-4">
					<div className="flex flex-col gap-y-1 text-muted-foreground w-full sm:w-72">
						<h4 className="font-bold text-primary">Workshops</h4>

						<p>Build a Custom Weather App Using JavaScript</p>
						<p>Create a Cookie Clicker Game with React</p>
					</div>

					<div className="flex flex-col gap-y-1 text-muted-foreground w-full sm:w-72">
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

			<div className="pt-4 flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row justify-between">
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
