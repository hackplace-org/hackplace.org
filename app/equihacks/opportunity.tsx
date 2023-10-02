"use client";

import { GraduationCap, type LucideIcon, Medal, Users } from "lucide-react";
import { type PropsWithChildren, forwardRef } from "react";

import { CardItem } from "@/components/card";
import { Content } from "@/components/content";
import { useCards } from "@/components/hooks/useCards";
import { Link } from "@/components/link";
import { Heading } from "@/components/utils";

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
					Hackathons are the best place to meet like-minded students.
					Haven&apos;t found people interested in the same things you are? We
					have a team-building channel on our Discord for you to find them.
				</OpportunityItem>

				<OpportunityItem
					ref={refs.current[2]}
					title="Learn new things"
					Icon={GraduationCap}
				>
					Hackathons are the perfect place to try out new technologies
					you&apos;ve never used before. We&apos;re here along the way to help
					you out, and we&apos;re also running our own workshops for you to
					learn from!
				</OpportunityItem>
			</div>
		</Content>
	);
};
