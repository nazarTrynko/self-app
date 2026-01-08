// Prompt Structure Types
export interface PromptComponent {
  id: string;
  type: 'context' | 'instruction' | 'example' | 'constraint' | 'output';
  content: string;
  position: { x: number; y: number };
  style?: ComponentStyle;
}

export interface ComponentStyle {
  fontSize?: number;
  fontWeight?: 'normal' | 'bold';
  color?: string;
}

export interface PromptVersion {
  id: string;
  version: number;
  components: PromptComponent[];
  createdAt: string;
  note?: string;
}

export interface TestResult {
  id: string;
  model: 'gpt-4' | 'gpt-3.5-turbo' | 'claude-3-opus' | 'claude-3-sonnet';
  input: string;
  output: string;
  latency: number;
  tokensUsed: number;
  rating?: number;
  createdAt: string;
}

export interface Prompt {
  id: string;
  title: string;
  components: PromptComponent[];
  version: number;
  history: PromptVersion[];
  testResults: TestResult[];
  metadata: {
    author: string;
    tags: string[];
    category: string;
    effectiveness: number;
  };
  createdAt: string;
  updatedAt: string;
}

// Alchemist Types
export interface PromptAnalysis {
  healthScore: number;
  clarity: number;
  specificity: number;
  structure: number;
  effectiveness: number;
  issues: AnalysisIssue[];
  suggestions: string[];
}

export interface AnalysisIssue {
  type: 'clarity' | 'specificity' | 'structure' | 'effectiveness';
  severity: 'low' | 'medium' | 'high';
  message: string;
  suggestion: string;
}

export interface PromptTransformation {
  original: string;
  transformed: string;
  changes: TransformationChange[];
  explanation: string;
}

export interface TransformationChange {
  type: 'added' | 'removed' | 'modified';
  content: string;
  reason: string;
}

// Journey Types
export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  prompt?: string;
  inputType?: 'text' | 'textarea' | 'select' | 'multi-select';
  options?: string[];
  validation?: (value: any) => boolean;
}

export interface UserProgress {
  journeyId: string;
  currentStep: number;
  completedSteps: string[];
  data: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export interface JourneyOutput {
  id: string;
  journeyId: string;
  userId: string;
  data: Record<string, any>;
  createdAt: string;
}

export interface Journey {
  id: string;
  title: string;
  description: string;
  steps: JourneyStep[];
  category: string;
  author: string;
  createdAt: string;
}

// Marketplace Types
export interface MarketplaceItem {
  id: string;
  type: 'template' | 'journey' | 'component';
  title: string;
  description: string;
  price: number;
  creator: User;
  sales: number;
  rating: number;
  reviews: Review[];
  promptId?: string;
  journeyId?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  tier: 'free' | 'creator' | 'pro';
  createdAt: string;
}

