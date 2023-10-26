const fs = require("fs");
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  err
    ? console.log("error ! can't create this file !")
    : console.log("file created successfully !");
});

fs.readFile("welcome.txt", "utf8", (err, data) => {
  err
    ? console.log("can't read the file", err)
    : console.log("welcome.txt : ", data);
});
