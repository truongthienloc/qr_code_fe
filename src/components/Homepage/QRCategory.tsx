import style from '~/styles/homepage.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLink,
    faWifi,
    faNoteSticky,
    faAt,
    faImage,
    faMusic,
} from '@fortawesome/free-solid-svg-icons';

function QRCategory() {
    return (
        <div className="w-[90vw] flex flex-row flex-wrap px-8 gap-[10px] justify-center">
            <QRItem
                icon={faLink}
                name="Liên kết / URL"
                href="/link"
                color="text-yellow-400"
            />
            <QRItem icon={faWifi} name="Wi-Fi" href="/link" color="text-red-400" />
            <QRItem
                icon={faNoteSticky}
                name="Văn bản"
                href="/link"
                color="text-blue-400"
            />
            <QRItem icon={faAt} name="Email" href="/link" color="text-yellow-400" />
            <QRItem
                icon={faImage}
                name="Hình ảnh"
                href="/link"
                color="text-blue-400"
            />
            <QRItem icon={faMusic} name="MP3" href="/link" color="text-green-400" />
        </div>
    );
}

export default QRCategory;

interface IQRItem {
    icon: IconProp;
    name: string;
    href: string;
    color: string;
}

function QRItem({ icon, name, href, color }: IQRItem) {
    return (
        <Link href={href} className="w-[20%] max-w-[190px] min-w-[135px]">
            <div
                className={clsx(
                    'px-2 py-8 flex flex-col items-center gap-4 bg-white font-sans-serif rounded-xl',
                    style['qr-category__item'],
                )}
            >
                <p
                    className={clsx(
                        'w-14 h-14 flex items-center justify-center',
                        color,
                    )}
                >
                    <FontAwesomeIcon icon={icon} />
                </p>
                <p className="text-lg text-gray-900 text-center">{name}</p>
            </div>
        </Link>
    );
}
