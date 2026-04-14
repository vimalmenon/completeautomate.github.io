import { Env } from "../constants";
import { INavigation } from "../types";

export const adminNavigation: INavigation = {
  url: "/admin",
  label: "Admin",
  hidden: !Env.ADMIN_ENABLED,
};

export const jobNavigation: INavigation = {
  url: "/admin/jobs",
  label: "Jobs",
  hidden: !Env.ADMIN_ENABLED,
};

export const promptsNavigation: INavigation = {
  url: "/admin/prompts",
  label: "Prompts",
  hidden: !Env.ADMIN_ENABLED,
};

export const youtubeNavigation: INavigation = {
  url: "/admin/youtube",
  label: "YouTube",
  hidden: !Env.ADMIN_ENABLED,
};

export const homeNavigation: INavigation = {
  url: "/",
  label: "Home",
};
export const blogsNavigation: INavigation = {
  url: "/blogs",
  label: "Blogs",
};

export const AdminNavigation: INavigation[] = [
  adminNavigation,
  jobNavigation,
  promptsNavigation,
  youtubeNavigation,
];

export const HeaderNavigation: INavigation[] = [
  homeNavigation,
  blogsNavigation,
  adminNavigation,
];
