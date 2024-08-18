import React, { useState } from "react";
import ComponetHeader from "./ComponentHeader";
import { motion, AnimatePresence } from "framer-motion";

const Skill = () => {

    const skills = [
        { id: 0, name: "Java", description: []},
        { id: 1, name: "Spring Boot", description: [] },
        { id: 2, name: "Spring Security", description: [] },
        { id: 3, name: "JWT", description: [] },
        { id: 4, name: "MySQL", description: [] },
        { id: 5, name: "IntelliJ", description: [] },
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
            <div className="p-6 mt-6 bg-gray-800 rounded-lg min-h-[200px] flex flex-col">
                <AnimatePresence mode="wait">
                    {selectedSkill && (
                        <motion.div
                            key={selectedSkill.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h4 className="mb-2 text-xl font-semibold">{selectedSkill.name}</h4>
                            <ul>
                                {selectedSkill.description.map((desc) => (
                                    <li>{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skill;