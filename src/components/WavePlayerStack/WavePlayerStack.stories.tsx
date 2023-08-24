import type { Meta, StoryObj } from '@storybook/react'
import { WavePlayerMode } from '../WavePlayer/WavePlayer.types'
import WavePlayerStack, { WavePlayerStackProps } from './WavePlayerStack'

const meta: Meta<WavePlayerStackProps> = {
  title: 'WavePlayer/WavePlayerStack',
  component: WavePlayerStack,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof WavePlayerStack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 0,
    tracks: [
      {
        id: 0,
        title: 'Sample Track',
        artist: 'Sample Artist',
        src: '',
        image: '',
        mode: WavePlayerMode.Loop
      },
    ]
  }
}
