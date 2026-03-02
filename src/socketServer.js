import net from "bun:net";
import fs from "bun:fs";

var wordFile = fs.readFileSync("./foo.txt", "utf8").split("\n");
// This server listens on a Unix socket at /var/run/mysocket
var unixServer = net.createServer((socket) => {
  var eventArray = [
    "close",
    "connect",
    "data",
    "drain",
    "error",
    "timeout",
    "disconnect",
  ];
  socket.on("end", () => {
    console.log("bye");
  });
  eventArray.forEach((event) => {
    socket.on(event, (event = event.toString()) => {
      console.log(`Connection ${event}`);
    });
  });

  socket.write("Hello from server");

  setInterval(() => {
    socket.write(wordFile[Math.floor(Math.random() * wordFile.length)]);
  }, 1000);
});

unixServer.listen("/var/run/user/1000/mysocket", () => {
  console.log("Unix server listening on /var/run/user/1000/mysocket");
});
