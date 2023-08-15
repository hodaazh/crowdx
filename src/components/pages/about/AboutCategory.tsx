import { HomeConst } from '@/constants';

const AboutCategory = (): JSX.Element => {
  const { featuresItems } = HomeConst;

  return (
    <section className="xs:w-full xs:!px-0">
      <div className="flex gap-28 py-24 pb-20 xl:gap-14 xl:py-14 xs:rounded-none">
        <ul className="flex w-1/2 flex-col gap-12 lg:w-full">
          {featuresItems.map(({ id, title, comment }) => (
            <li
              key={id}
              className="flex list-none items-start gap-5 xs:gap-3.5"
            >
              <img src="/media/category.svg" alt="" className="w-10" />
              <div className="flex flex-col">
                <span className="leading-none text-[#0D0D0D] typo-[24-bold-heading]">
                  {title}
                </span>
                <p className="mt-3 max-w-xs leading-snug text-zinc-500/80 typo-[18]">
                  {comment}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-[1/2] items-center justify-center lg:hidden">
          <img src="/media/about.png" alt="abstractDesign" />
        </div>
      </div>
    </section>
  );
};

export { AboutCategory };
