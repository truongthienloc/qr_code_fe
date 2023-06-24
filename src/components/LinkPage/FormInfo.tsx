import { ChangeEvent } from 'react';

interface IFormInfoProps {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormInfo({ name, value, onChange }: IFormInfoProps) {
    return (
        <form className="w-full flex flex-col p-4 bg-white shadow gap-4">
            <label htmlFor="text">Nhập {name}:</label>
            <input
                name="text"
                id="text"
                className="border border-gray-500 rounded outline-1 outline-pr text-lg p-2"
                value={value}
                onChange={onChange}
            />
        </form>
    );
}

export default FormInfo;
