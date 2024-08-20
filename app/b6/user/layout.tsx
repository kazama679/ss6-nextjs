import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

export default function layout({children}:Props) {
  return (
    <div>
      user
      {children}
    </div>
  )
}
