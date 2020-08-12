export const SetXO = (XO) => async (dispatch) => {
  dispatch({ type: "SetXO", payload: XO });
  dispatch({ type: "StepUp" });
  dispatch({ type: "CheckWin" });
};
