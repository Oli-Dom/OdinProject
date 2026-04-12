const recipes = {
  "Spaghetti Bolognese": {
    description: "A classic Italian pasta dish with a rich, meaty sauce.",
    link: "./recipes/spaghetti-bolognese.html",
  },
  "Chicken Curry": {
    description:
      "A flavorful and spicy dish made with tender chicken pieces simmered in a fragrant curry sauce.",
    link: "./recipes/chicken-curry.html",
  },
  "Vegetable Stir-Fry": {
    description:
      "A quick and healthy dish made with a variety of fresh vegetables sautéed in a savory sauce.",
    link: "./recipes/v_stir-fry.html",
  },
};

let recipeContainer = document.getElementById("recipe-container");

for (let recipe in recipes) {
  let recipeElement = document.createElement("div");
  recipeElement.className = "recipe-card";

  recipeElement.innerHTML = `
        <h2>${recipe}</h2>
        <p>${recipes[recipe].description}</p>
        <a href=${recipes[recipe].link}>View Recipe</a>
    `;
  recipeContainer.appendChild(recipeElement);
}
