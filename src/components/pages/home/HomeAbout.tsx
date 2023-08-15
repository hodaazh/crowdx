import { Button } from '@/components/commons';
import { HomeConst } from '@/constants';

const HomeAbout = (): JSX.Element => {
  const { featuresItems } = HomeConst;

  return (
    <section className="container mt-32 lg:mt-22 xs:mt-14 xs:w-full xs:!px-0">
      <div className="flex gap-28 rounded-default border border-zinc-200/90 py-28 px-32 xl:gap-14 xl:py-14 xl:px-18 md:px-10 xs:rounded-none xs:px-6 2xs:px-3">
        <div className="flex flex-1 flex-col">
          <span className="uppercase tracking-widest text-zinc-400 typo-[14-normal]">
            About and features
          </span>
          <h3 className="mt-1 uppercase tracking-wider typo-[32-bold]">
            Why CrowdX?
          </h3>
          <p className="mt-6 text-zinc-700/90">
            Lorem ipsum dolor sit amet consectetur. Nibh pharetra suspendisse
            sollicitudin libero mauris facilisi.
          </p>
          <ul className="mt-10 flex flex-col gap-12">
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
        </div>
        <div className="flex max-w-[28rem] flex-1 flex-col items-center justify-center rounded-default bg-gradient-to-br from-gray-100 via-primary/10 to-primary/10 lg:hidden">
          <img src="/media/abstractDesign.png" alt="abstractDesign" />
          <span className="mt-9 typo-[24-bold-heading]">
            Want to read more?
          </span>
          <Button
            title="About CrowdX"
            icon="arrow-right-circle"
            type="primary"
            size="tiny"
            className="mt-5"
          />
        </div>
      </div>
    </section>
  );
};

export { HomeAbout };
