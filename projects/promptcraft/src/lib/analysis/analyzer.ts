import { 
  PromptAnalysis, 
  AnalysisIssue, 
  PatternMatch, 
  PromptMetrics,
  IssueType 
} from './types';
import { ALL_PATTERNS, PROMPT_PATTERNS } from './patterns';

/**
 * Analyze a prompt and return detailed analysis
 */
export function analyzePrompt(prompt: string): PromptAnalysis {
  const normalizedPrompt = prompt.toLowerCase().trim();
  
  // Calculate metrics
  const metrics = calculateMetrics(prompt, normalizedPrompt);
  
  // Find pattern matches
  const patterns = findPatternMatches(normalizedPrompt);
  
  // Identify issues
  const issues = identifyIssues(metrics, patterns);
  
  // Calculate overall score
  const score = calculateScore(metrics, patterns, issues);
  
  return {
    score,
    issues,
    improvements: [], // Will be filled by transformer
    patterns,
    metrics,
  };
}

function calculateMetrics(prompt: string, normalized: string): PromptMetrics {
  const words = prompt.split(/\s+/).filter(w => w.length > 0);
  const sentences = prompt.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  // Check for pattern indicators
  const hasRole = PROMPT_PATTERNS.find(p => p.id === 'role')?.indicators
    .some(i => normalized.includes(i)) ?? false;
  
  const hasContext = PROMPT_PATTERNS.find(p => p.id === 'context')?.indicators
    .some(i => normalized.includes(i)) ?? false;
  
  const hasFormat = PROMPT_PATTERNS.find(p => p.id === 'format')?.indicators
    .some(i => normalized.includes(i)) ?? false;
  
  const hasConstraints = PROMPT_PATTERNS.find(p => p.id === 'constraints')?.indicators
    .some(i => normalized.includes(i)) ?? false;
  
  const hasAudience = PROMPT_PATTERNS.find(p => p.id === 'audience')?.indicators
    .some(i => normalized.includes(i)) ?? false;
  
  const hasTone = PROMPT_PATTERNS.find(p => p.id === 'tone')?.indicators
    .some(i => normalized.includes(i)) ?? false;
  
  const hasExamples = normalized.includes('example') || 
    normalized.includes('such as') || 
    normalized.includes('like this');
  
  // Calculate specificity (based on length, specific terms, numbers)
  const hasNumbers = /\d+/.test(prompt);
  const hasSpecificTerms = words.filter(w => w.length > 8).length / words.length;
  const lengthScore = Math.min(words.length / 50, 1) * 100;
  const specificity = Math.round(
    (lengthScore * 0.4) + 
    (hasNumbers ? 20 : 0) + 
    (hasSpecificTerms * 40)
  );
  
  // Calculate clarity (sentence structure, punctuation)
  const avgWordsPerSentence = words.length / Math.max(sentences.length, 1);
  const optimalWPS = avgWordsPerSentence >= 10 && avgWordsPerSentence <= 20;
  const hasPunctuation = /[,;:]/.test(prompt);
  const clarity = Math.round(
    (optimalWPS ? 50 : 30) +
    (hasPunctuation ? 20 : 0) +
    (sentences.length > 1 ? 30 : 10)
  );
  
  return {
    wordCount: words.length,
    sentenceCount: sentences.length,
    hasRole,
    hasContext,
    hasFormat,
    hasConstraints,
    hasAudience,
    hasTone,
    hasExamples,
    specificity: Math.min(specificity, 100),
    clarity: Math.min(clarity, 100),
  };
}

function findPatternMatches(normalized: string): PatternMatch[] {
  return ALL_PATTERNS.map(pattern => {
    const matchCount = pattern.indicators.filter(i => normalized.includes(i)).length;
    const present = matchCount > 0;
    const score = Math.min(matchCount / pattern.indicators.length, 1) * 100;
    
    return {
      pattern,
      present,
      score,
    };
  });
}

function identifyIssues(metrics: PromptMetrics, patterns: PatternMatch[]): AnalysisIssue[] {
  const issues: AnalysisIssue[] = [];
  
  // Check for missing role
  if (!metrics.hasRole) {
    issues.push({
      id: 'missing_role',
      type: 'missing_role' as IssueType,
      severity: 'high',
      message: 'No role or expertise assigned to the AI',
      suggestion: 'Add a role like "You are an expert..." to improve response quality',
    });
  }
  
  // Check for too short
  if (metrics.wordCount < 10) {
    issues.push({
      id: 'too_short',
      type: 'too_short' as IssueType,
      severity: 'high',
      message: 'Prompt is very short and lacks detail',
      suggestion: 'Add more context, constraints, and specifics',
    });
  }
  
  // Check for missing format
  if (!metrics.hasFormat && metrics.wordCount > 5) {
    issues.push({
      id: 'missing_format',
      type: 'missing_format' as IssueType,
      severity: 'medium',
      message: 'No output format specified',
      suggestion: 'Specify how you want the output structured (bullet points, sections, etc.)',
    });
  }
  
  // Check for missing constraints
  if (!metrics.hasConstraints && metrics.wordCount > 10) {
    issues.push({
      id: 'missing_constraints',
      type: 'missing_constraints' as IssueType,
      severity: 'medium',
      message: 'No constraints or boundaries set',
      suggestion: 'Tell the AI what to avoid or limit for more focused results',
    });
  }
  
  // Check for missing audience
  if (!metrics.hasAudience && metrics.wordCount > 5) {
    issues.push({
      id: 'missing_audience',
      type: 'missing_audience' as IssueType,
      severity: 'medium',
      message: 'Target audience not specified',
      suggestion: 'Specify who the output is for to get more appropriate content',
    });
  }
  
  // Check for missing tone
  if (!metrics.hasTone && metrics.wordCount > 10) {
    issues.push({
      id: 'missing_tone',
      type: 'missing_tone' as IssueType,
      severity: 'low',
      message: 'Tone and style not defined',
      suggestion: 'Specify the desired tone (professional, casual, etc.)',
    });
  }
  
  // Check for vagueness
  if (metrics.specificity < 30) {
    issues.push({
      id: 'too_vague',
      type: 'too_vague' as IssueType,
      severity: 'high',
      message: 'Prompt is too vague and general',
      suggestion: 'Add specific details, numbers, and concrete examples',
    });
  }
  
  return issues;
}

function calculateScore(
  metrics: PromptMetrics, 
  patterns: PatternMatch[], 
  issues: AnalysisIssue[]
): number {
  // Base score from pattern matches
  const patternScore = patterns.reduce((sum, p) => {
    return sum + (p.present ? p.pattern.weight : 0);
  }, 0);
  
  // Penalty from issues
  const issuePenalty = issues.reduce((sum, issue) => {
    switch (issue.severity) {
      case 'high': return sum + 15;
      case 'medium': return sum + 8;
      case 'low': return sum + 3;
      default: return sum;
    }
  }, 0);
  
  // Bonus for metrics
  const metricBonus = (metrics.specificity + metrics.clarity) / 10;
  
  // Calculate final score
  const rawScore = patternScore + metricBonus - issuePenalty;
  
  // Normalize to 0-100
  return Math.max(0, Math.min(100, Math.round(rawScore)));
}
