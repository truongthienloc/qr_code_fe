import '~/styles/globals.scss';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import NavBar from '~/components/NavBar';
import Head from 'next/head';

// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { config, dom } from '@fortawesome/fontawesome-svg-core';
// config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Head>
                <style>{/* {dom.css()} */}</style>
            </Head>
            <body className={clsx(inter.className)}>
                <NavBar />
                <div className="flex min-h-screen flex-col items-center justify-between pt-20">
                    {children}
                </div>
            </body>
        </html>
    );
}
