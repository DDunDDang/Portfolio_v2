import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Skill from './components/Skill';
import Project from './components/Project';
import Modal from './components/Modal';

function App() {

    const containerRef = useRef(null);
    const sectionRefs = {
        main: useRef(null),
        skill: useRef(null),
        project: useRef(null),
    };

    const [modalOpen, setModalOpen] = useState(false);
    const [modalLink, setModalLink] = useState('');  

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

    const openModal = (link) => {
        setModalLink(link);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
        setModalLink('');
    }

    return (
        <div>
            <div ref={containerRef} className="scroll-container flex w-[300vw] transition-transform duration-500 ease-in-out">
                <section ref={sectionRefs.main} className="flex items-center justify-center w-screen min-h-screen">
                    <Main />
                </section>
                
                <section ref={sectionRefs.skill} className="flex flex-col items-center justify-center w-screen min-h-screen">
                    <Skill />
                </section>

                <section ref={sectionRefs.project} className="flex items-center justify-center w-screen min-h-screen">
                    <Project openModal={openModal} />
                </section>
            </div>
            {/* 모달을 최상위에 렌더링 */}
            <Modal isOpen={modalOpen} onClose={closeModal} link={modalLink} />
        </div>
    );
}

export default App;
