import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Workshops",
};

export default function Workshops() {
	return (
		<>
			<Navbar currentTitle="Workshops" />
			<Content as="main" className="py-16" border="bottom">
				TODO
			</Content>
		</>
	);
}
