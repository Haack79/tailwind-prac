'use client';
import { useState } from "react";
import Modal from "./Modal";

const ModalShow = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    
    const handleToggleModalPopup = () => {
        setShowModal(!showModal);
    }
    
    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className="flex justify-center items-center">
            <button onClick={handleToggleModalPopup} className="p-2 bg-blue-500 text-white rounded">Open Modal</button>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <Modal 
                        body={<div className="bg-green-300 text-orange-400">Hi, I\m the body</div>}
                        header="Hi, I'm the header" 
                        footer="Hi, I'm the footer"
                        onClose={handleCloseModal}
                    />
                </div>
            )}
        </div>
    );
}

export default ModalShow;
