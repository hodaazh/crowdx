import { CarouselSection, CommonCard } from '@/components/elements';
import { FakeConst } from '@/constants';

const BlogDetailRelated = (): JSX.Element => {
  const { investingItems } = FakeConst;

  return (
    <div className="relative md:hidden">
      <img
        className="absolute top-1/2 left-0 z-0"
        src="/media/slider-line-2.svg"
        alt="slider-line"
      />
      <CarouselSection
        className="mt-24"
        title="RELATED BLOGS"
        data={investingItems}
        options={{
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1.1,
              spaceBetween: 25,
            },
            850: {
              slidesPerView: 1.7,
              spaceBetween: 30,
            },
            1150: {
              slidesPerView: 2.2,
              spaceBetween: 40,
            },
          },
        }}
        renderItem={(item) => <CommonCard {...item} />}
      />
    </div>
  );
};

export { BlogDetailRelated };
