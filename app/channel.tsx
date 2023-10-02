import { type VariantProps, cva } from "class-variance-authority";
import { Hash, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { Grain } from "@/components/utils";
import { cn } from "@/lib/utils";

const channel = cva("rounded-lg", {
	variants: {
		round: {
			default: "",
			top: "rounded-t-2xl",
			bottom: "rounded-b-2xl",
		},
	},
});

interface ChannelProps extends VariantProps<typeof channel> {
	name: string;
	href: string;
	description: string;
	Icon?: LucideIcon;
}

export const Channel = ({
	name,
	href,
	description,
	round,
	Icon = Hash,
}: ChannelProps) => {
	const selection = channel({ round });

	return (
		<div className="flex flex-row w-full group gap-x-4">
			<Link href={href} passHref legacyBehavior>
				{/* biome-ignore lint/a11y/useValidAnchor: NextLink passes the href */}
				<a
					target="_blank"
					className={cn(
						"relative w-full transition-all group-hover:text-white group-hover:bg-[#5865f2] border flex flex-row justify-between p-4 font-bold",
						selection,
					)}
				>
					<Grain
						className={cn(
							"z-0 transition-opacity top-0 left-0 h-full opacity-0 group-hover:opacity-25",
							selection,
						)}
					/>

					<div className="flex flex-row gap-x-1">
						<Icon className="w-5 h-5 my-auto" />
						<p className="my-auto text-xl">{name}</p>
					</div>

					<p className="items-center hidden w-1/2 h-12 my-auto text-transparent align-middle transition-colors sm:flex group-hover:text-white">
						{description}
					</p>
				</a>
			</Link>
		</div>
	);
};
