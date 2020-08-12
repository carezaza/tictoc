import React from "react";

function Board({ board, handleSetXO, size, win }) {
  return (
    <div className="boardContainer">
      <div
        className="board"
        style={{ gridTemplateColumns: `repeat(${size},auto)` }}
      >
        {board.map((b, i) => (
          <div
            className="board-cell"
            key={i}
            style={{
              cursor: b || win ? "default" : "pointer",
              backgroundColor: b ? "#ccc" : "inherit",
            }}
            onClick={() => handleSetXO(b, i)}
          >
            {b}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
