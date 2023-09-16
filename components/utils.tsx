import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

import type { ComponentProps, PropsWithChildren } from "react";

const heading = cva("break-word h-fit border-brand", {
	variants: {
		size: {
			main: "text-6xl border-l-[10px] font-bold pl-4",
			sub: "text-4xl border-l-[7px] font-semibold pl-4",
			small: "border-l-[5px] font-bold pl-2",
		},
	},
	defaultVariants: {
		size: "main",
	},
});

interface HeadingProps
	extends ComponentProps<"h1">,
		VariantProps<typeof heading> {}

export const Heading = ({
	className,
	children,
	size,
	...props
}: PropsWithChildren<HeadingProps>) => {
	return (
		<h1 className={cn(heading({ size }), className)} {...props}>
			{children}
		</h1>
	);
};

interface GrainProps {
	className?: string;
}

export const Grain = ({ className }: GrainProps) => (
	<div
		className={cn(
			"-z-10 select-none pointer-events-none absolute w-full inset-0 bg-[url(/noise.svg)] opacity-25 brightness-100 contrast-150",
			className,
		)}
	/>
);

type HoverProps = ComponentProps<"span">;

export const Hover = ({ children, className }: HoverProps) => (
	<span
		className={cn(
			className,
			"text-black dark:text-white font-bold transition-all",
			"hover:text-brand dark:hover:text-brand sm:dark:hover:text-glow sm:dark:hover:selection:text-white",
		)}
	>
		{children}
	</span>
);
