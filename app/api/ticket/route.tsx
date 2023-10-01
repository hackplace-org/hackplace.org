import { ImageResponse, type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const username = searchParams.get("username");

	return new ImageResponse(<div>{username}</div>, {
		width: 1200,
		height: 630,
	});
}
