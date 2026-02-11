# demo

Simple local backend + Jest testing practice project.

## 1) Install dependencies

```bash
npm install
```

## 2) Run server in developer mode

```bash
npm run dev
```

Test in browser:
- http://localhost:3000/health
- http://localhost:3000/sum

## 3) Run tests (Jest)

```bash
npm test
```

## What is being tested

- Unit tests: `tests/logic.test.js`
  - Tests pure JS functions (`add`, `isEven`)
- Integration tests: `tests/server.test.js`
  - Starts real backend and tests API routes

## Learning exercise

1. Break `add` function in `src/logic.js` intentionally.
2. Run `npm test` and read the failed test message.
3. Fix it and run tests again.
4. Repeat with route logic in `src/server.js`.
