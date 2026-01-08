// Types for the prompt analysis engine

export interface PromptAnalysis {
  score: number; // 0-100
  issues: AnalysisIssue[];
  improvements: Improvement[];
  patterns: PatternMatch[];
  metrics: PromptMetrics;
}

export interface AnalysisIssue {
  id: string;
  type: IssueType;
  severity: 'low' | 'medium' | 'high';
  message: string;
  suggestion: string;
}

export type IssueType = 
  | 'missing_role'
  | 'missing_context'
  | 'missing_format'
  | 'missing_constraints'
  | 'too_vague'
  | 'too_short'
  | 'missing_audience'
  | 'missing_tone'
  | 'missing_examples'
  | 'missing_structure';

export interface Improvement {
  id: string;
  category: ImprovementCategory;
  original: string | null;
  improved: string;
  explanation: string;
  impact: 'low' | 'medium' | 'high';
}

export type ImprovementCategory = 
  | 'role_assignment'
  | 'context_addition'
  | 'format_specification'
  | 'constraint_setting'
  | 'audience_targeting'
  | 'tone_definition'
  | 'structure_enhancement'
  | 'example_addition';

export interface PatternMatch {
  pattern: PromptPattern;
  present: boolean;
  score: number;
}

export interface PromptPattern {
  id: string;
  name: string;
  description: string;
  indicators: string[];
  weight: number;
}

export interface PromptMetrics {
  wordCount: number;
  sentenceCount: number;
  hasRole: boolean;
  hasContext: boolean;
  hasFormat: boolean;
  hasConstraints: boolean;
  hasAudience: boolean;
  hasTone: boolean;
  hasExamples: boolean;
  specificity: number; // 0-100
  clarity: number; // 0-100
}

export interface TransformationResult {
  originalPrompt: string;
  transformedPrompt: string;
  analysis: PromptAnalysis;
  sections: TransformedSection[];
}

export interface TransformedSection {
  type: ImprovementCategory;
  content: string;
  isNew: boolean;
  explanation: string;
}

