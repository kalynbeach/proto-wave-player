import type { Track } from '../WavePlayer.types'

type Props = {
  track: Track
}

export default function TrackImage({ track }: Props) {
  return (
    <div className='track-image flex justify-center items-center'>
      <div className='box-content w-72 h-72 md:w-32 md:h-32 bg-night-900 border border-night-800'>
        { 
          track.image ? (
            <div>
              <img
                className='w-72 h-72 md:w-32 md:h-32'
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