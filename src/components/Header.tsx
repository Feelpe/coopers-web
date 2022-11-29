import { Button, Flex, Img } from "@chakra-ui/react";

import Logo from "../assets/Logo.svg";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      mt={8}
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
