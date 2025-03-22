import React from "react";
import {SimpleGrid} from "@mantine/core";
import {TodoType} from "../../types/TodoType.ts";
import {TodoListItem} from "./TodoListItem.tsx";

const data: TodoType[] = [
    {
        id: 1,
        title: "Nauka gry na instrumencie",
        content: "Gitara, pianino, skrzypce",
        done: false,
    },
    {
        id: 2,
        title: "Czytanie książek",
        content: "Fantastyka, kryminały, biografie",
        done: false,
    },
    {
        id: 3,
        title: "Gotowanie nowych potraw",
        content: "Kuchnia włoska, azjatycka",
        done: true,
    },
    {
        id: 4,
        title: "Uprawianie sportów",
        content: "Bieganie, joga, wspinaczka",
        done: false,
    },
];

export const TodoList = () => {
    return (
        <div style={{width: "100%"}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map((item: TodoType) => <TodoListItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    );
};
