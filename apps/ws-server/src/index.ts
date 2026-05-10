import { WebSocketServer } from 'ws';
import { prisma } from "@repo/db/prisma"
const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', async function connection(ws) {
   await prisma.user.create({
    data: {
        username: Math.random().toString(),
        password: Math.random().toString()
    }
  })

  ws.send('Hey you are connected to the websocket server');
});