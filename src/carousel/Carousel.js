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
    } else if (direction === "Right") {
      setTrackPosition((currentPosition) => (currentPosition === 0 ? -step * totalSlides : currentPosition + step));
    }
  };

  return (
    <div className="carousel">
      <Button className="left" moveSlide={moveSlide} direction={"Left"} />
      <Button className="right" moveSlide={moveSlide} direction={"Right"} />
      <Track data={data} position={trackPosition} />
      <div className="indicators">
        {data.map((entry) => (
          <Indicator key={entry.title} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
