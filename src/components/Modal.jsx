import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, link }) => {
    const modalRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            triggerRef.current = document.activeElement;
            modalRef.current.focus();
        } else if (triggerRef.current) {
            triggerRef.current.focus();
        }
    }, [isOpen]);

    const handleClose = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    const modalClass = isOpen ? "modal open" : "modal";

    return (
        <div
            ref={modalRef}
            tabIndex="-1"
            onClick={handleClose}
            className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ${modalClass}`}
        >
            <div className="relative overflow-hidden bg-white rounded-lg" style={{ width: "90vw", height: "90vh" }}>
                <iframe
                    title="External Link"
                    src={link}
                    className="w-full h-full"
                    style={{ border: 'none' }}
                    allowFullScreen
                ></iframe>
                <button 
                    onClick={onClose} 
                    className="absolute top-0 right-0 m-3 text-gray-600 hover:text-black focus:outline-none"
                >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Modal;