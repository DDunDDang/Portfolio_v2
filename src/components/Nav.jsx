import React from "react";

const Nav = ({ currentSection, onNavigate, sectionNames }) => {
    const getPreviousSection = () => {
        return currentSection > 0 ? sectionNames[currentSection - 1] : null;
    };

    const getNextSection = () => {
        return currentSection < sectionNames.length - 1 ? sectionNames[currentSection + 1] : null;
    };

    const buttonBaseClass = "flex items-center px-4 py-2 rounded-md duration-200";

    return (
        <nav className="fixed top-0 left-0 z-10 w-full p-4 bg-gray-800 shadow-md">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <button 
                    className={`${buttonBaseClass} ${getPreviousSection()}`}
                    onClick={() => getPreviousSection() && onNavigate(currentSection - 1)}
                    disabled={!getPreviousSection()}
                >
                    {getPreviousSection() && (
                        <>
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{getPreviousSection()}</span>
                        </>
                    )}
                </button>
                <button 
                    className={`${buttonBaseClass} ${getNextSection()}`}
                    onClick={() => getNextSection() && onNavigate(currentSection + 1)}
                    disabled={!getNextSection()}
                >
                    {getNextSection() && (
                        <>
                            <span>{getNextSection()}</span>
                            <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Nav;