import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = ({}) => {
    
  return (
        <header className="relative flex items-center h-16 px-6 bg-transparent text-white w-screen">
            <div className="absolute left-6">
                <Link
                    to=""
                    className="font-regola-semibold hover:text-slate-300 transition"
                >
                    Home
                </Link>
            </div>
            <nav className="sm:mx-auto flex space-x-8 ml-auto font-regola-semibold">
                <Link
                    to="property-details"
          className="hover:text-slate-300 transition"
                 >
                    Property Layout
                </Link>
                <Link
                    to="contact-us"
                    className="hover:text-slate-300 transition"
                >
                    Contact Us
                </Link>
            </nav>
    </header>
  );
};

export default Header;