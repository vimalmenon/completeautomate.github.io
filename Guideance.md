# CompleteAutomate - Frontend Project Guidance

## Overview

This is the frontend project for CompleteAutomate - a web interface and dashboard built with Next.js and TypeScript.

---

## Project Structure

```
completeautomate.github.io/
├── src/
│   ├── app/                    # App directory (pages, layouts)
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── common/                # Shared components
│   │   ├── Header/            # Header component
│   │   │   ├── Header.component.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   └── types/                 # TypeScript type definitions
│       ├── cache-life.d.ts
│       ├── routes.d.ts
│       └── validator.ts
├── public/                    # Static assets
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── next.config.ts            # Next.js config
├── postcss.config.mjs         # PostCSS config
└── eslint.config.mjs         # ESLint config
```

---

## Setup & Installation

### Prerequisites
- Node.js 18+ and npm
- Git



### Frontend Setup

```bash
cd completeautomate.github.io

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type checking
npm run tsc

# Run linter
npm run lint
```

---

## Components

### Header Component
Navigation header for the web interface.

**Location:** `src/common/Header/Header.component.tsx`

---

## Development Guidelines

### Best Practices

- **Create a new branch** for each feature: `git checkout -b feature/your-feature`
- **Use Tailwind CSS** for styling
- **Type everything** in TypeScript - no `any` types unless absolutely necessary
- **Write descriptive commit messages** explaining what and why
- **Test locally** before pushing changes
- **Run type checking** before committing: `npm run tsc`

### Code Style

- **TypeScript**: Use ESLint configuration provided
- **Naming**: Use camelCase for variables and functions
- **Components**: Use functional components with hooks
- **Files**: Use PascalCase for component files

---

## Common Workflows

### Adding a New Page

1. Create a new directory in `src/app/`
2. Add `page.tsx` file
3. Use Next.js App Router conventions
4. Type your props using TypeScript

```tsx
// src/app/my-page/page.tsx
export default function MyPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">My Page</h1>
    </div>
  );
}
```

### Creating a New Component

1. Create directory in `src/common/`
2. Add component file
3. Add index.ts for exports
4. Use Tailwind for styling

```tsx
// src/common/MyComponent/MyComponent.tsx
interface Props {
  title: string;
}

export const MyComponent = ({ title }: Props) => {
  return <div className="p-4">{title}</div>;
};
```

```ts
// src/common/MyComponent/index.ts
export { MyComponent } from './MyComponent';
```

### Adding Types

Create type definitions in `src/types/` for shared types across the application.

```ts
// src/types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
}
```

---

## Useful Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run tsc

# Run linter
npm run lint

# Format code
npm run format

# Git operations
git add .
git commit -m "Your message"
git push origin main
```

---

## Development Tips

### Environment Variables

Create a `.env.local` file in the project root for local configuration:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
DATABASE_URL=your_database_url
```

Use `NEXT_PUBLIC_` prefix for variables that should be exposed to the browser.

### Hot Reload

The development server automatically reloads when you make changes to your code.

### Debugging

- **Browser DevTools**: Use the browser's built-in DevTools (F12)
- **Next.js Debugging**: Check the terminal output for errors
- **Type Errors**: Run `npm run tsc` to catch TypeScript errors

### Performance

- **Image Optimization**: Use Next.js `Image` component for images
- **Code Splitting**: Components are automatically code-split by route
- **CSS**: Tailwind purges unused styles in production

---

## Resources & Links

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [ESLint Documentation](https://eslint.org/docs/)

---

## Troubleshooting

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clean build
rm -rf .next
npm run build

# Check for TypeScript errors
npm run tsc
```

### Module Not Found
Make sure all imports use correct relative paths. Check that the file exists and is properly exported.

---

## Contributing

### Important Rules

⚠️ **NEVER commit directly to the main branch**
- All work must be done on feature branches
- Main branch should only be updated through pull requests
- Use feature branches: `feature/your-feature` or `fix/bug-fix`

### Workflow

1. Ensure you're on main and up to date: `git checkout main && git pull origin main`
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and test thoroughly
4. Run type checking: `npm run tsc`
5. Commit with clear messages: `git commit -m "Add feature description"`
6. Push: `git push origin feature/your-feature`
7. Create a pull request with description of changes
8. Request review from team members
9. Ensure all checks pass before merging
10. Delete feature branch after merge: `git branch -d feature/your-feature`

### Branch Naming Conventions

- `feature/feature-name` - For new features
- `fix/bug-name` - For bug fixes
- `docs/update-docs` - For documentation updates
- `refactor/refactor-name` - For refactoring code

**Example:**
```bash
# Good branch names
git checkout -b feature/add-user-dashboard
git checkout -b fix/header-styling
git checkout -b docs/update-readme

# Bad branch names
git checkout -b my-changes
git checkout -b test
git checkout -b new-feature
```

---

## License & Contact

For questions or support, reach out to the project maintainers.

Last Updated: January 2026
