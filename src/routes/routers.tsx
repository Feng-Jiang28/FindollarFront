
import PopularCategories from "@/components/PopularCategories";

import TestQinhan from '@/pages/Test Pages/TestQInhan';


import Home from '@/pages/Home';

import PersonalPg from '@/pages/PersonalPg';


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
  },
  {
    path: '/test-xqh',
    element:<TestQinhan/>,
  },
  {
    path: '/personal',
    element:<PersonalPg />,
  }
];

export default routers;
