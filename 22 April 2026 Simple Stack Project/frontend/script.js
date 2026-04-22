console.log("==>>> Hello bai jan!!!");

const heading = document.getElementById("heading");

fetch("http://localhost:5000/iftarmenu")
  .then((result) => result.json())
  .then((result) => {
    console.log(result);
    heading.innerText = result.users[1].itemName;
  });
