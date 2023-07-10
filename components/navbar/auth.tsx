"use client";

import { UserPlus, UserX } from "lucide-react";
import {
	SignInButton,
	SignOutButton,
	SignedIn,
	SignedOut,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const Auth = () => {
	return (
		<div className="flex">
			<SignedIn>
				<SignOutButton>
					<Button
						size="icon"
						variant="ghost"
						className="my-auto flex md:hidden"
					>
						<UserX className="w-5 h-5" />
					</Button>
				</SignOutButton>

				<SignOutButton>
					<Button className="my-auto hidden md:flex flex-row gap-x-2">
						<UserX className="w-5 h-5" />
						Sign out
					</Button>
				</SignOutButton>
			</SignedIn>

			<SignedOut>
				<SignInButton>
					<Button
						size="icon"
						variant="ghost"
						className="my-auto flex md:hidden"
					>
						<UserPlus className="w-5 h-5" />
					</Button>
				</SignInButton>

				<SignInButton>
					<Button className="my-auto hidden md:flex flex-row gap-x-2">
						<UserPlus className="w-5 h-5" />
						Sign in
					</Button>
				</SignInButton>
			</SignedOut>
		</div>
	);
};
