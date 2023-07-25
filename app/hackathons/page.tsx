import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hackathons",
};

export default function Hackathons() {
	return (
		<>
			<Navbar currentTitle="Hackathons" />
			<Content as="main" className="py-16" border="bottom">
				TODO
			</Content>
		</>
	);
}
