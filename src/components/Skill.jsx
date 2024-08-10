import React from 'react';

const Skill = () => {
    const skills = [
        { id: 0, name: "Java" },
        { id: 1, name: "Spring Boot" },
        { id: 2, name: "Spring Security" },
        { id: 3, name: "JWT" },
        { id: 4, name: "MySQL" },
        { id: 5, name: "IntelliJ" },
    ]

    function changeSpace(name) {
        return name.toLowerCase().replace(" ", "_");
    }
    
    return (
        <section className="w-full max-w-4xl mx-auto">
            <header className="pt-8 mb-4 text-2xl font-bold">
                <h2>Skills & Tools</h2>
            </header>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {skills.map((skill) => (
                    <div className="flex flex-col items-center" tabIndex="0" role="img" aria-label={skill.name} key={skill.id}>
                        <img src={`./././images/skills/${changeSpace(skill.name)}.svg`} alt='' className="w-16 h-16 mb-2" />
                        <h3 className="text-lg text-center">
                            {skill.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skill;