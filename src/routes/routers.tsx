import React from 'react';
import { lazy } from 'react';
import PopularCategories from "@/components/PopularCategories";
const Home = lazy(() => import('@/pages/Home'));

const routers = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test-component',
    element:<PopularCategories/>,
  }
];
export default routers;
