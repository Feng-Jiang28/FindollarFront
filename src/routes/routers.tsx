import { lazy } from 'react';
import PopularCategories from "@/components/PopularCategories";
// const Home = lazy(() => import('@/pages/Home'));
import Home from '@/pages/Home';
import Filter from '@/components/Filter';
import FilterTest from '@/components/FilterTest';
import Login from '@/components/Login';
import Post from '@/components/post';

const routers = [
  {
    path: '/',
    element: <Home />,
    children: [
        {
            path: 'about',
            element: <></>
        },
        {
            path: 'blog',
            element: <></>
        },
        {
            path: 'contact',
            element: <></>
        }
    ]
  },
  {
    path: '/test-component',
    element: <Post />,
  }
];

export default routers;
