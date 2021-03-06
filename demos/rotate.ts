import * as ln from "../src";

const scene = new ln.Scene();
const min = new ln.Vector(-1, -1, -1);
const max = new ln.Vector(1, 1, 1);
const box = new ln.Cube(min, max);


let eye = new ln.Vector(2, 2, 2);
let center = new ln.Vector(0, 0, 0);
let up = new ln.Vector(0, 0, 1);
let width = window.innerWidth;
let height = window.innerHeight;

let paths = scene.render(eye, center, up, width, height, 100, 0.1, 100, 0.01);
console.log(paths);
let svg = ln.toSVG(paths, width, height);
document.body.innerHTML = svg;
