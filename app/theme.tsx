"use client";

import { Provider } from "jotai";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type PropsWithChildren } from "react";

interface ThemeProviderProps {
	fontVariable: string;
}

export const ThemeProvider = ({
	children,
	fontVariable,
}: PropsWithChildren<ThemeProviderProps>) => {
	return (
		<NextThemesProvider
			enableSystem
			attribute="class"
			defaultTheme="dark"
			enableColorScheme={true}
		>
			<style jsx global>
				{`
					:root {
						--font-satoshi: ${fontVariable};
					}
				`}
			</style>

			<Provider>{children}</Provider>
		</NextThemesProvider>
	);
};
