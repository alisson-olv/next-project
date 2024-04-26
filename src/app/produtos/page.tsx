import React from 'react'

interface ProdutosProps {
  id: number;
  nome: string;
  preco: number;
}

export default async function ProdutosPage() {
  const response = await fetch('https://api.origamid.online/produtos', {
    next: {
      revalidate: 60,
    }
  });
  const data = await response.json() as ProdutosProps[];

  return (
    <div>
      <ul>
        {data.map((produto) => (
          <li key={produto.id}>
            - {produto.nome} / {(produto.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </li>
        ))}
      </ul>
    </div>
  )
}
