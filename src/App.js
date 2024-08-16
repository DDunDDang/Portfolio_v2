import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Certificate from "./components/Certificate";
import Project from "./components/Project";
import ScrollMessage from "./components/ScrollMessage";

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

    const sectionNames = ["Main", "Education", "Skills & Certificates", "Projects"];

    const getPreviousSection = () => {
        return currentSection > 0 ? sectionNames[currentSection - 1] : null;
    };

    const getNextSection = () => {
        return currentSection < sectionNames.length - 1 ? sectionNames[currentSection + 1] : null;
    };

    return (
        <div>
            <Nav
                currentSection={currentSection}
                getPreviousSection={getPreviousSection}
                getNextSection={getNextSection}
                sectionNames={sectionNames}
            />
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
            
            <ScrollMessage />
        </div>
    );
}

export default App;
