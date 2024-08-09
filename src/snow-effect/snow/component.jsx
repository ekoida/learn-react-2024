import "./style.scss";
import Flake from "../flake/component";
import { randColor, randInt } from "../../helpers/generators";
import { useEffect, useState } from "react";

const Snow = ({ quantity }) => {
  const TOP_LIMIT = 98;
  const [flakes, setFlakes] = useState(() => {
    const flakesArray = [];
    for (let i = 1; i <= quantity; i++) {
      flakesArray.push(
        <Flake
          size={randInt(30, 70)}
          top={randInt(0, -100.5)}
          left={randInt(0, 100)}
          color={randColor()}
          key={i}
        />
      );
    }
    return flakesArray;
  });

  // HW1 apply limit to each flake - hint: use filter
  // Hw2 refactor the initialization logic - add 5 flakes with random left, color, different keys
  // HW3 use destructuring as much as possible to minimize the code inside the setter
  useEffect(() => {
    setTimeout(() => {
      setFlakes(
        flakes.map(({ props: { top, color, left, size }, key }) =>
          top > TOP_LIMIT ? (
            <Flake
              key={key}
              size={randInt(30, 70)}
              top={randInt(0, -100)}
              left={randInt(0, 100)}
              color={randColor()}
            />
          ) : (
            <Flake
              key={key}
              top={top + randInt(0.01, 0.3)}
              color={color}
              left={left}
              size={size}
            />
          )
        )
      );
    }, 25);
  });

  return flakes;
};

export default Snow;
