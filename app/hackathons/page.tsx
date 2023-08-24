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
			<Content as="section" className="py-16" border="bottom">
				Coming soon
			</Content>
		</>
	);
}
