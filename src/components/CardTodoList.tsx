import { Card, Checkbox, Text } from "@chakra-ui/react";

export const CardTodoList = () => {
  return (
    <Card>
      <Text>To-do</Text>
      <Text>
        Take a breath. <br />
        Start doing.
      </Text>
      <Checkbox defaultChecked>this is a new task</Checkbox>
    </Card>
  );
};
