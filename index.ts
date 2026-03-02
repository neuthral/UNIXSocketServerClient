import UnixServer from "./src/socketServer";
import client from "./src/client";

const socketPath = "/tmp/test.sock";

UnixServer.listen(socketPath, () => {
  console.log("Unix server listening on", socketPath);
});

client.connect(socketPath, () => {
  console.log("Connected to server");
  client.write("Hello from client");
});
