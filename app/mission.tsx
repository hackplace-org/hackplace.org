"use client";

import {
	Baby,
	type LucideIcon,
	PackageOpen,
	Palmtree,
	PictureInPicture2,
	Trophy,
	Wrench,
} from "lucide-react";
import type { PropsWithChildren } from "react";

import { CardItem } from "@/components/card";
import { Content } from "@/components/content";
import { useCards } from "@/components/hooks/useCards";
import { Hover } from "@/components/utils";

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
	const [refs, onMouseMove] = useCards(6);

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
						to create a robust ecosystem for students to{" "}
						<Hover>teach themselves</Hover> how to code
					</ContainerItem>
				</CardItem>

				<CardItem ref={refs.current[1]}>
					<ContainerItem Icon={PackageOpen}>
						to open-source all of our materials and resources, making them{" "}
						<Hover>accessible to everyone</Hover>
					</ContainerItem>
				</CardItem>

				<CardItem ref={refs.current[2]}>
					<ContainerItem Icon={Baby}>
						to be <Hover>readily available</Hover> to assist every student,
						regardless of their experience
					</ContainerItem>
				</CardItem>

				<CardItem ref={refs.current[3]}>
					<ContainerItem Icon={PictureInPicture2}>
						to be <Hover>completely transparent</Hover> in all of our operations
						and finances as a nonprofit
					</ContainerItem>
				</CardItem>

				<CardItem ref={refs.current[4]}>
					<ContainerItem Icon={Wrench}>
						to allow students to develop projects <Hover>on their own</Hover>{" "}
						through our interactive workshops
					</ContainerItem>
				</CardItem>

				<CardItem ref={refs.current[5]}>
					<ContainerItem Icon={Trophy}>
						to inspire a new generation of students to become creative,{" "}
						<Hover>successful</Hover> programmers
					</ContainerItem>
				</CardItem>
			</div>
		</Content>
	);
};
