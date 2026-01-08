import { 
  TransformationResult, 
  TransformedSection, 
  Improvement,
  ImprovementCategory,
  PromptMetrics 
} from './types';
import { analyzePrompt } from './analyzer';

// Role templates based on common use cases
const ROLE_TEMPLATES: Record<string, string> = {
  writing: 'You are an expert content writer with 10+ years of experience creating compelling, clear, and engaging content.',
  coding: 'You are a senior software engineer with deep expertise in modern best practices, clean code, and scalable architecture.',
  business: 'You are a seasoned business consultant who has advised Fortune 500 companies on strategy, operations, and growth.',
  marketing: 'You are a marketing strategist with expertise in digital marketing, brand positioning, and customer psychology.',
  teaching: 'You are an expert educator skilled at breaking down complex topics into clear, understandable explanations.',
  analysis: 'You are a skilled analyst with expertise in research methodology, data interpretation, and strategic insights.',
  creative: 'You are a creative professional with a unique perspective and mastery of storytelling and artistic expression.',
  default: 'You are a knowledgeable expert in this field with extensive experience helping others achieve their goals.',
};

// Common task verbs and their enhanced versions
const TASK_ENHANCEMENTS: Record<string, string> = {
  write: 'Write a comprehensive and well-structured',
  create: 'Create a detailed and polished',
  make: 'Craft a thoughtful and complete',
  help: 'Provide expert guidance on',
  explain: 'Provide a clear and thorough explanation of',
  give: 'Provide a detailed and actionable',
  tell: 'Explain in detail',
};

/**
 * Transform a prompt into an improved version
 */
export function transformPrompt(originalPrompt: string): TransformationResult {
  const analysis = analyzePrompt(originalPrompt);
  const sections: TransformedSection[] = [];
  const improvements: Improvement[] = [];
  
  // Detect the type of prompt for role selection
  const promptType = detectPromptType(originalPrompt);
  
  // Add role if missing
  if (!analysis.metrics.hasRole) {
    const role = ROLE_TEMPLATES[promptType] || ROLE_TEMPLATES.default;
    sections.push({
      type: 'role_assignment',
      content: role,
      isNew: true,
      explanation: 'Adding an expert role helps the AI understand the perspective and expertise level expected.',
    });
    improvements.push({
      id: 'add_role',
      category: 'role_assignment',
      original: null,
      improved: role,
      explanation: 'AI performs better when given a specific role or persona to embody.',
      impact: 'high',
    });
  }
  
  // Enhance the core task
  const enhancedTask = enhanceTask(originalPrompt, analysis.metrics);
  sections.push({
    type: 'context_addition',
    content: enhancedTask.content,
    isNew: enhancedTask.isNew,
    explanation: enhancedTask.explanation,
  });
  if (enhancedTask.improvement) {
    improvements.push(enhancedTask.improvement);
  }
  
  // Add audience if missing
  if (!analysis.metrics.hasAudience) {
    const audienceSection = generateAudienceSection(originalPrompt);
    sections.push(audienceSection);
    improvements.push({
      id: 'add_audience',
      category: 'audience_targeting',
      original: null,
      improved: audienceSection.content,
      explanation: 'Specifying the target audience helps tailor the content appropriately.',
      impact: 'medium',
    });
  }
  
  // Add format if missing
  if (!analysis.metrics.hasFormat) {
    const formatSection = generateFormatSection(originalPrompt);
    sections.push(formatSection);
    improvements.push({
      id: 'add_format',
      category: 'format_specification',
      original: null,
      improved: formatSection.content,
      explanation: 'Defining output structure reduces ambiguity and improves result quality.',
      impact: 'medium',
    });
  }
  
  // Add tone if missing
  if (!analysis.metrics.hasTone) {
    const toneSection = generateToneSection(promptType);
    sections.push(toneSection);
    improvements.push({
      id: 'add_tone',
      category: 'tone_definition',
      original: null,
      improved: toneSection.content,
      explanation: 'Setting the tone ensures the output matches your communication needs.',
      impact: 'low',
    });
  }
  
  // Add constraints if missing
  if (!analysis.metrics.hasConstraints) {
    const constraintSection = generateConstraintSection(promptType);
    sections.push(constraintSection);
    improvements.push({
      id: 'add_constraints',
      category: 'constraint_setting',
      original: null,
      improved: constraintSection.content,
      explanation: 'Constraints focus the AI and prevent unwanted content or approaches.',
      impact: 'medium',
    });
  }
  
  // Build the transformed prompt
  const transformedPrompt = buildTransformedPrompt(sections);
  
  return {
    originalPrompt,
    transformedPrompt,
    analysis: { ...analysis, improvements },
    sections,
  };
}

