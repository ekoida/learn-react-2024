import { randInt } from "../helpers/generators";
import "./style.css";
import { useEffect, useState } from "react";

//HW1 - make sure the component detects the moment it reahces the bottom
//HW2 - when the component reaches the botom it should remove it self form the virtual DOM
const Flake = ({
  size = 0,
  color = 0,
  top = 0,
  left = 0,
  whenDone = () => {
    throw new Error("When done colback not implemented");
  },
}) => {
  const TOP_LIMIT = window.innerHeight;
  const [_top, _setTop] = useState(top);

  useEffect(() => {
    if (_top >= TOP_LIMIT) {
      whenDone();
    } else {
      setTimeout(() => {
        _setTop(_top + 1);
      }, 25);
    }
  }, [_top]);

  const style = {
    "--size": `${size}px`,
    "--color": `${color}`,
    "--top": `${_top}px`,
    "--left": `${left}%`,
  };

  return <div style={style} className="flake"></div>;
};

export default Flake;
