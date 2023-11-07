const showAnimals = async () => {
    const objectsJSON = await getAnimals();
    const spaceObjectsDiv = document.getElementById("animals-div");

    if (!objectsJSON) {
        console.error("Invalid load of JSON");
        // You might want to show some error to the user here
        spaceObjectsDiv.innerHTML = "<p>Failed to load space objects. Please try again later.</p>";
        return;
    }

    objectsJSON.forEach((object) => {
        const section = document.createElement("section");
        spaceObjectsDiv.append(section);

        const h2 = document.createElement("h2");
        h2.textContent = object.name;
        section.append(h2);

        const category = document.createElement("p");
        category.textContent = `Category: ${object.category}`;
        section.append(category);

        const habitat = document.createElement("p");
        habitat.textContent = `Habitat: ${object.habitat}`;
        section.append(habitat);

        const foodItems = document.createElement("p");
        foodItems.textContent = `Food Items: ${object.foodItems}`;
        section.append(foodItems);

        const color = document.createElement("p");
        color.textContent = `Color: ${object.color}`;
        section.append(color);

        const funFact = document.createElement("p");
        funFact.textContent = `Fun Fact: ${object.funFact}`;
        section.append(funFact);

        const img = document.createElement("img");
        img.src = object.img || "path_to_default_animal.jpg"; // Use a default image if none provided
        img.alt = `Image of ${object.name}`;
        img.onerror = () => { img.src = "path_to_default_animal.jpg"; }; // Fallback to default image if the provided one fails to load
        section.append(img);
    });
};

const getAnimals = async () => {
    try {
        const response = await fetch('/api/animals'); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Error retrieving JSON", error);
        return null;
    }
};

window.onload = () => showAnimals();