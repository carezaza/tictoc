export const SetXO = (XO) => async (dispatch) => {
  await dispatch({ type: "SetXO", payload: XO });
  await dispatch({ type: "StepUp" });
  await dispatch({ type: "CheckWin" });
};
