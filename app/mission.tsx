"use client";

import type { MouseEventHandler, PropsWithChildren } from "react";
import {
	Palmtree,
	PackageOpen,
	PictureInPicture2,
	Baby,
	Wrench,
	Trophy,
	type LucideIcon,
} from "lucide-react";

import { CardItem } from "@/components/card";
import { Content } from "@/components/content";
import { Hover } from "@/components/utils";
import { useRefArray } from "@/components/hooks/useRefArray";

interface ContainerItemProps {
	Icon: LucideIcon;
}

export const ContainerItem = ({
	Icon,
	children,
}: PropsWithChildren<ContainerItemProps>) => {
	return (
		<div>
			<Icon className="w-6 h-6 mb-2 transition-colors group-hover:text-brand dark:group-hover:text-white" />
			{children}
		</div>
	);
};

export const Mission = () => {
	const refs = useRefArray<HTMLDivElement>(6);

	const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
		refs.current.forEach((ref) => {
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
				<CardItem ref={refs.current[0]}>
					<ContainerItem Icon={Palmtree}>
						to create a <Hover>robust ecosystem</Hover> for students
						to <Hover>teach themselves</Hover> how to code
					</ContainerItem>
				</CardItem>

				<CardItem ref={refs.current[1]}>
					<ContainerItem Icon={PackageOpen}>
						to <Hover>open-source</Hover> all of our materials and
						resources, making them{" "}
						<Hover>accessible to everyone</Hover>
					</ContainerItem>
				</CardItem>

				<CardItem ref={refs.current[2]}>
					<ContainerItem Icon={Baby}>
						to be <Hover>readily available</Hover> to assist every
						student, <Hover>regardless</Hover> of their experience
					</ContainerItem>
				</CardItem>

				<CardItem ref={refs.current[3]}>
					<ContainerItem Icon={PictureInPicture2}>
						to be <Hover>completely transparent</Hover> in all of
						our operations and finances as a{" "}
						<Hover>nonprofit</Hover>
					</ContainerItem>
				</CardItem>

				<CardItem ref={refs.current[4]}>
					<ContainerItem Icon={Wrench}>
						to allow students to develop projects{" "}
						<Hover>on their own</Hover> through our{" "}
						<Hover>interactive</Hover> workshops
					</ContainerItem>
				</CardItem>

				<CardItem ref={refs.current[5]}>
					<ContainerItem Icon={Trophy}>
						to inspire a new generation of students to become{" "}
						<Hover>creative</Hover>, <Hover>successful</Hover>{" "}
						programmers
					</ContainerItem>
				</CardItem>
			</div>
		</Content>
	);
};
