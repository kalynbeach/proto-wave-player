export type WavePlayerConfig = {
  mode: WavePlayerMode
  tracks: Track[]
}

export enum WavePlayerMode {
  Loop = 'loop',
  Playlist = 'playlist'
}

export type Track = {
  id: number
  title: string
  artist: string
  src: string
  image: string
  mode: WavePlayerMode
}