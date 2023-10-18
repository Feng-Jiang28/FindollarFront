import routers from './routers';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
// import { useRoutes } from 'react-router-dom';
const router = createBrowserRouter(
    routers
);

export const AppRoutes = () => {
    return (
        <RouterProvider router={router} />
    );
};


// export const AppRoutes = () => {
//   const element = useRoutes([...routers]);
//   return <>{element}</>;
// };
