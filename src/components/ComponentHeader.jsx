import React from "react";

const ComponetHeader = (props) => {
    return (
        <header className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-100">{props.name}</h2>
                    <div className="w-24 h-1 mx-auto mt-4 bg-blue-500 rounded"></div>
        </header>
    )
}

export default ComponetHeader;