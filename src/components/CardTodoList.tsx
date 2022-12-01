import { Button, Card, Heading, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardTodoListProps {
  title: string;
  subTitle: string;
  description?: string;
  borderColor: string;
  children: ReactNode;
}

export const CardTodoList = ({
  title,
  subTitle,
  description,
  borderColor,
  children,
}: CardTodoListProps) => {
  return (
    <Card
      w="380px"
      m={4}
      align={"center"}
      boxShadow="lg"
      border="none"
      borderTop="solid"
      borderWidth={18}
      borderRadius={0}
      borderColor={borderColor}
    >
      <Heading p={8}>
        <Text align="center" fontSize="40px" fontWeight={600} lineHeight="54px">
          {title}
        </Text>
        <Text align="center" fontSize="24px" fontWeight={400}>
          {subTitle}
        </Text>
        <Text align="center" fontSize="24px" fontWeight={700}>
          {description}
        </Text>
      </Heading>
      <VStack w="full" px={6} justify="flex-end" align="flex-start">
        {children}
      </VStack>

      <Button w="80%" h="64px" m={8} mt={12} bgColor="black" color="white">
        erase all
      </Button>
    </Card>
  );
};
