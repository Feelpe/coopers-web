import { Button, Flex, Img } from "@chakra-ui/react";

import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="12"
      align="center"
      justify="space-between"
      bg="transparent"
    >
      <Img src={Logo} />

      <Button
        bg="black"
        colorScheme="black"
        color="white"
        rounded="none"
        px={8}
      >
        entrar
      </Button>
    </Flex>
  );
}
