'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Wand2, TrendingUp, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react'
import { PromptAnalysis, PromptTransformation } from '@/types'

export default function AlchemistPage() {
  const [inputPrompt, setInputPrompt] = useState('')
  const [analysis, setAnalysis] = useState<PromptAnalysis | null>(null)
  const [transformation, setTransformation] = useState<PromptTransformation | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isTransforming, setIsTransforming] = useState(false)

  const analyzePrompt = async () => {
    if (!inputPrompt.trim()) return
    
    setIsAnalyzing(true)
    // TODO: Integrate with AI analysis
    setTimeout(() => {
      const mockAnalysis: PromptAnalysis = {
        healthScore: 65,
        clarity: 70,
        specificity: 60,
        structure: 65,
        effectiveness: 70,
        issues: [
          {
            type: 'specificity',
            severity: 'medium',
            message: 'Prompt lacks specific examples',
            suggestion: 'Add concrete examples to guide the AI',
          },
          {
            type: 'structure',
            severity: 'low',
            message: 'Could benefit from clearer sections',
            suggestion: 'Separate context, instruction, and output format',
          },
        ],
        suggestions: [
          'Add specific examples of desired output',
          'Clarify the expected format',
          'Include constraints or boundaries',
        ],
      }
      setAnalysis(mockAnalysis)
      setIsAnalyzing(false)
    }, 1500)
  }

  const transformPrompt = async () => {
    if (!inputPrompt.trim()) return
    
    setIsTransforming(true)
    // TODO: Integrate with AI transformation
    setTimeout(() => {
      const mockTransformation: PromptTransformation = {
        original: inputPrompt,
        transformed: `Context: You are an expert at ${inputPrompt.split(' ')[0]}.

Instruction: ${inputPrompt}

Example Output:
[Provide a concrete example here]

Constraints:
- Be specific and actionable
- Use clear, concise language

Output Format:
[Specify the exact format you want]`,
        changes: [
          {
            type: 'added',
            content: 'Context section',
            reason: 'Provides clear role definition',
          },
          {
            type: 'added',
            content: 'Example output',
            reason: 'Helps AI understand desired format',
          },
          {
            type: 'added',
            content: 'Constraints section',
            reason: 'Sets boundaries for better results',
          },
        ],
        explanation: 'I\'ve restructured your prompt with clear sections (context, instruction, example, constraints, output format). This helps the AI understand exactly what you want and produces more consistent results.',
      }
      setTransformation(mockTransformation)
      setIsTransforming(false)
    }, 2000)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-500/20'
    if (score >= 60) return 'bg-yellow-500/20'
    return 'bg-red-500/20'
  }

  return (
    <div className="min-h-screen bg-workshop-bg">
      {/* Header */}
      <header className="border-b border-workshop-border bg-workshop-surface/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-alchemist-primary" />
          <h1 className="text-2xl font-display font-bold">Alchemist</h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Input Section */}
        <div className="card-workshop mb-6">
          <h2 className="text-xl font-semibold mb-4">Paste Your Prompt</h2>
          <textarea
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder="Paste a prompt you want to improve..."
            className="w-full h-48 bg-workshop-bg border border-workshop-border rounded-lg p-4 text-white placeholder-gray-600 resize-none focus:outline-none focus:border-alchemist-primary"
          />
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={analyzePrompt}
              disabled={isAnalyzing || !inputPrompt.trim()}
              className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <TrendingUp className="w-4 h-4" />
              {isAnalyzing ? 'Analyzing...' : 'Analyze'}
            </button>
            <button
              onClick={transformPrompt}
              disabled={isTransforming || !inputPrompt.trim()}
              className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Wand2 className="w-4 h-4" />
              {isTransforming ? 'Transforming...' : 'Transform'}
            </button>
          </div>
        </div>

        {/* Analysis Results */}
        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card-workshop mb-6"
          >
            <h2 className="text-xl font-semibold mb-6">Prompt Health Analysis</h2>
            
            {/* Overall Score */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Overall Health Score</span>
                <span className={`text-3xl font-bold ${getScoreColor(analysis.healthScore)}`}>
                  {analysis.healthScore}/100
                </span>
              </div>
              <div className="w-full bg-workshop-bg rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${getScoreBg(analysis.healthScore)} transition-all`}
                  style={{ width: `${analysis.healthScore}%` }}
                />
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Clarity', score: analysis.clarity },
                { label: 'Specificity', score: analysis.specificity },
                { label: 'Structure', score: analysis.structure },
                { label: 'Effectiveness', score: analysis.effectiveness },
              ].map(({ label, score }) => (
                <div key={label} className="text-center">
                  <div className={`text-2xl font-bold mb-1 ${getScoreColor(score)}`}>
                    {score}
                  </div>
                  <div className="text-xs text-gray-500">{label}</div>
                </div>
              ))}
            </div>

            {/* Issues */}
            {analysis.issues.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Issues Found</h3>
                <div className="space-y-2">
                  {analysis.issues.map((issue, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-workshop-bg rounded-lg border border-workshop-border"
                    >
                      <AlertCircle className={`w-5 h-5 mt-0.5 ${
                        issue.severity === 'high' ? 'text-red-400' :
                        issue.severity === 'medium' ? 'text-yellow-400' :
                        'text-blue-400'
                      }`} />
                      <div className="flex-1">
                        <div className="font-medium text-sm mb-1">{issue.message}</div>
                        <div className="text-xs text-gray-500">{issue.suggestion}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {analysis.suggestions.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Suggestions</h3>
                <ul className="space-y-2">
                  {analysis.suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}

        {/* Transformation Results */}
        {transformation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Explanation */}
            <div className="card-workshop">
              <h2 className="text-xl font-semibold mb-4">Why This Transformation Works</h2>
              <p className="text-gray-300 leading-relaxed">{transformation.explanation}</p>
            </div>

            {/* Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-workshop">
                <h3 className="text-lg font-semibold mb-4 text-red-400">Original</h3>
                <div className="bg-workshop-bg rounded-lg p-4 border border-workshop-border">
                  <pre className="text-sm text-gray-400 whitespace-pre-wrap font-mono">
                    {transformation.original}
                  </pre>
                </div>
              </div>
              <div className="card-workshop">
                <h3 className="text-lg font-semibold mb-4 text-green-400">Transformed</h3>
                <div className="bg-workshop-bg rounded-lg p-4 border border-workshop-border">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                    {transformation.transformed}
                  </pre>
                </div>
              </div>
            </div>

            {/* Changes Made */}
            <div className="card-workshop">
              <h3 className="text-lg font-semibold mb-4">Changes Made</h3>
              <div className="space-y-3">
                {transformation.changes.map((change, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-workshop-bg rounded-lg border border-workshop-border"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      change.type === 'added' ? 'bg-green-400' :
                      change.type === 'removed' ? 'bg-red-400' :
                      'bg-yellow-400'
                    }`} />
                    <div className="flex-1">
                      <div className="font-medium text-sm mb-1">{change.content}</div>
                      <div className="text-xs text-gray-500">{change.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(transformation.transformed)
                  alert('Transformed prompt copied to clipboard!')
                }}
                className="btn-primary flex items-center gap-2"
              >
                Copy Transformed Prompt
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

