import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Timeline } from "./timeline"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Grain, Heading } from "@/components/utils";
import { Button } from "@/components/ui/button";
import NextLink from "next/link";

export const metadata: Metadata = {
	title: "Hackathons",
};


export default function Hackathons() {
	const FAQS = [
		{
			question: "What is a hackathon?",
			answer: "A hackathon is like a super cool tech event where folks team up to create awesome stuff! Picture this: you and your friends, or even new buddies, get together for a day or weekend to come up with fun and creative tech projects. It could be making a game, a website, or even inventing a cool gadget. You brainstorm, build, and then show off your project to others. It's all about having a blast, being creative, and learning cool tech skills along the way. Hackathons are like a tech party where you bring your wildest ideas to life!"
		},
		{
			question: "How much does it cost?",
			answer: "Participating in the Hackathon is absolutely free. We don't have any registration fees or costs because we're committed to ensuring that everyone, no matter their financial situation, can have a chance to code and learn."
		},
		{
			question: "Do I need experience to join?",
			answer: "Absolutely not! Our hackathon is super beginner-friendly. We're thrilled to have participants of all skill levels, whether you're just starting or already a coding pro. We know that everyone has to begin somewhere, and our aim is to create a friendly and inclusive atmosphere for everyone. We've got workshops to help you kickstart your coding journey and boost your skills during the hackathon."
		},
		{
			question: "Do I need a team?",
			answer: "Feel free to go solo or team up with others—it's totally up to you! You have the choice to work on your own or join forces with fellow participants."
		},
		{
			question: "Who will be judging?",
			answer: "The hack.place() members will be the judges of your work."
		},
		{
			question: "Is this an online event?",
			answer: "You can fully participate in this hackathon online.!"
		},
		{
			question: "What is the theme?",
			answer: "Suprise!"
		},
	]
	return (
		<>
			<Navbar currentTitle="Hackathons" />
			<Content as="section" className="py-16">
				<p className="text-8xl font-bold">EquiHacks S1</p>
				<h1 className="text-5xl">Welcome to our first Hackathon</h1>
				
				<div className="flex flex-row mt-5 mb-6 lg:mb-0 gap-x-2 mx-10">
					<NextLink href="https://discord.gg/QmPdqegQNb">
						<Button>Devpost</Button>
					</NextLink>

					<NextLink href="https://discord.gg/QmPdqegQNb">
						<Button variant="outline" >
							Discord
						</Button>
					</NextLink>
				</div>


			</Content>
			<Content as="div" className="py-16" >
				<div className="h-full w-full">
					<Heading>About the Hackathon</Heading>
					<h1 className="m-5 text-xl">EquiHacks is a fun hackathon just for middle and high school students. You can create apps, software, and hardware projects and show them to judges who will decide if they're good. You can work with friends or by yourself to learn new things. Plus, there are workshops and talks to help you learn and work together with others. It's a great way to have fun and get better at making things with technology!</h1>
				</div>
			</Content>

			<Content as="div" className="py-16">				
				<div className="m-3">
					<Heading >Timeline</Heading>
				</div>
				<Timeline/>
			</Content>

			<Content as="div" className="grid py-16" border="top" >
				<h1 className="m-40 text-3xl justify-self-center"> Infomation about the prizes and sponors will be released soon!</h1>
			</Content>

			<Content as="div" outerClassName="relative" className="py-16" border="bottom">
				<Grain />
				<Heading className="my-10">FAQ</Heading> 

				<Accordion type="single" className="w-full mt-4" collapsible>
					{FAQS &&
						FAQS.map((FAQ, i) => (
							<AccordionItem value={"item-" + i}>
								<AccordionTrigger>
									{FAQ.question}
								</AccordionTrigger>
								<AccordionContent>
									{FAQ.answer}
								</AccordionContent>
							</AccordionItem>
						))
					}
				</Accordion>
			</Content>
		</>
	);
}
