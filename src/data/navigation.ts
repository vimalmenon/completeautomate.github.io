import { Env } from '@constants';
import { INavigation } from '@types';

export const adminNavigation: INavigation = {
  hidden: !Env.ADMIN_ENABLED,
  label: 'Admin',
  url: '/admin',
};

export const jobNavigation: INavigation = {
  hidden: !Env.ADMIN_ENABLED,
  label: 'Jobs',
  url: '/admin/jobs',
};

export const promptsNavigation: INavigation = {
  hidden: !Env.ADMIN_ENABLED,
  label: 'Prompts',
  url: '/admin/prompts',
};

export const youtubeNavigation: INavigation = {
  hidden: !Env.ADMIN_ENABLED,
  label: 'YouTube',
  url: '/admin/youtube',
};

export const homeNavigation: INavigation = {
  label: 'Home',
  url: '/',
};
export const blogsNavigation: INavigation = {
  label: 'Blogs',
  url: '/blogs',
  children: [
    { label: 'All Blogs', url: '/blogs' },
    { label: 'Strategy', url: '/blogs#strategy' },
    { label: 'AI Systems', url: '/blogs#ai-systems' },
    { label: 'Implementation', url: '/blogs#implementation' },
    { label: 'AI Terms', url: '/blogs#ai-terms' },
  ],
};
export const contactNavigation: INavigation = {
  label: 'Contact',
  url: '/contact',
};
export const aboutNavigation: INavigation = {
  label: 'About',
  url: '/about',
};
export const servicesNavigation: INavigation = {
  label: 'Services',
  url: '/services',
};

export const AdminNavigation: INavigation[] = [
  adminNavigation,
  jobNavigation,
  promptsNavigation,
  youtubeNavigation,
];

export const HeaderNavigation: INavigation[] = [
  homeNavigation,
  servicesNavigation,
  blogsNavigation,
  contactNavigation,
  aboutNavigation,
  adminNavigation,
];
