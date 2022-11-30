import { Card, CardProps, Img, Text } from "@chakra-ui/react";

interface CardSliderProps extends CardProps {
  img: string;
  children: string;
}

export const CardSlider = ({ img, children }: CardSliderProps) => {
  return (
    <Card w="360px" h="430px" direction="column" rounded={6}>
      <Img src={img} w="360px" h="200px" />
      <Text fontWeight={500} fontSize="18px" lineHeight="22px">
        {children}
      </Text>
    </Card>
  );
};
