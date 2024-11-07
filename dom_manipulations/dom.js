// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redp = document.createElement("p");
redp.style.color = "red";
redp.textContent = "Hey I’m red!";
container.appendChild(redp);

const headline3 = document.createElement("h3");
headline3.textContent = "I’m a blue h3!";
headline3.style.color = "blue";
container.appendChild(headline3);

const newDiv = document.createElement("div");
newDiv.style.cssText = "border: 1px solid black; background-color: pink;";

const childh1 = document.createElement("h1");
childh1.textContent = "I’m in a div";

const childParagraph = document.createElement("p");
childParagraph.textContent = "ME TOO!";


newDiv.appendChild(childh1);
newDiv.appendChild(childParagraph);

container.appendChild(newDiv);