'use client';
import style from '~/styles/default-layout.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

function NavBar() {
    return (
        <nav className="w-full h-20 shadow shadow-gray-400 fixed bg-white flex flex-row items-center">
            <div className="flex-1 flex flex-row justify-center">
                <Link
                    href={'/'}
                    className="flex flex-row justify-center items-center gap-2"
                >
                    <img
                        src="/images/logo-qrcode.jpg"
                        alt="Logo"
                        className="h-16 w-16"
                    />
                    <span className="text-2xl font-bold font-sans-serif">
                        QR Code Gen
                    </span>
                </Link>
            </div>
            <div className="flex-1 flex flex-row justify-end pr-4 gap-4">
                <Link
                    href={'/login'}
                    className={clsx(
                        'font-sans-serif font-bold p-2',
                        style['login-btn'],
                    )}
                >
                    ĐĂNG NHẬP
                </Link>
                <Link
                    href={'/signup'}
                    className={clsx(
                        'font-sans-serif font-bold py-2 px-4 rounded-full bg-primary text-white',
                        style['signup-btn'],
                    )}
                >
                    ĐĂNG KÝ
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
