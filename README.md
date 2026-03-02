# Unix Socket server api [dont reinvent the wheel]

    example on how to use unix socket server api to send and receive data 
    this example iterates over a text file and sends random lines to the client, this client can be a database or other server that is isolated from the wider network, 
    security is isolated only by user group or user id.

---

To install dependencies and create the socket:

```bash
bun install
bun run install
```

To run both server and client in the terminal:

```bash
bun run index.ts
```


---
This project was created using `bun init` in bun v1.3.2. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
