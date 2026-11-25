[![CI](https://github.com/greenervigil/next-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/greenervigil/next-portfolio/actions/workflows/ci.yml)

This is a [Next.js](https://nextjs.org/) app using [Bun](https://bun.com).

## Getting Started

Clone the repo.

Install Dependencies

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Checks

```bash
bun run lint       # ESLint
bun run typecheck  # generates Next's types, then tsc --noEmit
bun run build      # production build
```

CI (`.github/workflows/ci.yml`) runs all three on every pull request and on pushes to `main`.
