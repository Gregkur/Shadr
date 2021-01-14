import React, { useState, useEffect } from "react";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import "./App.css";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  useEffect(() => {
    syncLocalStorage();
  });

  const syncLocalStorage = () => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  };

  function findPalette(id) {
    return palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = (id) => {
    setPalettes(palettes.filter((palette) => palette.id !== id));
  };

  const getRandomColors = () => {
    const allColors = palettes.map((palette) => palette.colors).flat();
    const shuffled = allColors.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 15);
  };
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaletteForm
              savePalette={savePalette}
              palettes={palettes}
              seedColors={getRandomColors}
              maxColors="20"
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList
              palettes={palettes}
              {...routeProps}
              deletePalette={deletePalette}
            />
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
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
