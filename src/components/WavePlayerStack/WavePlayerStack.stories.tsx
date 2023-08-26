import type { Meta, StoryObj } from '@storybook/react'
import { withReactContext } from 'storybook-react-context'
import { StackContext } from './context'
import WavePlayerStack, { WavePlayerStackProps } from './WavePlayerStack'
import { tracks } from '../../tracks'

const meta: Meta<WavePlayerStackProps> = {
  title: 'WavePlayer/WavePlayerStack',
  component: WavePlayerStack,
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
  argTypes: {},
} satisfies Meta<typeof WavePlayerStack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 0,
    tracks: tracks
  }
}
