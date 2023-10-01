import type { Metadata } from "next";

import { UserTicket } from "@/app/equihacks/ticket";
import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

interface TicketParams {
	params: {
		username: string;
	};
}

export default function Ticket({ params }: TicketParams) {
	return (
		<>
			<Navbar currentTitle="EquiHacks" />
			<Content as="section" className="py-16" border="bottom">
				<UserTicket username={params.username} />
			</Content>
		</>
	);
}

export async function generateMetadata({
	params,
}: TicketParams): Promise<Metadata> {
	const { username } = params;
	const description = `Join ${username} at EquiHacks`;

	return {
		title: "EquiHacks",
		description,
		metadataBase: new URL("https://hackplace.org"),
		openGraph: {
			title: "EquiHacks",
			images: [
				{
					url: `/api/ticket?username=${params.username}`,
					width: 1200,
					height: 630,
					alt: description,
				},
			],
		},
	};
}
