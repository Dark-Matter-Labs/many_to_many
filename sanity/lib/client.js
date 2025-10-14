import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // Ensure we only read published content in production
  perspective: 'published',
  // Disable stega metadata to reduce payload size unless explicitly needed
  stega: false,
});

export async function sanityFetch({ query, qParams = {}, tags }) {
  return client.fetch(query, qParams, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags },
  });
}
