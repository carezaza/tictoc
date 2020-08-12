export const SetXO = (XO) => (dispatch) => {
  dispatch({ type: "SetXO", payload: XO });
  dispatch({ type: "StepUp" });
  dispatch({ type: "CheckWin" });
};
