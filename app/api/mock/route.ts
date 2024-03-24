import { NextResponse } from "@/node_modules/next/server";

export async function GET() {
    return NextResponse.json({
        message: 'returning activities collections',
        data: [
            {
                "descricao": "Reunião de equipe",
                "data_inicio": "2024-03-24T09:00:00Z",
                "data_fim": "2024-03-24T10:00:00Z",
                "usuarios": ["João", "Maria", "Pedro"]
            },
            {
                "descricao": "Desenvolvimento de novos recursos",
                "data_inicio": "2024-03-25T13:00:00Z",
                "data_fim": "2024-03-25T17:00:00Z",
                "usuarios": ["Ana", "Carlos"]
            },
            {
                "descricao": "Análise de mercado",
                "data_inicio": "2024-03-26T10:00:00Z",
                "data_fim": "2024-03-26T12:00:00Z",
                "usuarios": ["Mariana", "Rafael"]
            },
            {
                "descricao": "Testes de usabilidade",
                "data_inicio": "2024-03-27T14:00:00Z",
                "data_fim": "2024-03-27T16:00:00Z",
                "usuarios": ["Sara", "Lucas"]
            },
            {
                "descricao": "Planejamento estratégico",
                "data_inicio": "2024-03-28T09:00:00Z",
                "data_fim": "2024-03-28T11:00:00Z",
                "usuarios": ["Felipe", "Juliana"]
            },
            {
                "descricao": "Treinamento de novos funcionários",
                "data_inicio": "2024-03-29T08:30:00Z",
                "data_fim": "2024-03-29T12:30:00Z",
                "usuarios": ["Gustavo", "Larissa", "Vitor"]
            },
            {
                "descricao": "Entrevistas de candidatos",
                "data_inicio": "2024-03-30T11:00:00Z",
                "data_fim": "2024-03-30T15:00:00Z",
                "usuarios": ["Fernanda", "Rodrigo"]
            },
            {
                "descricao": "Revisão de código",
                "data_inicio": "2024-03-31T10:00:00Z",
                "data_fim": "2024-03-31T12:00:00Z",
                "usuarios": ["Bruno", "Carolina"]
            },
            {
                "descricao": "Relatório mensal",
                "data_inicio": "2024-04-01T13:00:00Z",
                "data_fim": "2024-04-01T15:30:00Z",
                "usuarios": ["Eduarda", "Guilherme"]
            },
            {
                "descricao": "Implementação de novas funcionalidades",
                "data_inicio": "2024-04-02T09:30:00Z",
                "data_fim": "2024-04-02T17:00:00Z",
                "usuarios": ["Isabela", "Mateus"]
            }
        ]

    })
}