import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalCount } = useCart();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleCartModal = () => setCartOpen(!cartOpen);

  return (
    <header className="bg-dark">
    <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-6 sm:px-8">
      {/* Left: Logo */}
      <h1 className="text-3xl sm:text-4xl font-logo text-brand">
        <Link to="/">SIZZLE <span className="text-white mx-1">&</span> STEAM</Link>
      </h1>

      {/* Right: Desktop Nav, Cart, Hamburger */}
      <div className="flex items-center space-x-6">
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase font-medium tracking-wide">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-brand" : "text-white hover:text-brand transition"}>Home</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? "text-brand" : "text-white hover:text-brand transition"}>Menu</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-brand" : "text-white hover:text-brand transition"}>Gallery</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-brand" : "text-white hover:text-brand transition"}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-brand" : "text-white hover:text-brand transition"}>Contact</NavLink>
        </nav>

        {/* Cart Button (Always Visible) */}
        <button
          onClick={toggleCartModal}
          className="relative text-white hover:text-brand transition cursor-pointer"
          aria-label="Open cart"
        >
          <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </button>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </div>

    {/* Mobile Nav */}
    <nav
      className={`md:hidden bg-dark px-6 pb-4 transition-max-height duration-300 ease-in-out overflow-hidden ${
        mobileMenuOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      {["/", "/menu", "/gallery", "/about", "/contact"].map((path, i) => {
        const labels = ["Home", "Menu", "Gallery", "About", "Contact"];
        return (
          <NavLink
            key={path}
            to={path}
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              (isActive ? "text-brand" : "text-white hover:text-brand") +
              " block py-3 uppercase font-medium tracking-wide text-sm"
            }
          >
            {labels[i]}
          </NavLink>
        );
      })}
    </nav>

    {/* Cart Modal */}
    {cartOpen && <CartModal onClose={() => setCartOpen(false)} />}
  </header>
  );
}
