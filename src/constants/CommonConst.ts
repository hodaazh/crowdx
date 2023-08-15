import type { SwiperOptions } from 'swiper';

import type { FooterLink, NavItemT, SocialLink } from '@/types';

interface IType {
  navLinks: NavItemT[];
  footerMoreLinks: FooterLink[];
  footerContactLinks: FooterLink;
  footerSocialLinks: SocialLink;
  projectsCarouselOption: SwiperOptions;
  projectOption: SwiperOptions;
}

export const CommonConst: IType = {
  navLinks: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Projects',
      href: '/project',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
  ],
  footerMoreLinks: [
    {
      title: 'Learn More',
      items: [
        {
          title: 'About Lift',
          href: '/',
        },
        {
          title: 'Press Relaases',
          href: '/',
        },
        {
          title: 'Environment',
          href: '/',
        },
        {
          title: 'Jobs',
          href: '/',
        },
        {
          title: 'Privacy Policy',
          href: '/',
        },
        {
          title: 'Contact Us',
          href: '/',
        },
      ],
    },
    {
      title: 'Tickets & Booking',
      items: [
        {
          title: 'Lift Tickets',
          href: '/',
        },
        {
          title: 'Season Passes',
          href: '/',
        },
        {
          title: 'Vacation Packages',
          href: '/',
        },
      ],
    },
  ],
  footerContactLinks: {
    title: 'Contact Us',
    items: [
      {
        title: '137 Market St Singapore 048943',
        icon: 'location',
      },
      {
        title: '123-456-7890',
        icon: 'call',
        href: '/',
      },
      {
        title: 'info@acretrader.com',
        icon: 'sms-off',
        href: '/',
      },
    ],
  },
  footerSocialLinks: {
    title: 'Social',
    items: [
      {
        icon: 'facebook',
        href: '/',
      },
      {
        icon: 'instagram',
        href: '/',
      },
      {
        icon: 'twitter',
        href: '/',
      },
      {
        icon: 'youtube',
        href: '/',
      },
    ],
  },
  projectsCarouselOption: {
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
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  },
  projectOption: {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 35,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      950: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  },
};
