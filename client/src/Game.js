import React from "react";
import Board from "./Board";
import { connect } from "react-redux";
import { SetXO } from "./redux/game/game.actions";

function Game({ show, board, SetXO, win, size }) {
  const [turn, setTurn] = React.useState(
    Math.floor(Math.random() * 100) % 2 === 0 ? "X" : "O"
  );

  const handleSetXO = (b, i) => {
    if (!b && !win) {
      SetXO({ index: i, XO: turn });
      if (turn === "X") {
        setTurn("O");
      } else {
        setTurn("X");
      }
    }
  };

  if (!show || !board.length) return null;
  return (
    <div>
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
      <Board win={win} size={size} board={board} handleSetXO={handleSetXO} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  board: state.gameReducer.board,
  step: state.gameReducer.step,
  win: state.gameReducer.win,
});
export default connect(mapStateToProps, { SetXO })(Game);
