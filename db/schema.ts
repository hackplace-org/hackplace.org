import { type InferInsertModel, sql } from "drizzle-orm";
import { blob, sqliteTable, text } from "drizzle-orm/sqlite-core";

// import { type FormInput } from "@/app/onboarding/form";

type FormInput = {
	[key: string]: string;
};

export const users = sqliteTable("users", {
	id: text("id").primaryKey(),
	onboardedAt: text("onboarded_at").default(sql`CURRENT_TIMESTAMP`),
	responses: blob("responses", { mode: "json" }).$type<FormInput>().notNull(),
});

export type NewUser = InferInsertModel<typeof users>;
