import restaurantImage from "./images/restaurant.png";

function loadHomePage() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Stephanie's Restaurant";

    const paragraph = document.createElement("p");
    paragraph.textContent =  "Welcome to Stephanie's Restaurant! We serve delicious food made with fresh ingredients. (JESUS CHRIST IS KING)";

    const image = document.createElement("img");
    image.src = restaurantImage;
    image.alt = "Stephanie's Restaurant dining room and signature dishes";

    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(image);

}
export default loadHomePage