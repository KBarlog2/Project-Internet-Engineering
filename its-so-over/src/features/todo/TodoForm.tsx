import {useTodoForm} from "./hooks/useTodoForm";
import {TodoFormValues} from "../../types/todoFormValues.tsx";
import {Paper, Stack, TextInput, Button, Checkbox, Group, Textarea} from "@mantine/core";

export const TodoForm = () => {
    const form = useTodoForm();

    const handleSubmit = (vals: TodoFormValues) => {
        console.log(vals);
    }

    return (
        <Paper shadow="lg" p={"xl"}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={"xs"}>
                    <TextInput
                        withAsterisk
                        label="Tytuł"
                        placeholder="Tytuł todo"
                        {...form.getInputProps('title')}
                    />

                    <Textarea withAsterisk label="Treść"
                              placeholder="Treść todo" {...form.getInputProps('content')}>


                    </Textarea>

                    <Checkbox
                        label="Wykonane"
                        {...form.getInputProps('done', {type: 'checkbox'})}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Wyślij</Button>
                    </Group>

                </Stack>
            </form>
        </Paper>
    )

}