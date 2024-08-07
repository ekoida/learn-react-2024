import "./style.scss";
import Flake from "../flake/component";
import { randColor } from "../../helpers/generators";
import { useEffect, useState } from "react";

const Snow = ({ quantity }) => {
  const TOP_LIMIT = 80;
  let color = "rgb(50 50 255)";
  const [top, setTop] = useState(0);
  const [flakes, setFlakes] = useState([
    <Flake size={70} top={top} color={color} key={1} />,
  ]);

  useEffect(() => {
    setTimeout(() => {
      if (top > TOP_LIMIT) {
        setFlakes([]);
      } else {
        setTop(top + 5);
        setFlakes([<Flake size={70} top={top} color={color} key={1} />]);
      }
    }, 1000);
  });

  return flakes;
};

export default Snow;
