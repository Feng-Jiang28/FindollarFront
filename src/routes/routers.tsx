import React from 'react';
import { lazy } from 'react';
import PopularCategories from "@/components/PopularCategories";
import TestQinhan from '@/pages/Test Pages/TestQInhan';
const Home = lazy(() => import('@/pages/Home'));

const routers = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test-component',
    element:<PopularCategories/>,
  },
  {
    path: '/test-xqh',
    element:<TestQinhan/>,
  }
];
export default routers;
