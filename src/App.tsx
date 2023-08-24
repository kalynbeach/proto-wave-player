import WavePlayer from './components/WavePlayer/WavePlayer'
import WavePlayerStack from './components/WavePlayerStack/WavePlayerStack'
import { StackProvider } from './components/WavePlayerStack/context'
import { Track, WavePlayerMode } from './components/WavePlayer/WavePlayer.types'
import './App.css'

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

function App() {
  return (
    <>
      <StackProvider>
        <main className='w-full min-h-screen md:p-24 flex flex-col justify-center'>
          <div className='flex flex-col gap-6 justify-center items-start'>
            <h1 className='mb-6 text-3xl font-mono'>wave-player</h1>
            <h2 className='mt-6 text-xl font-mono'>WavePlayer</h2>
            <WavePlayer
              id={0}
              mode={WavePlayerMode.Playlist}
              tracks={tracks}
              isStacked={false}
            />
            <h2 className='mt-6 text-xl font-mono'>WavePlayerStack</h2>
            <WavePlayerStack
              id={0}
              tracks={tracks}
            />
          </div>
        </main>
      </StackProvider>
    </>
  )
}

export default App
