'use client'
import React from 'react'
type Params={
  tengicxdc: string[]
}

type Props={
  params:Params
}

export default function page(props:Props) {
    const {params}=props
  return (
    <div>
      {params.tengicxdc[0]}
    </div>
  )
}
