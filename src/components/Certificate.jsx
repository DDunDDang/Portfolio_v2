import React from "react";
import ComponetHeader from "./ComponentHeader";

const Certificate = () => {
    const certificates = [
        { id: 0, name: "SQL 개발자(SQLD)", date: "2023. 07. 07" },
        { id: 1, name: "리눅스마스터1차", date: "2024.08.07" },
        { id: 2, name: "정보처리기사(예정)", date: "2024.09.10" },
    ];

    return (
        <section className='w-full max-w-4xl px-5 mx-auto -mt-14'>
            <ComponetHeader name="Certificates" />
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {certificates.map((certificate) => (
                    <li key={certificate.id} className="p-4 bg-gray-100 rounded-lg">
                        <h3 className='mb-2 text-xl font-bold'>
                            {certificate.name}
                        </h3>
                        <p className="text-gray-600">
                            Date: {certificate.date}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Certificate;
