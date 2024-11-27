import type { Metadata } from "next";
import "./globals.css";

import AppThemeProvider from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Const App",
  description: "Your preferred AI bot for your constitution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className="scroll-smooth" suppressHydrationWarning
    >
      <body
        className= "antialiased"
      >
        <AppThemeProvider
        attribute={"class"}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
