import WavePlayer from './WavePlayer/WavePlayer'
import { ModeContext, ModeProvider, useMode } from './WavePlayer/context'
import { Track, WavePlayerConfig, WavePlayerMode } from './WavePlayer'

import WavePlayerStack from './WavePlayerStack/WavePlayerStack'
import { StackContext, StackProvider, useStack } from './WavePlayerStack/context'

export {
  WavePlayer,
  WavePlayerMode,
  ModeContext,
  ModeProvider,
  useMode,
  WavePlayerStack,
  StackContext,
  StackProvider,
  useStack
}

export type {
  Track,
  WavePlayerConfig
}

// export * from './WavePlayer'
// export * from './WavePlayerStack'