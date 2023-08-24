import type { Track } from '../WavePlayer.types'

type Props = {
  track: Track
}

export default function TrackImage({ track }: Props) {
  return (
    <div className='track-image flex justify-center items-center'>
      <div className='w-72 h-72 md:w-32 md:h-32 bg-neutral-900 rounded'>
        { 
          track.image ? (
            <div>
              <img
                className='w-[64px] h-[64px] md:w-[128px] md:h-[128px]'
                src={track.image}
                alt={track.title}
              />
            </div>
          ) : (
            <div className='w-full h-full flex justify-center items-center bg-neutral-300'>
              <span className='text-3xl'>🎵</span>
            </div>
          )
        }
      </div>
    </div>
  )
}