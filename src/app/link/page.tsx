'use client';

import { ChangeEvent, useState } from 'react';
import FormInfo from '~/components/LinkPage/FormInfo';

function LinkPage() {
    const [info, setInfo] = useState('');

    const handleInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInfo(e.target.value);
    };

    return (
        <main className="flex min-h-screen w-full overflow-x-hidden flex-col items-center justify-between font-sans-serif pt-4">
            <FormInfo name="URL" value={info} onChange={handleInfoChange} />
        </main>
    );
}

export default LinkPage;
