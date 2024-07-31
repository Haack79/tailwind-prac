import React from 'react';

const Modal = ({ id, header, body, footer, onClose }: { id?: string, header?: string, body?: string, footer?: string, onClose: () => void }) => {
    return (
        <div id={id || 'Modal'} className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
            <div className="w-full flex justify-end">
                <button onClick={onClose} className="text-gray-500 hover:text-black">&times;</button>
            </div>
            <div className="text-center p-2">
                <h1 className="font-bold text-lg">{header || 'Header'}</h1>
                <div className="my-4">{body || 'Body'}</div>
                <div>{footer || 'Footer'}</div>
            </div>
        </div>
    );
}

export default Modal;
