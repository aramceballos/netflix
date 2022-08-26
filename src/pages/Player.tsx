import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Figure = styled.figure`
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  align-items: center;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
`

const Controls = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  flex-direction: column;
`

const SliderContainer = styled.div`
  width: 100%;
`

const Slider = styled.input`
  width: 100%;
  height: 1.5rem;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

function Player() {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('timeupdate', () => {
        setCurrentTime(video.currentTime)
      })
      video.addEventListener('loadedmetadata', () => {
        setDuration(video.duration)
      })
    }
  }, [videoRef])

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.currentTime = parseFloat(e.target.value)
    }
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.volume = parseFloat(e.target.value)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
    }
  }

  return (
    <Figure>
      <Video ref={videoRef} autoPlay width="100%">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
          type="video/mp4"
        />
      </Video>
      <Controls>
        <SliderContainer>
          <Slider
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
          />
        </SliderContainer>
        <ButtonsContainer>
          <button onClick={togglePlay}>Play/Pause</button>
          <button onClick={toggleMute}>Mute</button>
        </ButtonsContainer>
      </Controls>
    </Figure>
  )
}

export default Player
