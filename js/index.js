const mapEl = document.querySelector(".map");
const container = document.querySelector(".container");

let map;

let header = document.createElement("h1");
header.textContent = "James' Places of Interest in Sabadell";
header.className = "header";

container.appendChild(header)
container.style.flexDirection = "column-reverse";
container.style.paddingBottom = "2rem";



