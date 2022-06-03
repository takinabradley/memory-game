import React, { useEffect } from "react"

export default function MemoryCard({ image, onClick }) {
  return (
    <div className='memory-card' onClick={onClick}>
      <img src={image.img} alt={image.alt} />
      <p>{image.alt.toUpperCase()}</p>
    </div>
  )
}