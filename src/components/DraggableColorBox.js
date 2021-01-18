import React from "react";

import { SortableElement } from "react-sortable-hoc";

import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "../styles/DraggableColorBoxStyles";

function DraggableColorBox(props) {
  const { classes, handleClick, name, color } = props;
  return (
    <div className={classes.draggableBox} style={{ backgroundColor: color }}>
      <div className={classes.draggableBoxContent}>
        <span className={classes.name}>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
}

export default SortableElement(withStyles(styles)(DraggableColorBox));
