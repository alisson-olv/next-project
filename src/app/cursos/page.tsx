import CursosFetch from '@/apiFetch/cursos';
import Link from 'next/link';
import React from 'react'

export default async function Cursos() {
  const data = await CursosFetch();

  return (
    <div>
      <h3 style={{ margin: '10px 0' }}>Cursos</h3>
      {data?.map((curso) => (
        <div key={curso.id}>
          <p >{curso.nome} <span><Link href={`/cursos/${curso.slug}`}>ver</Link></span></p>
        </div>
      ))}
    </div>
  )
}
