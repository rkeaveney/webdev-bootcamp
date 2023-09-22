var fs = require("fs");

/*fs.writeFile("message.txt", "Hello World!", function (err) {
    if (err) throw err;
    console.log("File written successfully.");
});*/

fs.readFile("message.txt", "utf-8", function (err, data) {
    if (err) throw err;
    console.log("File read successfully.");
    console.log(data);
});