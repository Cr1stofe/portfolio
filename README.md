# Portfólio Pessoal — Cristofe Albuquerque

Portfólio moderno desenvolvido para apresentar projetos, competências técnicas e experiências em desenvolvimento Full Stack de alta performance.

Construído com foco em **código limpo**, **arquitetura de componentes modular**, **performance (RSC)** e **acessibilidade**.

---

## 🚀 Tecnologias & Ferramentas

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Biblioteca Base:** [React 19](https://react.dev/)
- **Linguagem:** [TypeScript 5](https://www.typescriptlang.org/) (Tipagem Estrita)
- **Estilização:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Analytics:** `@next/third-parties/google` (Google Analytics 4 otimizado)
- **Ícones:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Gerenciador de Pacotes:** [Yarn](https://yarnpkg.com/)

---

## ⚡ Destaques de Arquitetura & UX

- **React Server Components (RSC):** Seções estáticas renderizadas inteiramente no servidor para minimizar o bundle de JavaScript no cliente.
- **Client Components Otimizados:** Utilizados estritamente onde há interatividade do navegador (Menu Mobile com `createPortal`, controle de scroll).
- **SEO & Metadados Estruturados:** Open Graph, Twitter Card, tags semânticas e `lang="pt-BR"` para compartilhamento e indexação otimizada.
- **Responsividade & Design System:** Layout totalmente adaptável para mobile, tablet e desktop com micro-interações fluidas.

---

## 📁 Estrutura de Pastas

```text
src/
├── app/
│   ├── layout.tsx       # Root layout com fontes, metadata e analytics
│   ├── page.tsx         # Página principal estruturando as seções
│   ├── icon.png         # Favicon gerenciado nativamente pelo App Router
│   └── globals.css      # Diretivas Tailwind e estilos base
├── components/
│   ├── layout/          # Navbar, NavigationBar e Footer
│   ├── sections/        # Hero, AboutMe, TechStack, Projects, Contact
│   └── ui/              # Componentes visuais atômicos (SocialTag, ContactLinks)
└── assets/              # Logotipos e imagens otimizadas
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [Yarn](https://yarnpkg.com/)

### Instalação & Execução

1. Clone o repositório:
```bash
git clone https://github.com/Cr1stofe/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
yarn
```

3. (Opcional) Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Inicie o servidor de desenvolvimento:
```bash
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Outros Comandos

```bash
# Verificação estática de código
yarn lint

# Build de produção
yarn build

# Execução em modo de produção
yarn start
```

---

## 👤 Autor

**Cristofe Albuquerque**  
- **GitHub:** [@Cr1stofe](https://github.com/Cr1stofe)  
- **LinkedIn:** [/in/cristofe-albuquerque](https://www.linkedin.com/in/cristofe-albuquerque/)  
- **E-mail:** [cristofe.contact@gmail.com](mailto:cristofe.contact@gmail.com)
