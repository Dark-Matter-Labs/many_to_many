import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function sanityFetch({ query, qParams = {}, tags }) {
  return client.fetch(query, qParams, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags },
  });
}
