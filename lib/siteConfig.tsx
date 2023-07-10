import {
	Home,
	Lightbulb,
	Trophy,
	Mic,
	Github,
	Instagram,
	Linkedin,
	Landmark,
	Banknote,
	Sun,
	MoonStar,
	Laptop,
} from "lucide-react";

export const siteConfig = {
	pages: [
		{
			title: "Home",
			href: "/",
			protected: false,
			description: "We learned how to code—now it's your turn.",
			color: "group-hover:text-[#00aaff]",
			Icon: Home,
		},
		{
			title: "Workshops",
			href: "/workshops",
			description: "Engaging projects hand-crafted by our instructors.",
			color: "group-hover:text-[#00aaff]",
			protected: false,
			Icon: Lightbulb,
		},
		{
			title: "Hackathons",
			href: "/hackathons",
			description: "And we haven't forgotten the prizes.",
			color: "group-hover:text-[#00aaff]",
			protected: false,
			Icon: Trophy,
		},
		{
			title: "Seminars",
			href: "/seminars",
			description: "Attend seminars from experts in their fields.",
			color: "group-hover:text-[#00aaff]",
			protected: false,
			Icon: Mic,
		},
	],
	links: [
		{
			title: "GitHub",
			href: "https://github.com/hackplace-org",
			description: "Share our commitment to open-source software.",
			color: "group-hover:text-[#00aaff]",
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
			title: "Hack Club Bank",
			href: "https://bank.hackclub.com/hack-place",
			description: "Full transparency on all of our finances.",
			color: "group-hover:text-[#e7364e]",
			Icon: Landmark,
		},
		{
			title: "OpenCollective",
			href: "https://opencollective.com/hack-place",
			description:
				"Help support our cause, receive perks in return.",
			color: "group-hover:text-[#84aef3]",
			Icon: Banknote,
		},
	],
	themes: [
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
	],
} as const;
