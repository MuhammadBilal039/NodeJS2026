const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.end("Home Page");
  } else if (req.url == "/about") {
    res.end("About Page");
  } else if (req.url == "/services") {
    res.end("Services Page");
  } else if (req.url == "/contact") {
    res.end("Contact Page");
  } else {
    res.end("Wrong Page Demanded!");
  }

  //   if (req.url == "/cholay") {
  //     res.end("Ya lou dost, App ke cholay...");
  //   } else if (req.url == "/dahibaray") {
  //     res.end("Ya lou dost, App ke Dahibaray");
  //   } else if (req.url == "/") {
  //     res.end("dost! kaya karedo ge...?");
  //   } else {
  //     res.end("Sorry bai kuch bhi avilable nahi hai....");
  //   }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
