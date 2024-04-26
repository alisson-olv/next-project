'use client'
import PostProducts, { PostProductsProps } from '@/actions/postProducts';
import Input from '@/components/input'
import React, { FormEvent, useState } from 'react'

export default function AdicionarProdutoPage() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [estoque, setEstoque] = useState('');
  const [importado, setImportado] = useState(false);

  async function handlePostProducts(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data: PostProductsProps = {
      nome,
      preco: Number(preco),
      descricao,
      estoque: Number(estoque),
      importado: importado ? 1 : 0,
    }

    await PostProducts(data)
  }

  return (
    <form onSubmit={handlePostProducts} style={{ display: 'inline-flex', flexDirection: 'column', gap: '10px' }}>
      <Input value={nome} id='nome' label='Nome' type='text' onChange={({ target }) => setNome(target.value)} />
      <Input value={preco} id='preco' label='Preco' type='number' onChange={({ target }) => setPreco(target.value)} />
      <Input value={descricao} id='descricao' label='Descrição' type='text' onChange={({ target }) => setDescricao(target.value)} />
      <Input value={estoque} id='estoque' label='Estoque' type='number' onChange={({ target }) => setEstoque(target.value)} />
      <Input checked={importado} id='importado' label='Importado' type='checkbox' onChange={({ target }) => setImportado(target.checked)} />
      <button type='submit'>Adicionar</button>
    </form>
  )
}
