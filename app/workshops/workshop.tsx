"use client";

import { useRef, type PropsWithChildren, type MouseEventHandler } from "react";
import NextLink from "next/link";
import { Link } from "@/components/link";
import { Hover } from "@/components/utils";
import { CardItem } from "@/components/card";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CostItemProps {
    name: string;
    gitLink: string;
    label?: string;
}


const CostItem = ({
    name,
    label,
    gitLink,
    children,
}: PropsWithChildren<CostItemProps>) => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-row justify-between h-full">
                <h2 className="text-xl font-semibold">{name}</h2>
                <NextLink key={"github"} href={gitLink} target="_blank">
					<Button
						size="icon"
						variant="ghost"
						className={cn("transition-colors", "hover:text-brand")}
					>
						<Github></Github>
					</Button>
				</NextLink>
            </div>
            <div>
                <h2 className="text-s">{label}</h2>
            </div>
        </div>
    );
};

export const WorkshopsList = () => {
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
    const ref5 = useRef<HTMLDivElement>(null);
    const ref6 = useRef<HTMLDivElement>(null);
    const ref7 = useRef<HTMLDivElement>(null);
    const ref8 = useRef<HTMLDivElement>(null);
    const ref9 = useRef<HTMLDivElement>(null);
    const workshops = [
        {
            title: "Intro to Web Development",
            friendlyName: "Weather App",
            descr: "This code accompanies the Intro to Web Development workshop for hack.place(). For a step-by-step guide on how to create this app, please reference the accompanying presentation.",
            gitLink: "https://github.com/hackplace-org/weather-app",
            ref: ref1
        },
        {
            title: "Intro to HTML/CSS/JS",
            friendlyName: "Calculator App",
            descr: "This code accompanies the Intro to HTML/CSS/JS workshop for hack.place(). For a step-by-step guide on how to create this app, please reference the accompanying presentation.",
            gitLink: "https://github.com/hackplace-org/calculator-app",
            ref: ref2
        },
        {
            title: "Intro to Chrome Extensions",
            friendlyName: "Color Palette Generator",
            descr: "This code accompanies the Intro to Chrome Extensions workshop for hack.place(). For a step-by-step guide on how to create this app, please reference the accompanying presentation.",
            gitLink: "https://github.com/hackplace-org/color-palette-generator",
            ref: ref3
        },
        {
            title: "Object-Oriented Python",
            friendlyName: "Discord Bot",
            descr: "This code accompanies the Object-Oriented Python workshop for hack.place(). For a step-by-step guide on how to create this app, please reference the accompanying presentation.",
            gitLink: "https://github.com/hackplace-org/discord-bot",
            ref: ref4
        },
        {
            title: "Intro to React Native",
            friendlyName: "Image Filter App",
            descr: "This code accompanies the Intro to React Native workshop for hack.place(). For a step-by-step guide on how to create this project, please reference the accompanying presentation.",
            gitLink: "https://github.com/hackplace-org/image-filter-app",
            ref: ref5
        },
        {
            title: "Minecraft Modding",
            friendlyName: "Magic Mod",
            descr: "This code accompanies the Minecraft Modding workshop for hack.place(). For a step-by-step guide on how to create this project, please reference the accompanying presentation.",
            gitLink: "https://github.com/hackplace-org/magic-mod",
            ref: ref6
        },
    ]

    const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9].forEach(
            (ref) => {
                const card = ref.current;
                if (!card) return;

                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        );
    };

    return (
        <div
            onMouseMove={onMouseMove}
            className="grid grid-cols-2 gap-2 "
        >
            {workshops.map((workshop, i) => (
                <CardItem ref={workshop.ref}>
                    <CostItem
                        gitLink={workshop.gitLink}
                        name={workshop.title}
                        label={workshop.descr}
                    >
                    </CostItem>
                </CardItem>

            ))

            }

        </div>
    );
};