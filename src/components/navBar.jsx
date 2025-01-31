import React, { useState, useEffect } from "react";
import{ Link, NavLink, useNavigate } from "react-router-dom";
import { fetchCategories } from "../graphql/dataFetching";

const NavBar = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };

    loadCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    onCategoryChange(categoryId);
    setIsOpen(false);
    navigate('/');
  };

  return (
    <nav className="text-white animate-fade-in-up">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Blog
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <NavLink
                to="/"
                onClick={() => handleCategoryClick(null)}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded hover:text-blue-500 ${
                    isActive ? 'text-blue-500' : ''
                  }`
                }
              >
                All Posts
              </NavLink>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className="block py-2 px-3 rounded hover:text-blue-500"
                >
                  {category.name}
                </button>
              </li>
            ))}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded hover:text-blue-500 ${
                    isActive ? 'text-blue-500' : ''
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;