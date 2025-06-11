import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export const Navigation = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link to="/" className="text-xl font-bold">QR Code App</Link>
        <div className="space-x-4">
            <NavLink to="/scanner" className={({  isActive }) =>isActive ? "underline text-amber-300":"hover:underline"}>Scanner</NavLink>
            <NavLink to="/generator" className={({  isActive }) =>isActive ? "underline text-amber-300":"hover:underline"}>Generator</NavLink>
            <NavLink to="/scan_history" className={({  isActive }) =>isActive ? "underline text-amber-300":"hover:underline"}>Scan History</NavLink>
            <NavLink to="/generate_history" className={({  isActive }) =>isActive ? "underline text-amber-300":"hover:underline"}>Generate History</NavLink>
           
        </div>
        </nav>
    );
}