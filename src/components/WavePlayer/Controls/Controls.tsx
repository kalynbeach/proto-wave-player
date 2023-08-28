import { useState, useRef, useEffect, useCallback } from 'react'
import { useStack } from '../../WavePlayerStack/context'
import { useMode } from '../context'
import type { Track } from '../WavePlayer.types'
import ProgressBar from '../ProgressBar/ProgressBar'

export type ControlsProps = {
  id: number
  audioRef: React.RefObject<HTMLAudioElement>
  progressBarRef: React.RefObject<HTMLInputElement>
  duration: number
  timeProgress: number
  tracks: Track[]
  trackIndex: number
  isLooping: boolean
  isStacked: boolean
  setTrackIndex: React.Dispatch<React.SetStateAction<number>>
  setCurrentTrack: React.Dispatch<React.SetStateAction<Track>>
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>
  setIsLooping: React.Dispatch<React.SetStateAction<boolean>>
  handleNext: () => void
}

export default function Controls({
  id,
  audioRef,
  progressBarRef,
  duration,
  timeProgress,
  tracks,
  trackIndex,
  isLooping,
  isStacked,
  setTrackIndex,
  setCurrentTrack,
  setTimeProgress,
  setIsLooping,
  handleNext
}: ControlsProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume] = useState(75)
  const [stackState, setStackState] = useStack()
  const mode = useMode()

  const togglePause = () => {
    setIsPlaying(!isPlaying)
    if (isStacked) {
      setStackState({ ...stackState, activePlayerId: isPlaying ? null : id })
    }
  }

  const toggleLoop = () => {
    setIsLooping(!isLooping)
  }

  // const skipBackward = () => {
  //   audioRef.current!.currentTime -= 15
  // }

  // const skipForward = () => {
  //   audioRef.current!.currentTime += 15
  // }

  const handlePrevious = () => {
    if (trackIndex === 0) {
      const lastTrackIndex = tracks.length - 1
      setTrackIndex(lastTrackIndex)
      setCurrentTrack(tracks[lastTrackIndex])
    } else {
      setTrackIndex(trackIndex - 1)
      setCurrentTrack(tracks[trackIndex - 1])
    }
  }

  const playAnimationRef = useRef(0)

  const update = useCallback(() => {
    const currentTime = audioRef.current!.currentTime
    setTimeProgress(currentTime)
    progressBarRef.current!.value = currentTime.toString()
    progressBarRef.current!.style.setProperty(
      '--range-progress',
      `${(parseInt(progressBarRef.current!.value) / duration) * 100}%`
    )
    playAnimationRef.current = requestAnimationFrame(update)
  }, [audioRef, duration, progressBarRef, setTimeProgress])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current!.play()
      } else {
        audioRef.current!.pause()
      }
    }
    playAnimationRef.current = requestAnimationFrame(update)
  }, [audioRef, isPlaying, update])

  useEffect(() => {
    if (isStacked) {
      if (stackState.activePlayerId === id) {
        setIsPlaying(true)
      } else {
        setIsPlaying(false)
      }
    }
  }, [isStacked, stackState, setStackState, id])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current!.volume = volume / 100
      audioRef.current!.muted = isMuted
    }
  }, [audioRef, volume, isMuted])

  return (
    <div className='controls p-2 flex flex-row gap-2 justify-between border border-neutral-950'>
      {/* Playback Controls */}
      <div className='w-full flex flex-col md:flex-row gap-2 md:gap-4 justify-between items-center'>
        {/* Playback Buttons */}
        <div className='w-full p-2 md:p-0 flex flex-row gap-2 justify-between items-center'>
          {/* Loop */}
          <button onClick={() => toggleLoop()} className=''>
            {
              isLooping ?
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1AE803" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg> :
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 0 1-4 4H4.2"/></svg>
            }
          </button>
          {/* Previous */}
          {
            mode === 'playlist' && (
              <button onClick={() => handlePrevious()} className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
              </button>
            )
          }
          {/* Play/Pause */}
          <button onClick={() => togglePause()} className=''>
            {
              isPlaying ?
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg> :
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            }
          </button>
          {/* Next */}
          {
            mode === 'playlist' && (
              <button onClick={() => handleNext()} className=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
              </button>
            )
          }
          {/* Mute */}
          <button onClick={() => setIsMuted(!isMuted)} className='justify-self-end'>
            {
              isMuted ?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"/></svg> :
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            }
          </button>
        </div>
        <ProgressBar
          {...{
            audioRef,
            progressBarRef,
            timeProgress,
            duration
          }}
        />
      </div>
    </div>
  )
}