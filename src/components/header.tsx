import Link from 'next/link'
import React from 'react'

export default async function Header() {

  return (
    <nav style={{ margin: '20px 0' }}>
      <ul>
        <li><Link href='/' >Home</Link></li>
        <li><Link href='/cursos'>Cursos</Link></li>
        <li><Link href='/login'>Login</Link></li>
        <li><Link href='/acoes'>Ações</Link></li>
      </ul>
    </nav>
  )
}
