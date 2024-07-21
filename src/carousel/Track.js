import Slide from "./Slide";
import "./Track.css";

const Track = ({ data, position }) => {
  console.log(position);
  return (
    <div style={{ "--step": `${position}px` }} className="track">
      {data.map((slideData) => (
        <Slide data={slideData} key={slideData.image} />
      ))}
    </div>
  );
};

export default Track;
