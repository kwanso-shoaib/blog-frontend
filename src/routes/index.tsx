import { RouteProps } from 'react-router-dom'
import { ROUTES_PATH } from '../constants'
import { Signup } from '../pages/Signup';
export const authRoutes: RouteProps[] = [
  {
    path: ROUTES_PATH.signup,
    element: <Signup />
  }
];