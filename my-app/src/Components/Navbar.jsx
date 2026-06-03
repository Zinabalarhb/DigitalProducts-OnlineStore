import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

import {
  ShoppingCart,
  Package,
  Tag,
  Star,
  Headset,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

import "../styles/Navbar.css";

const NAV_LINKS = [
  {
    label: "الرئيسية",
    href: "/",
    icon: <ChevronRight size={16} />,
  },
  {
    label: "المنتجات",
    href: "/products",
    icon: <Package size={16} />,
  },
  {
    label: "العروض",
    href: "/products",
    icon: <Tag size={16} />,
  },
  {
    label: "الأكثر مبيعاً",
    href: "/products",
    icon: <Star size={16} />,
  },
  {
    label: "الدعم",
    href: "/",
    icon: <Headset size={16} />,
  },
];

export default function Navbar() {
  const { cartCount } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar--scrolled" : ""
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="navbar__logo"
        onClick={closeMenu}
      >
        كود
        <span className="navbar__logo-dot" />
        تك
      </Link>

      {/* Desktop Navigation */}
      <nav
        className="navbar__links"
        aria-label="القائمة الرئيسية"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="navbar__link"
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="navbar__actions">

        {/* Cart */}
        <Link
          to="/cart"
          className="navbar__cart"
          aria-label={`السلة - ${cartCount} منتج`}
        >
          <ShoppingCart
            size={20}
            strokeWidth={2}
          />

          {cartCount > 0 && (
            <span className="navbar__cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Login */}
        <button
          className="ui-btn ui-btn--ghost navbar__btn-login"
          onClick={() => navigate("/login")}
        >
          دخول
        </button>

        {/* Register */}
        <button
          className="ui-btn ui-btn--primary"
          onClick={() => navigate("/register")}
        >
          إنشاء حساب
        </button>

        {/* Mobile Menu */}
        <button
          className={`navbar__hamburger ${
            menuOpen
              ? "navbar__hamburger--open"
              : ""
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label={
            menuOpen
              ? "إغلاق القائمة"
              : "فتح القائمة"
          }
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="navbar__overlay"
          onClick={closeMenu}
        />
      )}

      {/* Drawer */}
      <aside
        className={`navbar__drawer ${
          menuOpen
            ? "navbar__drawer--open"
            : ""
        }`}
      >
        <nav className="navbar__drawer-links">

          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="navbar__drawer-link"
              onClick={closeMenu}
            >
              <div className="navbar__drawer-link-content">
                {link.icon}
                <span>{link.label}</span>
              </div>

              <ArrowLeft size={16} />
            </Link>
          ))}

        </nav>

        <div className="navbar__drawer-actions">

          <button
            className="ui-btn ui-btn--ghost"
            style={{ flex: 1 }}
            onClick={() => {
              closeMenu();
              navigate("/login");
            }}
          >
            دخول
          </button>

          <button
            className="ui-btn ui-btn--primary"
            style={{ flex: 1 }}
            onClick={() => {
              closeMenu();
              navigate("/register");
            }}
          >
            إنشاء حساب
          </button>

        </div>
      </aside>
    </header>
  );
}