export function SetTest(board) {
  const test = [];
  let size = Math.sqrt(board.length);

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
    if (vertical.length === size) {
      test.push(vertical);
      vertical = [];
      countV += 1;
      winVertical = countV;
    } else {
      winVertical += size;
    }
  }

  //   Diagonal left
  let diagonalLeft = [];
  let winDiagonalLeft = 0;
  for (let i = 0; i < board.length; i++) {
    diagonalLeft.push(winDiagonalLeft);
    if (diagonalLeft.length === size) {
      test.push(diagonalLeft);
      break;
    } else {
      winDiagonalLeft += size + 1;
    }
  }

  //   Diagonal Right
  let diagonalRight = [];
  let winDiagonalRight = size - 1;
  for (let i = 0; i < board.length; i++) {
    diagonalRight.push(winDiagonalRight);
    if (diagonalRight.length === size) {
      test.push(diagonalRight);
      break;
    } else {
      winDiagonalRight += size - 1;
    }
  }
  return test;
}

export function checkWinner(board, step, test) {
  let winner = null;
  let winLength = Math.sqrt(board.length);

  for (let i = 0; i < test.length; i++) {
    const arr = [];
    for (let j = 0; j < test[i].length; j++) {
      arr.push(board[test[i][j]]);
    }
    const X = arr.filter((a) => a === "X");
    const O = arr.filter((a) => a === "O");
    if (X.length === winLength) {
      winner = "X";
      break;
    }
    if (O.length === winLength) {
      winner = "O";
      break;
    }
    if (winner) {
      break;
    }
  }

  if (winner === null && step === board.length) {
    return "Draw";
  } else {
    return winner;
  }
}
