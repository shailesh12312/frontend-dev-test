# Project Name

A Next.js application with TypeScript, Redux, and Testing Library integration.

## Tech Stack

- Next.js 14
- TypeScript
- Redux Toolkit
- React Testing Library
- Jest

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run development server:
```bash
npm run dev
# or
yarn dev
```

3. Run tests:
```bash
npm test
# or
yarn test
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (dashboard)/       # Dashboard routes & components
│   │   └── _components/   
│   │       └── DashboardTable.tsx
│   ├── (login)/          # Login routes & components
│   └── layout.tsx        # Root layout
├── __tests__/            # Test files
│   ├── DashboardTable.test.js
│   └── LoginPage.test.js
└── redux/
    └── slices/           # Redux state management
        └── productSlice.ts
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!