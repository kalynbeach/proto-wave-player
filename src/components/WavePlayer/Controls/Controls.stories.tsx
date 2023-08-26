import { useRef } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { withReactContext } from 'storybook-react-context'
import { StackContext } from '../../WavePlayerStack/context'
import Controls, { ControlsProps } from './Controls'
import { tracks } from '../../../tracks'

const meta: Meta<ControlsProps> = {
  title: 'WavePlayer/Controls',
  component: Controls,
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
    duration: {
      control: {
        type: 'number',
        required: true,
      },
    },
    timeProgress: {
      control: {
        type: 'number',
        required: true,
      },
    },
    tracks: {
      control: {
        type: 'array',
        required: true,
      },
    },
    trackIndex: {
      control: {
        type: 'number',
        required: true,
      },
    },
    isLooping: {
      control: {
        type: 'boolean',
        required: true,
      },
    },
    isStacked: {
      control: {
        type: 'boolean',
        required: true,
      },
    },
    setTrackIndex: {
      control: {
        type: 'function',
        required: true,
      },
    },
    setCurrentTrack: {
      control: {
        type: 'function',
        required: true,
      },
    },
    setTimeProgress: {
      control: {
        type: 'function',
        required: true,
      },
    },
    setIsLooping: {
      control: {
        type: 'function',
        required: true,
      },
    },
    handleNext: {
      control: {
        type: 'function',
        required: true,
      },
    },
  }
} satisfies Meta<typeof Controls>

export default meta
type Story = StoryObj<typeof meta>

const ControlsWithRefs = (args: ControlsProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLInputElement>(null)
  return (
    <Controls
      {...args}
      audioRef={audioRef}
      progressBarRef={progressBarRef}
    />
  )
}

export const Default: Story = {
  args: {
    id: 0,
    audioRef: undefined,
    progressBarRef: undefined,
    duration: 0,
    timeProgress: 0,
    tracks: tracks,
    trackIndex: 0,
    isLooping: false,
    isStacked: false,
    setTrackIndex: () => {},
    setCurrentTrack: () => {},
    setTimeProgress: () => {},
    setIsLooping: () => {},
    handleNext: () => {},
  },
  render: (args) => <ControlsWithRefs {...args} />
}
