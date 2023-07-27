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
