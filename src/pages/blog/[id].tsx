import type { NextPage } from 'next';

import { BlogDetailHeader, BlogDetailRelated } from '@/components/pages/blog';

const BlogDetail: NextPage = () => {
  return (
    <main className="mt-28 flex flex-col md:mt-18 ">
      <BlogDetailHeader />
      <BlogDetailRelated />
    </main>
  );
};

export default BlogDetail;
