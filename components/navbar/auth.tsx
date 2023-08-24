"use client";

import { UserPlus } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const Auth = () => {
	return (
		<div className="flex">
			<SignedIn>
				<div className="my-auto">
					<UserButton
						appearance={{
							elements: {
								avatarBox: "w-[2.2rem] h-[2.2rem]",
								userButtonPopoverCard:
									"w-52 bg-popover text-popover-foreground border-border shadow-md rounded-md p-0",
								userPreview: "p-4 border-b border-border -mb-1",
								userPreviewMainIdentifier: "font-semibold",
								userPreviewSecondaryIdentifier:
									"text-muted-foreground",
								userButtonPopoverMain: "space-y-2",
								userButtonPopoverActions: "px-1 pb-1 space-y-1",
								userButtonPopoverActionButton:
									"p-0 rounded-lg transition-colors hover:bg-secondary",
								userButtonPopoverActionButtonText:
									"text-popover-foreground",
								userButtonPopoverActionButtonIcon:
									"text-popover-foreground",
								userButtonPopoverFooter: "hidden",
							},
						}}
					/>
				</div>
			</SignedIn>

			<SignedOut>
				<SignInButton mode="modal">
					<Button
						size="icon"
						variant="ghost"
						className="flex my-auto md:hidden"
					>
						<UserPlus className="w-5 h-5" />
					</Button>
				</SignInButton>

				<SignInButton mode="modal">
					<Button className="flex-row hidden my-auto md:flex gap-x-2">
						<UserPlus className="w-5 h-5" />
						Sign in
					</Button>
				</SignInButton>
			</SignedOut>
		</div>
	);
};
