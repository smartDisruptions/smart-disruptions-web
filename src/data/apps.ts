export interface App {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  thumbnailUrl: string;
  screenshotUrls: string[];
  techStack: string[];
  category: string;
  status: 'live' | 'beta' | 'development';
  outcomes: string[];
  buildDate: string;
  hasFullBreakdown: boolean;
  buildPlanAvailable: boolean;
}

export const apps: App[] = [
  {
    slug: 'review-funnel',
    name: 'Review Funnel',
    description:
      'Automated review collection and display system for local businesses.',
    longDescription:
      'A complete review management platform that automates the process of collecting, filtering, and displaying customer reviews. The system routes satisfied customers to public review platforms while capturing private feedback from dissatisfied ones — turning every interaction into a growth opportunity.',
    thumbnailUrl: '/images/apps/review-funnel-thumb.png',
    screenshotUrls: [
      '/images/apps/review-funnel-1.png',
      '/images/apps/review-funnel-2.png',
      '/images/apps/review-funnel-3.png',
    ],
    techStack: ['Next.js', 'Supabase', 'AI', 'Tailwind CSS'],
    category: 'Marketing',
    status: 'live',
    outcomes: [
      'Increased average Google rating from 3.8 to 4.6 stars',
      'Automated 90% of review follow-up workflows',
      'Reduced negative public reviews by 60%',
    ],
    buildDate: '2025-01',
    hasFullBreakdown: false,
    buildPlanAvailable: false,
  },
  {
    slug: 'samurai-kitchen',
    name: 'Samurai Kitchen',
    description:
      'Restaurant website with online ordering and menu management.',
    longDescription:
      'A modern restaurant platform featuring a dynamic menu system, online ordering with real-time availability, and an integrated loyalty program. Built to replace an outdated WordPress site and bring the entire customer experience under one fast, mobile-first application.',
    thumbnailUrl: '/images/apps/samurai-kitchen-thumb.png',
    screenshotUrls: [
      '/images/apps/samurai-kitchen-1.png',
      '/images/apps/samurai-kitchen-2.png',
      '/images/apps/samurai-kitchen-3.png',
    ],
    techStack: ['React', 'Node.js', 'Stripe', 'Square API'],
    category: 'Commerce',
    status: 'live',
    outcomes: [
      'Online orders increased 40% in first month',
      'Menu update time reduced from hours to minutes',
      'Mobile traffic conversion improved by 25%',
    ],
    buildDate: '2025-02',
    hasFullBreakdown: false,
    buildPlanAvailable: false,
  },
  {
    slug: 'smart-crm',
    name: 'Smart CRM',
    description:
      'Lightweight CRM for tracking leads and client interactions.',
    longDescription:
      'A purpose-built CRM designed for small teams who need lead tracking without enterprise complexity. Features AI-powered lead scoring, automated follow-up reminders, and a clean pipeline view — all without the bloat of traditional CRM software.',
    thumbnailUrl: '/images/apps/smart-crm-thumb.png',
    screenshotUrls: [
      '/images/apps/smart-crm-1.png',
      '/images/apps/smart-crm-2.png',
      '/images/apps/smart-crm-3.png',
    ],
    techStack: ['TypeScript', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
    category: 'Productivity',
    status: 'beta',
    outcomes: [
      'Lead response time cut from 24 hours to under 2 hours',
      'Pipeline visibility improved deal close rate by 15%',
      'Eliminated 3 separate spreadsheet tracking systems',
    ],
    buildDate: '2025-03',
    hasFullBreakdown: false,
    buildPlanAvailable: false,
  },
];

export function getAppBySlug(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAppCategories(): string[] {
  return Array.from(new Set(apps.map((app) => app.category)));
}
