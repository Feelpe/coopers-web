import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  Flex,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";

interface CardSliderProps extends CardProps {
  img: string;
  children: string;
}

export const CardSlider = ({ img, children }: CardSliderProps) => {
  return (
    <Card w="360px" h="430px" m={4} rounded={16} bgColor="white" shadow="md">
      <CardHeader p={0}>
        <Img src={img} w="360px" h="200px" roundedTop={16} />
      </CardHeader>
      <CardBody textAlign="start" p={6}>
        <Flex>
          <Text
            color="gray.400"
            fontWeight={400}
            fontSize="16px"
            lineHeight="20px"
            p="6px 12px"
            mb={4}
            border="solid"
            borderWidth={2}
            borderRadius={50}
          >
            function
          </Text>
        </Flex>
        <Text fontWeight={500} fontSize="18px" lineHeight="22px">
          {children}
        </Text>
      </CardBody>
      <CardFooter p={6}>
        <Link
          color="green.300"
          fontWeight={700}
          fontSize="16px"
          lineHeight="24px"
        >
          leia mais
        </Link>
      </CardFooter>
    </Card>
  );
};
