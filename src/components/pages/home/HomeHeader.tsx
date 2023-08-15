import { Button } from '@/components/commons';

const Stats = [
  {
    id: 1,
    value: '70k+',
    title: 'Projects view',
  },
  {
    id: 2,
    value: '82%',
    title: 'Projects popularity',
  },
  {
    id: 3,
    value: '2,654',
    title: 'Completed projects',
  },
  {
    id: 4,
    value: '95k',
    title: 'Our reviews',
  },
];

const HomeHeader = (): JSX.Element => {
  return (
    <div className="flex min-h-[calc(100vh-100px)] flex-col py-18 sm:relative">
      <div className="container flex flex-1 items-center justify-around gap-12 xl:gap-6">
        <div className="flex flex-col items-start lg:items-center sm:items-start">
          <h4 className="tracking-wider typo-[24-bold] md:typo-[20]">
            EQULITY PARTNERSHIP MADE POSSIBLE IN
          </h4>
          <h2 className="mb-8 mt-4 text-clip leading-none typo-[72-bold-heading] md:mb-6 md:typo-[58] 2xs:typo-[50]">
            Real State Project.
          </h2>
          <Button
            title="Explore"
            icon="arrow-right-circle"
            type="primary"
            size="small"
          />
        </div>
        <div className="relative -mb-28 flex items-center justify-end lg:hidden ">
          <img
            src="/media/header-image.png"
            className="h-[50rem] object-contain"
            alt="headerImg"
          />
          <div className="absolute flex min-w-[13rem] translate-y-[220%] translate-x-[-70%] scale-150 flex-col gap-1.5 rounded-xl border border-zinc-200/90 bg-white py-4 px-5">
            <div className="flex items-center gap-1">
              <i className="icon-location text-xs" />
              <span className="text-gray-400 typo-[12-normal]">
                East Gwillimbury, ON
              </span>
            </div>
            <span className="ml-0.5 leading-none typo-[14-bold]">
              Holland Hope
            </span>
          </div>
          <div className="absolute flex -translate-y-5 translate-x-[-70%] scale-150 flex-col gap-3 rounded-xl border border-zinc-200/90 bg-white px-6 py-5">
            {[
              {
                label: 'Preliminary IRR',
                value: '11.4%',
              },
              {
                label: 'Target Hold Period',
                value: '5-10 Years',
              },
            ].map(({ label, value }, index) => (
              <div className="flex flex-col" key={index}>
                <span className="leading-none text-gray-400 typo-[12]">
                  {label}
                </span>
                <span className="text-zinc-500 typo-[14-bold]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-14 flex flex-wrap items-center justify-center gap-28 lg:justify-around lg:gap-10 sm:gap-x-0">
        {Stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col leading-tight sm:w-1/2 sm:items-center"
          >
            <span className="typo-[40-bold] xs:typo-[32]">{stat.value}</span>
            <h5 className="text-gray-400/80 typo-[14-normal]">{stat.title}</h5>
          </div>
        ))}
      </div>
      <img
        src="/media/header-single-line.svg"
        alt="stat line"
        className="absolute bottom-0 z-[-5] w-full translate-y-[2vw] scale-y-75 2xl:translate-y-0 2xl:scale-y-100 sm:hidden"
      />
      <img
        src="/media/header-single-line-responsive.svg"
        alt="stat line responsive"
        className="absolute -bottom-4 z-[-5] hidden w-full sm:block"
      />
      <img
        className="absolute right-0 top-0 -z-10 min-h-screen w-full translate-y-[-5%] object-contain 2xl:translate-y-0"
        src="/media/header-lines.svg"
        alt="bg wave"
      />
    </div>
  );
};

export { HomeHeader };
