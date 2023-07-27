"use server";

import { insertUser } from "@/db/client";
import { type FormInput } from "@/app/onboarding/form";
import { clerkClient, type useAuth } from "@clerk/nextjs";

type UserId = {
	userId: ReturnType<typeof useAuth>["userId"];
};

export async function saveResponse(data: FormInput & UserId) {
	const { userId, ...responses } = data;

	if (!userId) return;

	await insertUser({
		id: userId,
		responses,
	});

	await clerkClient.users.updateUser(userId, {
		privateMetadata: {
			onboardingCompleted: true,
			nonce: Date.now(),
		},
	});
}
