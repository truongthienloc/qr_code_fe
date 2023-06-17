'use client';
import { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
    dotsOptions: {
        color: '#4267b2',
        type: 'rounded',
    },
    imageOptions: {
        crossOrigin: 'anonymous',
        margin: 20,
    },
});

interface IQRCodeProps {
    data: string;
}

function QRCode({ data }: IQRCodeProps) {
    const refQRCode = useRef<HTMLDivElement>(null);

    useEffect(() => {
        qrCode.update({
            data: data,
        });
        qrCode.append(refQRCode.current as HTMLElement);
    }, [data]);

    return (
        <div>
            <div ref={refQRCode} />
            <button>Download</button>
        </div>
    );
}

export default QRCode;
