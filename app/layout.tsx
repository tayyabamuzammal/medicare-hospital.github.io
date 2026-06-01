"use client";
import { useState, useEffect } from 'react';
import './globals.css';
import Link from 'next/link';

// Loading Component
function Loading() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '20px' 
    }}>
      Loading...
    </div>
  );
}

// Error Component
function ConnectionError() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      color: 'red',
      height: '100vh' 
    }}>
      <h2>Connection Error</h2>
      <p>Internet not connected. Please check your network.</p>
      <button 
        onClick={() => window.location.reload()} 
        style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}
      >
        Retry
      </button>
    </div>
  );
}

// Navbar
function Navbar() {
  return (
    <header style={{background: '#d32f2f', color: 'white', padding: '15px 20px'}}>
      <h1 style={{margin: 0, textAlign: 'center'}}>MediCare Connect</h1>
      <nav style={{display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '10px', flexWrap: 'wrap'}}>
        <Link href="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link>
        <Link href="/services" style={{color: 'white', textDecoration: 'none'}}>Services</Link>
        <Link href="/find-doctor" style={{color: 'white', textDecoration: 'none'}}>Find Doctor</Link>
        <Link href="/appointment" style={{color: 'white', textDecoration: 'none'}}>Appointment</Link>
        <Link href="/facilities" style={{color: 'white', textDecoration: 'none'}}>Facilities</Link>
        <Link href="/patient-record" style={{color: 'white', textDecoration: 'none'}}>Patients</Link>
        <Link href="/lab-report" style={{color: 'white', textDecoration: 'none'}}>Lab Report</Link>
        <Link href="/about" style={{color: 'white', textDecoration: 'none'}}>About</Link>
        <Link href="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</Link>
        <Link href="/help" style={{color: 'white', textDecoration: 'none'}}>Help</Link>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // 2 sec loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Check online status
    setIsOnline(navigator.onLine);
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Loading state
  if (loading) {
    return (
      <html lang="en">
        <body style={{ margin: 0 }}><Loading /></body>
      </html>
    );
  }

  // Offline
  if (!isOnline) {
    return (
      <html lang="en">
        <body style={{ margin: 0 }}><ConnectionError /></body>
      </html>
    );
  }

  // Normal app
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        <Navbar />
        <main>{children}</main>
        <footer style={{background: '#1a1a1a', color: 'white', textAlign: 'center', padding: '20px', marginTop: '40px'}}>
          © 2025 MediCare Connect. All rights reserved.
        </footer>
      </body>
    </html>
  );
}