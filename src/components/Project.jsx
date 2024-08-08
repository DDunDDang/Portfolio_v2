import React from "react";

const Project = ({ openModal }) => {
    return (
        <div className="container flex items-center justify-center min-h-screen mx-auto">
            <section className="max-w-4xl px-4" id="project">
                <header className="mb-6 text-2xl font-bold text-center">
                    <h2>Projects</h2>
                </header>
                <div className="flex justify-center">
                    <button
                        target='_blank' 
                        rel='noreferrer' 
                        className='block max-w-xs p-2 my-8 text-center uppercase border border-gray-500 rounded-lg shadow-lg bg-gray'
                        onClick={() => openModal("https://github.com/DDunDDang")}
                    >
                        <span>See more on Github</span>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Project;