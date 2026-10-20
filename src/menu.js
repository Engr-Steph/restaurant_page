// loadMenuPage.js
import jollofImage from "./images/menu1.PNG";
import chickenImage from "./images/menu2.PNG";
import plantainImage from "./images/menu3.PNG";

function loadMenuPage() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";
    content.appendChild(heading);

    const menuItems = [
        {
            name: "Jollof Rice",
            description: "Delicious Nigerian-style jollof rice served with grilled chicken.",
            imageSrc: jollofImage,
            imageAlt: "Jollof Rice with Grilled Chicken"
        },
        {
            name: "Grilled Chicken",
            description: "Juicy grilled chicken seasoned with our special house spices.",
            imageSrc: chickenImage,
            imageAlt: "Grilled Chicken"
        },
        {
            name: "Fried Plantain",
            description: "Sweet and golden fried plantain.",
            imageSrc: plantainImage,
            imageAlt: "Fried Plantain"
        }
    ];

    menuItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-item-card");

        const img = document.createElement("img");
        img.src = item.imageSrc;
        img.alt = item.imageAlt;
        img.classList.add("menu-img");

        const textContainer = document.createElement("div");
        textContainer.classList.add("menu-text");

        const title = document.createElement("h2");
        title.textContent = item.name;

        const description = document.createElement("p");
        description.textContent = item.description;

        textContainer.appendChild(title);
        textContainer.appendChild(description);

        card.appendChild(img);
        card.appendChild(textContainer);

        content.appendChild(card);
    });
}

export default loadMenuPage;