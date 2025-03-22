import React, {CSSProperties, FC, memo} from 'react';
import {TodoType} from "../../types/TodoType";
import {Card, Image, Text} from "@mantine/core";


interface TodoListItemProps {
    item: TodoType;
}

export const TodoListItem: FC<TodoListItemProps> = memo(({item}) => {

    const style: CSSProperties | undefined = item.done ? {
        border: "1px solid",
        borderColor: "rgba(213,76,94,0.20)"
    } : undefined;
    return (
        <Card
            shadow="sm"
            style={style}
        >
            <Card.Section>
                <Image
                    src="https://placehold.co/400x200"
                    h={200}
                    alt="No way!"
                />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
                {item.title}
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
                {item.content}
            </Text>
        </Card>
    );
});