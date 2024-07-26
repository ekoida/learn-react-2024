import "./style.css";
import { useState } from "react";

//HW1 - make sure the component detects the moment it reahces the bottom
//HW2 - when the component reaches the botom it should remove it self form the virtual DOM
const Flake = ({size = 0, color = 0, top = 0, left = 0}) => {
  const [_top, _setTop ] = useState(top)

  setTimeout(() => {
    _setTop(_top + 10)
  }, 500)
  
  const style = {
    "--size": `${size}px`,
    "--color": `${color}`,
    "--top": `${_top}%`,
    '--left': `${left}%`,
  };

  return <div style={style} className="flake"></div>;
};

export default Flake;
