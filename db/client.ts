import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

import { env } from "../env.mjs";
import { users, type NewUser } from "@/db/schema";

const client = createClient({
	url: env.TURSO_DATABASE_URL,
	authToken: env.TURSO_DATABASE_AUTH_TOKEN,
});

const db = drizzle(client);

export const insertUser = async (user: NewUser) => {
	return db.insert(users).values(user).all();
};
