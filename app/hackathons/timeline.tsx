"use client";

import { useState, type HTMLAttributes } from "react";

import { useRef, type PropsWithChildren, type MouseEventHandler } from "react";
import { cn } from "@/lib/utils";
import { stages } from "@/lib/siteConfig";
import { type LucideIcon } from "lucide-react";
import { CardItem } from "@/components/card";

interface TimelineIconProps extends HTMLAttributes<HTMLDivElement> {
	selected: boolean;
	Icon: LucideIcon;
}

const TimelineIcon = ({
	className,
	selected,
	Icon,
	...props
}: TimelineIconProps) => {
	return (
		<div
			className={cn(
				className,
				selected
					? "bg-brand text-white"
					: "transition-colors hover:text-white hover:bg-brand text-background bg-foreground",
				"grid w-10 h-10 rounded-full place-items-center"
			)}
			{...props}
		>
			<Icon className="w-5 h-5 " />
		</div>
	);
};

interface TimelineStageProps {
	stageIndex: number;
}

const TimelineStage = ({ stageIndex }: TimelineStageProps) => {
	const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);
    
	const correctRef = (i:number) => {
		if(i==0){
		return ref1	
		}
		if(i==1){
			return ref2	
		}	
		if(i==2){
			return ref3	
		}
		if(i==3){
			return ref4	
		}
	}

	const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        [ref1, ref2, ref3, ref4].forEach(
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



	const stage = stages[stageIndex];

	return (
		<div className="mt-8">
			<h1 className="flex flex-col justify-center text-4xl font-bold gap-x-3 md:justify-start">
				<div className="flex justify-center">
					<h1 className="text-5xl">{stage.name}</h1>
					
				</div>
				<div className="grid justify-items-center"  onMouseMove={onMouseMove}>
					{stage.events.map((event, i)=>(
						<div className= "w-3/5 gap-2 mt-8">
							 <CardItem  ref={correctRef(i)}>
								<div>
									<div className="flex flex-row">
										<div className="basis-3/4 justify-center">
											<p className="text-4xl">{event.eventName}</p>
										</div>	
										<div className="basis-1/4 justify-center">
											<p className="text-2xl mt-2">{event.endTime == "00" ?  event.startTime : event.startTime == "00" ?  event.endTime :event.startTime + "-" + event.endTime}</p>
										</div>
									</div>
									<div className="mt-3">
										<p className="text-2xl">{event.description}</p>
									</div>
								</div>
						 	</CardItem>
							
						</div>
					))}
				</div>



			</h1>
		</div>
	);
};

export const Timeline = () => {
	const [selected, setSelected] = useState(0);

	return (
		<div className="flex flex-col w-full">
			<div className="relative flex flex-row justify-between w-full">
				{stages.map((stage, i) => (
					<TimelineIcon
						key={stage.id}
						selected={selected === i}
						onMouseOver={() => setSelected(i)}
						Icon={stage.Icon}
					/>
				))}

				<div className="absolute w-[calc(100%+2rem)] -translate-x-4 h-2 -translate-y-1/2 top-1/2 rounded-xl -z-10 bg-muted">
					<div
						className="transition-[width] h-full bg-primary rounded-xl"
						style={{
							width: `${(selected / (stages.length - 1)) * 100}%`,
						}}
					/>
				</div>
			</div>

			<TimelineStage stageIndex={selected} />
		</div>
	);
};
