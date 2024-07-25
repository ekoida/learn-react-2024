import "./style.css";
import { randInt, randColor } from "../helpers/generators";

const Flake = ({ size = randInt(20, 40), color = randColor(), top = 0, left = randInt(0, 100)}) => {
  const style = {
    "--size": `${size}px`,
    "--color": `${color}`,
    "--top": `${top}%`,
    '--left': `${left}%`,
  };

  return <div style={style} className="flake"></div>;
};

export default Flake;
