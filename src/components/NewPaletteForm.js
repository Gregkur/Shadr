import React, { useState } from "react";

import "react-colorful/dist/index.css";

import clsx from "clsx";

import ColorPickerForm from "./ColorPickerForm";

import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { withStyles } from "@material-ui/core";
import { arrayMove } from "react-sortable-hoc";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import PaletteFormNav from "./PaletteFormNav";
import DraggableColorList from "./DraggableColorList";
import seedColors from "../seedColors";
import styles from "../styles/NewPaletteFormStyles";

function NewPaletteForm(props) {
  const { classes } = props;
  const [open, setOpen] = useState(false);
  let [colors, setColors] = useState(seedColors[3].colors);
  const paletteIsFull = colors.length >= props.maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const savePalette = (newPaletteData) => {
    newPaletteData.id = newPaletteData.paletteName
      .toLowerCase()
      .replace(/ /g, "-");
    newPaletteData.colors = colors;
    props.savePalette(newPaletteData);
    props.history.push("/");
  };

  const removeColor = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((colors = arrayMove(colors, oldIndex, newIndex)));
  };

  const clearColors = () => {
    setColors([]);
  };

  const getRandomColor = () => {
    const allColors = seedColors.map((palette) => palette.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;

    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = colors.some(
        // eslint-disable-next-line no-loop-func
        (color) => color.name === randomColor.name
      );
    }

    setColors([...colors, randomColor]);
  };

  return (
    <div className={classes.newPaletteForm}>
      <PaletteFormNav
        open={open}
        palettes={props.palettes}
        savePalette={savePalette}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        onClose={handleDrawerClose}
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div style={{ backgroundColor: "#ababab" }}></div>
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              className={classes.singleButton}
              variant="outlined"
              color="secondary"
              onClick={clearColors}
            >
              Clear Palette
            </Button>
            <Button
              className={classes.singleButton}
              variant="outlined"
              color="primary"
              onClick={getRandomColor}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <DraggableColorList
          colors={colors}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}

export default withStyles(styles)(NewPaletteForm);
