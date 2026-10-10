import DiscordBot from "./bot";

const bot = new DiscordBot();
bot.start().catch(console.error);
import * as http from "http";

const port = process.env.PORT || 10000;
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Sebastian is alive!\n");
}).listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});
