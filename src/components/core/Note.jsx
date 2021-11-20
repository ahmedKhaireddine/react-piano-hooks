import React from "react";
import "./Note.css"

const Note = (props) => {
  const {
    element: {
      className,
      isClicked,
      key,
      style,
      note
    },
    handleMouseDown,
    handleMouseUp,
  } = props

  return (
    <div
      className={`${className} ${isClicked ? "clicked" : ""}`}
      style={style}
      onMouseUp={() => handleMouseUp(note)}
      onMouseDown={() => handleMouseDown(note)}
    >
      <div className="label">
        <b>{key}</b>
        <span className="note">{note}</span>
      </div>
    </div>
  );
}

export default Note;