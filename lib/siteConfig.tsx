import {
	Home,
	ClipboardCheck,
	Lightbulb,
	Trophy,
	Mic,
	Banknote,
	Github,
	Instagram,
	Linkedin,
	MessagesSquare,
	Landmark,
	HeartHandshake,
	Mail,
	Code,
	Sun,
	MoonStar,
	Laptop,
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
		href: "https://instagram.com/hackplace_org",
		description: "Browse our photos, videos, and announcements.",
		color: "group-hover:text-[#e4405f]",
		Icon: Instagram,
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/company/hack-place/",
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
		title: "Hack Club Bank",
		href: "https://bank.hackclub.com/hack-place",
		description: "Full transparency on all of our finances.",
		color: "group-hover:text-[#e7364e]",
		Icon: Landmark,
	},
	{
		title: "OpenCollective",
		href: "https://opencollective.com/hack-place",
		description: "Help support our cause, receive perks in return.",
		color: "group-hover:text-[#84aef3]",
		Icon: HeartHandshake,
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

export const defaultTheme = "dark" as const;
export const themes = [
	{
		name: "Light",
		value: "light",
		Icon: Sun,
	},
	{
		name: "Dark",
		value: "dark",
		Icon: MoonStar,
	},
	{
		name: "System",
		value: "system",
		Icon: Laptop,
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
