import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/theme";
import { ClerkProvider } from "@clerk/nextjs";
import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const satoshi = localFont({
	src: "../fonts/Satoshi-Variable.woff2",
	variable: "--font-satoshi",
});

// const manrope = localFont({
// 	src: "../fonts/Manrope-Variable.woff2",
// 	variable: "--font-manrope",
// });

export const metadata: Metadata = {
	title: "hack.place()",
	description: "hack.place()",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<ClerkProvider
			appearance={{
				signIn: {
					elements: {
						card: "bg-popover border border-border",
						headerTitle: "text-popover-foreground",
						headerSubtitle: "text-muted-foreground",
						modalCloseButton: "text-muted-foreground",
						socialButtonsBlockButton:
							"text-popover-foreground rounded-md border hover:bg-secondary/50 border-input",
						socialButtonsProviderIcon__github: "dark:invert",
						dividerLine: "bg-muted-foreground/20",
						dividerText: "text-muted-foreground",
						formFieldLabel: "text-popover-foreground",
						formFieldInput:
							"transition-colors border border-input bg-transparent dark:text-primary rounded-md h-9 px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
						formButtonPrimary:
							"text-white bg-brand transition-opacity hover:bg-brand hover:opacity-90",
						footerActionText: "text-popover-foreground",
						footerActionLink:
							"underline-offset-4 transition-all text-brand hover:underline hover:text-brand",
					},
				},
			}}
		>
			<html lang="en" suppressHydrationWarning>
				<body
					className={cn(
						satoshi.variable,
						"font-sans overflow-x-hidden antialiased selection:bg-brand selection:text-sky-900"
					)}
				>
					<ThemeProvider fontVariable={satoshi.variable}>
						{children}

						<Footer />
						<Toaster />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
