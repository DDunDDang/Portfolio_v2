import React from "react";

const Main = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-16 md:py-32">
            <div className="w-full max-w-4xl space-y-8 animate-fadeIn">
                <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-7xl">
                    안녕하세요.<br />
                    백엔드 개발자 송준상입니다.
                </h1>
            </div>
        </section>
    );
};

export default Main;