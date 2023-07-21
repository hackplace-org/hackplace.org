import NextLink from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { Content } from "@/components/content";
import { Link } from "@/components/link";
import { Logo } from "@/components/logo";

import { Button } from "@/components/ui/button";

export const Footer = () => {
	return (
		<Content as="footer" className="flex flex-col py-8">
			<div className="flex flex-col justify-between md:flex-row">
				<div className="pb-4 md:pb-0">
					<Logo />
					<div className="flex flex-col w-full sm:w-4/5 text-muted-foreground gap-y-1">
						<p>
							is an entirely{" "}
							<Link
								href={siteConfig.links[0].href}
								text="open source"
								external
							/>{" "}
							and{" "}
							<Link
								href={siteConfig.links[4].href}
								text="financially transparent"
								external
							/>{" "}
							nonprofit organization.
						</p>
						<p className="mt-2">
							Contact:{" "}
							<Link
								href="mailto:support@hackplace.org"
								text="support@hackplace.org"
							/>
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-4 sm:flex-row">
					<div className="flex flex-col w-full gap-y-1 text-muted-foreground sm:w-72">
						<h4 className="border-l-[5px] pl-2 border-brand font-bold text-primary">
							Workshops
						</h4>

						<p>Intro to HTML/CSS/JS</p>
						<p>Intro to React</p>
					</div>

					<div className="flex flex-col w-full gap-y-1 text-muted-foreground sm:w-72">
						<h4 className="border-l-[5px] pl-2 border-brand font-bold text-primary">
							Donate
						</h4>

						<Link
							className="transition-colors hover:text-brand"
							href="/donate#sponsor"
							text="Sponsor our organization"
							unstyled
						/>
						<Link
							className="transition-colors hover:text-brand"
							href="/donate#individual"
							text="Make an individual, one-time contribution"
							unstyled
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-between pt-8 gap-y-2 sm:gap-y-0 sm:flex-row">
				<p className="my-auto text-muted-foreground">
					© 2023 hack.place()™
				</p>

				<section className="mx-auto my-auto sm:mx-0">
					{siteConfig.links.map((link) => (
						<NextLink
							key={link.title}
							href={link.href}
							target="_blank"
						>
							<Button
								size="icon"
								variant="ghost"
								className="transition-colors group"
							>
								<link.Icon
									className={cn(link.color, "w-5 h-5")}
								/>
							</Button>
						</NextLink>
					))}
				</section>
			</div>
		</Content>
	);
};
