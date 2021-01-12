import React from "react";

export const GlobalLights = () => {
    return <>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 20, 30]} angle={0.3} />
    </>;
}