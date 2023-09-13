"use client";

import {
	useRef,
	useEffect,
	forwardRef,
	type ForwardedRef,
	type PropsWithChildren,
} from "react";

import { cn } from "@/lib/utils";
import { Grain } from "@/components/utils";

// https://github.com/facebook/react/issues/24722
export const useClonedRef = <T,>(
	ref: ForwardedRef<T>,
	initialValue: any = null
) => {
	const targetRef = useRef<T>(initialValue);

	useEffect(() => {
		if (!ref) return;

		if (typeof ref === "function") {
			ref(targetRef.current);
		} else {
			ref.current = targetRef.current;
		}
	}, [ref]);

	return targetRef;
};

interface CardItemProps {
	className?: string;
}

export const CardItem = forwardRef<HTMLDivElement, PropsWithChildren<CardItemProps>>(
	({ children, className }, ref) => {
		const clonedRef = useClonedRef<HTMLDivElement>(ref);

		// const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
		// 	const card = clonedRef.current;
		// 	if (!card) return;

		// 	const rect = card.getBoundingClientRect(),
		// 		x = -(e.clientY - rect.y - rect.height / 2) / 20,
		// 		y = (e.clientX - rect.x - rect.width / 2) / 20;

		// 	const keyframes = {
		// 		transform: `perspective(500px) rotateX(${x}deg) rotateY(${y}deg)`,
		// 	};

		// 	card.animate(keyframes, 250);
		// };

		return (
			<div
				ref={clonedRef}
				// onMouseMove={onMouseMove}
				className={cn(
					className,
					"bg-border dark:bg-inherit will-change-transform relative rounded-lg cursor-pointer group",
					"before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)]",
					"before:z-30 hover:before:opacity-100 before:select-none before:pointer-events-none before:opacity-0 before:transition-opacity before:duration-500 before:rounded-[inherit] before:content-[''] before:h-full before:left-0 before:absolute before:top-0 before:w-full"
				)}
			>
				<div
					className={cn(
						"bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.3),transparent_40%)]",
						"group-hover/cards:opacity-100 z-10 select-none pointer-events-none opacity-0 transition-opacity duration-500 rounded-[inherit] content-[''] h-full left-0 absolute top-0 w-full"
					)}
				></div>

				<div className="z-20 relative bg-background px-6 py-8 w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-lg m-[1px]">
					<Grain className="z-10 rounded-lg" />
					{children}
				</div>
			</div>
		);
	}
);
CardItem.displayName = "CardItem";
