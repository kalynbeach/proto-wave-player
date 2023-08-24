import { useRef } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { WavePlayerMode } from '../WavePlayer.types'
import Controls, { ControlsProps } from './Controls'

const meta: Meta<ControlsProps> = {
  title: 'WavePlayer/Controls',
  component: Controls,
  parameters: {
    layout: 'centered',
  },
  argTypes: {

  },
} satisfies Meta<typeof Controls>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 0,
    audioRef: useRef<HTMLAudioElement>(null),
    progressBarRef: useRef<HTMLInputElement>(null),
    duration: 0,
    timeProgress: 0,
    tracks: [
      {
        id: 0,
        title: 'Sample Track',
        artist: 'Sample Artist',
        src: '',
        image: '',
        mode: WavePlayerMode.Loop
      },
    ],
    trackIndex: 0,
    isLooping: false,
    isStacked: false,
    setTrackIndex: () => {},
    setCurrentTrack: () => {},
    setTimeProgress: () => {},
    setIsLooping: () => {},
    handleNext: () => {},
  },
}
