import type { SwiperOptions } from 'swiper';

import type { ProjectT, TabBarItemT } from '@/types';

interface IType {
  tabItems: TabBarItemT[];
  investCarouselOption: SwiperOptions;
  project: ProjectT;
}

export const ProjectConst: IType = {
  project: {
    categories: [
      { name: 'All', id: 1 },
      { name: 'Funded', id: 2 },
      { name: 'Closed', id: 3 },
    ],
  },
  tabItems: [
    {
      id: 1,
      title: 'Overview',
    },
    {
      id: 2,
      title: 'Map',
    },
    // {
    //   id: 3,
    //   title: 'Financials',
    // },
    {
      id: 4,
      title: 'Documents',
    },
  ],
  investCarouselOption: {
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      650: {
        slidesPerView: 2.1,
        spaceBetween: 25,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1150: {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 8,
      },
    },
  },
};
