import { useState, Dispatch, SetStateAction } from 'react';
import { QRCodeShape, Color } from '~/constants/types';

export interface QRCodeStyle {
    shape: QRCodeShape;
    color: Color;
    logo: string;
    setShape: Dispatch<SetStateAction<QRCodeShape>>;
    setColor: Dispatch<SetStateAction<Color>>;
    setLogo: Dispatch<SetStateAction<string>>;
}

export const DEFAULT_LOGO = '/images/logo-qrcode.jpg';

export interface QRCodeStyleValue {
    shape: QRCodeShape;
    color: Color;
    logo: string;
}

function useQRCodeStyle() {
    const [shape, setShape] = useState<QRCodeShape>('classy');
    const [color, setColor] = useState<Color>('#000000');
    const [logo, setLogo] = useState('/images/logo-qrcode.jpg');

    return { shape, color, logo, setShape, setColor, setLogo };
}

export default useQRCodeStyle;
