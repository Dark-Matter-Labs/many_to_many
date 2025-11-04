import { sanityFetch } from '@/sanity/lib/client';

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.manytomany.systems';

  const staticRoutes = [
    '/',
    '/discover-the-system',
    '/discover-the-system/interactive-overview',
    '/journey',
    '/journey/how-system',
    '/journey/learnings',
    '/journey/origin-story',
    '/learnings-from-the-field',
    '/learnings-from-the-field/tips/funder',
    '/learnings-from-the-field/tips/governance-practitioners',
    '/learnings-from-the-field/tips/legal',
    '/legal-architecture',
    '/navigate-challenges',
    '/tools',
  ];

  // Fetch dynamic content from Sanity
  const [caseStudies, tools, stories, tests] = await Promise.all([
    sanityFetch({
      query: `*[_type == "case_study" && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt
      }`,
      tags: ['case_study'],
    }).catch(() => []),
    sanityFetch({
      query: `*[_type == "tool" && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt
      }`,
      tags: ['tool'],
    }).catch(() => []),
    sanityFetch({
      query: `*[_type == "story" && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt
      }`,
      tags: ['story'],
    }).catch(() => []),
    sanityFetch({
      query: `*[_type == "test" && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt
      }`,
      tags: ['test'],
    }).catch(() => []),
  ]);

  const now = new Date().toISOString();

  // Map static routes
  const staticUrls = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.7,
  }));

  // Map dynamic routes
  const dynamicUrls = [
    // Case studies
    ...(caseStudies || []).map((item) => ({
      url: `${siteUrl}/learnings-from-the-field/${item.slug}`,
      lastModified: item._updatedAt || now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Tools
    ...(tools || []).map((item) => ({
      url: `${siteUrl}/tools/${item.slug}`,
      lastModified: item._updatedAt || now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Stories/Challenges
    ...(stories || []).map((item) => ({
      url: `${siteUrl}/navigate-challenges/${item.slug}`,
      lastModified: item._updatedAt || now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Tests
    ...(tests || []).map((item) => ({
      url: `${siteUrl}/journey/test/${item.slug}`,
      lastModified: item._updatedAt || now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];

  return [...staticUrls, ...dynamicUrls];
}


