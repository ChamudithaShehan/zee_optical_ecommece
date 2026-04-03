# LuxeShade - Sunglasses Customization Platform

A modern e-commerce application for customizing and purchasing premium sunglasses. Built with Next.js 15, React 18, TypeScript, and Tailwind CSS with shadcn/ui components.

## 🎯 Features

### Customer Features
- **Frame Customization**: Real-time preview of sunglasses with custom lens and frame options
- **Product Catalog**: Browse and filter available frames by style and specifications
- **Shopping Cart**: Add/remove items with persistent cart state management
- **Checkout**: Complete order form with address and payment information
- **User Dashboard**: View order history and saved frame designs
- **Dark Mode**: Full dark mode support with system preference detection

### Admin Dashboard
- **Inventory Management**: Manage frames, lens options, and product catalog
- **Order Tracking**: View and manage customer orders
- **User Management**: Access customer information and profiles
- **Analytics**: Dashboard with key business metrics

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React App Router
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) + [PostCSS](https://postcss.org/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) - Accessible component library
- **State Management**: [Zustand](https://zustand-demo.vercel.app/) - Lightweight store for cart state
- **Data Fetching**: [TanStack React Query](https://tanstack.com/query/latest) - Server state management
- **Testing**: [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)
- **Code Quality**: [ESLint](https://eslint.org/) + TypeScript strict mode
- **Package Manager**: [Bun](https://bun.sh/)

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── globals.css        # Global styles
│   ├── not-found.tsx      # 404 page
│   ├── (store)/           # Public customer routes
│   │   ├── page.tsx       # Home page
│   │   ├── shop/          # Product catalog
│   │   ├── customize/     # Frame customization
│   │   ├── cart/          # Shopping cart
│   │   ├── checkout/      # Order checkout
│   │   └── dashboard/     # User dashboard
│   └── admin/             # Admin routes
│       ├── page.tsx       # Admin dashboard
│       ├── frames/        # Frame management
│       ├── lens/          # Lens management
│       ├── orders/        # Order management
│       └── users/         # User management
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── Navbar.tsx        # Navigation header
│   ├── Footer.tsx        # Footer component
│   ├── AdminSidebar.tsx  # Admin navigation
│   └── ...
├── pages/                 # Page components (wrapped by app router)
│   ├── Index.tsx
│   ├── Shop.tsx
│   ├── Customize.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── NotFound.tsx
│   ├── dashboard/
│   ├── admin/
│   └── ...
├── hooks/                 # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                   # Utility functions and data
│   ├── data.ts           # Product data and fixtures
│   ├── store.ts          # Zustand cart store
│   └── utils.ts          # Helper functions
├── test/                 # Test files
│   ├── example.test.ts
│   └── setup.ts
└── assets/              # Static assets

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frame-your-vision-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start Next.js dev server

# Production
npm run build            # Build production bundle
npm start               # Start production server

# Testing
npm run test            # Run Vitest unit tests
npx playwright test     # Run Playwright e2e tests

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # Check TypeScript types
```

## 🔐 Route Structure

### Public Routes (with Navbar & Footer)
- `/` - Home page with hero section
- `/shop` - Product catalog and filtering
- `/customize?frame=ID` - Frame customization tool
- `/cart` - Shopping cart review
- `/checkout` - Order checkout
- `/dashboard` - User profile
- `/dashboard/orders` - User order history
- `/dashboard/saved` - Saved frame designs

### Admin Routes (no Navbar/Footer)
- `/admin` - Dashboard with analytics
- `/admin/frames` - Frame inventory management
- `/admin/lens` - Lens options management
- `/admin/orders` - Order management
- `/admin/users` - User management

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Custom theme colors defined in `src/index.css`
- **Dark Mode**: Class-based dark mode support
- **Responsive**: Mobile-first responsive design

## 📦 State Management

### Zustand Store (`src/lib/store.ts`)
Manages shopping cart state:
- `cart`: Array of cart items with quantities
- `addToCart()`: Add items to cart
- `removeFromCart()`: Remove items by ID
- `updateQuantity()`: Update item quantities
- `clearCart()`: Empty the cart

### React Query
Handles server state and data fetching with caching and synchronization.

## 🧪 Testing

### Unit Tests (Vitest)
```bash
npm run test
```
Tests are located in `src/test/` directory.

### E2E Tests (Playwright)
```bash
npx playwright test
```
Tests run against `http://localhost:3000`.

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration with strict mode
- `tailwind.config.ts` - Tailwind CSS theme configuration
- `postcss.config.js` - PostCSS plugins (Tailwind, Autoprefixer)
- `eslint.config.js` - ESLint rules and configuration
- `vitest.config.ts` - Vitest test runner configuration
- `playwright.config.ts` - Playwright test configuration
- `next.config.ts` - Next.js configuration

## 📱 Responsive Design

All routes are fully responsive and tested on:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🚢 Deployment

### Build for Production
```bash
npm run build
npm start
```

The application is optimized for deployment on:
- Vercel (recommended for Next.js)
- AWS, Google Cloud, Azure, or any Node.js hosting

## 📄 License

This project is part of the LuxeShade e-commerce platform.

## 🤝 Contributing

Please follow these guidelines:
1. Use TypeScript for all new code
2. Follow ESLint rules
3. Add tests for new features
4. Keep components modular and reusable

## 💡 Key Implementation Details

### Client Components
Components marked with `"use client"` directive (Navbar, Cart, Checkout, etc.) to handle:
- User interactions and state
- Browser APIs (localStorage, window.matchMedia)
- Real-time UI updates

### Server Components
Page routes and layout components leverage Next.js Server Components for:
- Faster initial page load
- Reduced JavaScript bundle size
- Direct database access (when implemented)

### Build Optimization
- **16 pre-rendered pages** for instant delivery
- **Code splitting** for optimal chunk sizes
- **Image optimization** with Next.js Image component ready
- **CSS-in-JS** eliminated via Tailwind CSS

## 🐛 Troubleshooting

### Dev Server Issues
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node version: `node --version` (requires 18+)

### Build Failures
- Verify TypeScript: `npm run type-check`
- Check ESLint: `npm run lint`
- Review build logs for specific errors

## 📞 Support

For issues or questions, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
