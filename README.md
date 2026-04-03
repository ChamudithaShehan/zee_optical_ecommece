# ZEE OPTICS - Premium Eyewear E-Commerce Platform

A premium e-commerce application for customizing and purchasing high-quality eyewear. Built with Next.js 15, React 18, TypeScript, and Tailwind CSS featuring a modern dark/light theme, comprehensive admin dashboard, and seamless user experience.

## 🎯 Features

### 👥 Customer Features
- **Frame Customization**: Interactive 3D-like preview with real-time lens and frame customization
- **Product Catalog**: Browse premium frame collections with filtering and sorting
- **Shopping Cart**: Smart cart with persistent state management and quick actions
- **Checkout**: Streamlined checkout process with order confirmation
- **User Dashboard**: Complete order history, saved designs, and profile management
- **Authentication**: Sign In and Sign Up pages with form validation
- **Dark/Light Mode**: Full theme support with localStorage persistence and system preference detection
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices

### 👨‍💼 Admin Dashboard
- **Dashboard Overview**: Key metrics and analytics at a glance
- **Frame Management**: Add, edit, and manage eyewear frame inventory
- **Lens Management**: Manage lens types, colors, and add-on options
- **Order Management**: Track, view, and manage all customer orders
- **User Management**: Access detailed customer information and profiles
- **Dark Mode Support**: Complete dark mode integration across all admin pages
- **Responsive Admin UI**: Optimized for all device sizes with sidebar navigation

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5](https://nextjs.org/) - React App Router with SSR and SSG
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/) - Full type safety with strict mode
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) + [PostCSS](https://postcss.org/) - Utility-first styling with dark mode support
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Accessible, customizable component library
- **State Management**: 
  - [Zustand 5.0](https://zustand-demo.vercel.app/) - Lightweight store for cart state
  - React Context API - Theme management with dark/light mode
- **Data Fetching**: [TanStack React Query 5.83](https://tanstack.com/query/latest) - Server state management and caching
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful consistent icons
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- **Testing**: [Vitest 3.2](https://vitest.dev/) + [Playwright 1.57](https://playwright.dev/)
- **Code Quality**: [ESLint](https://eslint.org/) - Code linting and analysis
- **Package Manager**: [Bun](https://bun.sh/) or npm

## 🎨 Design & Theming

### Color Scheme
- **Primary Navy**: `#003366` - Main brand color
- **Accent Cyan**: `#00AEEF` - Highlights and interactive elements
- **Dark Background**: `#0f172a` (slate-950) - Dark mode base

### Theme Features
- **ThemeProvider Context**: Centralized theme state management
- **localStorage Persistence**: Theme preference saved across sessions
- **System Preference Detection**: Respects user's OS dark mode preference
- **Seamless Switching**: Smooth transitions between light and dark modes
- **Comprehensive Coverage**: All pages, components, and admin sections support both themes

## 📂 Project Structure

```
src/
├── app/                          # Next.js App Router (file-based routing)
│   ├── layout.tsx               # Root layout with metadata
│   ├── globals.css              # Global styles and CSS variables
│   ├── providers.tsx            # Provider composition (Theme, Query, UI)
│   ├── theme-provider.tsx       # Dark/Light mode context and hooks
│   ├── (store)/                 # Customer routes group with Navbar & Footer
│   │   ├── layout.tsx           # Store layout wrapper
│   │   ├── page.tsx             # Home page with hero section
│   │   ├── shop/page.tsx        # Product catalog
│   │   ├── customize/page.tsx   # Frame customization tool
│   │   ├── cart/page.tsx        # Shopping cart
│   │   ├── checkout/page.tsx    # Checkout process
│   │   ├── signin/page.tsx      # Sign In form
│   │   ├── signup/page.tsx      # Sign Up form
│   │   └── dashboard/           # User dashboard (3 pages)
│   │       ├── layout.tsx       # Dashboard layout
│   │       ├── page.tsx         # Profile page
│   │       ├── orders/page.tsx  # Order history
│   │       └── saved/page.tsx   # Saved designs
│   └── admin/                   # Admin-only routes (no Navbar/Footer)
│       ├── page.tsx             # Admin dashboard
│       ├── frames/page.tsx      # Frame management
│       ├── lens/page.tsx        # Lens management
│       ├── orders/page.tsx      # Order management
│       └── users/page.tsx       # User management
├── views/                        # Page component implementations
│   ├── Index.tsx                # Home page with hero & collections
│   ├── Shop.tsx
│   ├── Customize.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── NotFound.tsx
│   ├── auth/
│   │   ├── SignIn.tsx
│   │   └── SignUp.tsx
│   ├── dashboard/
│   │   ├── UserProfile.tsx
│   │   ├── UserOrders.tsx
│   │   └── UserSaved.tsx
│   └── admin/
│       ├── AdminDashboard.tsx
│       ├── AdminFrames.tsx
│       ├── AdminLens.tsx
│       ├── AdminOrders.tsx
│       └── AdminUsers.tsx
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Navigation with theme toggle
│   ├── Footer.tsx               # Footer component
│   ├── AdminLayout.tsx          # Admin page wrapper
│   ├── AdminSidebar.tsx         # Admin navigation menu
│   ├── UserDashboardLayout.tsx  # User dashboard wrapper
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── table.tsx
│       └── (40+ more UI components)
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx           # Mobile responsiveness hook
│   └── use-toast.ts             # Toast notification hook
├── lib/                         # Utility functions and data
│   ├── data.ts                  # Product catalog and fixtures
│   ├── store.ts                 # Zustand cart store
│   └── utils.ts                 # Helper functions
├── test/                        # Test files
│   ├── example.test.ts
│   └── setup.ts
└── assets/                      # Static images and media
    ├── frame-*.jpg              # Frame images
    └── (other media)
```

### Key Architecture Decisions
- **App Router**: File-based routing with nested route groups (store) and (admin)
- **Client/Server Boundaries**: Strategic use of `"use client"` for interactive components
- **Dynamic Rendering**: Admin and dashboard routes render dynamically with `export const dynamic = "force-dynamic"`
- **Component Isolation**: UI components in separate `ui/` folder for easy reuse
- **View Separation**: Page logic separated into `views/` folder for clarity

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

## 🚀 Getting Started

### Prerequisites
- **Node.js**: 18+ or latest (or use [Bun](https://bun.sh/))
- **npm/yarn/pnpm/bun**: Package manager of choice
- **Git**: For version control

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/frame-your-vision-main.git
   cd frame-your-vision-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with bun
   bun install
   # or with yarn/pnpm
   yarn install / pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Server runs on [http://localhost:3002](http://localhost:3002)

4. **Open in browser**
   - Visit `http://localhost:3002` to see the home page
   - Admin dashboard: `http://localhost:3002/admin`
   - User dashboard: `http://localhost:3002/dashboard`

### Development Workflow
1. Make changes to files in `src/`
2. Browser auto-refreshes on save (hot reload)
3. Check console and terminal for errors
4. Test across light and dark modes

## 📝 Available Scripts

```bash
# Development Server
npm run dev                      # Start Next.js dev server on port 3002

# Production Build
npm run build                   # Create optimized production build
npm start                       # Start production server (requires build first)

# Code Quality
npm run lint                    # Run ESLint analysis
npm run type-check              # Verify TypeScript types (optional depending on config)

# Testing
npm run test                    # Run Vitest unit tests
npx playwright test             # Run Playwright end-to-end tests
npx playwright codegen WEBSITE  # Generate test code from browser interactions
```

### Example Workflow
```bash
# Terminal 1: Start development server
npm run dev

# Terminal 2: Run tests in watch mode
npm run test -- --watch

# Terminal 3: Check for linting issues
npm run lint
```

## 🔐 Route Structure & Pages

### 🏪 Customer Routes (with Navbar & Footer)
- `GET /` - **Home Page**: Hero section with trust indicators, featured collections, and CTA
- `GET /shop` - **Product Catalog**: Browse all frames with grid layout and filtering
- `GET /customize?frame=ID` - **Customization Studio**: Interactive frame, lens, and add-on customization
- `GET /cart` - **Shopping Cart**: Review items, update quantities, proceed to checkout
- `GET /checkout` - **Order Checkout**: Delivery and payment information form
- `GET /signin` - **Sign In**: User authentication form
- `GET /signup` - **Sign Up**: New user registration form
- `GET /dashboard` - **Profile**: User account information and preferences
- `GET /dashboard/orders` - **Order History**: Track all customer orders and status
- `GET /dashboard/saved` - **Saved Designs**: View and manage saved frame customizations

### 👨‍💼 Admin Routes (Protected - no Navbar/Footer)
- `GET /admin` - **Admin Dashboard**: Key metrics, sales overview, and quick actions
- `GET /admin/frames` - **Frame Inventory**: Manage frames with add/edit/delete functionality
- `GET /admin/lens` - **Lens Options**: Manage lens types, colors, and availability
- `GET /admin/orders` - **Order Management**: View all orders with status tracking and details
- `GET /admin/users` - **User Management**: Access customer profiles and account information

### Route Rendering
- **18 Total Routes**: 17 static pre-rendered + 1 dynamic route
- **Pre-rendered**: Home, Shop, Cart, Checkout, Dashboard pages, Admin pages
- **Dynamic**: Customize page (query parameter `frame`)

## 🌙 Dark Mode Implementation

### ThemeProvider (`src/app/theme-provider.tsx`)
```typescript
// Context-based theme management
export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // Returns: { theme: 'light' | 'dark', toggleTheme: () => void }
}
```

### Features
- **Automatic Detection**: System dark mode preference on first visit
- **Persistent Storage**: Theme selection saved to localStorage
- **Client-Side Rendering Safety**: Hydration-resistant with mounted check
- **100% Coverage**: All components, pages, and admin sections support both themes

### Implementation Details
- Theme class applied to document root (`document.documentElement`)
- Tailwind's `dark:` prefix for dark mode styles
- CSS variables for dynamic color adjustments
- Smooth CSS transitions between themes

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework with dark mode support
- **CSS Variables**: Theme colors defined in `src/index.css` for easy customization
- **Dark Mode**: Class-based dark mode with `dark:` prefix utilities
- **Responsive**: Mobile-first design breakpoints (sm, md, lg, xl)
- **Animations**: Smooth transitions and hover effects throughout
- **Glass Morphism**: Semi-transparent backgrounds with backdrop blur effects

### Dark Mode Classes Used
```css
/* Examples */
dark:bg-slate-950        /* Dark backgrounds */
dark:text-white          /* Light text on dark backgrounds */
dark:border-slate-800    /* Dark borders */
dark:hover:text-[#00AEEF] /* Interactive states */
```

## 🎯 UI/UX Highlights

### Hero Section
- Gradient background (light: white→blue, dark: slate→blue)
- Animated backdrop orbs with pulse effect
- Gradient text effect on main headline
- Trust indicators: "10K+ Patients | 50+ Collections | ✓ Certified"
- Responsive CTA buttons with scale hover effect

### Collections Grid
- Dynamic frame showcase with 7 featured frames
- Image hover zoom with shadow effects
- Frame type and price display
- "New" badge for trending items
- Smooth transitions between light/dark modes

### Navigation
- Fixed sticky navbar with theme toggle button
- Moon/Sun icon that switches based on current theme
- Mobile-responsive hamburger menu
- Cart item counter badge
- Quick links to Shop, Dashboard, and Admin

### Admin Dashboard
- Comprehensive dark mode support
- Sidebar navigation menu (collapsible on mobile)
- Card-based layouts for inventory management
- Color-coded status indicators
- Responsive table views for orders and users

## 📦 State Management

### 🛒 Zustand Cart Store (`src/lib/store.ts`)
Lightweight client-side storage for shopping cart:
```typescript
// Usage
const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useStore();
```

**Features**:
- Persistent cart across browser sessions
- Fast add/remove/update operations
- No boilerplate - simple reducer pattern
- Optimized for shopping cart use case

**Store Methods**:
- `cart` - Array of items in cart
- `addToCart(item)` - Add item with customization
- `removeFromCart(id)` - Remove by item ID
- `updateQuantity(id, quantity)` - Change quantity
- `clearCart()` - Empty entire cart

### 🎨 Theme Context (`src/app/theme-provider.tsx`)
Global theme state management:
```typescript
// Usage
const { theme, toggleTheme } = useTheme();
```

**Features**:
- Light/dark mode toggle
- System preference detection
- localStorage persistence
- SSR-safe with hydration check
- Context-based for easy access anywhere

### 📡 React Query (TanStack Query)
Server state management:
- Automatic caching
- Background refetching
- Request deduplication
- Optimistic updates ready

## 🧪 Testing

### Unit Tests (Vitest)
```bash
# Run all tests
npm run test

# Run in watch mode
npm run test -- --watch

# Run specific test file
npm run test src/test/example.test.ts

# Run with coverage
npm run test -- --coverage
```

**Test Configuration**: `vitest.config.ts`
- Tests located in `src/test/` directory
- Setup file: `src/test/setup.ts`

### Integration & E2E Tests (Playwright)
```bash
# Run all tests
npx playwright test

# Run in headed mode (see browser)
npx playwright test --headed

# Run specific test
npx playwright test example.spec.ts

# Debug test with inspector
npx playwright test --debug

# Generate test code from interactions
npx playwright codegen http://localhost:3002
```

**Test Configuration**: `playwright.config.ts`
- Base URL: `http://localhost:3002`
- Browsers: Chromium, Firefox, WebKit
- Screenshots on failure saved to `test-results/`

**Test Coverage Areas**:
- Navigation and routing
- Cart operations
- Theme switching
- Responsive behavior
- Admin functionality

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
# Create optimized production build
npm run build

# Start production server
npm start
```

### Deployment Platforms
The application can be deployed to:
- **Vercel** (recommended for Next.js) - Zero-config deployment
- **AWS** (EC2, ECS, Lambda with Amplify)
- **Google Cloud** (Cloud Run, App Engine)
- **Azure** (App Service, Container Instances)
- **DigitalOcean** (App Platform)
- **Heroku** (buildpack or Docker)
- **Self-hosted** (any Node.js hosting)

### Deployment Checklist
- [ ] Set environment variables (`NODE_ENV=production`)
- [ ] Run security audit: `npm audit`
- [ ] Test production build locally
- [ ] Verify all routes work post-deployment
- [ ] Test dark mode functionality
- [ ] Check admin dashboard access
- [ ] Monitor error logs

### Build Output
```
✓ Compiled successfully in 4.7s
✓ Linting and checking validity of types
✓ Collecting page data (18 static pages)
✓ Generating static pages (18/18)
✓ Collecting build traces
✓ Finalizing page optimization
```

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `tsconfig.json` | TypeScript strict mode configuration |
| `tailwind.config.ts` | Tailwind CSS theme and plugins |
| `postcss.config.js` | PostCSS plugins (Tailwind, Autoprefixer) |
| `eslint.config.js` | ESLint rules and code quality settings |
| `vitest.config.ts` | Vitest unit test runner configuration |
| `playwright.config.ts` | Playwright end-to-end test configuration |
| `next.config.ts` | Next.js build and runtime settings |
| `components.json` | shadcn/ui component configuration |

## 🐛 Troubleshooting

### Build Issues

**"Cannot find module" errors**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
npm install
```

**TypeScript errors**
```bash
# Check for type errors
npm run type-check

# Strict mode sometimes catches issues that weren't compiled
# Check tsconfig.json strict settings
```

**Port already in use**
```bash
# Change port in dev server
npm run dev -- -p 3003

# Or find process using port 3002 and kill it
lsof -i :3002 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### Runtime Issues

**Dark mode not applying**
- Ensure browser allows localStorage
- Check Firefox private mode (might block localStorage)
- Verify Tailwind dark: classes are compiled
- Check if element has `dark` class on document root

**Cart persisting when it shouldn't**
- Clear localStorage manually
- Run: `localStorage.clear()` in browser console
- Check Zustand store initialization

**Admin pages show 404**
- Verify route exists: `/admin`, `/admin/frames`, etc.
- Check that admin pages are built
- Admin routes should not require authentication in dev

### Dev Server Troubleshooting

**Hot reload not working**
- Restart dev server
- Clear browser cache (Cmd+Shift+Delete)
- Check file save permissions

**Memory issues on build**
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**Slow dev server**
- Clear `.next` folder
- Check system resources (RAM, CPU)
- Disable unused extensions in VS Code

### Build Failures
- Verify TypeScript: `npm run type-check`
- Check ESLint: `npm run lint`
- Review build logs for specific errors

## � Key Implementation Details

### Next.js App Router Architecture
- **File-based Routing**: Routes automatically created from file structure
- **Route Groups**: `(store)` and `(admin)` groups for logical organization
- **Nested Layouts**: Shared layouts for navbar/footer and sidebar navigation
- **Dynamic Routes**: `/customize?frame=ID` with `searchParams`
- **Server Components**: Layouts and page wrappers use Server Components
- **Client Components**: Interactive sections marked with `"use client"`

### Client vs Server Distinction
```typescript
// Server Components (default)
export default function Page() {
  return <ServerFriendly />;
}

// Client Components (interactive)
"use client";
export default function InteractivePage() {
  const { theme, toggleTheme } = useTheme();
  return <ThemeToggle />;
}
```

### Performance Optimizations
- **Static Generation**: 17 routes pre-rendered at build time
- **Dynamic Rendering**: Customize and admin routes render on-demand
- **Code Splitting**: ~102 KB shared JavaScript chunks
- **Image Optimization**: Ready for Next.js Image component
- **CSS**: Inline critical CSS, defer non-critical styles

### Build Metrics
- **Total Build Time**: ~5-10 seconds
- **Chunk Size**: 102 KB (shared) + page-specific chunks
- **Pages**: 18 routes (17 static + 1 dynamic)
- **First Load JS**: ~113-214 KB depending on page

## 📚 Resources & Documentation

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

### Component Libraries
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- [Radix UI](https://www.radix-ui.com/) - Accessible components (shadcn base)

### Tools & Services
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [TanStack Query](https://tanstack.com/query/) - Server state
- [Vercel](https://vercel.com/) - Deployment platform
- [ESLint](https://eslint.org/) - Code linting

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Code Style**
   - Use TypeScript for all new code
   - Follow existing code patterns
   - Run `npm run lint` before committing

2. **Component Development**
   - Keep components modular and reusable
   - Use shadcn/ui components when possible
   - Include proper TypeScript types

3. **Testing**
   - Add tests for new features
   - Ensure existing tests pass
   - Test both light and dark modes

4. **Documentation**
   - Update README for significant changes
   - Add comments for complex logic
   - Document component props with JSDoc

### Making a Change
```bash
# 1. Create feature branch
git checkout -b feature/your-feature-name

# 2. Make changes and test
npm run dev    # Test changes
npm run lint   # Check code quality
npm run test   # Run tests

# 3. Commit and push
git commit -m "feat: add your feature"
git push origin feature/your-feature-name

# 4. Create Pull Request on GitHub
```

## 📄 License

ZEE OPTICS © 2026. All rights reserved.

This project is a premium eyecare e-commerce platform. Unauthorized copying or distribution is prohibited.

## 🙋 Support

For issues, feature requests, or questions:
- Create an Issue on GitHub
- Check existing Issues first
- Provide detailed reproduction steps
- Include environment details (Node version, OS, browser)

---

**Last Updated**: April 2026 | **Version**: 1.0.0 | **Status**: Production Ready ✅
