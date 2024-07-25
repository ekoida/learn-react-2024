import { useState } from "react";
import Track from "./Track";
import Button from "./Button";
import Indicator from "./Indicator";
import "./Carousel.css";

const Carousel = ({ data }) => {
  const [prev, setPrev] = useState(data.length - 1)
  const [current, setCurrent] = useState(0)
  const [next, setNext] = useState(1)

  const moveSlide = (direction) => {
    if (direction === "Left") {
      setPrev(state => state === 0 ? data.length -1: state -1)
      setCurrent(prev)
      setNext(current)
    
    } else if (direction === "Right") {
      setPrev(current)
      setCurrent(next)
      setNext(state => state >= data.length - 1 ? 0 : state + 1)
    }
  };

  const goTo = (index) => {
    setPrev(index === 0 ? data.length - 1 : index - 1)
    setCurrent(index)
    setNext(index === data.length - 1 ? 0 : index + 1)
  }

  return (
    <div className="carousel">
      <Button className="left" moveSlide={moveSlide} direction={"Left"} />
      <Button className="right" moveSlide={moveSlide} direction={"Right"} />
      <Track slide={data[current]} />
      <div className="indicators">
        {data.map((entry, index) => (
          <Indicator key={entry.title} active={current === index} index={index} goTo={goTo} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
