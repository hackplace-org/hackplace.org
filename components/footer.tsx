import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";
import { Content } from "@/components/content";
import { Button } from "@/components/ui/button";

export const Footer = () => {
	return (
		<Content
			as="footer"
			border="top"
			className="pt-2 flex flex-row justify-between"
		>
			<p className="my-auto">hack.place()</p>
			<section className="my-auto">
				{siteConfig.links.map((link) => (
					<Link key={link.title} href={link.href}>
						<Button
							size="icon"
							variant="ghost"
							className="transition-colors group"
						>
							<link.Icon className={cn(link.color, "w-5 h-5")} />
						</Button>
					</Link>
				))}
			</section>
		</Content>
	);
};
