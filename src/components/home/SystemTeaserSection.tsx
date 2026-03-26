import { SectionContainer, Button, ComingSoonBadge } from '@/components/ui';

const steps = [
  {
    number: 1,
    title: 'Idea',
    description: 'Define what to build and why',
  },
  {
    number: 2,
    title: 'Plan',
    description: 'Structure the build into executable steps',
  },
  {
    number: 3,
    title: 'Validate',
    description: 'Test, verify, and ensure quality',
  },
  {
    number: 4,
    title: 'Deploy',
    description: 'Ship to production with confidence',
  },
];

export default function SystemTeaserSection() {
  return (
    <SectionContainer id="system-teaser" className="bg-surface">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
          The System
        </h2>
        <p className="mt-3 text-text-secondary">
          A repeatable process that turns ideas into deployed applications.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.number} className="relative text-center">
            {/* Connector line (hidden on first item and mobile) */}
            {i > 0 && (
              <div className="pointer-events-none absolute -left-4 top-6 hidden h-px w-8 bg-accent/30 lg:block" />
            )}

            {/* Numbered circle */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-lg font-bold text-accent">
              {step.number}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-accent">
              {step.title}
            </h3>

            <p className="mt-2 text-sm text-text-secondary">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
        <Button variant="secondary" href="/system">
          Learn More
        </Button>
        <div className="flex items-center gap-3">
          <span className="text-sm text-text-secondary">Full Breakdown</span>
          <ComingSoonBadge />
        </div>
      </div>
    </SectionContainer>
  );
}
