import type { Metadata } from "next";
import { Roboto, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/pages/navbar";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "UniPool",
    description: "A carpool app - for university students",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
