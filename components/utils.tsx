import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

interface GrainProps {
	className?: string;
}

export const Grain = ({ className }: GrainProps) => (
	<div
		className={cn(
			"-z-10 select-none pointer-events-none absolute w-full inset-0 bg-[url(/noise.svg)] opacity-25 brightness-100 contrast-150",
			className
		)}
	></div>
);

interface HoverProps extends ComponentProps<"span"> {}

export const Hover = ({ children, className }: HoverProps) => (
	<span
		className={cn(
			className,
			"text-black dark:text-white font-bold transition-all",
			"hover:text-[#00aaff] dark:hover:text-[#00aaff] sm:dark:hover:text-glow sm:dark:hover:selection:text-white"
		)}
	>
		{children}
	</span>
);
