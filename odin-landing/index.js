var date = new Date();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = ` Copyright &copy; ${date.getFullYear()} by O. D. All rights reserved.`;
footer.appendChild(copyright);
