import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import "./App.css";
import PaletteList from "./components/PaletteList";

function App() {
  function findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => <h1>Single color page</h1>}
        />
      </Switch>
    </Router>
    // <div>
    //   <Palette palette={generatePalette(seedColors[1])} />
    // </div>
  );
}

export default App;
