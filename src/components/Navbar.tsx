import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Media</h1>

      <div className="flex gap-6">
        <Link
          to="/feed"
          className={location.pathname === "/feed" ? "font-bold underline" : ""}
        >
          Feed
        </Link>

        <Link
          to="/upload"
          className={location.pathname === "/upload" ? "font-bold underline" : ""}
        >
          Upload
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;