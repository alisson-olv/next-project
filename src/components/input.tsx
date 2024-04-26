import React, { ComponentProps, FormEvent } from 'react'

interface InputProps extends ComponentProps<'input'> {
  id: string;
  label: string;
}

export default function Input({ id, label, ...props }: InputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} {...props} />
    </div>
  )
}
