# wave-player

A music player.


## TODOs

- **Components**
  - `WavePlayer`
    - Styles
      - [ ] Update colors and hover effects
      - [ ] Add styles for `active` state
    - [ ] Streamline audio src loading for quicker initial playback
    - `Controls`
      - [ ] Make audio controls more responsive
  - `WavePlayerStack`
    - [ ] Work on styles
    - [ ] Add `title` prop & UI
  - Design and build `Config` UX/UI
    - [ ] Add `ConfigButton` component to `WavePlayer` and `WavePlayerStack`
    - [ ] Add `Config` component
      - List `tracks` config
      - Edit `tracks` config
        - [ ] Add `TracksForm` component for editing `tracks` config
- **Config**
  - `tracks`
    - Generalize `tracks` config setting and loading mechanisms
      - [ ] Create UX/UI for setting and updating `tracks` config
      - [ ] Figure out `tracks` config storage
    - [ ] Update my `tracks` demo config audio src permissions (in AWS) so they work in deployed demo
- **Context**
  - Assess if `WavePlayerContext` is needed
  - Update `StackContext` as needed
    - [ ] Rename to `WavePlayerStackContext`
- **Accessibility**
  - [ ] Add keyboard controls to `Controls` component
  - [ ] Add tab key support
  - [ ] Add aria-labels as needed
- **Testing**
  - `WavePlayer`
    - Audio (`audioRef`) initialization
      - [ ] Ensure audio is successfully loaded from `currentTrack.src`
      - [ ] Ensure `audioInitialized` is set to `true`
  - `WavePlayerStack`
    - [ ] Ensure only one `WavePlayer` is playing at a time (`activePlayerId` in `WavePlayerStackContext`)
- **Packaging**
  - [ ] Identify exports
    - `WavePlayer`
    - `WavePlayerStack`
    - Track config functions
    - Types
- **Shipping**
  - [ ] Deploy demo to Vercel