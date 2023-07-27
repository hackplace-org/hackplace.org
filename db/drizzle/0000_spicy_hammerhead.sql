CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`onboarded_at` text DEFAULT CURRENT_TIMESTAMP,
	`responses` blob NOT NULL
);
