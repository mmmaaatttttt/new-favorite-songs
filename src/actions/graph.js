export const SET_AXIS_LABEL = 'SET_AXIS_LABEL';

export function setAxisLabel(axis, newLabel) {
  return dispatch => {
    dispatch({
      type: SET_AXIS_LABEL,
      axis,
      newLabel
    });
  }
}
