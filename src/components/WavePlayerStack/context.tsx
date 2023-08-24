import { createContext, useContext, useState } from 'react'

type StackState = {
  activePlayerId: number | null
}

const initialState: StackState = {
  activePlayerId: null
}

const StackContext = createContext<
  [StackState, React.Dispatch<React.SetStateAction<StackState>>] | undefined
>(undefined)

export function StackProvider({ children }: { children: React.ReactNode }) {
  const [stackState, setStackState] = useState<StackState>(initialState)
  return (
    <StackContext.Provider value={[stackState, setStackState]}>
      {children}
    </StackContext.Provider>
  )
}

export function useStack() {
  const context = useContext(StackContext)
  if (context === undefined) {
    throw new Error('useStack must be used within a StackProvider')
  }
  return context
}