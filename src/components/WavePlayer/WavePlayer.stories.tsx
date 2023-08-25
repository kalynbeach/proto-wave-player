import type { Meta, StoryObj } from '@storybook/react'
import { withReactContext } from 'storybook-react-context'
import { StackContext } from '../WavePlayerStack/context'
import { WavePlayerMode } from './WavePlayer.types'
import WavePlayer, { WavePlayerProps } from './WavePlayer'

const meta: Meta<WavePlayerProps> = {
  title: 'WavePlayer/WavePlayer',
  component: WavePlayer,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    withReactContext({
      Context: StackContext,
      initialState: [{
        activePlayerId: null
      }]
    })
  ],
  argTypes: {
    id: {
      control: {
        type: 'number',
        required: true,
      },
    },
    mode: {
      control: {
        type: 'select',
        options: Object.values(WavePlayerMode),
      },
    },
    tracks: {
      control: {
        type: 'object',
        required: true,
      },
    },
    isStacked: {
      control: {
        type: 'boolean',
        required: true,
      },
    },
  },
} satisfies Meta<typeof WavePlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 0,
    mode: WavePlayerMode.Loop,
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
    isStacked: false,
  }
}
