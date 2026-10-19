# Personal Portfolio — Cristofe Albuquerque

Modern portfolio website built to showcase projects, technical skills, and professional experience in high-performance full-stack development.

Built with a focus on **clean code**, **modular component architecture**, **performance (RSC)**, **internationalization (i18n)**, and **accessibility**.

---

## 🚀 Technologies & Tools

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Core Library:** [React 19](https://react.dev/)
- **Automated Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Internationalization:** [next-intl](https://next-intl.dev/) (PT / EN support with automatic detection and SSG)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/) (strict typing)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/), `clsx`, `tailwind-merge` (`cn` helper), and Prettier
- **CI / CD:** [GitHub Actions](https://github.com/features/actions) (typecheck, lint, formatting, tests, and build pipeline)
- **Analytics:** `@next/third-parties/google` (optimized Google Analytics 4)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Package Manager:** [Yarn](https://yarnpkg.com/)

---

## ⚡ Architecture & UX Highlights

- **Internationalization (i18n):** Full support for English (`/en`) and Portuguese (`/pt`), with automatic browser language detection via `Accept-Language`, dynamic metadata, and an interactive language switcher.
- **React Server Components (RSC):** Static sections are rendered on the server with `getTranslations` to minimize the client-side JavaScript bundle.
- **Optimized Client Components:** Used only where browser interactivity is required, including the mobile menu, scroll control, project carousel, language switcher, and CV download tracking.
- **Automated Testing & Quality:** Unit tests for utilities and component integration tests with accessibility assertions and user interactions through Vitest.
- **Integrated CI/CD Pipeline:** Automatic validation on every push and pull request with strict typechecking, linting, formatting, tests, and production builds.
- **SEO & Structured Metadata:** Locale-aware Open Graph and Twitter Cards, semantic tags, and dynamic `lang` attributes for improved indexing.
- **Responsive Design System:** Adaptive layouts for mobile, tablet, and desktop with subtle micro-interactions.

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── ci.yml       # Automated CI pipeline (Typecheck, Lint, Test, Build)
├── messages/
│   ├── en.json          # English translations
│   └── pt.json          # Portuguese translations
├── public/              # Public assets, including localized CV PDFs
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx   # Root layout with fonts, metadata, and i18n provider
│   │   │   └── page.tsx     # Localized portfolio page
│   │   ├── icon.png         # App Router-managed favicon
│   │   └── globals.css      # Tailwind directives and base styles
│   ├── components/
│   │   ├── layout/          # Navbar, NavigationBar, and Footer
│   │   ├── sections/        # Hero, AboutMe, Career, TechStack, Projects, Contact
│   │   └── ui/              # Reusable UI components and project cards
│   ├── i18n/                # next-intl routing and request configuration
│   ├── lib/                 # Shared utilities, analytics, and structured data
│   ├── proxy.ts             # Language negotiation and automatic redirects
│   ├── test/                # Vitest setup and global mocks
│   └── assets/              # Logos and optimized images
```

---

## 🛠️ Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (version 24 or later)
- [Yarn](https://yarnpkg.com/)

### Installation & Development

1. Clone the repository:

```bash
git clone https://github.com/Cr1stofe/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
yarn install
```

3. Optionally configure environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quality & Testing Commands

```bash
# Run the automated test suite (Vitest)
yarn test

# Run tests in interactive watch mode
yarn test:watch

# Run strict TypeScript typechecking
yarn typecheck

# Run static code analysis (ESLint)
yarn lint

# Format files and sort Tailwind classes (Prettier)
yarn format

# Create a production build
yarn build
```

---

## 👤 Author

**Cristofe Albuquerque**

- **GitHub:** [@Cr1stofe](https://github.com/Cr1stofe)
- **LinkedIn:** [/in/cristofe-albuquerque](https://www.linkedin.com/in/cristofe-albuquerque/)
- **Email:** [cristofe.contact@gmail.com](mailto:cristofe.contact@gmail.com)
