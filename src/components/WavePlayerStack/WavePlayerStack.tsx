import WavePlayer from '../WavePlayer/WavePlayer'
import { Track, WavePlayerMode } from '../WavePlayer/WavePlayer.types'
// import { useStack } from './context'

export type WavePlayerStackProps = {
  id: number
  tracks: Track[]
}

export default function WavePlayerStack({
  tracks
}: WavePlayerStackProps) {
  return (
    <div className='wave-player-stack flex flex-col gap-6 justify-center items-center'>
      {
        tracks.map((track: Track) => (
          <WavePlayer
            key={track.id}
            id={track.id}
            mode={track.mode}
            tracks={track.mode === WavePlayerMode.Loop ? [track] : tracks}
            isStacked={true}
          />
        ))
      }
    </div>
  )
}