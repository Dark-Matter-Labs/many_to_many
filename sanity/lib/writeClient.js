import 'server-only';
import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

const token = process.env.SANITY_API_WRITE_TOKEN;

// Server-only client for creating submissions. Returns null when no write
// token is configured, so callers can fail with a clear message.
export const writeClient = token
  ? createClient({
      apiVersion,
      dataset,
      projectId,
      token,
      useCdn: false,
      perspective: 'raw',
    })
  : null;
