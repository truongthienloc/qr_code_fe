'use client';
import { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
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
        qrCode.append(refQRCode.current as HTMLElement);
    }, [data, style]);

    return (
        <div className="min-w-[300px] flex flex-col">
            <div ref={refQRCode} />
            <button>Download</button>
        </div>
    );
}

export default QRCode;
