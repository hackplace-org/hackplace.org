import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Seminars",
};

export default function Seminars() {
	return (
		<>
			<Navbar currentTitle="Seminars" />
			<Content as="main" className="py-16" border="bottom">
				TODO
			</Content>
		</>
	);
}
