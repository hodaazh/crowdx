import 'swiper/css';
import 'swiper/css/virtual';

import classNames from 'classnames';
import { useRef } from 'react';
import type { SwiperOptions } from 'swiper';
import type { SwiperRef } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components/commons';

type IProps<T> = {
  className?: string;
  headerClassName?: string;
  title?: string;
  moreLink?: string;
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  options?: SwiperOptions;
  isNextPrev?: boolean;
  hasFooter?: boolean;
};

const CarouselSection = <T extends { id: number }>({
  data,
  renderItem,
  className,
  headerClassName,
  title,
  moreLink,
  options = {},
  isNextPrev = true,
  hasFooter = true,
}: IProps<T>) => {
  const slideRef = useRef<SwiperRef>(null);

  if (!data.length) return null;
  return (
    <section className={classNames('container flex flex-col', className)}>
      <header
        className={classNames(
          'mb-11 flex items-center justify-between lg:mb-8 sm:mb-6',
          headerClassName,
          {
            hidden: !isNextPrev,
          }
        )}
      >
        <h3 className="pl-4 uppercase leading-none tracking-widest typo-[24-bold] sm:leading-snug">
          {title}
        </h3>
        <div className="flex gap-2 sm:hidden">
          <button
            onClick={() => slideRef.current?.swiper.slidePrev()}
            className="flex h-7 w-7 items-center justify-center rounded-[10px] border-2 border-zinc-800 opacity-40 duration-200 hover:opacity-100"
          >
            <i className="icon-arrow-right rotate-180 text-3xl" />
          </button>
          <button
            onClick={() => slideRef.current?.swiper.slideNext()}
            className="flex h-7 w-7 items-center justify-center rounded-[10px] border-2 border-zinc-800 opacity-40 duration-200 hover:opacity-100"
          >
            <i className="icon-arrow-right text-3xl" />
          </button>
        </div>
      </header>
      <Swiper
        ref={slideRef}
        slidesPerView="auto"
        spaceBetween={25}
        {...options}
        className="mySwiper w-full !overflow-visible"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
      {hasFooter && (
        <footer className="mt-4 flex items-start">
          <Button
            title="Show More"
            type="link"
            size="tiny"
            className="ml-0"
            link
            href={moreLink}
          />
        </footer>
      )}
    </section>
  );
};

export { CarouselSection };
