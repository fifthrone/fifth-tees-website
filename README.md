# Fifth Tees

A responsive, fully server-side rendered (SSR) e-commerce website built with Next.js, React, Redux Toolkit, Tailwind CSS, and Firebase. Feel free to check out the code or build the website!


## Features

- User authentication and registration
- Server side rendering on all pages for SEO optimization
- Product catalog with filtering
- Persisted shopping cart and wishlist
- Responsive design for mobile, tablet, and desktop devices
- Real-time data synchronization using Firebase
- Light and dark mode


## Getting Started

Clone the repository

```bash
git clone https://github.com/fifthrone/fifth-tees-website.git
```

Change to the project directory

```bash
cd fifth-tees-website
```

Installs all dependencies:

```bash
npm install
```

Runs the development server:

```bash
npm run dev
```

Generates an optimized version for production.

```bash
npm run build
```

Starts the application in production mode

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Configuration

### Firebase setup

Sign up for a Firebase account and create a new project. Set up Cloud Firestore database and authentication. Obtain your firebase configuration.

Then, create a .env.local file in root dir for your environment variables including:
- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- NEXT_PUBLIC_FIREBASE_APP_ID

## Folder Structure

- /public - Contains static assets, such as images and fonts
- /src/app - Contains the main pages and routes of the application
- /src/components - Contains all the reusable React components
- /src/store - Contains Redux toolkit store and slices
- /src/hooks - Contains custom hooks
- /src/utils - Contains Firebase and utility functions
- /src/products-data.js - Contains example of product data

### Firestore data structure:

Collection and fields:

- `products` - all products
  - `id`: string;
  - `imageUrl`: string;
  - `imageMaskedUrl`: string;
  - `imageModelUrl`: string;
  - `title`: string;
  - `price`: number;
  - `type`: string;
  - `size`: string;
  - `description`: string;
  - `otherTypeId`: string[];
  - `relatedId`: string[];
  - `redbubbleUrl`: string;
  - `tags`: string[];
- `hero` - products to show on hero section
  - `title`: string;
  - `productIds`: string[];
- `featured` - products to show on featured section
  - `title`: string;
  - `productIds`: string[];

Example: src/product-data.js

To add the data in product-data,js into your firestore database, call the addProduct, addHero and addFeatured function in firebase.utils.ts once.
