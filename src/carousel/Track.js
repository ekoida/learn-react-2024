import Slide from "./Slide";
import "./Track.css";

const Track = ({ slide }) => {
  return ( 
        <Slide data={slide} key={slide.image} />
  );
};

export default Track;
