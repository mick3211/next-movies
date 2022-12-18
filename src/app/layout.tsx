import '@styles/globals.scss';
import 'remixicon/fonts/remixicon.css';
import { Roboto } from '@next/font/google';
import React from 'react';
import { SideBarMenu } from './components/Surfaces/SideBarMenu';

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={roboto.className}>
                <SideBarMenu />
                <main>{children}</main>
            </body>
        </html>
    );
}
