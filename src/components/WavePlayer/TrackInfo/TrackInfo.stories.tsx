import type { Meta, StoryObj } from '@storybook/react'
import { WavePlayerMode } from '../WavePlayer.types'
import TrackInfo from './TrackInfo'

const meta = {
  title: 'WavePlayer/TrackInfo',
  component: TrackInfo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    track: {
      control: {
        type: 'object',
        required: true,
      },
    },
  },
} satisfies Meta<typeof TrackInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    track: {
      id: 0,
      title: 'Sample Track',
      artist: 'Sample Artist',
      src: '',
      image: '',
      mode: WavePlayerMode.Loop
    },
  },
}
