export default async function AppDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <h1 className="text-5xl font-bold tracking-tight text-accent">
        App Detail: {slug}
      </h1>
      <p className="mt-4 text-lg text-text-secondary">
        Details for the &ldquo;{slug}&rdquo; application.
      </p>
    </div>
  );
}
