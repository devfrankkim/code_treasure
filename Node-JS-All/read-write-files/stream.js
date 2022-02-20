const fs = require("fs");

const rs = fs.createReadStream("./reply.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./from_stream.txt");

const copyNewPage = fs.createWriteStream("./copyNewPage.txt");

// Creating from_stream.txt file using ./reply.txt text.
// Copy -> 글 복사 후 -> 새로운 파일 -> 새롭게 시작.

rs.on("data", (dataChuckie) => {
  ws.write(dataChuckie);
});

rs.pipe(copyNewPage); // more efficent
