import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import Page from "./components/Page";

import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";
import "./App.css";

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
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={(routeProps) => (
                    <Page>
                      <NewPaletteForm
                        savePalette={savePalette}
                        palettes={palettes}
                        seedColors={getRandomColors}
                        maxColors="20"
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        palettes={palettes}
                        deletePalette={deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={(routeProps) => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          findPalette(routeProps.match.params.id)
                        )}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={(routeProps) => (
                    <Page>
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
}

export default App;
