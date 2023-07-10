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
			Icon: Home,
		},
		{
			title: "Workshops",
			href: "/workshops",
			description: "Engaging projects hand-crafted by our instructors.",
			protected: false,
			Icon: Lightbulb,
		},
		{
			title: "Hackathons",
			href: "/hackathons",
			description: "And we haven't forgotten the prizes.",
			protected: false,
			Icon: Trophy,
		},
		{
			title: "Seminars",
			href: "/seminars",
			description: "Attend seminars from experts in their fields.",
			protected: false,
			Icon: Mic,
		},
	],
	links: [
		{
			name: "GitHub",
			href: "https://github.com/hackplace-org",
			description: "Share our commitment to open-source software.",
			color: "hover:text-[#00aaff]",
			Icon: Github,
		},
		{
			name: "Instagram",
			href: "https://instagram.com/hackplace_org",
			description: "Browse our photos, videos, and announcements.",
			color: "hover:text-[#e4405f]",
			Icon: Instagram,
		},
		{
			name: "LinkedIn",
			href: "https://www.linkedin.com/company/hack-place/",
			description: "Connect with our employees and volunteers.",
			color: "hover:text-[#0a66c2]",
			Icon: Linkedin,
		},
		{
			name: "Hack Club Bank",
			href: "https://bank.hackclub.com/hack-place",
			description: "Full transparency on all of our finances.",
			color: "hover:text-[#e7364e]",
			Icon: Landmark,
		},
		{
			name: "OpenCollective",
			href: "https://opencollective.com/hack-place",
			description: "Donate to help support our cause.",
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
