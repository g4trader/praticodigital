import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log do payload (em produção, você enviaria para Resend/SendGrid)
    console.log('📧 Novo contato recebido:', {
      timestamp: new Date().toISOString(),
      data: body,
    })

    // Aqui você integraria com Resend ou SendGrid
    // Exemplo com Resend:
    /*
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      
      await resend.emails.send({
        from: 'contato@praticodigital.com',
        to: 'vendas@praticodigital.com',
        subject: `Novo contato: ${body.nome} - ${body.empresa}`,
        html: `
          <h2>Novo contato pelo site</h2>
          <p><strong>Nome:</strong> ${body.nome}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Telefone:</strong> ${body.telefone || 'Não informado'}</p>
          <p><strong>Empresa:</strong> ${body.empresa}</p>
          <p><strong>Site:</strong> ${body.site || 'Não informado'}</p>
          <p><strong>MRR:</strong> ${body.mrr || 'Não informado'}</p>
          <p><strong>Objetivo:</strong> ${body.objetivo}</p>
        `,
      })
    }
    */

    // Validação básica
    if (!body.nome || !body.email || !body.empresa || !body.objetivo) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      )
    }

    if (!body.lgpd) {
      return NextResponse.json(
        { error: 'É necessário aceitar a política de privacidade' },
        { status: 400 }
      )
    }

    // Resposta de sucesso
    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem recebida com sucesso! Entraremos em contato em breve.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao processar contato:', error)
    return NextResponse.json(
      { error: 'Erro ao processar sua mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}

