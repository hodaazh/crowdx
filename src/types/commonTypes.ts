type NavItemT = {
  href: string;
  title: string;
};

type PaginateT = {
  count: number;
  current_page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

type ProjectItemT = {
  id: number;
  img: string;
  address?: string;
  location: string;
  preliminary: string;
  title: string;
  targetHold: string;
  funded: boolean;
};

type CommonCardItemT = {
  id: number;
  title: string;
  date: string;
  comment: string;
};

type SocialItem = {
  icon: string;
  href: string;
};

type FooterItem = {
  icon?: string;
  title: string;
  href?: string;
};

type FooterLink = {
  title: string;
  items: FooterItem[];
  className?: string;
};

type SocialLink = {
  title: string;
  items: SocialItem[];
};

type BlogT = {
  title: string;
  body: string;
  body_small: string;
  created_at: string;
  description?: string;
  id: number;
  keywords?: string;
  slug: string;
};

type DocumentT = {
  id: number;
  title: string;
  file_name: string;
  file_src: string;
  created_at: string;
};

type AttributeT = {
  icon?: string;
  id: number;
  is_bold: boolean;
  is_default: boolean;
  title: string;
  value: string;
};

type ProjectT = {
  id?: number;
  title?: string;
  description?: string;
  slug?: string;
  main_photo?: string;
  location?: string;
  lat?: number;
  long?: number;
  body?: string;
  min_investment?: number;
  subscribed?: number;
  attributes?: AttributeT[];
  category?: {
    id: number;
    title: string;
  };
  categories: Array<{ name: string; id: number; title: string }>;
  photos?: Array<{
    name: string;
    photo: string;
    thumb: string;
  }>;
  documents?: DocumentT[];
};

type MainContextT = {
  hero_project: ProjectT;
  counter: Array<{
    count: number;
    id: number;
    sign: string;
    title: string;
  }>;
  menu: Array<{
    id: number;
    title: string;
    links: Array<{
      link: string;
      title: string;
    }>;
  }>;
  setting: {
    hero: {
      description: string;
      link: string;
      link_text: string;
      title: string;
    };
    socials: {
      address?: string;
      email?: string;
      facebook?: string;
      instagram?: string;
      linkedin?: string;
      phone?: string;
      twitter?: string;
    };
    about: {
      body: string;
      photo?: string;
      title: string;
      items: Array<{
        description: string;
        // icon?: string;
        title: string;
      }>;
      title_small: string;
    };
    title: {
      blog_title: string;
      blog_title_small: string;
      contact_title: string;
      contact_title_small: string;
      project_category_title: string;
      project_title: string;
    };
  };
};

export type {
  BlogT,
  CommonCardItemT,
  DocumentT,
  FooterItem,
  FooterLink,
  MainContextT,
  NavItemT,
  PaginateT,
  ProjectItemT,
  ProjectT,
  SocialItem,
  SocialLink,
};
