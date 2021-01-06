import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <h1>This will be the main page</h1>}
        />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>ONE ONE THE PALETTES</h1>}
        />
      </Switch>
    </Router>
    // <div>
    //   <Palette palette={generatePalette(seedColors[1])} />
    // </div>
  );
}

export default App;
