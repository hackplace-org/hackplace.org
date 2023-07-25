import { Navbar } from "@/components/navbar";
import { Content } from "@/components/content";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Onboarding",
};

export default function Onboarding() {
	return (
		<>
			<Navbar currentTitle="Onboarding" />
			<Content as="main" className="py-16" border="bottom">
				TODO
			</Content>
		</>
	);
}
