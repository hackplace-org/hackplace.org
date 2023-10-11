import { cn } from "@/lib/utils";

import { ArrowUpRight } from "lucide-react";
import {
	type LinkProps as NextLinkProps,
	default as NextLink,
} from "next/link";
import { type PropsWithChildren } from "react";

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
			{/* biome-ignore lint/a11y/useValidAnchor: NextLink passes the href */}
			<a
				className={cn(
					unstyled || "text-brand hover:underline transition-all",
					"inline-block",
					className,
				)}
			>
				{text}
				<ArrowUpRight className="inline-block w-2 h-2 mb-4 text-muted-foreground" />
			</a>
		</NextLink>
	);
};
