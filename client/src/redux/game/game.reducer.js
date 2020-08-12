const INITIAL_STATE = {
  test: [],
  board: [],
  win: null,
  step: 0,
};

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case "SetBoard":
      return {
        ...state,
        board: payload,
        test: SetTest(payload),
      };
    case "SetXO":
      return {
        ...state,
        board: state.board.map((b, i) => {
          if (i === payload.index) {
            return payload.XO;
          }
          return b;
        }),
      };
    case "StepUp":
      return {
        ...state,
        step: state.step + 1,
      };
    case "CheckWin":
      return {
        ...state,
        win: checkWinner(state.board, state.step, state.test),
      };
    default:
      return state;
  }
};

function SetTest(board) {
  const test = [];
  let columns = Math.sqrt(board.length);

  //   horizontal
  let horizontal = [];
  for (let i = 0; i < board.length; i++) {
    horizontal.push(i);
    if (horizontal.length === Math.sqrt(board.length)) {
      test.push(horizontal);
      horizontal = [];
    }
  }

  //   vertical
  let vertical = [];
  let winVertical = 0;
  let countV = 0;
  for (let i = 0; i < board.length; i++) {
    vertical.push(winVertical);
    if (vertical.length === columns) {
      test.push(vertical);
      vertical = [];
      countV += 1;
      winVertical = countV;
    } else {
      winVertical += columns;
    }
  }

  //   Diagonal left
  let diagonalLeft = [];
  let winDiagonalLeft = 0;
  for (let i = 0; i < board.length; i++) {
    diagonalLeft.push(winDiagonalLeft);
    if (diagonalLeft.length === columns) {
      test.push(diagonalLeft);
      break;
    } else {
      winDiagonalLeft += columns + 1;
    }
  }

  //   Diagonal Right
  let diagonalRight = [];
  let winDiagonalRight = columns - 1;
  for (let i = 0; i < board.length; i++) {
    diagonalRight.push(winDiagonalRight);
    if (diagonalRight.length === columns) {
      test.push(diagonalRight);
      break;
    } else {
      winDiagonalRight += columns - 1;
    }
  }
  return test;
}

function checkWinner(board, step, test) {
  let winner = null;
  let columns = Math.sqrt(board.length);

  for (let i = 0; i < test.length; i++) {
    const arr = [...test[i]];
    if (winner) {
      break;
    } else {
      for (let j = 0; j < test[i].length; j++) {
        arr.push(board[test[i][j]]);
        const X = arr.filter((a) => a === "X");
        const O = arr.filter((a) => a === "O");
        if (X.length === columns) {
          winner = "X";
          break;
        }
        if (O.length === columns) {
          winner = "O";
          break;
        }
      }
    }
  }

  if (winner === null && step === board.length) {
    return "Draw";
  } else {
    return winner;
  }
}
