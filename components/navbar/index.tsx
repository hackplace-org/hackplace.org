import { siteConfig } from "@/lib/siteConfig";
import { Content } from "@/components/content";

import { Logo } from "@/components/navbar/logo";
import { ThemeSwitcher } from "@/components/navbar/themeSwitcher";

interface NavbarProps {
	currentTitle: (typeof siteConfig.pages)[number]["title"];
}

export const Navbar = ({ currentTitle }: NavbarProps) => {
	return (
		<Content
			as="nav"
			border="bottom"
			className="h-16 flex flex-row justify-between"
		>
			<Logo />
			<ThemeSwitcher />
		</Content>
	);
};
