const http = require("http");
const { add, isEven } = require("./logic");

function requestHandler(req, res) {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  if (req.url === "/sum") {
    const result = add(2, 3);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ result, even: isEven(result) }));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}

function createApp() {
  return http.createServer(requestHandler);
}

if (require.main === module) {
  const server = createApp();
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = { createApp };
