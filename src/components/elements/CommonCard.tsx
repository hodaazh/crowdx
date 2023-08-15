import Link from 'next/link';

import type { BlogT } from '@/types';
import { dateUtil } from '@/utils';

const CommonCard = ({
  title,
  created_at,
  body_small,
  slug,
}: Partial<BlogT>): JSX.Element => {
  return (
    <Link
      href={`/blog/${slug}`}
      passHref
      className="group z-20 flex cursor-pointer flex-col rounded-default border bg-white py-8 px-10 text-black shadow-card"
    >
      <p className="mb-2 leading-6 typo-[20-bold]">{title}</p>
      <span className="text-primary typo-[14]">
        {dateUtil.showMonthWithSpace(created_at)}
      </span>
      <p className="mt-6 leading-5 text-zinc-600/80">{body_small}</p>
    </Link>
  );
};

export { CommonCard };
