function loadContactPage() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const address = document.createElement("p");
    address.textContent = "123 Restaurant Street, Lagos";

    const phone = document.createElement("p");
    phone.textContent = "Phone: 0800-123-4567";

    const email = document.createElement("p");
    email.textContent = "Email: hello@stephanesrestaurant.com";

    content.appendChild(heading);
    content.appendChild(address);
    content.appendChild(phone);
    content.appendChild(email);
}

export default loadContactPage;