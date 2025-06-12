import React, { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { logoutApi } from '../api/user.api'; 
import { useRouter } from '@tanstack/react-router';
 
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

const router = useRouter();

const handleLogout = async () => {
  await logoutApi();       
  dispatch(logout());       
  router.navigate({ to: '/auth' });
};

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-b from-blue-100 to-blue-50 border-b border-blue-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-blue-600">Shrtit</Link>
          </div>

          {/* Center Nav */}
          <div className="hidden md:flex space-x-8">
            {['/', '/dashboard', '/about'].map((path, i) => {
              const labels = ['Home', 'History', 'About'];
              return (
                <Link
                  key={path}
                  to={path}
                  activeOptions={{ exact: path === '/' }}
                  activeProps={{ className: 'text-blue-600 font-medium' }}
                  inactiveProps={{ className: 'text-gray-600 hover:text-gray-900' }}
                >
                  {labels[i]}
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-gray-700">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 font-medium text-lg">
                    Hello, {user?.name || 'User'}
                  </span>
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/auth" className="text-gray-600 hover:text-gray-900">Login</Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          {['/', '/dashboard', '/about'].map((path, i) => {
            const labels = ['Home', 'History', 'About'];
            return (
              <Link
                key={path}
                to={path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                {labels[i]}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-gray-200">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4 px-3">
                <div className="flex flex-col">
                  <span className="text-base font-medium text-gray-800">{user?.name || 'User'}</span>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-blue-600 cursor-pointer hover:text-blue-800"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 mt-3">
                <Link
                  to="/auth"
                  className="block text-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block text-center px-4 py-2 text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
