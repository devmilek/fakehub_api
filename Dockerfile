FROM oven/bun:latest AS base
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production

COPY src ./src

ENV PORT=8080
ENV NODE_ENV=production

EXPOSE 8080

CMD ["bun", "run", "src/index.ts"]