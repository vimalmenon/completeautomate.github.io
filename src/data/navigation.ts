import { Env } from "../constants";

export const adminNavigation = {
  url: "/admin",
  label: "Admin",
  hidden: !Env.ADMIN_ENABLED,
};

export const jobNavigation = {
  url: "/admin/jobs",
  label: "Jobs",
  hidden: false,
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

export const AdminNavigation = [adminNavigation, jobNavigation];

export const HeaderNavigation = [
  homeNavigation,
  blogsNavigation,
  adminNavigation,
];
