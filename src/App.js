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

    useEffect(() => {
        let scrollAccumulator = 0;
    
        const handleWheel = (e) => {
            e.preventDefault();
            scrollAccumulator += e.deltaY;
    
            if (Math.abs(scrollAccumulator) >= 70) {
                if (scrollAccumulator > 0 && currentSection < 3) {
                    setCurrentSection(prev => prev + 1);
                } else if (scrollAccumulator < 0 && currentSection > 0) {
                    setCurrentSection(prev => prev - 1);
                }
    
                scrollAccumulator = 0;
            }
        };
    
        window.addEventListener("wheel", handleWheel, { passive: false });
    
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [currentSection]);

    useEffect(() => {
        const container = containerRef.current;
        container.style.transform = `translateX(-${currentSection * 100}vw)`;
    }, [currentSection]);

    const sectionNames = ["Main", "Education & Certificates", "Skills & Tools", "Projects"];

    const handleNavigate = (newIndex) => {
        if (newIndex >= 0 && newIndex < sectionNames.length) {
            setCurrentSection(newIndex);
        }
    };

    return (
        <div>
            <Nav
                currentSection={currentSection}
                onNavigate={handleNavigate}
                sectionNames={sectionNames}
            />
            <div ref={containerRef} className="scroll-container flex w-[400vw] transition-transform duration-500 ease-in-out">
                <section ref={sectionRefs.main}>
                    <Main />
                </section>
                <section ref={sectionRefs.edu}>
                    <Education />
                    <Certificate />
                </section>
                <section ref={sectionRefs.skill}>
                    <Skill />
                </section>
                <section ref={sectionRefs.project}>
                    <Project />
                </section>
            </div>
            
            <ScrollMessage />
        </div>
    );
}

export default App;