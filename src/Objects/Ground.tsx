import React from "react";
import { MeshProps } from "react-three-fiber";
import { usePlane } from "use-cannon";

const groundRotation: MeshProps["rotation"] = [-Math.PI / 2, 0, 0];

export const Ground = () => {
    const [ref] = usePlane(() => ({ rotation: groundRotation as number[], position: [0, -2.5, 0] }));

    return <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[200, 200]} />
        <meshLambertMaterial attach="material" color="green" />
    </mesh >;
}