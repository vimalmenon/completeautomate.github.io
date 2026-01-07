# CompleteAutomate Frontend - Guidance

## Project Overview

**CompleteAutomate** is an automation solutions platform that provides ready-to-use automation scripts and tools to streamline workflows and boost productivity. The frontend is built with Next.js 16, React 19, and TypeScript, styled with Tailwind CSS 4, featuring responsive design and accessibility-first component architecture.

- **Tech Stack**: Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, Lucide React
- **Purpose**: Modern, responsive web interface for automation services
- **Status**: Under active development
- **Key Features**: Responsive header with mobile menu, accessible components, icon library integration

---

## Setup & Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Visit `http://localhost:3000`

### 3. Build for Production
```bash
npm run build && npm start
```

## Key Technologies

- **Next.js 16.1.1** - React framework
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Styling
- **Lucide React 0.562.0** - Icons
- **TypeScript 5** - Type safety

## Component Guidelines

- Use `src/common/` folder for shared components
- Each component in its own folder with `index.ts` barrel export
- Use CSS Modules for scoped styling
- Add ARIA labels for accessibility

## Development Commands

```bash
npm run dev      # Start dev server
npm run lint     # Run ESLint
npm run tsc      # Check TypeScript types
npm run build    # Production build
npm start        # Start production server
```

## Contributing Rules

### ⚠️ CRITICAL: Never Commit to Main
Always create a feature branch before making changes:

```bash
git checkout -b feature/your-feature-name
git add .
git commit -m "feat: description"
git push origin feature/your-feature-name
```

**Branch Naming**:
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation
- `refactor/*` - Code refactoring

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
