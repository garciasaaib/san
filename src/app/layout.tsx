import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Toaster } from "@/components/ui/toaster"
import { FloatWhatsAppButton } from "@/sections/ui/FloatWhatsAppButton";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Image from 'next/image';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAN: Automatización de Procesos Industriales Eficientes",
  description: "",
	icons: {
		icon: "favicon.ico",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<>
			<html lang="en">
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased dark:bg-secondary dark:text-secondary-foreground",
						inter.className
					)}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Header />

						{children}
						<Footer />
						<Toaster />
						<FloatWhatsAppButton />
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}

