/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog ", "My grandma ", "The mailman ", "My bird ", "My Mother "];
let action = ["ate ", "peed ", "crushed ", "bit ", "broke "];
let what = [
  "my homework ",
  "her pants ",
  "my phone ",
  "my nephew ",
  "the car ",
];
let when = [
  "before the class",
  "when she was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];
function excuseGen() {
  let excuse = "";
  let n = Math.floor(Math.random() * 5);
  let m = Math.floor(Math.random() * 5);
  let o = Math.floor(Math.random() * 5);
  let p = Math.floor(Math.random() * 5);
  excuse = who[n] + action[m] + what[o] + when[p];
  document.querySelector(".excuse").innerHTML = excuse;
  return excuse;
}
window.onload = excuseGen();

//{
//write your code here
//  let HelloWorld = "Hello";

//  document.querySelector(".excuse").innerHTML = HelloWorld;
//};
