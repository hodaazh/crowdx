import { Button } from '@/components/commons';

const HomeBanner = (): JSX.Element => {
  return (
    <section className="container my-32 lg:my-22 xs:my-14 xs:w-full xs:!px-0">
      <div className="z-2 relative flex items-center justify-around rounded-default bg-gray-100 py-10 px-20 md:flex-col md:justify-center md:px-3 xs:rounded-none">
        <img
          className="absolute -top-6 right-0 z-0"
          src="/media/banner-lines.svg"
          alt="banner-line"
        />
        <div className="leading-tight typo-[72-bold-heading] lg:typo-[60] md:text-center md:typo-[40]">
          <span className="text-[#F0D163]">Explore</span> opportunitios to
          compare and decide
        </div>
        <img
          className="z-10 flex h-full object-contain md:-order-8"
          src="/media/banner-image.png"
          alt="bannerImg"
        />
        <Button
          title="Show More"
          type="link"
          size="tiny"
          icon="arrow-right-circle"
          className="!absolute right-4 bottom-2 md:!relative md:mt-4 md:w-full"
        />
      </div>
    </section>
  );
};

export { HomeBanner };
