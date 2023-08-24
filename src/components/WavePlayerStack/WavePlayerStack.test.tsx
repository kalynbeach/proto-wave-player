import { render } from '@testing-library/react'
import { Track, WavePlayerMode } from '../WavePlayer/WavePlayer.types'
import WavePlayerStack from './WavePlayerStack'
import { StackProvider } from './context'

const trackSrcBaseUrl = 'https://kkb-sounds.s3.us-west-1.amazonaws.com/loops/'
const trackImgBaseUrl = 'https://kkb-sounds.s3.us-west-1.amazonaws.com/images/'

export const tracks: Track[] = [
  {
    id: 0,
    title: '0_initializer',
    artist: 'Kalyn Beach',
    src: trackSrcBaseUrl + '0_initializer.wav',
    image: trackImgBaseUrl + '0_initializer.png',
    mode: WavePlayerMode.Loop
  },
  {
    id: 1,
    title: '1_workflows',
    artist: 'Kalyn Beach',
    src: trackSrcBaseUrl + '1_workflows.wav',
    image: trackImgBaseUrl + '1_workflows.png',
    mode: WavePlayerMode.Loop
  },
  {
    id: 2,
    title: '2_stasis',
    artist: 'Kalyn Beach',
    src: trackSrcBaseUrl + '2_stasis.wav',
    image: trackImgBaseUrl + '2_stasis.png',
    mode: WavePlayerMode.Loop
  }
]

describe('WavePlayerStack', () => {
  it('renders', () => {
    render(
      <StackProvider>
        <WavePlayerStack
          id={0}
          tracks={tracks}
        />
      </StackProvider>
    )
    // ...
  })
})