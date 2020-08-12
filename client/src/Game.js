import React from "react";
import { connect } from "react-redux";
import { SetXO } from "./redux/game/game.actions";

function Game({ show, board, SetXO, win, size }) {
  const [turn, setTurn] = React.useState(
    Math.floor(Math.random() * 100) % 2 === 0 ? "X" : "O"
  );

  if (!show) return null;
  return (
    <React.Fragment>
      <div className="resultContainer">
        {win ? (
          <p style={{ textAlign: "center", color: "red" }}>
            <strong>{win === "Draw" ? `DRAW` : `${win} - WON`}</strong>
          </p>
        ) : (
          <p style={{ textAlign: "center" }}>
            Turn - <strong>{turn}</strong>
          </p>
        )}
      </div>

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
              onClick={() => {
                if (!b && !win) {
                  SetXO({ index: i, XO: turn });
                  if (turn === "X") {
                    setTurn("O");
                  } else {
                    setTurn("X");
                  }
                }
              }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  board: state.gameReducer.board,
  step: state.gameReducer.step,
  win: state.gameReducer.win,
});
export default connect(mapStateToProps, { SetXO })(Game);
