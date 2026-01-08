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

## Bash Guide: Creating Files with Text

### Method 1: Using `echo` (Single Line)
```bash
echo "Your text here" > filename.txt
```
**Example**:
```bash
echo "Hello World" > greeting.txt
```

### Method 2: Using `echo` with Append (Multiple Lines)
```bash
echo "Line 1" > filename.txt
echo "Line 2" >> filename.txt
echo "Line 3" >> filename.txt
```
**Note**: Use `>` for first line (overwrites), `>>` for subsequent lines (appends)

### Method 3: Using `cat` with Here-Document (Multi-line)
```bash
cat > filename.txt << EOF
Your text content here
Can be multiple lines
No need to escape quotes
EOF
```
**Example**:
```bash
cat > config.json << EOF
{
  "name": "MyApp",
  "version": "1.0.0"
}
EOF
```

### Method 4: Using `tee` (Write & Display)
```bash
echo "Your text here" | tee filename.txt
```
**Example**:
```bash
echo "Installation complete" | tee install.log
```

### Method 5: Create with `touch` (Empty File)
```bash
touch filename.txt
```

### Method 6: Using `printf` (Formatted Content)
```bash
printf "Line 1\nLine 2\nLine 3\n" > filename.txt
```

### Common Tips

| Action | Command |
|--------|---------|
| Create/overwrite file | `echo "text" > file.txt` |
| Append to file | `echo "text" >> file.txt` |
| View file content | `cat file.txt` |
| Edit file | `nano file.txt` or `vim file.txt` |
| Create multi-line | `cat > file.txt << EOF` ... `EOF` |
| Delete file | `rm file.txt` |
| Copy file | `cp source.txt destination.txt` |

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
