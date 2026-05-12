const container = document.getElementById("container");
const allButtons = document.querySelectorAll(".pagination button");

let limit = 10;
let currentPage = 1;

// Fetch Users
async function displayProducts() {
  // Purane cards remove karo
  container.innerHTML = "";

  const usersJson = await fetch(
    `http://localhost:8000/api/v1/users?limit=${limit}&currentPage=${currentPage}`,
  );

  const users = await usersJson.json();

  users.data.forEach((user) => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
      <h2>${user.userName}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Age:</strong> ${user.age}</p>
    `;

    container.append(card);
  });
}

// Pagination Buttons
allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Sab buttons se active remove
    allButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Current button active
    button.classList.add("active");

    // Current page update
    currentPage = Number(button.innerText);

    console.log("Current Page:", currentPage);

    // New users fetch
    displayProducts();
  });
});

// Default Load
displayProducts();
