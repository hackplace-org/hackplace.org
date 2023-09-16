import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { type NewUser, users } from "@/db/schema";
import { env } from "../env.mjs";

const client = createClient({
	url: env.TURSO_DATABASE_URL,
	authToken: env.TURSO_DATABASE_AUTH_TOKEN,
});

const db = drizzle(client);

export const insertUser = async (user: NewUser) => {
	return db.insert(users).values(user).all();
};
