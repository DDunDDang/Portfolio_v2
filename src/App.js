import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Certificate from "./components/Certificate";
import Project from "./components/Project";

function App() {
    const containerRef = useRef(null);
    const sectionRefs = {
        main: useRef(null),
        edu: useRef(null),
        skill: useRef(null),
        project: useRef(null),
    };

    const [currentSection, setCurrentSection] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showScrollMessage, setShowScrollMessage] = useState(true);
    const [messageOpacity, setMessageOpacity] = useState(1);

    useEffect(() => {
        let scrollAccumulator = 0;
    
        const handleWheel = (e) => {
            e.preventDefault();
            scrollAccumulator += e.deltaY;
    
            if (Math.abs(scrollAccumulator) >= 70) {
                if (scrollAccumulator > 0 && scrollPosition < 3) {
                    setScrollPosition(prev => prev + 1);
                } else if (scrollAccumulator < 0 && scrollPosition > 0) {
                    setScrollPosition(prev => prev - 1);
                }
    
                scrollAccumulator = 0;
            }
        };
    
        window.addEventListener("wheel", handleWheel, { passive: false });
    
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [scrollPosition]);

    useEffect(() => {
        const container = containerRef.current;
        container.style.transform = `translateX(-${scrollPosition * 100}vw)`;
        setCurrentSection(scrollPosition);
    }, [scrollPosition]);

    useEffect(() => {
        const fadeOutTimer = setTimeout(() => {
            setMessageOpacity(0);
        }, 2500); // 2.5초 후에 페이드 아웃 시작

        const hideTimer = setTimeout(() => {
            setShowScrollMessage(false);
        }, 3000); // 3초 후에 완전히 숨김

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const sectionNames = ["Main", "Education", "Skills & Certificates", "Projects"];

    const getPreviousSection = () => {
        return currentSection > 0 ? sectionNames[currentSection - 1] : null;
    };

    const getNextSection = () => {
        return currentSection < sectionNames.length - 1 ? sectionNames[currentSection + 1] : null;
    };

    return (
<div>
            <div className="fixed top-0 left-0 w-full p-4 bg-gray-900">
                <div className="flex items-center justify-between">
                    <div className="flex items-center w-1/3 text-left text-slate-400">
                        {getPreviousSection() && (
                            <>
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 12l6-6v12l-6-6z" fill="currentColor"/>
                                </svg>
                                <span>{getPreviousSection()}</span>
                            </>
                        )}
                    </div>
                    <div className="w-1/3 text-center text-white">
                        {sectionNames[currentSection]}
                    </div>
                    <div className="flex items-center justify-end w-1/3 text-right text-slate-400">
                        {getNextSection() && (
                            <>
                                <span>{getNextSection()}</span>
                                <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 12l-6 6V6l6 6z" fill="currentColor"/>
                                </svg>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div ref={containerRef} className="scroll-container flex w-[400vw] transition-transform duration-500 ease-in-out">
                <section ref={sectionRefs.main} className="flex items-center justify-center w-screen min-h-screen">
                    <Main />
                </section>
                <section ref={sectionRefs.edu} className="flex flex-col items-center justify-center w-screen min-h-screen">
                    <Education />
                </section>
                <section ref={sectionRefs.skill} className="flex flex-col items-center justify-center w-screen min-h-screen">
                    <Skill />
                    <Certificate />
                </section>
                <section ref={sectionRefs.project} className="flex items-center justify-center w-screen min-h-screen">
                    <Project />
                </section>
            </div>

            {showScrollMessage && (
    <div 
        className="fixed bottom-0 left-0 flex items-center justify-center w-full p-4 text-center text-white transition-opacity duration-500 ease-in-out bg-black bg-opacity-70"
        style={{ opacity: messageOpacity }}
    >
        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12l6-6v12l-6-6z" fill="currentColor"/>
        </svg>
        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="6" x2="12" y2="10" stroke="currentColor" strokeWidth="2"/>
        </svg>
        마우스를 스크롤 하면 화면이 좌우로 움직입니다.
        <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 12l-6 6V6l6 6z" fill="currentColor"/>
        </svg>
    </div>
)}


        </div>
    );
}

export default App;