function detectPromptType(prompt: string): string {
  const lower = prompt.toLowerCase();
  
  if (lower.includes('code') || lower.includes('function') || lower.includes('program') || lower.includes('script')) {
    return 'coding';
  }
  if (lower.includes('blog') || lower.includes('article') || lower.includes('write') || lower.includes('essay')) {
    return 'writing';
  }
  if (lower.includes('market') || lower.includes('advertis') || lower.includes('campaign') || lower.includes('brand')) {
    return 'marketing';
  }
  if (lower.includes('business') || lower.includes('strategy') || lower.includes('plan') || lower.includes('company')) {
    return 'business';
  }
  if (lower.includes('explain') || lower.includes('teach') || lower.includes('learn') || lower.includes('understand')) {
    return 'teaching';
  }
  if (lower.includes('analyze') || lower.includes('research') || lower.includes('study') || lower.includes('data')) {
    return 'analysis';
  }
  if (lower.includes('story') || lower.includes('creative') || lower.includes('fiction') || lower.includes('poem')) {
    return 'creative';
  }
  
  return 'default';
}

function enhanceTask(prompt: string, metrics: PromptMetrics): {
  content: string;
  isNew: boolean;
  explanation: string;
  improvement?: Improvement;
} {
  // Find and enhance task verbs
  let enhanced = prompt;
  let wasEnhanced = false;
  
  for (const [verb, enhancement] of Object.entries(TASK_ENHANCEMENTS)) {
    const regex = new RegExp(`^${verb}\\s`, 'i');
    if (regex.test(prompt)) {
      enhanced = prompt.replace(regex, `${enhancement} `);
      wasEnhanced = true;
      break;
    }
  }
  
  // Add context markers if the prompt is short
  if (metrics.wordCount < 20 && !wasEnhanced) {
    enhanced = `For this task, please ${prompt.charAt(0).toLowerCase()}${prompt.slice(1)}`;
    wasEnhanced = true;
  }
  
  return {
    content: enhanced,
    isNew: false,
    explanation: wasEnhanced 
      ? 'Enhanced the task description for clarity and completeness.'
      : 'Core task preserved as provided.',
    improvement: wasEnhanced ? {
      id: 'enhance_task',
      category: 'context_addition',
      original: prompt,
      improved: enhanced,
      explanation: 'More specific task framing helps the AI understand exactly what\'s needed.',
      impact: 'medium',
    } : undefined,
  };
}

function generateAudienceSection(prompt: string): TransformedSection {
  const type = detectPromptType(prompt);
  
  const audiences: Record<string, string> = {
    writing: 'Target Audience: Engaged readers who value clarity and actionable insights.',
    coding: 'Target Audience: Developers who appreciate clean, well-documented code.',
    business: 'Target Audience: Business professionals and decision-makers.',
    marketing: 'Target Audience: Marketing professionals and business owners.',
    teaching: 'Target Audience: Learners who benefit from clear, step-by-step explanations.',
    analysis: 'Target Audience: Stakeholders who need actionable insights from data.',
    creative: 'Target Audience: Readers who appreciate creative and engaging content.',
    default: 'Target Audience: Professionals who value quality and clarity.',
  };
  
  return {
    type: 'audience_targeting',
    content: audiences[type] || audiences.default,
    isNew: true,
    explanation: 'Defining the audience helps tailor language, depth, and approach.',
  };
}

