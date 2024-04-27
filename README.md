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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Routing 

- Next.js has a file-system based routing mechanism

- URL paths that users can access in the browser are defined by files an folders in your codebase

### Routing Conventions

- All routes must be placed inside the app folder

- Every file that corresponds to a route must be named page.js or page.tsx

- Every folder corresponds to a path segment in the browser URL

### Demo

# Scenario 1 : Tạo trang Home mặc định cho localhost:3000/
- B1: Xóa folder app mặc định trong folder src
- B2: Tạo folder app trong folder src
- B3: Tạo file pages.tsx trong folder app vừa tạo
- B4: Sửa code:
```jsx
import React from 'react'

const Home = () => {
    return (
        <div>Home</div>
    )
}

export default Home
```
- B5: Run: npm run dev -> file layout.tsx sẽ được tự động sinh ra trong folder app đã tạo (cùng cấp với page.tsx)

# Scenario 2 : 
- Tạo trang About mặc định cho localhost:3000/about
- Tạo trang Profile mặc định cho localhost:3000/profile

- B1: Tạo folder about trong folder app
- B2: Tạo page.tsx trong folder about
