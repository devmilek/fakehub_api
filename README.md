# FakeHub API

API generujące fikcyjne dane przy użyciu Faker.js.

## Tech Stack
- **Runtime:** Bun
- **Framework:** Hono
- **Dane:** @faker-js/faker

## Uruchomienie lokalne

```bash
bun install
bun run dev
```

API dostępne pod `http://localhost:3000`

## Testy

```bash
bun test
```

## Docker

```bash
docker build -t fakehub-api .
docker run -p 3000:3000 fakehub-api
```

## CI/CD
Pipeline GitHub Actions – automatyczny build, testy i deploy do Azure App Service.