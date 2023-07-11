"use client";

import {
	useState,
	useEffect,
	type JSX,
	type Dispatch,
	type SetStateAction,
} from "react";

import { Button } from "@/components/ui/button";
import { Menu, X, Loader2 } from "lucide-react";

interface MenuToggleProps {
	menuOpen: boolean;
	setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuToggle = ({ menuOpen, setMenuOpen }: MenuToggleProps) => {
	const [menuIcon, setMenuIcon] = useState<JSX.Element>(
		<Loader2 className="w-5 h-5 animate-spin" />
	);

	useEffect(() => {
		setMenuIcon(
			menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />
		);
	}, [menuOpen]);

	return (
		<Button
			size="icon"
			variant="ghost"
			className="flex my-auto md:hidden"
			onClick={() => setMenuOpen((open) => !open)}
		>
			{menuIcon}
		</Button>
	);
};
