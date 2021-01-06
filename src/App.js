import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./App.css";

function App() {
  // console.log(generatePalette(seedColors[4]));
  return (
    <div>
      <Palette palette={generatePalette(seedColors[1])} />
    </div>
  );
}

export default App;
