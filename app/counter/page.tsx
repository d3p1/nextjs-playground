/**
 * @description Root page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import {incrementLikes} from '@/app/server'
import {useState} from 'react'

export default function Page() {
  const [likes, setLikes] = useState(0)

  const increment = async () => {
    const l = await incrementLikes()
    setLikes(l)
  }

  return (
    <>
      <button
        onClick={() => increment()}
        className="cursor-pointer p-4 bg-neutral-600 rounded-2xl font-bold"
      >
        Increment Likes
      </button>
      <p>Likes: {likes}</p>
    </>
  )
}
