"use client";

import { useRef, type PropsWithChildren, type MouseEventHandler } from "react";
import {
	Palmtree,
	PackageOpen,
	PictureInPicture2,
	Baby,
	Wrench,
	Trophy,
	type LucideIcon,
} from "lucide-react";

import { Hover } from "@/components/utils";
import { CardItem } from "@/components/card";
import { Content } from "@/components/content";

interface MissionItemProps {
	Icon: LucideIcon;
}

const MissionItem = ({
	Icon,
	children,
}: PropsWithChildren<MissionItemProps>) => {
	return (
		<div>
			<Icon className="w-6 h-6 mb-2 transition-colors group-hover:text-brand dark:group-hover:text-white" />
			{children}
		</div>
	);
};

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
			<h1 className="p-4 mx-auto text-6xl font-bold text-center w-fit rounded-2xl bg-brand text-sky-900">
				Our mission
			</h1>

			<div
				onMouseMove={onMouseMove}
				className="grid w-full grid-cols-1 grid-rows-6 gap-2 mt-8 sm:grid-rows-3 sm:grid-cols-2 group/cards md:grid-rows-2 md:grid-cols-3 text-muted-foreground"
			>
				<CardItem ref={ref1}>
					<MissionItem Icon={Palmtree}>
						to create a <Hover>robust ecosystem</Hover> for students
						to <Hover>teach themselves</Hover> how to code
					</MissionItem>
				</CardItem>

				<CardItem ref={ref2}>
					<MissionItem Icon={PackageOpen}>
						to <Hover>open-source</Hover> all of our materials and
						resources, making them{" "}
						<Hover>accessible to everyone</Hover>
					</MissionItem>
				</CardItem>

				<CardItem ref={ref3}>
					<MissionItem Icon={Baby}>
						to be <Hover>readily available</Hover> to assist every
						student, <Hover>regardless</Hover> of their experience
					</MissionItem>
				</CardItem>

				<CardItem ref={ref4}>
					<MissionItem Icon={PictureInPicture2}>
						to be <Hover>completely transparent</Hover> in all of
						our operations and finances as a{" "}
						<Hover>nonprofit</Hover>
					</MissionItem>
				</CardItem>

				<CardItem ref={ref5}>
					<MissionItem Icon={Wrench}>
						to allow students to develop projects{" "}
						<Hover>on their own</Hover> through our{" "}
						<Hover>interactive</Hover> workshops
					</MissionItem>
				</CardItem>

				<CardItem ref={ref6}>
					<MissionItem Icon={Trophy}>
						to inspire a new generation of students to become{" "}
						<Hover>creative</Hover>, <Hover>successful</Hover>{" "}
						programmers
					</MissionItem>
				</CardItem>
			</div>
		</Content>
	);
};
