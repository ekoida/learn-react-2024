import { useState } from "react";
import Track from "./Track";
import Button from "./Button";
import Indicator from "./Indicator";
import "./Carousel.css";

const Carousel = ({ data }) => {
  const step = 600;
  const totalSlides = data.length - 1;

  const [trackPosition, setTrackPosition] = useState(0);
  const [active, setActive] = useState(1);

  const moveSlide = (direction) => {
    if (direction === "Left") {
      setTrackPosition((currentPosition) => (currentPosition === -step * totalSlides ? 0 : currentPosition - step));
      setActive((currentActive) => (currentActive > totalSlides ? 1 : currentActive + 1));
    } else if (direction === "Right") {
      setTrackPosition((currentPosition) => (currentPosition === 0 ? -step * totalSlides : currentPosition + step));
      setActive((currentActive) => (currentActive < 1 ? totalSlides : currentActive - 1));
    }
  };

  return (
    <div className="carousel">
      <Button className="left" moveSlide={moveSlide} direction={"Left"} />
      <Button className="right" moveSlide={moveSlide} direction={"Right"} />
      <Track data={data} position={trackPosition} />
      <div className="indicators">
        {data.map((entry, index) => (
          <Indicator key={entry.title} active={active === index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
