import {
  Button,
  Checkbox,
  Flex,
  HStack,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";

import { CardTodoList } from "./components/CardTodoList";
import { Header } from "./components/Header";

import BGDark from "./assets/BGDark.svg";
import Icon from "./assets/icon1.svg";
import Photo from "./assets/photo.svg";
import { CheckboxStyled } from "./components/Checkbox/Checkbox";

function App() {
  return (
    <>
      <Flex direction="column" pt={4} px={12}>
        <Header />

        <HStack py="55px" justify="space-between" align="center">
          <Flex direction="column">
            <Text fontSize="80px" fontWeight={700} lineHeight="64px">
              Organize
              <Text fontSize="60px" fontWeight={400} color="green.300">
                your daily jobs
              </Text>
            </Text>
            <Text fontWeight={600} fontSize="24px" py={8}>
              The only way to get things done
            </Text>

            <Button
              w="300px"
              h="64px"
              bg="green.300"
              colorScheme="none"
              rounded="10px"
              fontSize="24px"
            >
              Go to To-do list
            </Button>
          </Flex>

          <Img
            src={Icon}
            w="640px"
            h="734px"
            position="absolute"
            right={-10}
            zIndex={-1}
          />
          <Img src={Photo} h={500} position="revert" zIndex={1} />
        </HStack>
      </Flex>

      <Flex maxH={"420px"}>
        <Flex
          w={"100%"}
          zIndex={-2}
          justify="center"
          bgImage={BGDark}
          bgRepeat="no-repeat"
          bgSize={"cover"}
        >
          <VStack color="white" py={"10vh"}>
            <Text
              fontSize="60px"
              fontWeight={600}
              textDecoration="underline"
              textDecorationThickness="4px"
              textUnderlineOffset={10}
              textDecorationColor="green.300"
            >
              To-do List
            </Text>
            <Text align="center" fontSize="24px">
              Drag and drop to set your main priorities, check <br />
              when done and create what's new.
            </Text>
          </VStack>
        </Flex>
      </Flex>

      <Flex p={6} align="flex-start" justify="center">
        <CardTodoList
          borderColor="orange.500"
          title="To-do"
          subTitle={"Take a breath. Start doing."}
        >
          <VStack>
            <CheckboxStyled
              colorScheme="whiteAlpha"
              borderColor="whiteAlpha.700"
              bgColor="white"
              roundedFull
              size="lg"
            >
              this is a new task
            </CheckboxStyled>
            <Checkbox defaultChecked>Editing an item...</Checkbox>
          </VStack>
        </CardTodoList>
        <CardTodoList
          borderColor="green.300"
          title="Done"
          subTitle="Congratulation!"
          description="You have done 5 tasks"
        >
          <Checkbox defaultChecked>Editing an item...</Checkbox>
        </CardTodoList>
      </Flex>
    </>
  );
}

export default App;
