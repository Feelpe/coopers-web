import { Box, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "./input";

export const ContactForm = () => {
  return (
    <Flex w="80%" my={16} maxWidth={1480} mx="auto" px="6">
      <Box as="form" flex="1">
        <Heading size="lg" fontWeight="normal">
          GET IN <span>TOUCH</span>
        </Heading>

        <VStack spacing={6}>
          <Input
            name="name"
            label="Your name"
            placeholder="Type your name here..."
          />
          <SimpleGrid minChildWidth="240px" spacing={["4", "6"]} w="100%">
            <Input
              name="email"
              label="Email*"
              placeholder="example@example.com"
            />
            <Input name="tel" label="Telephone*" placeholder="( ) _____-____" />
          </SimpleGrid>
          <Input
            name="text"
            label="Message*"
            placeholder="Type what you want to say to us"
          />
        </VStack>
      </Box>
    </Flex>
  );
};
