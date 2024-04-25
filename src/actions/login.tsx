'use server'

import { cookies } from "next/headers";

export default async function LoginAction(username: string, password: string) {
  const response = await fetch('https://api.origamid.online/conta/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const data = await response.json();

  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
  })

  return 'response.ok';
} 