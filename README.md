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

### Scenario 1 : Tạo trang Home mặc định cho localhost:3000/
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

### Scenario 2 : 
- Tạo trang About mặc định cho localhost:3000/about
- Tạo trang Profile mặc định cho localhost:3000/profile

- B1: Tạo folder about trong folder app
- B2: Tạo page.tsx trong folder about

### Nested Routes

- localhost:3000/blog/first
- localhost:3000/blog/second


### Dynamic Routes: Ví dụ localhost:3000/products/1gh82g32

- B1: Tạo folder [productId] trong products
- B2: Sửa: 
```tsx
import React from 'react'

const ProductDetails = ( { params }: {
    params: { productId: string }
} ) => {
    return (
        <div>Details about product {params.productId}</div>
    )
}

export default ProductDetails
```

### Nested Dynamic Routes: Ví dụ localhost:3000/products/1/reviews/1

- B1: Tạo folder [reviews] và [reviewId] trong folder [productId]
- B2: Tạo file page.tsx trong folder [reviewId] 
```tsx
import React from 'react'

const ReviewDetail = ({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) => {
    return (
        <h1>
            Review {params.reviewId} for product {params.productId}
        </h1>
    )
}

export default ReviewDetail
```

### Catch-all Segments (Thường được sử dụng trong Sidebar)

- Ví dụ 
- localhost:3000/docs/feature1/concept1
- localhost:3000/docs/feature1/concept2
- localhost:3000/docs/feature2/concept1
- localhost:3000/docs/feature2/concept2

- 20 features * 20 concepts = 400
- 20 features * 1 [conceptId] = 20
- 1 [featureId] * 1 [conceptId] = 1

- B1: Muốn chạy http://localhost:3000/docs/routing/catch-alll-segment, ta tạo một thư mục [...slug] và file page.tsx trong thư mục [...slug] 
- B2: Tạo file page.tsx và thêm

```tsx
import React from 'react'

const Docs = ({ params }: {
    params: {
        slug: string[];
    }
}) => {
    if (params.slug.length === 2) {
        return(
            <h1>
                Viewing docs for feature { params.slug[0] } and concept { params.slug[1] }
            </h1>
        )
    }
    else if (params.slug.length === 1) {
        return(
            <h1>
                Viewing docs for feature { params.slug[0] }
            </h1>
        )
    }
    return (
        <h1>Docs home page</h1>
    )
}

export default Docs;
```

- Kết quả: 
- Nếu http://localhost:3000/docs/routing thì là
```jsx
<h1>Viewing docs for feature routing</h1>
```
- Nếu http://localhost:3000/docs/routing/catch-all-segment thì là 
```jsx
<h1>Viewing docs for feature routing and concept catch-all-segment</h1>
```
- Nếu http://localhost:3000/docs/routing/catch-all-segment/hung hoặc http://localhost:3000/docs/routing/catch-all-segment/hung/hiep thì là
```jsx
<h1>Docs home page</h1>
```
- Nhưng nếu là: http://localhost:3000/docs thì là 404 This page Not Found

### Cách giải quyết để http://localhost:3000/docs chạy vào
```jsx
<h1>Docs home page</h1>
```

- B1: Sửa tên thư mục [...slug] thành [[...slug]]
- B2: Sửa
```tsx
import React from 'react'

const Docs = ({ params }: {
    params: {
        slug: string[];
    }
}) => {
    if (params.slug?.length === 2) {
        return(
            <h1>
                Viewing docs for feature { params.slug[0] } and concept { params.slug[1] }
            </h1>
        )
    }
    else if (params.slug?.length === 1) {
        return(
            <h1>
                Viewing docs for feature { params.slug[0] }
            </h1>
        )
    }
    return (
        <h1>Docs home page</h1>
    )
}

export default Docs;
```

-> Như vậy http://localhost:3000/docs và http://localhost:3000/docs/hung/hiep/thuan sẽ chạy:
```jsx
<h1>Docs home page</h1>
```

### Page Not Found
- Ví dụ : localhost:3000/billing
- B1: Tạo file not-found.tsx trong folder app đã tạo
- B2: Sửa:
```tsx
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h2>Page not found</h2>
            <p>Could not find requested resource</p>
        </div>
    )
}

export default NotFound
```

- Tình huống 2: Nếu reviewId > 100 ta chạy vào Page not Found
- B1: Tạo file not-found.tsx trong folder [reviewId] 
- B2: Sửa page.tsx trong [reviewId]
```tsx
import { notFound } from 'next/navigation';
import React from 'react'

const ReviewDetail = ({ params }: {
    params: {
        productId: string;
        reviewId: string;
    }
}) => {
    if(parseInt(params.reviewId) > 100) {
        notFound()
    }
    return (
        <h1>
            Review {params.reviewId} for product {params.productId}
        </h1>
    )
}

export default ReviewDetail
```

### Private Folders

- A private folder indicates that it is a private implementation detail and should not be considered by the routing system

- The folder and all its subfolders are excluded from routing

- Prefix the folder name with an underscore

# Private Folders contd

- For separating UI logic from routing logic

- For consistently organizing internal files across a project

- For sorting and grouping files in code editors

- And finally, for avoiding potential naming conflicts with future Next.js file conventions

- If you want to include an underscore in URL segments, you can prefix the folder name with "%5F", which is the URL-encoded form of an underscore

### Route Group

- Allows us to logically group our routes and project files without affecting the URL path structure

- Let's implement authentication routes

+ Register
+ Login
+ Forgot password

- Khi ta tạo trang login, register, forgotpassword trong folder app thì nó không tốt cho các developer -> Phải đặt chúng trong thư mục riêng là tên là auth -> Nhưng làm vậy khi ta truy cập vào các trang login,... thì ta phải viết rõ: /auth/login -> Không tốt. Nên ta phải để tên thư mục là (auth) thì về sau ta chỉ cần viết là localhost:3000/login là được

### Layouts

- A page is UI that is unique to a route

- A layout is UI that is shared betwwen multiple pages in the app

# How to create Layouts

- You can define a layout exporting a React component from a layout.js or layout.tsx file

- That component should accept a children prop that will be populated with a child page during rendering

- Nếu ta xóa layout.tsx trong folder app và chạy lại npm run dev thì layout.tsx sẽ được tạo lại, ta thêm thẻ header, footer trong body

### Nested Layout
- Khi ta tạo 1 trang layout.tsx bất kỳ trong 1 folder nào như trong folder app nó sẽ lấy pagex.tsx trong đó thay vào {children} trong layout.tsx (Xem trong folder [productId] để biết rõ hơn)

### Route Group Layout

# Route Group uses:

- To organize your project in a manner that doesn't affect the URL

- To selectively apply a layout to certain segments while leaving others unchanged

- B1: Tạo folder (with-auth-layout) trong folder (auth) và đặt folder login, register trong đó

- B2: Tạo file layout.tsx trong folder (with-auth-layout)

- Link: localhost:3000/register

- Cách hiểu: Khi ta chạy Link thường thì nó sẽ chạy file page.tsx trong folder register nhưng nếu có file layout.tsx cũng cấp với folder register thì nó sẽ chạy vào đó và với page.tsx trong folder register sẽ ở vị trí {children}