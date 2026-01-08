import OpenAI from 'openai'

// Initialize OpenAI client
export function getOpenAIClient() {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || process.env.OPENAI_API_KEY
  
  if (!apiKey) {
    throw new Error('OpenAI API key not found')
  }
  
  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true, // Only for client-side usage
  })
}

// Test a prompt
export async function testPrompt(prompt: string, model: 'gpt-4' | 'gpt-3.5-turbo' = 'gpt-3.5-turbo') {
  try {
    const client = getOpenAIClient()
    const startTime = Date.now()
    
    const completion = await client.chat.completions.create({
      model,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 1000,
    })
    
    const latency = Date.now() - startTime
    const output = completion.choices[0]?.message?.content || ''
    const tokensUsed = completion.usage?.total_tokens || 0
    
    return {
      output,
      latency,
      tokensUsed,
      model,
    }
  } catch (error) {
    console.error('Error testing prompt:', error)
    throw error
  }
}

// Analyze a prompt (for Alchemist)
export async function analyzePrompt(prompt: string) {
  try {
    const client = getOpenAIClient()
    
    const analysisPrompt = `You are a prompt engineering expert. Analyze this prompt and provide a detailed assessment:

Prompt:
"""
${prompt}
"""

Provide a JSON response with:
- healthScore: number (0-100)
- clarity: number (0-100)
- specificity: number (0-100)
- structure: number (0-100)
- effectiveness: number (0-100)
- issues: array of {type: string, severity: 'low'|'medium'|'high', message: string, suggestion: string}
- suggestions: array of strings

Respond with ONLY valid JSON, no markdown formatting.`
    
    const completion = await client.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: analysisPrompt,
        },
      ],
      response_format: { type: 'json_object' },
    })
    
    const result = completion.choices[0]?.message?.content || '{}'
    return JSON.parse(result)
  } catch (error) {
    console.error('Error analyzing prompt:', error)
    throw error
  }
}

// Transform a prompt (for Alchemist)
export async function transformPrompt(prompt: string) {
  try {
    const client = getOpenAIClient()
    
    const transformPrompt = `You are a prompt engineering expert. Transform this prompt to make it more effective:

Original Prompt:
"""
${prompt}
"""

Provide a JSON response with:
- transformed: string (the improved prompt)
- changes: array of {type: 'added'|'removed'|'modified', content: string, reason: string}
- explanation: string (why these changes improve the prompt)

Respond with ONLY valid JSON, no markdown formatting.`
    
    const completion = await client.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: transformPrompt,
        },
      ],
      response_format: { type: 'json_object' },
    })
    
    const result = completion.choices[0]?.message?.content || '{}'
    return JSON.parse(result)
  } catch (error) {
    console.error('Error transforming prompt:', error)
    throw error
  }
}

