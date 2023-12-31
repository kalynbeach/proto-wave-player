import type { Track } from '../WavePlayer.types'

type Props = {
  track: Track
}

export default function TrackInfo({ track }: Props) {
  return (
    <div className='track-info flex-grow'>
      <div className='w-full md:min-w-[412px] h-full min-h-[5rem] md:min-h-[72px] px-2 flex flex-col justify-around'>
        <span className='font-mono font-bold text-xl text-white'>{track.title}</span>
        <span className='font-mono text-sm'>{track.artist}</span>
        {/* TODO: Add `track.album` and any other track info */}
      </div>
    </div>
  )
}