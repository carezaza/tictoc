import { SetTest, checkWinner } from "./game.utils";

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
