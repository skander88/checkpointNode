const genmdp = require("generate-password");
function passw() {
  const mdp = genmdp.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true,
  });
  return mdp;
}
console.log("your password is : ", passw());
