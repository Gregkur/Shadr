import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

function DraggableColorList({ colors, removeColor }) {
  return (
    <div style={{ height: "100%" }}>
      {console.log(colors)}
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          color={color.color}
          name={color.name}
          key={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
}
export default SortableContainer(DraggableColorList);
