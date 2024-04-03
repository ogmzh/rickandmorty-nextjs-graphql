This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## SSR and GraphQL
- To mix things up, list/table pages are built with client side graphql queried data, while details (/characters/[id]) pages are SSR-ed with serverside graphql queried data

## TODOs:

- [X] unit tests
- [ ] e2e tests with playwright
- [ ] make pages responsive