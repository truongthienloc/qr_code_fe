'use client';

import { ChangeEvent, useState } from 'react';
import { useQRCodeStyle } from '~/hooks/QRCode';
import FormInfo from '~/components/LinkPage/FormInfo';
import FormStyle from '~/components/LinkPage/FormStyle';
import QRCode from '~/components/LinkPage/QRCode';

function LinkPage() {
    const [info, setInfo] = useState('');
    const qrCodeStyle = useQRCodeStyle();

    const handleInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInfo(e.target.value);
    };

    return (
        <main className="flex min-h-screen w-full overflow-x-hidden flex-row justify-center font-sans-serif p-4 pt-4 gap-8">
            <div className="w-[40%] min-w-[300px] flex flex-col gap-4">
                <FormInfo name="URL" value={info} onChange={handleInfoChange} />
                <FormStyle qrCodeStyle={qrCodeStyle} />
            </div>
            <QRCode data={info} style={qrCodeStyle} />
        </main>
    );
}

export default LinkPage;
