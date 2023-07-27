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
		<ClerkProvider>
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
