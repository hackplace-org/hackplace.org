import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hatch",
};

export default function Seminars() {
	return (
		<>
			<Navbar currentTitle="Hatch" />
			<Content as="main" className="py-16" border="bottom">
				Coming soon
			</Content>
		</>
	);
}
