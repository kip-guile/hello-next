'use client'
import React, { useState } from 'react'

function VisitorNumber({ hits }) {
  const [censored, setCensored] = useState(true)

  const handleClick = () => {
    setCensored(!censored)
  }

  return (
    <p>
      You are visitor number{' '}
      <button className={censored && 'censored'} onClick={handleClick}>
        {hits}.
      </button>
    </p>
  )
}

export default VisitorNumber
