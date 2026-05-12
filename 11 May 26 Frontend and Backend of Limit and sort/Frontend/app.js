const usersContainer = document.getElementById("usersContainer");
const searchInput = document.getElementById("searchInput");
const sortAge = document.getElementById("sortAge");

let users = [];
let currentPage = 3;
let userPerPage = 5;
let sortBy = "-id";

// Fetch Users From API
async function fetchUsers() {
  try {
    let limit = 5;
    const response = await fetch(
      `http://localhost:8000/api/v1/users?limit=${limit}&currentPage=${currentPage}&sort=${sortBy}&search=${"Bilal"}`,
    );

    const data = await response.json();
    // Store API data
    users = data.data;

    // Display Users
    displayUsers(users);
  } catch (error) {
    console.log("Error Fetching Users:", error);
  }
}

// Display Users
function displayUsers(data) {
  usersContainer.innerHTML = "";

  if (data.length === 0) {
    usersContainer.innerHTML = `
      <h2>No Users Found</h2>
    `;

    return;
  }

  data.forEach((user) => {
    const card = document.createElement("div");

    card.classList.add("user-card");

    card.innerHTML = `
      <div class="avatar">
        ${user.userName.charAt(0).toUpperCase()}
      </div>

      <h3>${user.userName}</h3>

      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Age:</strong> ${user.age}</p>

      <div class="card-buttons">
        <button class="view-btn">View</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    usersContainer.appendChild(card);
  });
}

// Search Users
searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(value),
  );

  displayUsers(filteredUsers);
});

// Sort Users By Age
sortAge.addEventListener("change", () => {
  let sortedUsers = [...users];

  if (sortAge.value === "asc") {
    sortedUsers.sort((a, b) => a.age - b.age);
  } else if (sortAge.value === "desc") {
    sortedUsers.sort((a, b) => b.age - a.age);
  }

  displayUsers(sortedUsers);
});

// Load Users Initially
fetchUsers();
