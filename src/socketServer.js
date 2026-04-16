import net from "bun:net";
import fs from "bun:fs";

// sends random words out to the socket client
var wordFile = fs.readFileSync("./foo.txt", "utf8").split("\n");
// This server listens on a Unix socket at /var/run/mysocket
var UnixServer = net.createServer((socket) => {
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
    socket.write(Date.now().toString() + " ");
    socket.write(wordFile[Math.floor(Math.random() * wordFile.length)]);
  }, 1000);
});

export default UnixServer;
