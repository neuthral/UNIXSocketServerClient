import net from "bun:net";

const client = new net.Socket();
const eventArray = ["close", "error", "end", "timeout"];
// listen for data events
client.on("data", (data) => {
  console.log(`:: ${data}`);
});
// all event listeners iterated over
eventArray.forEach((event) => {
  client.on(event, (event = event.toString()) => {
    console.log(`Connection ${event}`);
  });
});

client.connect("/var/run/user/1000/mysocket", () => {
  console.log("Connected to server");
  client.write("Hello from client");
});
