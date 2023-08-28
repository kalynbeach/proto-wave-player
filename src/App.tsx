import { StackProvider, WavePlayerStack } from '.'
import { tracks } from './tracks'

function App() {
  return (
    <div className='w-full min-h-screen flex justify-center'>
      <StackProvider>
        <WavePlayerStack
          id={0}
          tracks={tracks}
        />
      </StackProvider>
    </div>
  )
}

export default App
