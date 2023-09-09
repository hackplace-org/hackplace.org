import type { Metadata } from "next";

import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
	title: "EquiHacks",
};

export default function EquiHacks() {
	return (
		<>
			<Navbar currentTitle="EquiHacks" />
			<Content as="section" className="py-16" border="bottom">
				Coming soon
			</Content>
		</>
	);
}
