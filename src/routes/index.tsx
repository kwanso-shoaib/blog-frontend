import { RouteProps } from "react-router-dom";
import { ROUTES_PATH } from "../constants";
import {
  Signup,
  Signin,
  Settings,
  CreatePost,
  MyArticles,
  ReadBlog,
  Home,
  ReadBlogBySearch,
} from "../pages";
import { Protected } from "../components";
export const protectedRoutes: RouteProps[] = [
  {
    path: ROUTES_PATH.settings,
    element: (
      <Protected>
        <Settings />
      </Protected>
    ),
  },
  {
    path: ROUTES_PATH.createPost,
    element: (
      <Protected>
        <CreatePost />
      </Protected>
    ),
  },
  {
    path: ROUTES_PATH.myArticles,
    element: (
      <Protected>
        <MyArticles />
      </Protected>
    ),
  },
  {
    path: `${ROUTES_PATH.readBlog}/:id`,
    element: <ReadBlog />,
  },
  {
    path: `${ROUTES_PATH.readBlogBySearch}/:search`,
    element: (
      <Protected>
        <ReadBlogBySearch />
      </Protected>
    ),
  },
  {
    path: ROUTES_PATH.home,
    element: <Home />,
  },
];
export const authRoutes: RouteProps[] = [
  {
    path: ROUTES_PATH.signup,
    element: <Signup />,
  },
  {
    path: ROUTES_PATH.signin,
    element: <Signin />,
  },
];
