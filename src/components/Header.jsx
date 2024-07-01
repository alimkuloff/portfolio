
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className=""><img src={logo} alt="" className='w-14 rounded-xl' /></Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/resume" className="hover:underline">Resume</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/skills" className="hover:underline">Skills</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
