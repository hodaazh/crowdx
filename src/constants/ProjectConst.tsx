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
      { id: 1, name: 'All', title: 'All' },
      { id: 2, name: 'Funded', title: 'Funded' },
      { id: 3, name: 'Closed', title: 'Closed' },
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
