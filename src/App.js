import Palette from "./components/Palette";
import seedColors from "./seedColors";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
