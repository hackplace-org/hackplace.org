import { Description } from "@radix-ui/react-toast";
import {
	Home,
	ClipboardCheck,
	Egg,
	Lightbulb,
	Trophy,
	Mic,
	Banknote,
	Github,
	Instagram,
	Linkedin,
	MessagesSquare,
	Landmark,
	Twitter,
	Mail,
	Code,
	Sunrise,
	Tv,
	ClipboardList,
	Sunset,
} from "lucide-react";

export const pages = [
	{
		title: "Home",
		href: "/",
		description: "We learned how to code—now it's your turn.",
		color: "group-hover:text-brand",
		isPublic: true,
		Icon: Home,
	},
	{
		title: "Onboarding",
		href: "/onboarding",
		description: "Get started with hack.place().",
		color: "group-hover:text-brand",
		isPublic: false,
		Icon: ClipboardCheck,
	},
	{
		title: "Hatch",
		href: "/",
		description: "Helping you turn your ideas into reality.",
		color: "group-hover:text-brand",
		isPublic: true,
		Icon: Egg,
	},
	{
		title: "Workshops",
		href: "/workshops",
		description: "Engaging projects hand-crafted by our instructors.",
		color: "group-hover:text-brand",
		isPublic: false,
		Icon: Lightbulb,
	},
	{
		title: "Hackathons",
		href: "/hackathons",
		description: "And we haven't forgotten the prizes.",
		color: "group-hover:text-brand",
		isPublic: true,
		Icon: Trophy,
	},
	{
		title: "Seminars",
		href: "/seminars",
		description: "Attend seminars from experts in their fields.",
		color: "group-hover:text-brand",
		isPublic: true,
		Icon: Mic,
	},
	{
		title: "Donate",
		href: "/donate",
		description: "A little support goes a long way.",
		color: "group-hover:text-brand",
		isPublic: true,
		Icon: Banknote,
	},
] as const;

export const links = [
	{
		title: "GitHub",
		href: "https://github.com/hackplace-org",
		description: "Share our commitment to open-source software.",
		color: "group-hover:text-brand",
		Icon: Github,
	},
	{
		title: "Instagram",
		href: "https://instagram.com/_hackplace",
		description: "Browse our photos, videos, and announcements.",
		color: "group-hover:text-[#e4405f]",
		Icon: Instagram,
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/company/hackplace-org/",
		description: "Connect with our employees and volunteers.",
		color: "group-hover:text-[#0a66c2]",
		Icon: Linkedin,
	},
	{
		title: "Discord",
		href: "https://discord.gg/YTZdFWgR6V",
		description: "Chat with our community members and staff.",
		color: "group-hover:text-[#5865f2]",
		Icon: MessagesSquare,
	},
	{
		title: "Twitter? X?",
		href: "https://twitter.com/_hackplace",
		description: "Get updates on our events and activities.",
		color: "group-hover:text-[#1D9BF0]",
		Icon: Twitter,
	},
	{
		title: "Hack Club Bank",
		href: "https://bank.hackclub.com/hack-place",
		description: "Full transparency on all of our finances.",
		color: "group-hover:text-[#e7364e]",
		Icon: Landmark,
	},
] as const;

export const people = [
	{
		name: "Anish Pallati",
		roles: ["Co-founder", "CEO"],
		description: "His name is Anish",
		links: [
			{
				title: "email",
				href: "mailto:anish@hackplace.org",
				color: "hover:text-[#ce3c30]",
				Icon: Mail,
			},
			{
				title: "github",
				href: "https://github.com/ap-1",
				color: "hover:text-brand",
				Icon: Github,
			},
			{
				title: "linkedin",
				href: "https://www.linkedin.com/in/anish-pallati/",
				color: "hover:text-[#0a66c2]",
				Icon: Linkedin,
			},
			{
				title: "devpost",
				href: "https://devpost.com/anishpallati",
				color: "hover:text-[#23a196]",
				Icon: Code,
			},
		],
	},
	{
		name: "Sharabh Ojha",
		roles: ["Co-founder", "COO"],
		description: "His name is Sharabh",
		links: [
			{
				title: "email",
				href: "mailto:sharabh@hackplace.org",
				color: "hover:text-[#ce3c30]",
				Icon: Mail,
			},
			{
				title: "github",
				href: "https://github.com/shojha24",
				color: "hover:text-brand",
				Icon: Github,
			},
			{
				title: "linkedin",
				href: "https://www.linkedin.com/in/sharabh-ojha-988a68218/",
				color: "hover:text-[#0a66c2]",
				Icon: Linkedin,
			},
			{
				title: "devpost",
				href: "https://devpost.com/sharabho",
				color: "hover:text-[#23a196]",
				Icon: Code,
			},
		],
	},
] as const;

