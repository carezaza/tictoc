import React from "react";
import Game from "./Game";
import store from "./redux/store";

function App() {
  const [size, setSize] = React.useState(1);
  const [show, setShow] = React.useState(false);

  const handlePlay = () => {
    if (size > 0) {
      const newBoard = [];
      for (let i = 0; i < Math.pow(Math.floor(size), 2); i++) {
        newBoard.push(null);
      }
      store.dispatch({ type: "SetBoard", payload: newBoard });
      setShow(true);
    }
  };

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>Tic Tac Toe</h1>
      <div>
        {show ? (
          <div className="sizeBox">
            {size} x {size} Game
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>
              Size selected -
              <strong>
                {size} x {size}
              </strong>
            </p>
            <input
              type="number"
              min="0"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
            <button
              className="btn-play"
              onClick={handlePlay}
              disabled={size < 1}
            >
              PLAY
            </button>
          </div>
        )}
      </div>
      <Game show={show} size={size} />
    </div>
  );
}

export default App;
