import Palette from "./components/Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
      <Palette {...seedColors[3]} />
      <Palette {...seedColors[2]} />
      <Palette {...seedColors[1]} />
    </div>
  );
}

export default App;
