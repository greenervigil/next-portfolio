"use client"

import { createContext, useContext, type ReactNode } from "react"
import { state } from "./state"
import type { UserType } from "@/types/user-type"

const StateContext = createContext<UserType | undefined>(undefined)

export function StateProvider({ children }: { children: ReactNode }) {
  return <StateContext.Provider value={state}>{children}</StateContext.Provider>
}

export function useAppState(): UserType {
  const context = useContext(StateContext)
  if (!context) {
    throw new Error("useAppState must be used within a StateProvider")
  }
  return context
}
