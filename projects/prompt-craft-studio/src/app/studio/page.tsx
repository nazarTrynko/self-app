'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wand2, Play, Save, Download, Plus, X } from 'lucide-react'
import { PromptComponent } from '@/types'

export default function StudioPage() {
  const [components, setComponents] = useState<PromptComponent[]>([])
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)
  const [testOutput, setTestOutput] = useState<string>('')
  const [isTesting, setIsTesting] = useState(false)

  const addComponent = (type: PromptComponent['type']) => {
    const newComponent: PromptComponent = {
      id: `comp-${Date.now()}`,
      type,
      content: '',
      position: { x: 50, y: components.length * 100 + 50 },
    }
    setComponents([...components, newComponent])
    setSelectedComponent(newComponent.id)
  }

  const updateComponent = (id: string, updates: Partial<PromptComponent>) => {
    setComponents(components.map(comp => 
      comp.id === id ? { ...comp, ...updates } : comp
    ))
  }

  const deleteComponent = (id: string) => {
    setComponents(components.filter(comp => comp.id !== id))
    if (selectedComponent === id) {
      setSelectedComponent(null)
    }
  }

  const buildPrompt = () => {
    return components
      .sort((a, b) => a.position.y - b.position.y)
      .map(comp => {
        const prefix = {
          context: 'Context:',
          instruction: '',
          example: 'Example:',
          constraint: 'Constraint:',
          output: 'Output Format:',
        }[comp.type]
        return prefix ? `${prefix} ${comp.content}` : comp.content
      })
      .filter(c => c.trim())
      .join('\n\n')
  }

  const testPrompt = async () => {
    setIsTesting(true)
    const prompt = buildPrompt()
    // TODO: Integrate with OpenAI API
    setTimeout(() => {
      setTestOutput('This is a test output. In production, this will call the OpenAI API with your prompt.')
      setIsTesting(false)
    }, 1000)
  }

  const exportPrompt = () => {
    const prompt = buildPrompt()
    navigator.clipboard.writeText(prompt)
    alert('Prompt copied to clipboard!')
  }

  const componentTypes: { type: PromptComponent['type']; label: string; color: string }[] = [
    { type: 'context', label: 'Context', color: 'bg-blue-500/20 text-blue-400' },
    { type: 'instruction', label: 'Instruction', color: 'bg-purple-500/20 text-purple-400' },
    { type: 'example', label: 'Example', color: 'bg-green-500/20 text-green-400' },
    { type: 'constraint', label: 'Constraint', color: 'bg-yellow-500/20 text-yellow-400' },
    { type: 'output', label: 'Output Format', color: 'bg-pink-500/20 text-pink-400' },
  ]

  return (
    <div className="min-h-screen bg-workshop-bg">
      {/* Header */}
      <header className="border-b border-workshop-border bg-workshop-surface/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wand2 className="w-6 h-6 text-studio-primary" />
            <h1 className="text-2xl font-display font-bold">Studio</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={testPrompt}
              disabled={isTesting || components.length === 0}
              className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="w-4 h-4" />
              {isTesting ? 'Testing...' : 'Test Prompt'}
            </button>
            <button
              onClick={exportPrompt}
              disabled={components.length === 0}
              className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Component Library Sidebar */}
        <aside className="lg:col-span-1">
          <div className="card-workshop">
            <h2 className="text-lg font-semibold mb-4">Component Library</h2>
            <div className="space-y-2">
              {componentTypes.map(({ type, label, color }) => (
                <button
                  key={type}
                  onClick={() => addComponent(type)}
                  className={`w-full p-3 rounded-lg border border-workshop-border hover:border-studio-primary/50 transition-colors ${color} text-left`}
                >
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    <span className="font-medium">{label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Preview */}
          <div className="card-workshop mt-6">
            <h2 className="text-lg font-semibold mb-4">Preview</h2>
            <div className="bg-workshop-bg rounded-lg p-4 border border-workshop-border">
              <pre className="text-sm text-gray-400 whitespace-pre-wrap font-mono">
                {buildPrompt() || 'Add components to build your prompt...'}
              </pre>
            </div>
          </div>
        </aside>

        {/* Canvas Area */}
        <div className="lg:col-span-2">
          <div className="card-workshop min-h-[600px] relative">
            {components.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Wand2 className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 mb-2">Start building your prompt</p>
                  <p className="text-sm text-gray-600">Add components from the library</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {components.map((component) => {
                  const typeConfig = componentTypes.find(c => c.type === component.type)
                  const isSelected = selectedComponent === component.id
                  
                  return (
                    <motion.div
                      key={component.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        isSelected 
                          ? 'border-studio-primary bg-studio-bg' 
                          : 'border-workshop-border bg-workshop-surface hover:border-workshop-border/50'
                      }`}
                      onClick={() => setSelectedComponent(component.id)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${typeConfig?.color}`}>
                          {typeConfig?.label}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            deleteComponent(component.id)
                          }}
                          className="text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <textarea
                        value={component.content}
                        onChange={(e) => updateComponent(component.id, { content: e.target.value })}
                        placeholder={`Enter ${typeConfig?.label.toLowerCase()}...`}
                        className="w-full bg-transparent border-none outline-none resize-none text-white placeholder-gray-600"
                        rows={3}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </motion.div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Test Output Panel */}
          {testOutput && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-workshop mt-6"
            >
              <h2 className="text-lg font-semibold mb-4">Test Output</h2>
              <div className="bg-workshop-bg rounded-lg p-4 border border-workshop-border">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                  {testOutput}
                </pre>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

