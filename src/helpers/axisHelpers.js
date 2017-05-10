export function axisFormat(str) {
  var main = str.split("_")[0]
  return main[0].toUpperCase() + main.slice(1);
}

export const getAngle = num => Math.PI * ( 2 * num - 1 / 2 );