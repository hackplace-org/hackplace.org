"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export const Sponsors = () => {
	const { resolvedTheme } = useTheme();

	return (
		<Marquee
			autoFill
			speed={25}
			style={{
				maskImage:
					"linear-gradient(to right, transparent 0%, hsl(var(--background)) 10%, hsl(var(--background)) 90%, transparent 100%)",
			}}
		>
			<Link href="https://www.wolfram.com/" target="_blank">
				<Image
					className="w-40 mx-6"
					src={`/equihacks/sponsors/wolfram-${resolvedTheme}.webp`}
					alt="Wolfram"
					width={768}
					height={205}
				/>
			</Link>

			<Link href="https://hackclub.com/" target="_blank">
				<Image
					className="w-40 mx-6"
					src="/equihacks/sponsors/hackclub.webp"
					alt="Hack Club"
					width={526}
					height={184}
				/>
			</Link>

			<Link href="https://exlprep.com/" target="_blank">
				<Image
					className="w-40 mx-6"
					src={`/equihacks/sponsors/exlprep-${resolvedTheme}.webp`}
					alt="ExL Prep"
					width={7034}
					height={2118}
				/>
			</Link>

			<Link href="https://www.mathnasium.com/middletown/about" target="_blank">
				<Image
					className="w-40 mx-6"
					src={`/equihacks/sponsors/mathnasium-${resolvedTheme}.webp`}
					alt="Mathnasium of Middletown"
					width={1800}
					height={455}
				/>
			</Link>

			<Link href="https://www.firstinspires.org/" target="_blank">
				<Image
					className="w-40 mx-6"
					src={`/equihacks/sponsors/first-${resolvedTheme}.webp`}
					alt="FIRST"
					width={1692}
					height={442}
				/>
			</Link>

			<Link href="https://www.axure.com/" target="_blank">
				<Image
					className="w-40 mx-6"
					src={`/equihacks/sponsors/axure-${resolvedTheme}.webp`}
					alt="Axure"
					width={5000}
					height={1193}
				/>
			</Link>

			<Link href="https://gen.xyz/" target="_blank">
				<Image
					className="w-40 mx-6"
					src={`/equihacks/sponsors/xyz-${resolvedTheme}.webp`}
					alt="gen.xyz"
					width={932}
					height={543}
				/>
			</Link>

			<Link href="https://www.echo3d.com/" target="_blank">
				<Image
					className="w-40 mx-6"
					src={`/equihacks/sponsors/echo3D-${resolvedTheme}.webp`}
					alt="echo3D"
					width={609}
					height={98}
				/>
			</Link>
		</Marquee>
	);
};
