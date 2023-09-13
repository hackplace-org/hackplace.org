"use client";

import type { MouseEventHandler, PropsWithChildren } from "react";

import { Link } from "@/components/link";
import { Hover } from "@/components/utils";
import { CardItem } from "@/components/card";
import { useRefArray } from "@/components/hooks/useRefArray";

interface CostItemProps {
	name: string;
	strikethroughCost?: string;
	actualCost: string;
	label?: string;
}

const CostItem = ({
	name,
	strikethroughCost,
	actualCost,
	label,
	children,
}: PropsWithChildren<CostItemProps>) => {
	return (
		<div className="flex flex-col justify-between h-full">
			<hgroup>
				<h2 className="text-xl font-semibold">{name}</h2>
				<h1 className="text-3xl font-bold">
					<Hover>
						{strikethroughCost && (
							<>
								<span className="line-through">
									{strikethroughCost}
								</span>{" "}
							</>
						)}
						{actualCost}
					</Hover>{" "}
					<span className="text-2xl text-muted-foreground">
						{label}
					</span>
				</h1>
			</hgroup>

			<h3 className="ml-auto text-sm text-muted-foreground">
				{children}
			</h3>
		</div>
	);
};

export const Cost = () => {
	const refs = useRefArray<HTMLDivElement>(9);

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
		<div
			onMouseMove={onMouseMove}
			className="grid grid-cols-1 gap-2 mt-8 group/cards grid-rows-9 sm:grid-cols-2 sm:grid-rows-5 md:grid-rows-3 md:grid-cols-3"
		>
			<CardItem ref={refs.current[0]}>
				<CostItem
					name="Google Workspace"
					strikethroughCost="$12"
					actualCost="$0"
					label="per user / month"
				>
					(thanks to{" "}
					<Link
						href="https://hackclub.com/"
						text="Hack Club"
						external
					/>
					)
				</CostItem>
			</CardItem>

			<CardItem ref={refs.current[1]}>
				<CostItem
					name="Google Domains"
					actualCost="$12"
					label="per year"
				>
					(not including email)
				</CostItem>
			</CardItem>

			<CardItem ref={refs.current[2]}>
				<CostItem
					name="Sendy"
					strikethroughCost="$69 + $1"
					actualCost="$0"
					label="per 10,000 emails"
				>
					(thanks to{" "}
					<Link
						href="https://hackclub.com/"
						text="Hack Club"
						external
					/>
					)
				</CostItem>
			</CardItem>

			<CardItem ref={refs.current[3]}>
				<CostItem
					name="Vercel"
					strikethroughCost="$20"
					actualCost="$0"
					label="per user / month"
				>
					(limited Hobby tier)
				</CostItem>
			</CardItem>

			<CardItem ref={refs.current[4]}>
				<CostItem
					name="Clerk"
					strikethroughCost="$35"
					actualCost="$0"
					label="per month"
				>
					(limited Free tier)
				</CostItem>
			</CardItem>

			<CardItem ref={refs.current[5]}>
				<CostItem
					name="Turso"
					strikethroughCost="$29"
					actualCost="$0"
					label="per month"
				>
					(limited Starter tier)
				</CostItem>
			</CardItem>

			<CardItem ref={refs.current[6]}>
				<CostItem
					name="Zoom Pro"
					strikethroughCost="$149"
					actualCost="$0"
					label="per year"
				>
					(thanks to{" "}
					<Link
						href="https://hackclub.com/"
						text="Hack Club"
						external
					/>
					)
				</CostItem>
			</CardItem>

			<CardItem ref={refs.current[7]}>
				<CostItem
					name="Instagram"
					actualCost="$99"
					label="per 30-day advertisement"
				>
					(estimated 960-2760 clicks)
				</CostItem>
			</CardItem>

			<CardItem ref={refs.current[8]}>
				<CostItem
					name="Hackathon Prize Valuation"
					actualCost="$2,500"
					label="per hackathon"
				>
					(sponsor&apos;s prizes + bought ourselves)
				</CostItem>
			</CardItem>
		</div>
	);
};
