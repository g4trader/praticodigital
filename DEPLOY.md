# 🚀 Guia de Deploy na Vercel

Este guia irá ajudá-lo a fazer o deploy do site **Prático Digital** na Vercel.

## Pré-requisitos

- Conta no [GitHub](https://github.com)
- Conta na [Vercel](https://vercel.com)
- Repositório do projeto no GitHub

## Passo a Passo

### 1. Preparar o Repositório

Certifique-se de que todo o código está commitado no GitHub:

```bash
git add .
git commit -m "feat: site completo prático digital"
git push origin main
```

### 2. Criar Novo Projeto na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Clique em **"Import Git Repository"**
3. Selecione o repositório `praticodigital`
4. Configure o projeto:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (deixe em branco)
   - **Build Command**: `npm run build` (já configurado)
   - **Output Directory**: `.next` (já configurado)

### 3. Configurar Variáveis de Ambiente (Opcional)

Na seção **Environment Variables**, adicione:

| Nome | Valor | Descrição |
|------|-------|-----------|
| `NEXT_PUBLIC_CALENDLY_URL` | `https://calendly.com/seu-usuario` | URL do Calendly (opcional) |
| `RESEND_API_KEY` | `re_xxxxxxxxxx` | API Key do Resend para emails (opcional) |

> **Nota**: Se você não adicionar essas variáveis agora, pode adicioná-las depois em **Settings > Environment Variables**.

### 4. Deploy

Clique em **"Deploy"** e aguarde! A Vercel irá:

1. ✅ Clonar o repositório
2. ✅ Instalar as dependências
3. ✅ Executar o build
4. ✅ Fazer o deploy

O processo leva aproximadamente 2-3 minutos.

### 5. Domínio Personalizado (Opcional)

Após o deploy:

1. Vá em **Settings > Domains**
2. Adicione seu domínio customizado (ex: `praticodigital.com.br`)
3. Siga as instruções para configurar o DNS

**Configuração de DNS típica:**

```
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

### 6. Configurações Recomendadas

#### Analytics

O Vercel Analytics já está configurado no código! Basta habilitá-lo:

1. Vá em **Analytics** no menu lateral
2. Clique em **Enable Analytics**

#### Edge Config (Opcional)

Para dados que mudam frequentemente sem rebuild:

1. Crie um Edge Config em **Storage > Edge Config**
2. Migre dados de `/src/data/*.json` para Edge Config

#### Environment Variables por Ambiente

Configure variáveis diferentes para desenvolvimento/produção:

- **Development**: Variáveis para testes
- **Preview**: Variáveis para branches de preview
- **Production**: Variáveis reais de produção

### 7. Configurar Webhooks (Opcional)

Para notificações de deploy:

1. Vá em **Settings > Git > Deploy Hooks**
2. Adicione webhook para Slack, Discord, etc.

### 8. Proteção de Branch (Recomendado)

Configure proteção de branch `main` no GitHub:

1. Exigir aprovação de pull request
2. Exigir status checks (Vercel build)
3. Bloquear push direto para `main`

## Deploy Automático

Após a configuração inicial, todo push para `main` irá automaticamente:

1. ✅ Executar build
2. ✅ Fazer deploy em produção

Branches secundárias geram **Preview Deployments** com URLs únicas.

## Comandos CLI (Alternativa)

Você também pode fazer deploy via CLI:

```bash
# Instalar CLI
npm i -g vercel

# Login
vercel login

# Deploy (preview)
vercel

# Deploy (production)
vercel --prod
```

## Monitoramento e Performance

### Lighthouse Score

A Vercel automaticamente roda auditorias. Acesse em:

**Settings > Performance Insights**

### Logs em Tempo Real

Veja logs de requisições e funções em:

**Deployments > [Seu Deploy] > Functions**

### Edge Network

O site será automaticamente distribuído globalmente para baixa latência.

## Troubleshooting

### Build Falhou?

1. Verifique os logs de build
2. Rode `npm run build` localmente
3. Corrija erros de TypeScript/ESLint
4. Faça push novamente

### Variáveis de Ambiente Não Funcionam?

- Certifique-se de usar `NEXT_PUBLIC_` para variáveis client-side
- Recrie o deploy após adicionar variáveis

### 404 em Rotas Dinâmicas?

- Verifique se `generateStaticParams()` está configurado
- Confirme que os slugs em JSON coincidem com as rotas

## Próximos Passos

Após o deploy bem-sucedido:

- [ ] Configurar domínio customizado
- [ ] Habilitar Analytics
- [ ] Configurar email marketing (integrar Resend/SendGrid)
- [ ] Adicionar Google Analytics/Tag Manager
- [ ] Configurar proteção de formulário (reCAPTCHA)
- [ ] Testar performance (Lighthouse)
- [ ] Configurar monitoramento de erros (Sentry)

## Suporte

- [Documentação da Vercel](https://vercel.com/docs)
- [Comunidade Next.js](https://github.com/vercel/next.js/discussions)
- [Suporte Vercel](https://vercel.com/support)

---

**Pronto!** 🎉 Seu site está no ar em `https://seu-projeto.vercel.app`

