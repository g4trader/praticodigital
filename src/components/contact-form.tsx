'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().optional(),
  empresa: z.string().min(2, 'Nome da empresa obrigatório'),
  site: z.string().url('URL inválida').optional().or(z.literal('')),
  mrr: z.string().optional(),
  objetivo: z.string().min(10, 'Descreva seu objetivo com pelo menos 10 caracteres'),
  lgpd: z.boolean().refine((val) => val === true, {
    message: 'Você precisa aceitar os termos',
  }),
})

type FormData = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const lgpd = watch('lgpd')

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fale com nossos especialistas</CardTitle>
        <CardDescription>
          Preencha o formulário e entraremos em contato em até 24h
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle2 className="h-16 w-16 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mensagem enviada com sucesso!</h3>
            <p className="text-muted-foreground">
              Entraremos em contato em breve. Obrigado!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo *</Label>
                <Input id="nome" {...register('nome')} placeholder="João Silva" />
                {errors.nome && (
                  <p className="text-sm text-destructive">{errors.nome.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="joao@empresa.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="telefone">WhatsApp / Telefone</Label>
                <Input
                  id="telefone"
                  {...register('telefone')}
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa">Empresa *</Label>
                <Input id="empresa" {...register('empresa')} placeholder="Nome da empresa" />
                {errors.empresa && (
                  <p className="text-sm text-destructive">{errors.empresa.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="site">Site da empresa</Label>
                <Input
                  id="site"
                  {...register('site')}
                  placeholder="https://suaempresa.com.br"
                />
                {errors.site && <p className="text-sm text-destructive">{errors.site.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mrr">MRR / Receita mensal (aprox.)</Label>
                <Input id="mrr" {...register('mrr')} placeholder="R$ 50.000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="objetivo">Principal objetivo / desafio *</Label>
              <Textarea
                id="objetivo"
                {...register('objetivo')}
                placeholder="Conte-nos qual o principal desafio que você quer resolver..."
                rows={4}
              />
              {errors.objetivo && (
                <p className="text-sm text-destructive">{errors.objetivo.message}</p>
              )}
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="lgpd"
                checked={lgpd}
                onCheckedChange={(checked) => setValue('lgpd', checked as boolean)}
              />
              <Label htmlFor="lgpd" className="text-sm leading-relaxed cursor-pointer">
                Concordo em receber comunicações da Prático Digital e aceito a{' '}
                <a href="/privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
                .
              </Label>
            </div>
            {errors.lgpd && <p className="text-sm text-destructive">{errors.lgpd.message}</p>}

            <Button type="submit" size="lg" className="w-full glow" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                'Enviar mensagem'
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

