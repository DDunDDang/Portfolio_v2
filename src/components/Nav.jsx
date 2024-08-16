import React from "react";

const Nav = ({  getPreviousSection, getNextSection }) => {
    return (
        <div className="fixed top-0 left-0 w-full p-4 bg-gray-900">
            <div className="flex items-center justify-between">
                <div className="flex items-center w-1/3 text-left text-slate-400">
                    {getPreviousSection() && (
                        <>
                            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12l6-6v12l-6-6z" fill="currentColor"/>
                            </svg>
                            <span>{getPreviousSection()}</span>
                        </>
                    )}
                </div>
                <div className="flex items-center justify-end w-1/3 text-right text-slate-400">
                    {getNextSection() && (
                        <>
                            <span>{getNextSection()}</span>
                            <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 12l-6 6V6l6 6z" fill="currentColor"/>
                            </svg>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
