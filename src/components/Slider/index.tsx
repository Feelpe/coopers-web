import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import mac from "../../assets/fotos/mac.svg";

import { CardSlider } from "./CardSlider";

export const Slider = () => {
  return (
    <Carousel>
      <CardSlider img={mac}>
        Mark one activity as done makes your brain understands the power of
        doing.
      </CardSlider>
      {/* <Card>
        <Img src={painter} w="360px" h="200px" />
        <Text fontWeight={500} fontSize="18px" lineHeight="22px">
          Mark one activity as done makes your brain understands the power of
          doing.
        </Text>
      </Card>
      <Card>
        <Img src={dress} w="360px" h="200px" />
        <Text fontWeight={500} fontSize="18px" lineHeight="22px">
          Careful with misunderstanding the difference between a list of things
          and a list of desires.
        </Text>
      </Card>
      <Card>
        <Img src={mac} w="360px" h="200px" />
        <Text fontWeight={500} fontSize="18px" lineHeight="22px">
          Organize your daily job enhance your life performance
        </Text>
      </Card>
      <Card>
        <Img src={painter} w="360px" h="200px" />
        <Text fontWeight={500} fontSize="18px" lineHeight="22px">
          Mark one activity as done makes your brain understands the power of
          doing.
        </Text>
      </Card>
      <Card>
        <Img src={dress} w="360px" h="200px" />
        <Text fontWeight={500} fontSize="18px" lineHeight="22px">
          Careful with misunderstanding the difference between a list of things
          and a list of desires.
        </Text>
      </Card> */}
    </Carousel>
  );
};
