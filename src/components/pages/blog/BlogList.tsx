import { CommonCard } from '@/components/elements';
import { FakeConst } from '@/constants';

const BlogList = (): JSX.Element => {
  const { blogCards } = FakeConst;

  return (
    <div className="mt-18 xs:mt-14">
      <span className="typo-[24-bold]">LATEST BLOG</span>
      <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-1">
        {blogCards.map((item) => (
          <CommonCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export { BlogList };
