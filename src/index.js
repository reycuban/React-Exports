import React from "react";
import ReactDOM from "react-dom";
/*import * as pi from "./math.js";*/
import pi, { doublePi, triplePi, devidePi } from "./math.js";
/*to to be used <ul>
    <li>{pi}</li>
    <li>{doublePi()}2</li>
    <li>{devidePi()}3</li>
    <li>{triplePi()}3</li>
  </ul>,
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}2</li>
    <li>{pi.devidePi()}3</li>
    <li>{pi.triplePi()}3</li>
  </ul>,*/

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublePi()}2</li>
    <li>{devidePi()}3</li>
    <li>{triplePi()}3</li>
  </ul>,
  document.getElementById("root")
);
/*
<li>{pi}</li> it is how u use what u export to this file
a good way to rememmber! 
*/
