import React from 'react'

interface AcoesProps {
  preco: number;
  nome: string;
  atualizada: string;
}

export default async function AcoesPage() {
  const response = await fetch('https://api.origamid.online/acoes/lua', {
    next: {
      revalidate: 5
    }
  })

  const data = await response.json() as AcoesProps;

  return (
    <div>
      <h2>{data.nome} </h2>
      <h2>{data.preco} </h2>
      <h3>{data.atualizada} </h3>
    </div>
  )
}