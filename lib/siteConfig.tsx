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
			Icon: Home,
		},
		{
			title: "Workshops",
			href: "/workshops",
			protected: false,
			Icon: Lightbulb,
		},
		{
			title: "Hackathons",
			href: "/hackathons",
			protected: false,
			Icon: Trophy,
		},
		{
			title: "Seminars",
			href: "/seminars",
			protected: false,
			Icon: Mic,
		},
	],
	links: [
		{
			name: "GitHub",
			href: "https://github.com/hackplace-org",
			color: "hover:text-[#00aaff]",
			Icon: Github,
		},
		{
			name: "Instagram",
			href: "https://instagram.com/hackplace_org",
			color: "hover:text-[#e4405f]",
			Icon: Instagram,
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/hack-place/",
			color: "hover:text-[#0a66c2]",
			Icon: Linkedin,
		},
		{
			name: "Hack Club Bank",
			href: "https://bank.hackclub.com/hack-place",
			color: "hover:text-[#e7364e]",
			Icon: Landmark,
		},
		{
			name: "OpenCollective",
			href: "https://opencollective.com/hack-place",
			color: "hover:text-[#84aef3]",
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
