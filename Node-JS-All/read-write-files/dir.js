const fs = require("fs");

// if the directory (folder) already exists,
// Let's not create it. We don't wanna write again.

if (!fs.existsSync("../NPM-modules")) {
  // creatae new directory (folder)
  fs.mkdir("../NPM-modules", (err) => {
    if (err) throw err;
    console.log("Directory (folder) created");
  });
}

// Delete the new directory
if (fs.existsSync("../NPM-modules")) {
  // Remove  directory
  fs.rmdir("../NPM-modules", (err) => {
    if (err) throw err;
    console.log("Directory (folder) created");
  });
}
