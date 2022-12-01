import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import dress from "../../assets/fotos/dress.svg";
import mac from "../../assets/fotos/mac.svg";
import painter from "../../assets/fotos/painter.svg";

import { CardSlider } from "./CardSlider";

export const Slider = () => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      centerMode
      centerSlidePercentage={12}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const defStyle = {
          marginLeft: 20,
          width: "30px",
          height: "30px",
          borderRadius: "100px",
          cursor: "pointer",
          background: "#C4C4C4",
        };
        const style = isSelected
          ? { ...defStyle, background: "#4AC959" }
          : { ...defStyle };
        return (
          <button
            key={index}
            style={style}
            role="button"
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          >
            {index}
          </button>
        );
      }}
    >
      <CardSlider img={painter}>
        Mark one activity as done makes your brain understands the power of
        doing.
      </CardSlider>
      <CardSlider img={dress}>
        Careful with misunderstanding the difference between a list of things
        and a list of desires.
      </CardSlider>
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
      <CardSlider img={mac}>
        Organize your daily job enhance your life performance
      </CardSlider>
    </Carousel>
  );
};
