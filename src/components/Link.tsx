import { NavLink } from 'react-router-dom';

function Link({ to, children }: { to: string; children: React.ReactNode; }) {
    return (
        <NavLink
            to={to}
            // end
            className={({ isActive }) => `text-gray-600 hover:text-black tracking-tight select-none flex 
                subpixel-antialiased ${isActive && "text-red-300"}`}
        >
            {children}
        </NavLink>
    );
}

export default Link
