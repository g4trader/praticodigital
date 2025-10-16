# ⚡ Quickstart - Prático Digital

## 🚀 Começar em 3 Passos

### 1️⃣ Instalar Dependências

```bash
npm install
```

**O que será instalado:**
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Recharts
- shadcn/ui components
- React Hook Form + Zod
- Vercel Analytics

⏱️ **Tempo estimado**: 2-3 minutos

---

### 2️⃣ Rodar em Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

⏱️ **Tempo de build**: 15-30 segundos

---

### 3️⃣ Deploy na Vercel (Opcional)

**Opção A - Via Dashboard:**

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe o repositório GitHub
3. Clique em **Deploy**

**Opção B - Via CLI:**

```bash
npm i -g vercel
vercel --prod
```

⏱️ **Tempo de deploy**: 2-3 minutos

---

## 📋 Checklist Pré-Deploy

- [ ] Teste local funcionando (`npm run dev`)
- [ ] Build sem erros (`npm run build`)
- [ ] Tipos OK (`npm run typecheck`)
- [ ] Lint OK (`npm run lint`)
- [ ] Variáveis de ambiente configuradas (se necessário)

---

## 🎯 Páginas Disponíveis

| Página | URL | Descrição |
|--------|-----|-----------|
| Landing | `/` | Página inicial completa |
| Produtos | `/produtos` | Catálogo de soluções |
| Produto | `/produtos/prospeccao-de-leads` | Exemplo de detalhe |
| Contato | `/contato` | Formulário + informações |

---

## 🎨 Personalizações Rápidas

### Alterar Cores

Edite `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: '#SEU_COR_AQUI',
  },
}
```

### Adicionar Produto

Edite `src/data/produtos.json`:

```json
{
  "slug": "seu-produto",
  "titulo": "Seu Produto",
  "resumo": "Descrição curta",
  ...
}
```

### Modificar Textos

Todos os textos estão em:
- `src/data/*.json` - Dados estruturados
- `src/components/*.tsx` - Textos hardcoded

---

## 📧 Configurar Emails (Opcional)

### Com Resend

```bash
npm install resend
```

Adicione ao `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxx
```

Descomente código em `src/app/api/contato/route.ts`

### Com SendGrid

```bash
npm install @sendgrid/mail
```

Adicione ao `.env.local`:
```env
SENDGRID_API_KEY=SG.xxxxxxxxxx
```

---

## 🐛 Problemas Comuns

### ❌ Erro: "Cannot find module '@/...'"

**Solução:**
```bash
# Reinstale dependências
rm -rf node_modules
npm install
```

### ❌ Build falha com erro de TypeScript

**Solução:**
```bash
# Rode typecheck para ver erros detalhados
npm run typecheck
```

### ❌ Estilos não aparecem

**Solução:**
```bash
# Limpe cache do Next.js
rm -rf .next
npm run dev
```

---

## 📚 Documentação Completa

- **README.md** - Documentação principal
- **DEPLOY.md** - Guia de deploy detalhado
- **PROJECT_OVERVIEW.md** - Visão geral técnica

---

## 🆘 Suporte

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Tailwind](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Vercel Docs](https://vercel.com/docs)

---

**Pronto!** 🎉 Você tem tudo que precisa para começar.

**Próximo passo:** `npm install && npm run dev`

