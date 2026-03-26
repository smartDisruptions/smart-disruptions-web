import Link from 'next/link';
import {
  SectionContainer,
  Card,
  Badge,
  Button,
  RevealOnScroll,
} from '@/components/ui';

const featuredApps = [
  {
    slug: 'review-funnel',
    name: 'Review Funnel',
    description:
      'Automated review collection and display system for local businesses.',
    tech: ['Next.js', 'Supabase', 'AI'],
  },
  {
    slug: 'samurai-kitchen',
    name: 'Samurai Kitchen',
    description: 'Restaurant website with online ordering and menu management.',
    tech: ['React', 'Node.js', 'Stripe'],
  },
  {
    slug: 'smart-crm',
    name: 'Smart CRM',
    description: 'Lightweight CRM for tracking leads and client interactions.',
    tech: ['TypeScript', 'PostgreSQL', 'API'],
  },
];

export default function FeaturedAppsSection() {
  return (
    <SectionContainer id="featured-apps">
      <RevealOnScroll>
        <div className="text-center">
          <h2 className="font-mono-accent text-sm font-semibold uppercase text-accent/70">
            // Built With The System
          </h2>
          <p className="mt-3 text-text-secondary">
            Real applications built from idea to deployment using our AI
            orchestration system.
          </p>
        </div>
      </RevealOnScroll>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredApps.map((app, index) => (
          <RevealOnScroll key={app.slug} className={`delay-${index * 100}`}>
            <Link href={`/apps/${app.slug}`}>
              <Card hover={true} className="flex h-full flex-col">
                {/* Placeholder image */}
                <div className="flex h-40 items-center justify-center rounded-lg bg-white/5 text-sm text-text-secondary">
                  Screenshot
                </div>

                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {app.name}
                </h3>

                <p className="mt-2 flex-1 text-sm text-text-secondary">
                  {app.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {app.tech.map((t) => (
                    <Badge key={t} variant="accent">
                      {t}
                    </Badge>
                  ))}
                </div>

                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  View Details &rarr;
                </span>
              </Card>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll>
        <div className="mt-12 text-center">
          <Button variant="secondary" href="/apps">
            View All Apps
          </Button>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  );
}
