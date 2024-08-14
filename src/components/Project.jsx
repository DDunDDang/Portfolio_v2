import React, { useState, useEffect } from "react";
import ComponentHeader from "./ComponentHeader";
import { motion, AnimatePresence } from "framer-motion";

const Project = () => {

    const projects = [
        {
            index: 0,
            title: "MoYoung",
            description: "현재 상영중인 영화 정보를 수집하여, 한 사이트에서 볼 수 있도록 하여 사용자에게 편의를 주고자 만들었습니다. 로그인 없이 주변 영화관 정보 및 영화 정보, 상영시간을 알 수 있고, 로그인을 진행하여 게시글 작성 및 채팅을 진행할 수 있도록 기획했습니다.",
            tools: ["Java", "Spring Boot", "Spring Security", "Web Socket", "Mysql", "OAuth 2.0"],
            link: "https://stealth-error-21c.notion.site/Project-04b1663a760e4520acaedf8194c72a3c?pvs=74",
        },
        {
            index: 1,
            title: "Ticat",
            description: "다양한 축제 정보를 효과적으로 제공하여 사용자가 쉽고 빠르게 흥미로운 축제를 찾아 새로운 경험을 할 수 있도록 제작하였습니다.",
            tools: ["Java", "Spring Boot", "Spring Security", "Mysql", "OAuth 2.0"],
            link: "https://stealth-error-21c.notion.site/Project-Ticat-b8b9a5953d0d4022b6bcc1e4071d8621?pvs=4",
        },
    ];

    const [currentProject, setCurrentProject] = useState(0);

    const handleNext = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    useEffect(() => {
        const projectCard = document.getElementById('project-card');
        projectCard.style.height = '300px';
    }, [currentProject]);

    return (
        <div className="container flex items-center justify-center min-h-screen mx-auto">
            <section className="relative max-w-4xl px-4" id="project">
                <ComponentHeader name="Project" />
                
                {/* 프로젝트 인디케이터 */}
                <div className="flex justify-center mb-4 space-x-2">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                index === currentProject ? "bg-white" : "bg-slate-400"
                            }`}
                        />
                    ))}
                </div>
                
                <div className="relative flex flex-col items-center justify-center space-y-4">
                    <AnimatePresence mode="wait">
                        <motion.article
                            id="project-card"
                            key={currentProject}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-20 flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg md:flex-row md:space-x-4"
                            style={{ height: '300px' }} 
                        >
                            <picture className="w-full shadow-lg md:w-5/12">
                                <img
                                    src={`./././images/projects/${projects[currentProject].index}.png`}
                                    width="768px"
                                    height="575px"
                                    loading="lazy"
                                    alt={projects[currentProject].title}
                                    className="rounded-lg"
                                />
                            </picture>
                            <div className="flex flex-col w-full space-y-2 md:w-7/12">
                                <h3 className="text-lg font-bold uppercase">{projects[currentProject].title}</h3>
                                <p>{projects[currentProject].description}</p>
                                <div className="flex flex-wrap gap-1">
                                    {projects[currentProject].tools.map((tool, index) => (
                                        <span className="px-2 py-1 text-sm border border-gray-500 rounded-lg" key={index}>
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-2">
                                    <a href={projects[currentProject].link} target="_blank" rel="noreferrer">
                                        <img src="./images/icons/external-link.svg" alt="link to live website" width="24px" height="24px" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    </AnimatePresence>
                    
                    <button 
                        onClick={handleNext} 
                        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        다음 프로젝트
                    </button>
                </div>
                <div className="flex justify-center mt-8">
                    <button type="button" onClick={() => window.open("https://github.com/DDunDDang")} class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2" >               
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                        </svg>
                        See more on Github
                    </button>
                </div>
                
            </section>
        </div>
    );
};

export default Project;
