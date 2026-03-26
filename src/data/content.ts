export interface ContentEntry {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  publishDate: string;
  tags: string[];
  hasPaidContent: boolean;
}

export const contentEntries: ContentEntry[] = [
  {
    slug: 'why-orchestration-beats-prompting',
    title: 'Why Orchestration Beats Prompting',
    excerpt:
      'Most people treat AI like a search bar. Type something in, hope something good comes out. Here is why that approach fails for real software — and what works instead.',
    body: `## The Prompting Trap

Most AI workflows follow the same pattern: open a chat, type a request, get a result. Sometimes it works. Often it does not.

The problem is not the AI — it is the approach. Ad-hoc prompting has no structure, no validation, and no repeatability. Every session starts from zero.

## What Orchestration Looks Like

Orchestration treats AI as one tool in a larger system. Instead of hoping a single prompt produces a finished product, the system breaks work into stages — each with clear inputs, outputs, and validation criteria.

The result is not just a better output. It is a **repeatable process** that produces consistent results across different projects.

## Why It Matters

When you build with orchestration:

- Every stage has a defined purpose
- Nothing advances without passing validation
- Errors get caught early, not compounded
- The process improves with every build

This is not about using AI less. It is about using it with structure.`,
    category: 'System Insights',
    publishDate: '2025-03-15',
    tags: ['orchestration', 'methodology', 'AI'],
    hasPaidContent: true,
  },
  {
    slug: 'anatomy-of-an-ai-built-app',
    title: 'Anatomy of an AI-Built App',
    excerpt:
      'What does it actually look like when an application goes from idea to deployment using AI orchestration? A high-level walkthrough of the stages every build follows.',
    body: `## From Idea to Deployment

Every app built with the SmartDisruptions system follows the same four-stage process. This article walks through what happens at each stage — without revealing the exact implementation details.

## Stage 1: Idea Definition

The build starts with a clear problem statement. Who is the user? What do they need? What does success look like? These questions get answered before any code is written.

## Stage 2: Structured Planning

The idea gets broken into executable stages. Each stage has defined inputs, outputs, and success criteria. This is where most AI workflows fail — they skip planning and jump straight to building.

## Stage 3: Build and Validate

Each stage is executed and validated against its criteria. If something fails, it gets fixed before moving forward. This gate-based approach prevents the compounding errors that plague ad-hoc AI builds.

## Stage 4: Deploy With Confidence

By the time an app reaches deployment, every layer has been verified. The result is software that works — not a prototype held together with hope.

## The Takeaway

The difference between an AI-assisted app and an AI-orchestrated app is not the technology. It is the process.`,
    category: 'Build Breakdowns',
    publishDate: '2025-03-20',
    tags: ['process', 'build', 'walkthrough'],
    hasPaidContent: false,
  },
];

export function getContentBySlug(slug: string): ContentEntry | undefined {
  return contentEntries.find((entry) => entry.slug === slug);
}

export function getContentCategories(): string[] {
  return Array.from(new Set(contentEntries.map((entry) => entry.category)));
}