export const activities = [
	{ id: "workshops", name: "Workshops" },
	{ id: "seminars", name: "Seminars" },
	{ id: "hackathons", name: "Hackathons" },
] as const;

export const workshops = [
	{ id: "weather-app", name: "HTML/CSS/JS: Weather App" },
	{ id: "cookie-clicker", name: "React: Cookie Clicker" },
	{ id: "discord-bot", name: "Object Oriented Python: Discord Bot" },
	{ id: "magic-mod", name: "Minecraft Modding: Magic Mod" },
] as const;

export const days = [
	{ id: "sunday", name: "Sunday" },
	{ id: "monday", name: "Monday" },
	{ id: "tuesday", name: "Tuesday" },
	{ id: "wednesday", name: "Wednesday" },
	{ id: "thursday", name: "Thursday" },
	{ id: "friday", name: "Friday" },
	{ id: "saturday", name: "Saturday" },
] as const;

export const stages = [
	{
		id: "sunrise",
		name: "October 20th",
		start: new Date("Fri Sep 22 2023 18:30:00 GMT-0400"),
		Icon: Sunrise,
		events:[
			{
				startTime: "5:00",
				endTime: "6:00",
				eventName: "Opening Ceremony",
				description: "This ceremony will reveal the theme of the hackathon and the rules"
			},
			{
				startTime: "6:00",
				endTime: "00",
				eventName: "Start of the Hackathon",
				description: "This will be the offical start of the hackathon and project may began from this date"
			},
		]
	},
	{
		id: "tv",
		name: "October 21st",
		start: new Date("Sun Sep 24 2023 20:00:00 GMT-0400"),
		Icon: Tv,
		events:[
			{
				startTime: "12:00 PM",
				endTime: "4:00 PM",
				eventName: "Workshops",
				description: "Final times and workshops are still being decided"
			},
		]
	},
	{
		id: "clipboardlist",
		name: "October 22nd",
		start: new Date("Mon Sep 25 2023 18:30:00 GMT-0400"),
		Icon: ClipboardList,
		events:[
			{
				startTime: "12:00 PM",
				endTime: "4:00 PM",
				eventName: "Workshops",
				description: "Final times and workshops are still being decided"
			},
			{
				startTime: "00",
				endTime: "6:00 PM",
				eventName: "Hackathon End and Judging Start",
				description: "All projects must be submited on Devpost by this time"
			},
		]
	},
	{
		id: "sunset",
		name: "October 23rd",
		start: new Date("Mon Sep 25 2023 20:00:00 GMT-0400"),
		Icon: Sunset,
		events:[
			{
				startTime: "00",
				endTime: "3:00 PM",
				eventName: "Juding Ends",
				description: "The Judging period has ended and results are finalized"
			},
			{
				startTime: "4:30 PM",
				endTime: "5:15 PM",
				eventName: "Project Expos",
				description: "People can present their projects for everyone to see"
			},	
			{
				startTime: "5:15 PM",
				endTime: "6:00 PM",
				eventName: "Closing Ceremony",
				description: "This ceremony will end the hackathon and give out the prizes to the winners"
			},	
			{
				startTime: "6:00 PM",
				endTime: "6:45 PM",
				eventName: "EquiTalks",
				description: "In this event, speakers from various backgrounds talking about their contributions to the advancement of STEM"
			},	
			{
				startTime: "6:45 PM",
				endTime: "7:30 PM",
				eventName: "Monmouth Event",
				description: "A special treat for our Monmouth County participants!"
			},	
		]
	},
] as const;
