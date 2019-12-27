const pi = 3.14;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

function devidePi() {
  return pi / parseFloat(prompt("Enter a Value", "0"));
}

export default pi;
/*this is how you export componets */

export { triplePi, doublePi, devidePi };
