import { queryBuilder } from 'lib/planetscale';
import type { NextApiRequest, NextApiResponse } from 'next';

const stubSlugs = [
  'hello-world',
  'end-to-end',
  'test-post',
  'POST_TEMPLATE',
  'react-mdx-test',
  'react-component-showcase',
];

function getStubData() {
  return stubSlugs.map((slug) => ({
    slug,
    count: Math.floor(Math.random() * 1000) + 1,
  }));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!process.env.DATABASE_URL) {
      return res.status(200).json(getStubData());
    }

    const data = await queryBuilder
      .selectFrom('views')
      .select(['slug', 'count'])
      .execute();

    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}
