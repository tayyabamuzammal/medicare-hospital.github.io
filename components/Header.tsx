"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Red Bar */}
      <div className="top-bar">
        <div>Follow Us: f t ▶</div>
        <div>📧 info.medicare@jmc.edu.pk | 📞 UAN: 111-001-786</div>
        <div>Whatsapp: (+92 302 8562081)</div>
      </div>

      {/* White Navbar */}
      <nav className="navbar">
        <div className="nav-inner">
          
          {/* Logo/Text */}
          <Link href="/" className="logo">
            MediCare
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links">
            <Link href="/about">ABOUT US</Link>
            <Link href="/facilities">FACILITIES</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/find-doctor">Find Doctor</Link>
            <Link href="/contact">CONTACT US</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mobile-menu">
            <Link href="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
            <Link href="/facilities" onClick={() => setIsOpen(false)}>FACILITIES</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>SERVICES</Link>
            <Link href="/find-doctor" onClick={() => setIsOpen(false)}>Find Doctor</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
          </div>
        )}
      </nav>

      <style jsx>{`
        .top-bar {
          background: #d32f2f;
          color: white;
          padding: 8px 20px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .navbar {
          background: white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #d32f2f;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 600;
          font-size: 14px;
          transition: 0.2s;
        }

        .nav-links a:hover {
          color: #d32f2f;
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 16px;
          text-align: center;
          background: white;
          border-top: 1px solid #eee;
        }

        .mobile-menu a {
          text-decoration: none;
          color: #333;
          padding: 12px 0;
          font-weight: 600;
          border-bottom: 1px solid #f0f0f0;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
          .menu-btn {
            display: block;
          }
          .mobile-menu {
            display: flex;
          }
          .top-bar {
            font-size: 11px;
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}