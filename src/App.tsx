import { Button, Flex, HStack, Img, Text } from "@chakra-ui/react";

import { Header } from "./components/Header";

import BGDark from "./assets/BGDark.svg";
import Icon from "./assets/icon1.svg";
import Photo from "./assets/photo.svg";

function App() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <HStack px="12" py={22} justify="space-between" align="center">
        <Flex direction="column">
          <Text fontSize="80px" fontWeight={700} lineHeight="64px">
            Organize
            <Text fontSize="60px" fontWeight={400} color="green.300" px={0}>
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

        <Img src={Icon} h={600} position="absolute" right={-10} zIndex={-1} />
        <Img src={Photo} h={400} position="revert" />
      </HStack>

      <Flex
        w={"100%"}
        h="420px"
        zIndex={-2}
        direction="column"
        justify="center"
        align="center"
        color="white"
        bgImage={BGDark}
      >
        <Text
          fontSize="60px"
          fontWeight={600}
          lineHeight="px"
          textDecoration="underline"
          textDecorationThickness="4px"
          textUnderlineOffset={10}
          textDecorationColor="green.300"
        >
          To-do List
        </Text>
        <Text align="center" fontSize="24px" pt={22}>
          Drag and drop to set your main priorities, check <br />
          when done and create what's new.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
