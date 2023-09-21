"use server";

// import type { FormInput, OnboardingFormProps } from "@/app/onboarding/form";
import { insertUser } from "@/db/client";
import { clerkClient, type useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// type UserId = {
// 	userId: ReturnType<typeof useAuth>["userId"];
// 	redirectTo: OnboardingFormProps["redirectTo"];
// };

// export async function saveResponse(data: FormInput & UserId) {
// 	const { userId, redirectTo, ...responses } = data;

// 	if (!userId) return;

// 	await insertUser({
// 		id: userId,
// 		responses,
// 	});

// 	await clerkClient.users.updateUser(userId, {
// 		privateMetadata: {
// 			onboardingCompleted: true,
// 			nonce: Date.now(),
// 		},
// 	});

// 	redirect(redirectTo);
// }
