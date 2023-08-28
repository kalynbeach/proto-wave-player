export type ProgressBarProps = {
  audioRef: React.RefObject<HTMLAudioElement>
  progressBarRef: React.RefObject<HTMLInputElement>
  timeProgress: number
  duration: number
}

export default function ProgressBar({
  audioRef,
  progressBarRef,
  timeProgress,
  duration
}: ProgressBarProps) {

  const handleProgressChange = () => {
    audioRef.current!.currentTime = parseInt(progressBarRef.current!.value)
  }

  const formatTime = (time: number) => {
    if (time) {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds
      return `${formattedMinutes}:${formattedSeconds}`
    }
    return '00:00'
  }

  return (
    <div className='progress-bar p-2 md:p-0 flex flex-row gap-2 justify-between items-center'>
      <span className='w-10 md:w-12 text-xs md:text-sm font-mono'>{formatTime(timeProgress)}</span>
      <input
        type='range'
        ref={progressBarRef}
        defaultValue={0}
        onChange={handleProgressChange}
        className='input-range w-40 md:w-48 accent-[#1AE803]'
      />
      <span className='w-10 md:w-12 text-xs md:text-sm font-mono text-right'>{formatTime(duration)}</span>
    </div>
  )
}