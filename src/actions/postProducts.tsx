'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export interface PostProductsProps {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
}

export default async function PostProducts(produto: PostProductsProps) {
  const response = await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(produto)
  })

  if (response.ok) {
    revalidatePath('/produtos');
    redirect('/produtos');
  }
}
