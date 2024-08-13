import React from "react";
import Header from "./ComponentHeader"

const eduList = [
    {
        name: "상명대학교",
        period: ["2017.03", "2024.02"],
        description: "상명대학교(서울캠퍼스)에서 경영학부 학위를 취득하였습니다.",
    },
    {
        name: "국비지원 부트캠프 (백엔드)",
        period: ["2022.12", "2023.06"],
        description: "Java - Spring Boot를 기반으로 한 백엔드 과정을 수료하였습니다.",
    },
]

const Education = () => {
    return (
        <section className="w-full max-w-4xl px-5 mx-auto">
            <div className="">
                <Header name="Education" />
                <div className="space-y-12">
                    {eduList.map((edu, index) => (
                        <div key={index} className="flex items-start space-x-6">
                            <div className="flex-shrink-0">
                            </div>
                            <div className="flex-grow p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                                <h3 className="mb-2 text-xl font-semibold text-blue-400">{edu.name}</h3>
                                <p className="mb-4 text-sm text-gray-400">{`${edu.period[0]} - ${edu.period[1]}`}</p>
                                <p className="text-gray-300">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education;