import { useState } from "react";
import "./App.css";
import Flake from "./flake/component";
import { randInt, randColor } from "./helpers/generators";

const App = () => {
  let [showChild, setShowChild] = useState(true);

  return (
    <div className="App">
      {showChild && (
        <Flake
          size={randInt(20, 40)}
          color={randColor()}
          top={0}
          left={randInt(0, 100)}
          whenDone={() => {
            setShowChild(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
