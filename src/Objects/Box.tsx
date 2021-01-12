import React from "react";

import { useBox } from "use-cannon";

export const Box = () => {
    const [ref, api] = useBox(() => ({
        mass: 0.1,
        position: [0, 4, 0],
        rotation: [(Math.random() - 0.5) * 4 * Math.PI, (Math.random() - 0.5) * 4 * Math.PI, (Math.random() - 0.5) * 4 * Math.PI],
    }));

    return <mesh ref={ref} onClick={() => {
        api.velocity.set((Math.random() - 0.5) * 6, 3, (Math.random() - 0.5) * 6)
    }}>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="royalblue" />
    </mesh>;
}