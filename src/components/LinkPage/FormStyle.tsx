import style from '~/styles/linkpage.module.scss';
import { ChangeEvent } from 'react';
import clsx from 'clsx';
import { QRCodeStyle, DEFAULT_LOGO } from '~/hooks/QRCode/useQRCodeStyle';
import { Color, QRCodeShape } from '~/constants/types';

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

    const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
        const color = e.target.value as Color;
        console.log('Color: ', color);
        qrCodeStyle.setColor(color);
    };

    const handleChangeLogo = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        URL.revokeObjectURL(qrCodeStyle.logo);

        if (!files || files.length === 0) {
            qrCodeStyle.setLogo(DEFAULT_LOGO);
            return;
        }

        const logo = files[0];
        const objURL = URL.createObjectURL(logo);

        qrCodeStyle.setLogo(objURL);
    };

    return (
        <form
            className="w-full flex flex-col p-4 bg-white shadow gap-4"
            onSubmit={(e) => e.preventDefault()}
        >
            <label htmlFor="shape-01">Shape:</label>
            <div className="flex flex-row gap-4 flex-wrap">
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
            <div className="flex flex-row">
                <div className="flex flex-col w-1/3 gap-4">
                    <label htmlFor="color">Color:</label>
                    <input
                        type="color"
                        name="color"
                        id="color"
                        value={qrCodeStyle.color}
                        onChange={handleChangeColor}
                    />
                </div>
                <div className="flex flex-col w-2/3 gap-4">
                    <label htmlFor="color">Logo:</label>
                    {qrCodeStyle.logo !== DEFAULT_LOGO && (
                        <img src={qrCodeStyle.logo} alt="Logo" className="mx-4" />
                    )}
                    <input
                        className="border border-gray-800 bg-gray-100 p-1 rounded"
                        type="file"
                        name="logo"
                        id="logo"
                        accept="image/*"
                        onChange={handleChangeLogo}
                    />
                </div>
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
