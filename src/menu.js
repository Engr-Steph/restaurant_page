function loadMenuPage() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const item1 = document.createElement("h2");
    item1.textContent = "Jollof Rice";

    const description1 = document.createElement("p");
    description1.textContent =
        "Delicious Nigerian-style jollof rice served with grilled chicken.";

    const item2 = document.createElement("h2");
    item2.textContent = "Grilled Chicken";

    const description2 = document.createElement("p");
    description2.textContent =
        "Juicy grilled chicken seasoned with our special house spices.";

    const item3 = document.createElement("h2");
    item3.textContent = "Fried Plantain";

    const description3 = document.createElement("p");
    description3.textContent =
        "Sweet and golden fried plantain.";

    content.appendChild(heading);
    content.appendChild(item1);
    content.appendChild(description1);
    content.appendChild(item2);
    content.appendChild(description2);
    content.appendChild(item3);
    content.appendChild(description3);
}

export default loadMenuPage;