import React from "react";
import ComponetHeader from "./ComponentHeader";

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
    ]

    return (
        <div className="container flex items-center justify-center min-h-screen mx-auto">
            <section className="max-w-4xl px-4" id="project">
            <ComponetHeader name="Project" />
                <div className="space-y-6">
                    {projects.map((project, index) => (
                    <article 
                        className="flex flex-col items-start md:flex-row md:space-x-4" 
                        key={index}
                    >
                        <picture className="w-full shadow-lg md:w-5/12">
                            <img 
                                src={`./././images/projects/${project.index}.png`}
                                width="768px" 
                                height="575px" 
                                loading="lazy" 
                                alt={project.title} 
                                className="rounded-lg"
                            />
                        </picture>
                        <div className="flex flex-col w-full space-y-2 md:w-7/12">
                            <h3 className="text-lg font-bold uppercase">{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="flex flex-wrap gap-1">
                                {project.tools.map((disc, index) => (
                                <span className="px-2 py-1 text-sm border border-gray-500 rounded-lg" key={index}>
                                    {disc}
                                </span>
                                ))}
                            </div>
                            <div className="flex space-x-2">
                                <a href={(project.link)} target="_blank" rel="noreferrer" >
                                    <img src="./images/icons/external-link.svg" alt="link to live website" width="24px" height="24px" />
                                </a>
                            </div>
                        </div>
                    </article>
                    ))}
                </div>
                <div className="flex justify-center">
                    <a
                        href="https://github.com/DDunDDang"
                        target="_blank"
                        rel="noreferrer"
                        className="block max-w-xs p-2 my-8 text-center uppercase border border-gray-500 rounded-lg shadow-lg bg-gray"
                    >
                        <span>See more on Github</span>
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Project;