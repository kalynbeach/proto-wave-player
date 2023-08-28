import { useState, useRef, useEffect } from 'react'
import { ModeProvider } from './context'
import Controls from './Controls/Controls'
import TrackImage from './TrackImage/TrackImage'
import TrackInfo from './TrackInfo/TrackInfo'
import { WavePlayerMode } from './WavePlayer.types'
import type { Track } from './WavePlayer.types'

export type WavePlayerProps = {
  id: number
  mode: WavePlayerMode
  tracks: Track[]
  isStacked: boolean
}

export default function WavePlayer({ id, mode, tracks, isStacked }: WavePlayerProps) {
  const [trackIndex, setTrackIndex] = useState(0)
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[trackIndex])
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLooping, setIsLooping] = useState(true)
  const [audioInitialized, setAudioInitialized] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLInputElement>(null)

  const onLoadedMetadata = () => {
    if (audioRef.current && progressBarRef) {
      const seconds = audioRef.current.duration
      setDuration(seconds)
      const max = seconds.toString()
      progressBarRef.current!.max = max
    }
  }

  const handleNext = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1)
      setCurrentTrack(tracks[trackIndex + 1])
    } else {
      setTrackIndex(0)
      setCurrentTrack(tracks[0])
    }
  }

  useEffect(() => {
    if (!audioInitialized) {
      console.log(`[WavePlayer (${id})] Initializing audio...`)
      audioRef.current!.src = currentTrack.src
      audioRef.current!.load()
      console.log(`[WavePlayer (${id})] Audio initialized: `, audioRef.current)
      setAudioInitialized(true)
    }
  }, [audioInitialized, currentTrack, id])

  return (
    <div className='wave-player max-w-xs md:max-w-3xl'>
      <ModeProvider mode={mode}>
        <audio
          src={currentTrack.src}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={handleNext}
          loop={isLooping}
          defaultValue={currentTrack.src}
        />
        <div className='wave-player-inner p-2 flex flex-col md:flex-row gap-2 bg-neutral-900 border border-neutral-950'>
          <TrackImage
            track={currentTrack}
          />
          <div className='flex flex-col gap-2 justify-between'>
            <TrackInfo
              track={currentTrack}
            />
            <Controls
              {...{
                id,
                audioRef,
                progressBarRef,
                timeProgress,
                duration,
                tracks,
                trackIndex,
                isLooping,
                isStacked,
                setTrackIndex,
                setCurrentTrack,
                setTimeProgress,
                setIsLooping,
                handleNext
              }}
            />
          </div>
        </div>
      </ModeProvider>
    </div>
  )
}