import { cn } from "@/lib/utils";

import { ArrowUpRight } from "lucide-react";
import { type PropsWithChildren } from "react";
import {
	default as NextLink,
	type LinkProps as NextLinkProps,
} from "next/link";

type BaseLinkProps = Omit<
	React.AnchorHTMLAttributes<HTMLAnchorElement>,
	keyof NextLinkProps
> &
	NextLinkProps &
	React.RefAttributes<HTMLAnchorElement>;

interface LinkProps extends Omit<BaseLinkProps, "target"> {
	text: string;
	unstyled?: boolean;
	external?: boolean;
}

export const Link = ({
	text,
	unstyled,
	external,
	className,
	...rest
}: PropsWithChildren<LinkProps>) => {
	return (
		<NextLink
			passHref
			legacyBehavior
			target={external ? "_blank" : "_self"}
			{...rest}
		>
			<a
				className={cn(
					className,
					unstyled || "text-brand hover:underline decoration-dashed transition-all",
					"inline-block"
				)}
			>
				{text}
				<ArrowUpRight className="inline-block w-2 h-2 mb-4 text-muted-foreground" />
			</a>
		</NextLink>
	);
};
