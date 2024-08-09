import React, { useEffect, useRef } from 'react';
import './App.css';
import Main from './components/Main';
import Skill from './components/Skill';
import Certificate from './components/Certificate';
import Project from './components/Project';

function App() {
    const containerRef = useRef(null);
    const sectionRefs = {
        main: useRef(null),
        skill: useRef(null),
        project: useRef(null),
        about: useRef(null),
    };

    useEffect(() => {
        const container = containerRef.current;
        let scrollPosition = 0;
        let scrollAccumulator = 0;

        const handleWheel = (e) => {
            e.preventDefault();
            scrollAccumulator += e.deltaY;

            if (Math.abs(scrollAccumulator) >= 70) {
                if (scrollAccumulator > 0 && scrollPosition < 2) {
                    scrollPosition++;
                } else if (scrollAccumulator < 0 && scrollPosition > 0) {
                    scrollPosition--;
                }

                container.style.transform = `translateX(-${scrollPosition * 100}vw)`;
                scrollAccumulator = 0;
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div>
            <div ref={containerRef} className="scroll-container flex w-[300vw] transition-transform duration-500 ease-in-out">
                <section ref={sectionRefs.main} className="flex items-center justify-center w-screen min-h-screen">
                    <Main />
                </section>

                <section ref={sectionRefs.skill} className="flex flex-col items-center justify-center w-screen min-h-screen">
                    <Skill />
                    <Certificate />
                </section>

                <section ref={sectionRefs.project} className="flex items-center justify-center w-screen min-h-screen">
                    <Project />
                </section>
            </div>
        </div>
    );
}

export default App;
