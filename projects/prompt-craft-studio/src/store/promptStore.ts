import { create } from 'zustand'
import { Prompt, PromptComponent } from '@/types'

interface PromptStore {
  currentPrompt: Prompt | null
  components: PromptComponent[]
  selectedComponent: string | null
  setCurrentPrompt: (prompt: Prompt | null) => void
  setComponents: (components: PromptComponent[]) => void
  addComponent: (component: PromptComponent) => void
  updateComponent: (id: string, updates: Partial<PromptComponent>) => void
  deleteComponent: (id: string) => void
  setSelectedComponent: (id: string | null) => void
  buildPrompt: () => string
}

export const usePromptStore = create<PromptStore>((set, get) => ({
  currentPrompt: null,
  components: [],
  selectedComponent: null,
  
  setCurrentPrompt: (prompt) => set({ currentPrompt: prompt }),
  
  setComponents: (components) => set({ components }),
  
  addComponent: (component) => 
    set((state) => ({ components: [...state.components, component] })),
  
  updateComponent: (id, updates) =>
    set((state) => ({
      components: state.components.map((comp) =>
        comp.id === id ? { ...comp, ...updates } : comp
      ),
    })),
  
  deleteComponent: (id) =>
    set((state) => ({
      components: state.components.filter((comp) => comp.id !== id),
      selectedComponent: state.selectedComponent === id ? null : state.selectedComponent,
    })),
  
  setSelectedComponent: (id) => set({ selectedComponent: id }),
  
  buildPrompt: () => {
    const { components } = get()
    return components
      .sort((a, b) => a.position.y - b.position.y)
      .map((comp) => {
        const prefix = {
          context: 'Context:',
          instruction: '',
          example: 'Example:',
          constraint: 'Constraint:',
          output: 'Output Format:',
        }[comp.type]
        return prefix ? `${prefix} ${comp.content}` : comp.content
      })
      .filter((c) => c.trim())
      .join('\n\n')
  },
}))

