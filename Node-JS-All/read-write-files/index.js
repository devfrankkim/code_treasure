const fs = require("fs");
const fsPromises = require("fs").promises;

const path = require("path");

/*
Create: writeFile()
Create + update: appendFile()
Read: readFile()
rename: rename()
Delete: unlink()
*/

const fileOperations = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "fs.promises.txt"),
      "utf8"
    );
    // unlink -> delete original file
    await fsPromises.unlink(path.join(__dirname, "starter.txt"), data);
    await fsPromises.writeFile(path.join(__dirname, "fs.promises.txt"), data);

    await fsPromises.appendFile(
      path.join(__dirname, "fs.promises.txt"),
      "\n\n Appending file from promises"
    );
    await fsPromises.rename(
      path.join(__dirname, "fs.promises.txt"),
      path.join(__dirname, "fs.promisesNew.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "fs.promisesNew.txt"),
      "utf8"
    );
    console.log("newData ===> ", newData);
  } catch (err) {
    console.log(err);
  }
};
fileOperations();
// ============== exit on uncaught errors ==============
process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error :${err}`); // no such file or directory, open './starter.taxt'
  process.exit(1);
});

// ============== (READ): file ==============
fs.readFile("./starter.txt", (err, data) => {
  if (err) {
    console.log(err.message);
    throw err;
  }
  console.log(data); // <Buffer 73 74 61 72 74 65 72 20 70 61 67 65 20 39 3a 31 32 20 50 4d 20>
  console.log(data.toString()); // starter page 9:12 PM
});

//  ============== (READ): add "UTF8" -> no need to use "toString()" ==============
fs.readFile("./starter.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err.message);
    throw err;
  }
  console.log(data); // starter page 9:12 PM
});

// ============== (READ): path module ==============
fs.readFile(path.join(__dirname, "starter.txt"), (err, data) => {
  if (err) {
    console.log(err.message);
    throw err;
  }

  console.log("reading from path.join"); //  reading from "path.join"
});

console.log("__dirname ==> ", __dirname); // /Users/frankkim/Desktop/node-js-all/read-write-files

// ============== (Create): files ==============
fs.writeFile(
  path.join(__dirname, "reply.txt"),
  "Create replying.txt",
  (err) => {
    if (err) {
      console.log(err.message);
      throw err;
    }

    console.log("Write complete"); //
  }
);

// ============== (READ): path module ==============
fs.readFile(path.join(__dirname, "starter.txt"), (err, data) => {
  if (err) {
    console.log(err.message);
    throw err;
  }

  console.log("reading from path.join"); //  reading from "path.join"
});

console.log("__dirname ==> ", __dirname); // /Users/frankkim/Desktop/node-js-all/read-write-files

// ***** (Update): files + (Create) file if not available *****
// Solution => Try writing and use append inside write
fs.appendFile(
  path.join(__dirname, "reply.txt"),
  "Appending(updating) to new text",
  (err) => {
    if (err) {
      console.log(err.message);
      throw err;
    }

    console.log("Append complete"); //
  }
);

// ============== (Create): files  SOLUTION for append ==============

fs.writeFile(
  path.join(__dirname, "writeWithAppend.txt"),
  "Create writeWithAppend.txt",
  (err) => {
    if (err) {
      console.log(err.message);
      throw err;
    }

    console.log("Write complete"); //

    fs.appendFile(
      path.join(__dirname, "writeWithAppend.txt"),
      "Appending(updating) to new text",
      (err) => {
        if (err) {
          console.log(err.message);
          throw err;
        }

        console.log("Append complete"); //
      }
    );
  }
);

// =========  add more and rename it  =========
// >>>>>> Call back hell
/*
        fs.writeFile(
        path.join(__dirname, "writeWithAppend.txt"),
        "Create writeWithAppend.txt",
        (err) => {
            if (err) {
            console.log(err.message);
            throw err;
            }

            console.log("Write complete"); //

            fs.appendFile(
            path.join(__dirname, "writeWithAppend.txt"),
            "Appending(updating) to new text",
            (err) => {
                if (err) {
                console.log(err.message);
                throw err;
                }

                console.log("Append complete");

                // ===== rename =====
                fs.rename(
                path.join(__dirname, "writeWithAppend.txt"),
                path.join(__dirname, "newReply.txt"),
                (err) => {
                    if (err) {
                    console.log(err.message);
                    throw err;
                    }

                    console.log("Rename complete"); //
                }
                );
            }
            );
        }
        );
*/
