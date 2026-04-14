import { Env } from "../constants";

export const adminNavigation = {
  url: "/admin",
  label: "Admin",
  hidden: !Env.ADMIN_ENABLED,
};

export const jobNavigation = {
  url: "/admin/jobs",
  label: "Jobs",
  hidden: !Env.ADMIN_ENABLED,
};

export const promptsNavigation = {
  url: "/admin/prompts",
  label: "Prompts",
  hidden: !Env.ADMIN_ENABLED,
};

export const youtubeNavigation = {
  url: "/admin/youtube",
  label: "YouTube",
  hidden: !Env.ADMIN_ENABLED,
};

export const homeNavigation = {
  url: "/",
  label: "Home",
  hidden: false,
};
export const blogsNavigation = {
  url: "/blogs",
  label: "Blogs",
  hidden: false,
};

export const AdminNavigation = [
  adminNavigation,
  jobNavigation,
  promptsNavigation,
  youtubeNavigation,
];

export const HeaderNavigation = [
  homeNavigation,
  blogsNavigation,
  adminNavigation,
];
