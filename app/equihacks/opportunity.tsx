"use client";

import { GraduationCap, type LucideIcon, Medal, Users } from "lucide-react";
import { type PropsWithChildren, forwardRef } from "react";

import { CardItem } from "@/components/card";
import { Content } from "@/components/content";
import { useCards } from "@/components/hooks/useCards";
import { Link } from "@/components/link";
import { Heading } from "@/components/utils";
import { links } from "@/lib/siteConfig";

interface OpportunityItemProps {
	title: string;
	Icon: LucideIcon;
}

const OpportunityItem = forwardRef<
	HTMLDivElement,
	PropsWithChildren<OpportunityItemProps>
>(({ title, Icon, children }, ref) => {
	return (
		<CardItem ref={ref} className="group">
			<div className="flex flex-row mb-2 gap-2 group-hover:text-primary transition-colors">
				<Icon className="w-6 h-6 my-auto" />
				<h1 className="font-extrabold text-2xl">{title}</h1>
			</div>

			{children}
		</CardItem>
	);
});
OpportunityItem.displayName = "OpportunityItem";

export const Opportunity = () => {
	const [refs, onMouseMove] = useCards(3);

	return (
		<Content as="section" border="bottom" className="flex flex-col py-16">
			<Heading>Your opportunity to...</Heading>

			<div
				className="w-full gap-2 mt-8 group/cards grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2"
				onMouseMove={onMouseMove}
			>
				<OpportunityItem
					ref={refs.current[0]}
					title="Win cool prizes"
					Icon={Medal}
				>
					We are distributing cash prizes and sponsor prizes to our top
					competitors. In addition, we issue{" "}
					<Link href="https://badgr.com/" text="Open Badges" external /> to the
					winners of every category. Once redeemed, you can display them on any
					supported platform, including{" "}
					<Link href="linkedin.com/" text="LinkedIn" external />!
				</OpportunityItem>

				<OpportunityItem
					ref={refs.current[1]}
					title="Connect with peers"
					Icon={Users}
				>
					Hackathons are the best place to meet like-minded students that are
					passionate about building the same things you are. Don&apos;t worry if
					you haven&apos;t found those people beforehand&mdash;we have a
					team-building channel on our{" "}
					<Link href={links[3].href} text="Discord" external />.
				</OpportunityItem>

				<OpportunityItem
					ref={refs.current[2]}
					title="Learn new things"
					Icon={GraduationCap}
				>
					This is a great opportunity to try out technologies you&apos;ve never
					used before. Our community and staff are both here along the way to
					help you out. Throughout the hackathon, we&apos;re also running our
					own workshops for you to learn from!
				</OpportunityItem>
			</div>
		</Content>
	);
};
