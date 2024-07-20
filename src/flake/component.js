import "./style.css";
import { randInt, randColor } from "../helpers/generators";

const Flake = ({ size = randInt(20, 40), color = randColor() }) => {
  const style = {
    "--size": `${size}px`,
    "--color": `${color}`,
  };

  return <div style={style} className="flake"></div>;
};

export default Flake;
