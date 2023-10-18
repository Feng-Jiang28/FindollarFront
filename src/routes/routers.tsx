import { lazy } from 'react';
import PopularCategories from "@/components/PopularCategories";
const Home = lazy(() => import('@/pages/Home'));
// import Home from '@/pages/Home';

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
    element:<PopularCategories/>,
  }
];

export default routers;
