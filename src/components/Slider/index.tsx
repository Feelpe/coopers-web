import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import dress from "../../assets/fotos/dress.svg";
import mac from "../../assets/fotos/mac.svg";
import painter from "../../assets/fotos/painter.svg";

import { CardSlider } from "./CardSlider";

export const Slider = () => {
  return (
    <Carousel>
      <CardSlider img={mac}>
        Organize your daily job enhance your life performance
      </CardSlider>
      <CardSlider img={painter}>
        Mark one activity as done makes your brain understands the power of
        doing.
      </CardSlider>
      <CardSlider img={dress}>
        Careful with misunderstanding the difference between a list of things
        and a list of desires.
      </CardSlider>
    </Carousel>
  );
};
