"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

interface SkillFilterContextType {
  selectedSkill: string | null
  setSelectedSkill: (skill: string | null) => void
}

const SkillFilterContext = createContext<SkillFilterContextType | undefined>(undefined)

export function SkillFilterProvider({ children }: { children: ReactNode }) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  return (
    <SkillFilterContext.Provider value={{ selectedSkill, setSelectedSkill }}>
      {children}
    </SkillFilterContext.Provider>
  )
}

export function useSkillFilter() {
  const context = useContext(SkillFilterContext)
  if (context === undefined) {
    throw new Error('useSkillFilter must be used within a SkillFilterProvider')
  }
  return context
}
