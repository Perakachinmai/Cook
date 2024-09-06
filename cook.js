function showRecipeDetails() {
    const recipe = document.getElementById('recipe').value;
    const ingredients = document.getElementById('ingredients');
    const steps = document.getElementById('steps');

    if (recipe === 'spaghetti') {
        ingredients.textContent = 'Ingredients: Pasta, Ground Beef, Tomato Sauce, Garlic, Onion';
        steps.textContent = 'Steps: 1. Cook pasta. 2. Brown the beef. 3. Simmer sauce. 4. Combine and serve.';
    } else if (recipe === 'curry') {
        ingredients.textContent = 'Ingredients: Chicken, Curry Powder, Coconut Milk, Onion, Garlic';
        steps.textContent = 'Steps: 1. Cook chicken. 2. Sauté onions. 3. Add spices and coconut milk. 4. Simmer.';
    } else if (recipe === 'stirfry') {
        ingredients.textContent = 'Ingredients: Mixed Vegetables, Soy Sauce, Garlic, Ginger, Tofu (optional)';
        steps.textContent = 'Steps: 1. Stir-fry vegetables. 2. Add sauce and tofu. 3. Serve with rice.';
    } else {
        ingredients.textContent = 'Ingredients: N/A';
        steps.textContent = 'Steps: N/A';
    }
}

function calculateCost() {
    const recipe = document.getElementById('recipe').value;
    const servings = +document.getElementById('servings').value;
    const total = document.getElementById('total');

    let costPerServing = 0;

    if (recipe === 'spaghetti') {
        costPerServing = 15;
    } else if (recipe === 'curry') {
        costPerServing = 12;
    } else if (recipe === 'stirfry') {
        costPerServing = 10;
    }

    const totalPrice = costPerServing * servings;
    total.textContent = `Total: $${totalPrice}`;
}
