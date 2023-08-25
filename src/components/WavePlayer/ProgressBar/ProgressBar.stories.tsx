import type { Meta, StoryObj } from '@storybook/react'
import ProgressBar, { ProgressBarProps } from './ProgressBar'

const meta: Meta<ProgressBarProps> = {
  title: 'WavePlayer/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    audioRef: {
      control: {
        type: 'object',
        required: true,
      },
    },
    progressBarRef: {
      control: {
        type: 'object',
        required: true,
      },
    },
    timeProgress: {
      control: {
        type: 'number',
        required: true,
      },
    },
    duration: {
      control: {
        type: 'number',
        required: true,
      },
    },
  },
} satisfies Meta<typeof ProgressBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    audioRef: undefined,
    progressBarRef: undefined,
    timeProgress: 0,
    duration: 0,
  },
}
