import { Button, ComingSoonBadge } from '@/components/ui';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Background grid effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
          We Build Real Apps With AI
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl">
          A system that goes from idea to deployed application — powered by AI
          orchestration.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button variant="primary" size="lg" href="/apps">
            Explore the Apps
          </Button>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-lg border border-white/10 px-7 py-3 text-base font-medium text-text-secondary opacity-60">
              Get the System
            </span>
            <ComingSoonBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
