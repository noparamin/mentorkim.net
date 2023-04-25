import React from 'react'
import Lottie from 'react-lottie-player'
import search from '/public/search.json'

export default function Search() {
  return (
    <Lottie
      loop
      animationData={search}
      play
    />
  )
}