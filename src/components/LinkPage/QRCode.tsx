'use client';
import styleSCSS from '~/styles/linkpage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, MouseEvent } from 'react';
import QRCodeStyling from 'qr-code-styling';
import clsx from 'clsx';
import { QRCodeStyleValue } from '~/hooks/QRCode/useQRCodeStyle';

const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    dotsOptions: {
        color: '#4267b2',
        type: 'classy',
    },
    imageOptions: {
        crossOrigin: 'anonymous',
        margin: 10,
    },
});

interface IQRCodeProps {
    data: string;
    style?: QRCodeStyleValue;
}

const styleDefault: QRCodeStyleValue = {
    color: '#000000',
    shape: 'classy',
    logo: '/images/logo-qrcode.jpg',
};

function QRCode({ data, style = styleDefault }: IQRCodeProps) {
    const refQRCode = useRef<HTMLDivElement>(null);

    useEffect(() => {
        qrCode.update({
            data: data,
            dotsOptions: {
                color: style.color,
                type: style.shape,
            },
            image: style.logo,
        });

        if (data !== '') qrCode.append(refQRCode.current as HTMLElement);
    }, [data, style]);

    const handleClickDownload = (e: MouseEvent<HTMLButtonElement>) => {
        qrCode.download({
            name: 'qr-code-gen',
        });
    };

    return (
        <div className="min-w-[300px] flex flex-col gap-4">
            <div ref={refQRCode} />
            {data && (
                <button
                    className={clsx(
                        'shadow text-lg font-bold tracking-wider p-1 flex flex-row justify-center items-center gap-3 rounded',
                        styleSCSS['download-btn'],
                    )}
                    onClick={handleClickDownload}
                >
                    <FontAwesomeIcon icon={faDownload} />
                    DOWNLOAD
                </button>
            )}
        </div>
    );
}

export default QRCode;
