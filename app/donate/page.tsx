import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { Content } from "@/components/content";
import { Hover, Grain } from "@/components/utils";

import { Cost } from "@/app/donate/cost";
import { Anchor } from "lucide-react";

export default function Donate() {
	return (
		<>
			<Navbar currentTitle="Donate" />
			<Content
				as="main"
				className="py-16"
				outerClassName="relative"
				border="bottom"
			>
				<Grain />

				<h1 className="border-l-[10px] pl-4 border-brand text-6xl font-bold">
					A little support goes a long way.
				</h1>
				<h2 className="my-4 text-2xl font-thin">
					We&apos;re a small team of{" "}
					<Hover>high school volunteers</Hover>, and we rely on{" "}
					<Hover>your contributions</Hover> to stay afloat.
				</h2>

				<div className="absolute bottom-0 right-0 translate-y-24 text-muted -z-10">
					<Anchor className="w-72 h-72 rotate-[15deg]" />
				</div>
			</Content>

			<Content as="section" className="py-16" border="bottom">
				<h1 className="p-4 mx-auto text-6xl font-bold text-center w-fit rounded-2xl bg-brand text-sky-900">
					Proposed budget
				</h1>
				<h2 className="w-full mx-auto my-4 text-2xl font-thin text-center md:w-3/4">
					Here is a breakdown of our expected costs, as reflected in
					our{" "}
					<Link
						href="https://github.com/hackplace-org/documentation/blob/main/Sponsorship%20Proposal.pdf"
						text="Sponsorship Proposal"
						external
					/>
				</h2>

				<Cost />

				<h2 className="w-full mt-8 ml-auto text-2xl font-thin text-right md:w-3/4">
					...for an estimated <Hover>$111</Hover> in liquidity and an
					additional <Hover>$2,500</Hover> prize valuation.
				</h2>
			</Content>
		</>
	);
}
