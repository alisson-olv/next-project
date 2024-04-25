'use client'
import LoginAction from '@/actions/login';
import React, { FormEvent, useState } from 'react'

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookie, setCookie] = useState('');

  async function handleSubmitUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await LoginAction(username, password);
    console.log(response);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmitUser(e)} style={{ display: 'inline-flex', flexDirection: 'column', gap: '10px' }}>
        <input onChange={({ target }) => setUsername(target.value)} value={username} type="text" placeholder="login" />
        <input onChange={({ target }) => setPassword(target.value)} value={password} type="text" placeholder="senha" />
        <button type="submit">Login</button>
      </form>
      <p>Cookie: {cookie}</p>
    </>
  )
}
