import { ImageResponse, type NextRequest } from "next/server";

export const runtime = "edge";

interface TicketProps {
	username: string;
}

const Ticket = ({ username }: TicketProps) => {
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				height: "100%",
				backgroundColor: "#9090b",
			}}
		>
			<div
				style={{
					display: "flex",
					position: "relative",
					width: "100%",
					height: "100%",
					borderRadius: "1rem",
					backgroundColor: "white",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "0%",
						backgroundColor: "#9090b",
						borderRadius: "2rem",
						aspectRatio: "1 / 1",
						height: "4rem",
					}}
				/>
				<div
					style={{
						position: "absolute",
						top: "50%",
						right: "0%",
						backgroundColor: "#9090b",
						borderRadius: "2rem",
						aspectRatio: "1 / 1",
						height: "4rem",
					}}
				/>

				<h1
					style={{
						fontSize: "4rem",
						fontWeight: "bold",
						color: "white",
					}}
				>
					{username}
				</h1>
			</div>
		</div>
	);
};

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const username = searchParams.get("username");

	return new ImageResponse(<Ticket username={username as string} />, {
		width: 1200,
		height: 630,
	});
}
