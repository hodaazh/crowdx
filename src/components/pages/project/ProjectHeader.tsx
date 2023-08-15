import 'swiper/css';
import 'swiper/css/free-mode';
import 'react-circular-progressbar/dist/styles.css';

import cn from 'classnames';
import { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components/commons';
import { FakeConst } from '@/constants';

const ProjectHeader = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const { investSlider } = FakeConst;

  return (
    <div className="container mt-16 grid grid-cols-5 grid-rows-[35%_auto] gap-x-18 lg:mt-14 lg:flex lg:flex-col lg:gap-5">
      <div className="col-span-3 row-span-full flex flex-col justify-center overflow-hidden">
        <img
          src={investSlider[index]?.img}
          className="aspect-[7/4] w-full rounded-default object-cover"
          alt="project image"
        />
        <div className="relative mt-2 overflow-hidden">
          <div className="absolute top-0 right-0 z-10 h-full w-32 translate-x-full shadow-sliderShadow"></div>
          <Swiper
            slidesPerView={2.3}
            spaceBetween={8}
            breakpoints={{
              420: {
                slidesPerView: 3,
              },
              650: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1440: {
                slidesPerView: 6,
              },
            }}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper w-full select-none"
          >
            {investSlider.map((item, _i) => (
              <SwiperSlide key={_i} onClick={() => setIndex(_i)}>
                <img
                  src={item.img}
                  alt={item.img}
                  className={cn(
                    'h-20 xs:h-17 w-full cursor-pointer rounded-2xl object-cover duration-200 brightness-75',
                    {
                      '!brightness-100': _i === index,
                    }
                  )}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-start justify-center lg:-order-1">
        <span className="rounded-full border border-zinc-200/90 bg-white px-3 text-gray-600/80 shadow-badge">
          Funded
        </span>
        <h3 className="mt-1.5 mb-2 typo-[40-bold] lg:mt-0 lg:mb-1">
          Yazoo City Land
        </h3>
        <div className="flex items-center gap-1">
          <i className="icon-location text-base"></i>
          <span className="text-gray-400">Yazoo Country, MS</span>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-start pt-5">
        <div className="mb-7 flex flex-wrap gap-8">
          {[
            { title: 'Price', comment: '$7.412,790' },
            { title: 'Size', comment: '3209' },
            { title: 'Price/AC', comment: '$2,310' },
            { title: 'Development', comment: '5-10 Years' },
          ].map(({ title, comment }) => (
            <div className="flex flex-col" key={title}>
              <span className="leading-none text-gray-400 typo-[12]">
                {title}
              </span>
              <span className="text-gray-500 typo-[14-bold]">{comment}</span>
            </div>
          ))}
        </div>
        <div className="mb-6 grid w-full grid-cols-[auto_40%] grid-rows-[auto_auto] gap-6 xl:grid-cols-2">
          <div className="col-span-full flex flex-col xl:col-span-1">
            <span className="leading-none text-gray-400 typo-[12]">
              Min. Investment
            </span>
            <span className="text-zinc-800 typo-[24-bold-heading]">
              $17,325
            </span>
          </div>
          <Button
            title="Invest Now"
            type="primary"
            size="tiny"
            className="flex-1 xl:order-1 xl:col-span-2"
            titleClassName="typo-[16-700]"
          />
          <div className="flex gap-6">
            <CircularProgressbar
              value={75}
              className="h-12 !w-12 drop-shadow-circular"
              strokeWidth={20}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: 'round',
                pathTransitionDuration: 0.5,
                pathColor: `#F0D163`,
                trailColor: '#F4F4F4',
              })}
            />
            <div className="flex flex-col">
              <span className="leading-none text-gray-400 typo-[12]">
                Subscribed
              </span>
              <span className="text-secondary typo-[26-bold-heading]">63%</span>
            </div>
          </div>
        </div>
        <Button
          title="Investor Relations"
          type="link"
          size="tiny"
          icon="sms"
          reverse={true}
          className="!px-2 md:w-full"
        />
      </div>
    </div>
  );
};

export { ProjectHeader };
