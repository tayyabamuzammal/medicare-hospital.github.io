"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "ABOUT US" },
    { href: "/facilities", label: "FACILITIES" },
    { href: "/services", label: "SERVICES" },
    { href: "/find-doctor", label: "FIND DOCTOR" },
    
    { href: "/lab-report", label: "LAB REPORT" },
    { href: "/patient-record", label: "PATIENT RECORD" },
    { href: "/help", label: "MEDICARE HELP" },
    { href: "/contact", label: "CONTACT US" },
  ];

  return (
    <header>
      {/* Red Top Bar */}
      <div className="top-bar">
        <div>Follow Us:</div>
        <div className="social-icons">
          <a href="#">f</a>
          <a href="#">t</a>
          <a href="#">▶</a>
        </div>
        <div>✉ info.medicare@jmc.edu.pk</div>
        <div>📞 UAN: 111-001-786</div>
        <div>Whatsapp: (+92 302 8562081)</div>
      </div>

      {/* Logo + Menu Section */}
      <div className="header-main">
        <Link href="/" className="logo">
          <div className="logo-box">
            <span className="logo-text">MEDICARE</span>
            <div className="logo-sub">
              <span>CARDIAC & GENERAL HOSPITAL</span>
              <small>Where Patient Care Is At The Heart Of All We Do</small>
            </div>
          </div>
        </Link>

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="mobile-menu">
            {links.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        body, html { margin: 0; padding: 0; font-family: Arial, sans-serif; }

        .top-bar {
          background: #d32f2f;
          color: white;
          padding: 15px 20px;
          text-align: center;
          font-size: 14px;
        }

        .top-bar > div { margin: 8px 0; }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 20px;
        }

        .social-icons a { color: white; text-decoration: none; }

        .header-main {
          background: white;
          padding: 20px;
          text-align: center;
          border-bottom: 1px solid #eee;
          position: relative;
        }

        .logo { text-decoration: none; }
        
        .logo-box {
          border: 3px solid #d32f2f;
          display: inline-block;
          padding: 10px 25px;
          background: white;
        }

        .logo-text {
          background: #d32f2f;
          color: white;
          padding: 8px 20px;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: 2px;
          display: block;
        }

        .logo-sub {
          margin-top: 8px;
        }

        .logo-sub span {
          color: #1a237e;
          font-size: 16px;
          font-weight: 700;
          display: block;
        }

        .logo-sub small {
          color: #333;
          font-size: 12px;
          display: block;
          margin-top: 3px;
        }

        .menu-btn {
          background: white;
          border: 2px solid #d32f2f;
          border-radius: 6px;
          padding: 10px 14px;
          margin-top: 15px;
          cursor: pointer;
          color: #d32f2f;
          display: inline-flex;
        }

        .menu-btn:hover {
          background: #d32f2f;
          color: white;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          margin-top: 15px;
          border-top: 1px solid #eee;
          padding-top: 15px;
        }

        .mobile-menu a {
          text-decoration: none;
          color: #333;
          padding: 12px 0;
          font-weight: 600;
          font-size: 15px;
          text-transform: uppercase;
        }

        .mobile-menu a:hover,
        .mobile-menu a.active {
          color: #d32f2f;
        }
      `}</style>
    </header>
  );
}