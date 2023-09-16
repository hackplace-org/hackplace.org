import NextLink from "next/link";

import { links } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

import { Content } from "@/components/content";
import { Link } from "@/components/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/utils";

export const Footer = () => {
	return (
		<Content as="footer" className="flex flex-col py-8">
			<div className="flex flex-col justify-between lg:flex-row">
				<div className="pb-4 lg:pb-0">
					<Logo />
					<div className="flex flex-col w-full sm:w-4/5 text-muted-foreground gap-y-1">
						<p>
							is an entirely{" "}
							<Link href={links[0].href} text="open source" external /> and{" "}
							<Link
								href={links[5].href}
								text="financially transparent"
								external
							/>{" "}
							fiscally sponsored nonprofit organization.
						</p>

						<div className="flex flex-row mt-2 mb-6 lg:mb-0 gap-x-2">
							<NextLink href="mailto:support@hackplace.org" target="_blank">
								<Button>Contact support</Button>
							</NextLink>

							<NextLink href="https://discord.gg/QmPdqegQNb" target="_blank">
								<Button variant="outline">Join our team</Button>
							</NextLink>

							<NextLink href="https://docs.hackplace.org" target="_blank">
								<Button variant="outline">Knowledge base</Button>
							</NextLink>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-4 sm:flex-row">
					<div className="flex flex-col w-full gap-y-1 text-muted-foreground sm:w-72">
						<Heading className="text-primary" size="small">
							Donate
						</Heading>

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
				<p className="my-auto text-muted-foreground">© 2023 hack.place()™</p>

				<section className="mx-auto my-auto sm:mx-0">
					{links.map((link) => (
						<NextLink key={link.title} href={link.href} target="_blank">
							<Button
								size="icon"
								variant="ghost"
								className="transition-colors group"
							>
								<link.Icon className={cn(link.color, "w-5 h-5")} />
							</Button>
						</NextLink>
					))}
				</section>
			</div>
		</Content>
	);
};
