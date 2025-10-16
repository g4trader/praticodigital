# Prático Digital

> **Growth + IA para acelerar aquisição, conversão e retenção**

Site institucional completo da **Prático Digital**, especialista em Growth Marketing e Inteligência Artificial. Desenvolvido com Next.js 14, Tailwind CSS, shadcn/ui e Framer Motion.

## 🚀 Stack Tecnológica

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilo**: Tailwind CSS + shadcn/ui
- **Animações**: Framer Motion
- **Gráficos**: Recharts
- **Formulários**: React Hook Form + Zod
- **Ícones**: Lucide React
- **Analytics**: Vercel Analytics
- **Deploy**: Vercel

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/praticodigital.git
cd praticodigital
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Edite `.env.local` com suas credenciais:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/seu-usuario
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxx
```

### 4. Execute o projeto em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Estrutura do Projeto

```
praticodigital/
├── src/
│   ├── app/                    # Pages (App Router)
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Landing page
│   │   ├── produtos/          # Catálogo e detalhes
│   │   ├── contato/           # Página de contato
│   │   └── api/               # API routes
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes shadcn/ui
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   ├── hero.tsx
│   │   └── ...
│   ├── data/                  # Dados JSON
│   │   ├── produtos.json
│   │   ├── faqs.json
│   │   ├── cases.json
│   │   ├── planos.json
│   │   └── integracoes.json
│   ├── lib/                   # Utilitários
│   │   └── utils.ts
│   └── styles/               # Estilos globais
│       └── globals.css
├── public/                    # Assets estáticos
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## 📄 Páginas

- **/** - Landing page com todas as seções
- **/produtos** - Catálogo de soluções
- **/produtos/[slug]** - Página de detalhe de cada solução
- **/contato** - Formulário de contato e informações

## 🎨 Paleta de Cores

- **Primária**: `#635BFF` (Indigo elétrico)
- **Secundária**: `#00E5A0` (Teal neon)
- **Acento**: `#FF6B6B` (Vermelho ação)
- **Backgrounds**: `#0B0F14`, `#0F172A`, `#111827`

## 🔧 Scripts Disponíveis

```bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run start      # Servidor de produção
npm run lint       # Lint com ESLint
npm run typecheck  # Verificação de tipos TypeScript
```

## 🚀 Deploy na Vercel

### Opção 1: Deploy via Dashboard

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Add New Project"**
3. Importe o repositório do GitHub
4. Configure as variáveis de ambiente (se necessário)
5. Clique em **"Deploy"**

### Opção 2: Deploy via CLI

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Execute o deploy
vercel

# Para produção
vercel --prod
```

### Variáveis de Ambiente na Vercel

No dashboard da Vercel, adicione as seguintes variáveis em **Settings > Environment Variables**:

- `NEXT_PUBLIC_CALENDLY_URL` (opcional)
- `RESEND_API_KEY` ou `SENDGRID_API_KEY` (opcional, para envio de emails)

## 📧 Configuração de Email

O formulário de contato está preparado para integração com **Resend** ou **SendGrid**.

### Com Resend

```bash
npm install resend
```

No arquivo `src/app/api/contato/route.ts`, descomente o bloco de integração com Resend.

### Com SendGrid

```bash
npm install @sendgrid/mail
```

Adapte o código da API route conforme a documentação do SendGrid.

## 🎯 SEO

- ✅ Metadata otimizado para cada página
- ✅ OpenGraph tags
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ Schema markup (futuro)

## 🎨 Customização

### Editar Conteúdo

Todos os textos, produtos, FAQs e casos estão em arquivos JSON na pasta `src/data/`. Edite esses arquivos para alterar o conteúdo sem mexer no código.

### Editar Cores

As cores estão centralizadas em:
- `tailwind.config.ts` - Cores do Tailwind
- `src/styles/globals.css` - Variáveis CSS customizadas

### Adicionar Produtos

1. Edite `src/data/produtos.json`
2. Adicione um novo objeto com todos os campos necessários
3. O sistema automaticamente criará a página de detalhe

## 📊 Métricas e Analytics

O projeto já vem com **Vercel Analytics** configurado. Os dados de tráfego ficam disponíveis no dashboard da Vercel.

## 🔒 Segurança

- Headers de segurança configurados via `vercel.json`
- Validação de formulários com Zod
- CORS configurado
- Rate limiting (configure via Vercel)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é propriedade da **Prático Digital**. Todos os direitos reservados.

## 📞 Contato

- **Email**: contato@praticodigital.com
- **WhatsApp**: +55 (11) 99999-9999
- **Site**: [praticodigital.com.br](https://praticodigital.com.br)

---

Desenvolvido com 💜 por **Prático Digital** - Growth + IA para resultados reais
