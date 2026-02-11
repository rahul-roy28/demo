const { createApp } = require("../src/server");

function getJson(url) {
  return fetch(url).then(async (res) => ({
    status: res.status,
    body: await res.json()
  }));
}

describe("server.js", () => {
  let server;
  let baseUrl;

  beforeAll(async () => {
    server = createApp();
    await new Promise((resolve) => server.listen(0, resolve));
    const { port } = server.address();
    baseUrl = `http://127.0.0.1:${port}`;
  });

  afterAll(async () => {
    await new Promise((resolve) => server.close(resolve));
  });

  test("GET /health returns 200 with status ok", async () => {
    const response = await getJson(`${baseUrl}/health`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: "ok" });
  });

  test("GET /sum returns computed result", async () => {
    const response = await getJson(`${baseUrl}/sum`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ result: 5, even: false });
  });

  test("unknown route returns 404", async () => {
    const response = await getJson(`${baseUrl}/random`);
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Not found" });
  });
});
