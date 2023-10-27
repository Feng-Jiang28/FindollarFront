
import PopularCategories from "@/components/PopularCategories";

import TestQinhan from '@/pages/Test Pages/TestQInhan';


import Home from '@/pages/Home';


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
  }
];

export default routers;
