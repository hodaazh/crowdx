import type { NextPage } from 'next';

import { BlogHeader, BlogList } from '@/components/pages/blog';

const Blog: NextPage = () => {
  return (
    <div className="container mt-32 md:mt-14">
      <BlogHeader />
      <BlogList />
    </div>
  );
};

export default Blog;
