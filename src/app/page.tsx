export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="rounded-2xl border border-surface bg-surface p-12 shadow-2xl">
        <h1 className="text-5xl font-bold tracking-tight text-accent">
          SmartDisruptions
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          AI-built web applications — proof engine active.
        </p>
        <div className="mt-6 flex gap-4">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            Next.js
          </span>
          <span className="inline-block rounded-full bg-accent-secondary/10 px-4 py-2 text-sm font-medium text-accent-secondary">
            TypeScript
          </span>
          <span className="inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            Tailwind CSS
          </span>
        </div>
      </div>
    </div>
  );
}
