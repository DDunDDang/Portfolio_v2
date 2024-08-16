import React, { useEffect, useState } from "react";

const ScrollMessage = () => {
    const [showScrollMessage, setShowScrollMessage] = useState(true);
    const [messageOpacity, setMessageOpacity] = useState(1);

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setMessageOpacity(0);
        }, 2500);

        const hideTimer = setTimeout(() => {
            setShowScrollMessage(false);
        }, 3000);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!showScrollMessage) return null;

    return (
        <div 
            className="fixed bottom-0 left-0 flex items-center justify-center w-full p-4 text-center text-white transition-opacity duration-500 ease-in-out bg-black bg-opacity-70"
            style={{ opacity: messageOpacity }}
        >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 12l6-6v12l-6-6z" fill="currentColor"/>
            </svg>
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="6" x2="12" y2="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
            마우스를 스크롤 하면 화면이 좌우로 움직입니다.
            <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 12l-6 6V6l6 6z" fill="currentColor"/>
            </svg>
        </div>
    );
};

export default ScrollMessage;