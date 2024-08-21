import React, { useState } from "react";
import ComponetHeader from "./ComponentHeader";
import { motion, AnimatePresence } from "framer-motion";

const Skill = () => {

    const skills = [
        {
            id: 0,
            name: "Java",
            description: [
                "객체 지향 언어의 특징을 잘 알고 있습니다.",
                "Collection, Stream, Lamda 등 Java 고급문법을 활용하여 기능 구현을 할 수 있습니다.",
                "Java 11과 17의 차이점을 알고 적용해본 경험이 있습니다."
            ]
        },
        {
            id: 1,
            name: "Spring Boot",
            description: [
                "Gradle, Maven 빌드 툴을 이용한 Spring Boot 프레임워크를 활용하여 백엔드 서버를 구축한 경험이 있습니다.",
                "MVC 패턴을 이용하여 프로젝트를 관리할 수 있습니다.",
                "DDD 패턴 활용 경험이 있습니다."
            ]
        },
        {
            id: 2,
            name: "Spring Security",
            description: [
                "Spring Security를 통해 웹 애플리케이션의 보안을 구현할 수 있습니다.",
                "인증, 인가, 권한 관리 등의 기능을 구현할 수 있습니다.",
                "CSRF 토큰 처리, 세션 관리 등 다양한 보안 기능을 사용해볼 수 있습니다.",
                "JWT와 UsernamePasswordAuthenticationFilter를 활용해 인증, 인가를 구현한 경험이 있습니다."
            ]
        },
        {
            id: 3,
            name: "JWT",
            description: [
                "JWT(JSON Web Token)를 사용해 인증 및 인가 기능을 구현할 수 있습니다.",
                "JWT를 통해 토큰 기반 인증을 수행할 수 있습니다.",
                "JWT의 헤더, 페이로드, 시그니처 구조를 이해하고 있습니다."
            ]
        },
        {
            id: 4,
            name: "MySQL",
            description: [
                "MySQL 데이터베이스를 활용하여 관계형 데이터베이스 구축 및 관리 경험이 있습니다.",
                "SQL 쿼리를 작성하여 데이터 조회, 삽입, 수정, 삭제 등의 CRUD 작업을 수행할 수 있습니다.",
                "데이터 무결성 및 트랜잭션 처리에 대한 이해도가 있습니다."
            ]
        },
        {
            id: 5,
            name: "IntelliJ",
            description: [
                "IntelliJ를 사용하여 Java 개발 환경을 구축할 수 있습니다.",
                "IntelliJ의 다양한 기능들(디버거, 리팩토링, 플러그인 등)을 활용하여 생산성을 높일 수 있습니다.",
                "IntelliJ에서 Git, Maven, Gradle 등의 도구를 연동하여 사용할 수 있습니다."
            ]
        }
    ];

    const [selectedSkill, setSelectedSkill] = useState(skills[0]);

    function changeSpace(name) {
        return name.toLowerCase().replace(" ", "_");
    }

    const handleSkillClick = (skill) => {
        setSelectedSkill(prevSkill => prevSkill && prevSkill.id === skill.id ? null : skill);
    };
    
    return (
        <section className="w-full max-w-4xl px-4 mx-auto">
            <div className="w-screen max-w-4xl">
                <ComponetHeader name="Skills & Tools" />
                <div className="grid grid-cols-6 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {skills.map((skill) => (
                        <div 
                            className={`flex flex-col items-center justify-center p-3 cursor-pointer h-36 ${selectedSkill && selectedSkill.id === skill.id ? 'border-2 border-slate-400 rounded-lg' : 'shadow-lg'}`}
                            tabIndex="0" 
                            role="button" 
                            aria-label={skill.name} 
                            key={skill.id}
                            onClick={() => handleSkillClick(skill)}
                        >
                            <img src={`./././images/skills/${changeSpace(skill.name)}.svg`} alt='' className="w-16 h-16 mb-3" />
                            <h3 className="leading-tight text-center">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className="p-6 mt-6 bg-gray-800 rounded-lg min-h-[200px] flex flex-col shadow-lg">
                    <AnimatePresence mode="wait">
                        {selectedSkill && (
                            <motion.div
                                key={selectedSkill.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h1 className="mb-2 text-2xl font-semibold">{selectedSkill.name}</h1>
                                <ul>
                                    {selectedSkill.description.map((desc) => (
                                        <li>{desc}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skill;