function generateFormatSection(prompt: string): TransformedSection {
  const type = detectPromptType(prompt);
  
  const formats: Record<string, string> = {
    writing: 'Structure: Start with a compelling hook → Present 3-5 key points with examples → End with a clear takeaway or call-to-action.',
    coding: 'Format: Provide clean, commented code with clear function names. Include usage examples and edge case handling.',
    business: 'Structure: Executive summary → Key findings/recommendations → Supporting details → Next steps.',
    marketing: 'Format: Headline → Value proposition → Key benefits → Social proof → Clear CTA.',
    teaching: 'Structure: Overview → Step-by-step breakdown → Examples → Common mistakes to avoid → Summary.',
    analysis: 'Format: Key insights first → Supporting data → Methodology notes → Recommendations.',
    creative: 'Format: Engaging opening → Rising action → Climax → Resolution. Vary sentence length for rhythm.',
    default: 'Format: Clear introduction → Organized main content → Actionable conclusion.',
  };
  
  return {
    type: 'format_specification',
    content: formats[type] || formats.default,
    isNew: true,
    explanation: 'Explicit format instructions reduce ambiguity and improve output structure.',
  };
}

function generateToneSection(type: string): TransformedSection {
  const tones: Record<string, string> = {
    writing: 'Tone: Conversational but authoritative. No fluff—respect the reader\'s time. Be specific and actionable.',
    coding: 'Tone: Technical but accessible. Explain decisions briefly. Prioritize readability and maintainability.',
    business: 'Tone: Professional and strategic. Data-driven. Focus on actionable insights.',
    marketing: 'Tone: Persuasive but authentic. Focus on benefits. Create urgency without being pushy.',
    teaching: 'Tone: Patient and encouraging. Use analogies. Anticipate confusion points.',
    analysis: 'Tone: Objective and precise. Lead with findings. Acknowledge limitations.',
    creative: 'Tone: Evocative and engaging. Show, don\'t tell. Create emotional resonance.',
    default: 'Tone: Clear, professional, and helpful. Balance thoroughness with conciseness.',
  };
  
  return {
    type: 'tone_definition',
    content: tones[type] || tones.default,
    isNew: true,
    explanation: 'Setting the tone ensures the output matches your communication style needs.',
  };
}

function generateConstraintSection(type: string): TransformedSection {
  const constraints: Record<string, string> = {
    writing: 'Avoid: Generic filler phrases, passive voice when active is clearer, unsupported claims. Focus on unique insights.',
    coding: 'Avoid: Over-engineering, magic numbers, unclear variable names. Include error handling.',
    business: 'Avoid: Jargon without explanation, vague recommendations. Be specific and measurable.',
    marketing: 'Avoid: False urgency, unsubstantiated claims, generic copy. Be authentic.',
    teaching: 'Avoid: Assuming prior knowledge, skipping steps, overwhelming with detail.',
    analysis: 'Avoid: Speculation without data, burying key findings, correlation/causation confusion.',
    creative: 'Avoid: Clichés, telling emotions instead of showing, inconsistent voice.',
    default: 'Avoid: Generic responses, unsupported claims, unnecessary complexity. Be specific and useful.',
  };
  
  return {
    type: 'constraint_setting',
    content: constraints[type] || constraints.default,
    isNew: true,
    explanation: 'Constraints help focus the AI and prevent common issues in the output.',
  };
}

function buildTransformedPrompt(sections: TransformedSection[]): string {
  const parts: string[] = [];
  
  // Role first
  const role = sections.find(s => s.type === 'role_assignment');
  if (role) {
    parts.push(role.content);
    parts.push('');
  }
  
  // Main task
  const task = sections.find(s => s.type === 'context_addition');
  if (task) {
    parts.push(task.content);
    parts.push('');
  }
  
  // Audience
  const audience = sections.find(s => s.type === 'audience_targeting');
  if (audience) {
    parts.push(audience.content);
    parts.push('');
  }
  
  // Format
  const format = sections.find(s => s.type === 'format_specification');
  if (format) {
    parts.push(format.content);
    parts.push('');
  }
  
  // Tone
  const tone = sections.find(s => s.type === 'tone_definition');
  if (tone) {
    parts.push(tone.content);
    parts.push('');
  }
  
  // Constraints
  const constraints = sections.find(s => s.type === 'constraint_setting');
  if (constraints) {
    parts.push(constraints.content);
  }
  
  return parts.join('\n').trim();
}

// Export index
export { analyzePrompt } from './analyzer';
export * from './types';

