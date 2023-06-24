import style from '~/styles/linkpage.module.scss';
import { ChangeEvent } from 'react';
import clsx from 'clsx';
import { QRCodeStyle } from '~/hooks/QRCode/useQRCodeStyle';
import { QRCodeShape } from '~/constants/types';

const shapeItemData: IShapeItem[] = [
    {
        value: 'square',
        image: '/images/qrcode-square.png',
    },
    {
        value: 'classy',
        image: '/images/qrcode-classy.jpeg',
    },
    {
        value: 'classy-rounded',
        image: '/images/qrcode-classy-rounded.jpeg',
    },
    {
        value: 'rounded',
        image: '/images/qrcode-rounded.jpeg',
    },
    {
        value: 'extra-rounded',
        image: '/images/qrcode-extra-rounded.png',
    },
];

interface IFormStyleProps {
    qrCodeStyle: QRCodeStyle;
}

function FormStyle({ qrCodeStyle }: IFormStyleProps) {
    const handleClickShape = (value: QRCodeShape) => {
        qrCodeStyle.setShape(value);
    };

    return (
        <form
            className="w-full flex flex-col p-4 bg-white shadow gap-4"
            onSubmit={(e) => e.preventDefault()}
        >
            <label htmlFor="color">Color:</label>
            <input type="color" name="color" id="color" value={qrCodeStyle.color} />
            <label htmlFor="shape-01">Shape:</label>
            <div className="flex flex-row gap-4">
                {shapeItemData.map((shape) => (
                    <ShapeItem
                        key={shape.value}
                        image={shape.image}
                        value={shape.value}
                        current={qrCodeStyle.shape}
                        onClick={handleClickShape}
                    />
                ))}
            </div>
        </form>
    );
}

export default FormStyle;

interface IShapeItem {
    value: QRCodeShape;
    image: string;
    current?: QRCodeShape;
    onClick?: (value: QRCodeShape) => void;
}

function ShapeItem({ value, image, onClick, current }: IShapeItem) {
    return (
        <img
            className={clsx('cursor-pointer w-16 h-16 rounded-lg p-1', {
                [style['shape-item--selected']]: value === current,
            })}
            src={image}
            alt={value}
            onClick={() => onClick && onClick(value)}
        />
    );
}
