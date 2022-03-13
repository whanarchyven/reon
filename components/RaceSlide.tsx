import { ReactNode, useState } from "react";
interface propsTestComponent {
    hero: object;
}
export const InventoryList = ({ hero }: propsTestComponent) => {
    // const vatname = [
    //   { name: "Vasya", age: 17 },
    //   { name: "Vika", age: 21 },
    //   { name: "Anton", age: 29 },
    // ];
    const varias = useState(5);
    const counter = varias[0];
    const setCounter = varias[1];
    return (
        <div className={"h-full w-full"}>
        </div>
    );
};
