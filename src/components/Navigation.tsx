import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-white font-cinzel text-xl tracking-[0.2em] hover:text-gray-300 transition-colors"
          >
            CHARITY EVERETT
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm tracking-[0.1em] transition-colors ${
                location.pathname === '/' 
                  ? 'text-white border-b border-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              HOME
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;