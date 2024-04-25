'use client'
import getCookie from "@/actions/getCookie"
import { useState } from "react";

export default function Cookie() {
  const [token, setToken] = useState<null | string>(null);

  async function handleClick() {
    const tokenUser = await getCookie('token');
    if (tokenUser) {
      setToken(tokenUser);
    } else {
      setToken('não há token');
    }
  }

  return (
    <>
      <h3>Cookie: {token}</h3>
      <button onClick={handleClick}>Pegar Cookie</button>
    </>
  )
}