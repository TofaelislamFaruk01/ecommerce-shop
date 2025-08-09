# 🛍️ E-Commerce Shop

A modern, full-featured e-commerce application built with Next.js 15, TypeScript, and Redux Toolkit. This project showcases a complete online shopping experience with product browsing, favorites management, product creation, and a beautiful responsive design.

## 🌐 Live Demo & Repository

**Live Application**: [https://ecommerce-shop-mvw7.vercel.app/](https://ecommerce-shop-mvw7.vercel.app/)  
**GitHub Repository**: [https://github.com/TofaelislamFaruk01/ecommerce-shop](https://github.com/TofaelislamFaruk01/ecommerce-shop)


## ✨ Features

### 🎯 Core Functionality
- **Product Browsing**: Browse products with pagination and search functionality
- **Product Details**: Detailed product view with images, descriptions, and specifications
- **Favorites System**: Add/remove products to favorites with persistent state management
- **Product Management**: Create new products with a comprehensive form
- **Responsive Design**: Mobile-first design that works seamlessly across all devices

### 🎨 User Experience
- **Dark/Light Theme**: Toggle between dark and light themes with persistent state
- **Modern UI**: Beautiful, modern interface built with Tailwind CSS and Shadcn UI
- **Loading States**: Skeleton loaders and smooth transitions for better UX
- **Toast Notifications**: User-friendly notifications for actions and errors
- **Accessibility**: Fully accessible components with proper ARIA labels

### 🛠️ Technical Features
- **TypeScript**: Full type safety throughout the application
- **Redux Toolkit**: State management for favorites and theme
- **Next.js 15**: Latest features with App Router and Turbopack
- **API Integration**: RESTful API integration with Axios
- **Form Handling**: React Hook Form 
- **Image Optimization**: Next.js Image component for optimized images

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TofaelislamFaruk01/ecommerce-shop.git
   cd ecommerce-shop

   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_BASE_URL=https://dummyjson.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── product-details/   # Product details pages
│   ├── favorites/         # Favorites page
│   └── create-product/    # Product creation page
├── components/            # Reusable components
│   ├── ui/               # Base UI components (Shadcn UI)
│   ├── ProductCard.tsx   # Product card component
│   ├── ProductList.tsx   # Product list component
│   ├── Navbar.tsx        # Navigation component
│   ├── Homepage.tsx      # Homepage component
│   └── ...               # Other reusable components
├── redux/                # Redux store and slices
│   ├── store.ts          # Redux store configuration
│   ├── Provider.tsx      # Redux provider
│   ├── favorites/        # Favorites slice
│   └── themes/           # Theme slice
├── types/                # TypeScript type definitions
│   └── index.ts          # Main type definitions
├── lib/                  # Utility functions and API
│   ├── utils.ts          # Utility functions
│   └── api-end-point/    # API endpoints
├── hooks/                # Custom React hooks
├── providers/            # Context providers
└── enums/                # TypeScript enums
```

## 🎯 Key Components

### Product Management
- **ProductCard**: Displays product information with image, title, price, and rating
- **ProductList**: Renders a grid of products with pagination
- **ProductDetailsClient**: Detailed product view with full information
- **ProductForm**: Form for creating and editing products

### State Management
- **Favorites Slice**: Manages favorite products with add/remove functionality
- **Theme Slice**: Handles dark/light theme switching
- **Redux Store**: Centralized state management

### UI Components
- **Navbar**: Responsive navigation with mobile menu
- **DarkModeToggle**: Theme switching component
- **SkeletonLoader**: Loading states for better UX
- **EmptyPlaceholder**: Empty state components

### 🔧 API Integration

This application uses the **[DummyJSON API](https://dummyjson.com/)** to manage product data.

**Endpoints used:**

- `GET /products` – Fetch a paginated list of products  
- `GET /products/search` – Search products by query  
- `GET /products/{id}` – Fetch product details by ID  
- `POST /products/add` – Create a new product  
- `PUT /products/{id}` – Update an existing product  
- `DELETE /products/{id}` – Delete a product  


## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: Accessible component primitives
components
- **Dark Mode**: Full dark/light theme support
- **Responsive Design**: Mobile-first approach


## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with Next.js configuration
- **Prettier**: Code formatting (if configured)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - UI primitives
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [DummyJSON](https://dummyjson.com/) - API for testing

