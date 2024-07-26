import "./App.css";
import Flake from "./flake/component";
import { randInt, randColor } from "./helpers/generators";

const App = () => {
  return (
    <div className="App">
      <Flake
        size={randInt(20, 40)}
        color = {randColor()}
        top = {0}
        left = {randInt(0, 100)}
      />
    </div>
  );
};

export default App;
