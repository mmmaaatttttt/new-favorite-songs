export const SET_AXIS_LABEL = 'SET_AXIS_LABEL';

export function dispatchNewAxisLabel(axis, newLabel) {
  return dispatch => {
    dispatch(setAxisLabel(axis, newLabel));
  }
}

function setAxisLabel(axis, newLabel) {
  return {
    type: SET_AXIS_LABEL,
    axis,
    newLabel
  }
}
