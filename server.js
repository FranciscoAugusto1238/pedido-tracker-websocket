const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 });

let clients = [];

wss.on("connection", (ws) => {
  clients.push(ws);
  console.log("Novo cliente conectado.");

  ws.on("message", (message) => {
    const data = JSON.parse(message);

    // Enviar para todos os clientes
    clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on("close", () => {
    clients = clients.filter(client => client !== ws);
    console.log("Cliente desconectado.");
  });
});

console.log("Servidor WebSocket iniciado na porta 3000");
