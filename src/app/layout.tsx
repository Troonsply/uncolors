import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import Head from "next/head";
import ReactGA from 'react-ga';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Portfolio Anastasia Shpakova",
    description: "Portfolio Anastasia Shpakova",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    ReactGA.initialize('UA-000000-01'); // Заменитена ваш Tracking ID из Google Analytics
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <html lang="en">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
                  rel="stylesheet"/>
        </Head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}