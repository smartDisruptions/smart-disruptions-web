import { SectionContainer, Card, ComingSoonBadge } from '@/components/ui';

const stages = [
  {
    number: 1,
    title: 'Idea',
    description:
      'Every build starts with a clear definition of what needs to exist and why it matters. The system captures the problem, the target user, and the desired outcome before a single line of code is written.',
  },
  {
    number: 2,
    title: 'Plan',
    description:
      'The idea is broken down into structured, executable stages. Each stage has defined inputs, outputs, and validation criteria — creating a blueprint that keeps the build focused and on track.',
  },
  {
    number: 3,
    title: 'Validate',
    description:
      'At every stage, the output is tested against its success criteria. Nothing moves forward until it passes. This gate-based approach catches issues early and prevents compounding errors.',
  },
  {
    number: 4,
    title: 'Deploy',
    description:
      'Once validated, the application is shipped to production with confidence. The system ensures that what goes live has been verified at every layer — from data model to user interface.',
  },
];

const principles = [
  {
    title: 'Structure Over Speed',
    description:
      'Ad-hoc prompting produces inconsistent results. A structured system produces reliable, repeatable outcomes every time.',
  },
  {
    title: 'Validation At Every Gate',
    description:
      'Each stage has explicit pass/fail criteria. Nothing advances until it meets the standard — eliminating the silent failures that plague unstructured AI work.',
  },
  {
    title: 'Orchestration, Not Automation',
    description:
      'The system orchestrates AI capabilities with human judgment at critical decision points. It is not a "press button, get app" tool — it is a framework for building real software.',
  },
];

export default function System() {
  return (
    <>
      {/* Hero */}
      <SectionContainer className="bg-grid py-20 text-center">
        <p className="font-mono-accent text-sm text-accent/70">// System</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
          The SmartDisruptions System
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
          A repeatable, stage-gated process that turns ideas into deployed
          applications — using AI orchestration, not ad-hoc prompting.
        </p>
      </SectionContainer>

      {/* Philosophy Section */}
      <SectionContainer className="border-t border-white/5 py-16">
        <p className="font-mono-accent text-xs text-accent/50">// Philosophy</p>
        <h2 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">
          Philosophy
        </h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Most people use AI by typing a prompt and hoping for the best. That
          works for simple tasks — but falls apart for anything complex. The
          SmartDisruptions system takes a different approach: it treats AI as a
          tool to be orchestrated, not a magic box to be prompted.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <Card key={principle.title}>
              <h3 className="text-lg font-semibold text-accent">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm text-text-secondary">
                {principle.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Process Overview */}
      <SectionContainer className="border-t border-white/5 bg-grid py-16">
        <p className="font-mono-accent text-xs text-accent/50">// Process</p>
        <h2 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">
          Process Overview
        </h2>
        <p className="mt-4 max-w-3xl text-text-secondary">
          Every application built with the system follows four stages. Each
          stage has clear inputs, outputs, and validation gates.
        </p>

        <div className="mt-12 space-y-8">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="flex gap-6 rounded-2xl border border-white/10 bg-surface p-6"
            >
              {/* Stage Number */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-lg font-bold text-accent">
                {stage.number}
              </div>

              {/* Stage Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text-primary">
                  {stage.title}
                </h3>
                <p className="mt-2 text-text-secondary">
                  {stage.description}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-sm text-text-secondary">
                    Full Breakdown
                  </span>
                  <ComingSoonBadge />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Bottom CTA — Monetization Hooks */}
      <SectionContainer className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-text-primary sm:text-3xl">
            Get the System
          </h2>
          <p className="mt-4 text-text-secondary">
            Want the full breakdown of every stage, the exact build plans, and
            the orchestration framework behind these applications?
          </p>

          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-text-primary">Get the System</span>
              <ComingSoonBadge />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-text-primary">View Full Build Plan</span>
              <ComingSoonBadge />
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
