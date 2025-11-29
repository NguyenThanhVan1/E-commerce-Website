import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Sparkles } from "lucide-react";
import { useCart } from "./CartContext";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-pink-500" />
            <span className="text-pink-600">Bella Beauty Nhóm 5</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-pink-600"
                  : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Trang chủ
            </Link>
            <Link
              to="/products"
              className={`transition-colors ${
                isActive("/products")
                  ? "text-pink-600"
                  : "text-gray-700 hover:text-pink-600"
              }`}
            >
              Sản phẩm
            </Link>
            <a
              href="#about"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Về chúng tôi
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-pink-600 transition-colors" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              to="/"
              className={`${isActive("/") ? "text-pink-600" : "text-gray-700"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              to="/products"
              className={`${
                isActive("/products") ? "text-pink-600" : "text-gray-700"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sản phẩm
            </Link>
            <a
              href="#about"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Về chúng tôi
            </a>
            <a
              href="#contact"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Liên hệ
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
