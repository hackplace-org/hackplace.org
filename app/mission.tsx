"use client";

import {
	useRef,
	useEffect,
	forwardRef,
	type ForwardedRef,
	type MouseEventHandler,
	type PropsWithChildren,
} from "react";
import {
	Palmtree,
	PackageOpen,
	PictureInPicture2,
	Baby,
	Wrench,
	Trophy,
	type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Content } from "@/components/content";
import { Hover, Grain } from "@/components/utils";

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

interface MissionItemProps {
	Icon: LucideIcon;
}

const MissionItem = forwardRef<
	HTMLDivElement,
	PropsWithChildren<MissionItemProps>
>(({ children, Icon }, ref) => {
	const clonedRef = useClonedRef<HTMLDivElement>(ref);

	const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
		const card = clonedRef.current;
		if (!card) return;

		const rect = card.getBoundingClientRect(),
			x = -(e.clientY - rect.y - rect.height / 2) / 20,
			y = (e.clientX - rect.x - rect.width / 2) / 20;

		const keyframes = {
			transform: `perspective(500px) rotateX(${x}deg) rotateY(${y}deg)`,
		};

		card.animate(keyframes, 250);
	};

	return (
		<div
			ref={clonedRef}
			onMouseMove={onMouseMove}
			className={cn(
				"will-change-transform relative rounded-lg cursor-pointer group",
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
				<Icon className="w-6 h-6 mb-2 transition-colors group-hover:text-[#00aaff] dark:group-hover:text-white" />
				{children}
			</div>
		</div>
	);
});
MissionItem.displayName = "MissionItem";

export const Mission = () => {
	const ref1 = useRef<HTMLDivElement>(null);
	const ref2 = useRef<HTMLDivElement>(null);
	const ref3 = useRef<HTMLDivElement>(null);
	const ref4 = useRef<HTMLDivElement>(null);
	const ref5 = useRef<HTMLDivElement>(null);
	const ref6 = useRef<HTMLDivElement>(null);

	const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
		[ref1, ref2, ref3, ref4, ref5, ref6].forEach((ref) => {
			const card = ref.current;
			if (!card) return;

			const rect = card.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;

			card.style.setProperty("--mouse-x", `${x}px`);
			card.style.setProperty("--mouse-y", `${y}px`);
		});
	};

	return (
		<Content as="section" className="py-16" border="bottom">
			<h1 className="w-fit mx-auto text-center p-4 rounded-2xl bg-[#00aaff] text-sky-900 text-6xl font-bold">
				Our mission
			</h1>

			<div
				onMouseMove={onMouseMove}
				className="grid w-full grid-cols-2 grid-rows-3 gap-2 mt-8 group/cards sm:grid-rows-2 sm:grid-cols-3 text-muted-foreground"
			>
				<MissionItem ref={ref1} Icon={Palmtree}>
					to create a <Hover>robust ecosystem</Hover> for students to{" "}
					<Hover>teach themselves</Hover> how to code
				</MissionItem>

				<MissionItem ref={ref2} Icon={PackageOpen}>
					to <Hover>open-source</Hover> all of our materials and
					resources, making them <Hover>accessible to everyone</Hover>
				</MissionItem>

				<MissionItem ref={ref3} Icon={Baby}>
					to be <Hover>readily available</Hover> to assist every
					student, <Hover>regardless</Hover> of their experience
				</MissionItem>

				<MissionItem ref={ref4} Icon={PictureInPicture2}>
					to be <Hover>completely transparent</Hover> in all of our
					operations and finances as a <Hover>nonprofit</Hover>
				</MissionItem>

				<MissionItem ref={ref5} Icon={Wrench}>
					to allow students to develop projects{" "}
					<Hover>on their own</Hover> through our{" "}
					<Hover>interactive</Hover> workshops
				</MissionItem>

				<MissionItem ref={ref6} Icon={Trophy}>
					to inspire a new generation of students to become{" "}
					<Hover>creative</Hover>, <Hover>successful</Hover>{" "}
					programmers
				</MissionItem>
			</div>
		</Content>
	);
};
