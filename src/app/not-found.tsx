import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-accent">404</h1>
      <p className="mt-4 text-xl text-text-secondary">Page not found.</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-accent px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
      >
        Go Home
      </Link>
    </div>
  );
}
