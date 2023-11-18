
import PopularCategories from "@/components/PopularCategories";

import TestQinhan from '@/pages/Test Pages/TestQInhan';


import Home from '@/pages/Home';
import Filter from '@/components/Filter';
import FilterTest from '@/components/FilterTest';


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
    element:<Filter/>,
  },
  {
    path: '/test-xqh',
    element:<TestQinhan/>,

  }
];

export default routers;
