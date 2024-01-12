"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ videoId }) => {
  const option = {
    width: "300",
    height: "300",
  }

  const [isOpen, setIsOpen] = useState(true)

  const handlePlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="px-2 py-2 bg-color-dark text-color-light float-right rounded-full text-xs"
          onClick={handlePlayer}
        >
          x
        </button>
        <YouTube
          videoId={videoId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    )
  }

  const WathcTrailer = () => {
    return (
      <button
        className="px-2 py-2 bg-color-dark text-color-light rounded-lg bottom-2 right-2 fixed hover:bg-color-gray transition-all"
        onClick={handlePlayer}
      >
        <h3> Watch Trailer</h3>
      </button>
    )
  }

  return isOpen ? <Player /> : <WathcTrailer />
}

export default VideoPlayer
