import React from 'react';

const Header = ({ activeSection, onSectionChange, onNavigateToAuth, onNavigateToAdmin, isMobileMenuOpen, onMobileMenuToggle }) => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#F7D9EB',
      boxShadow: '0 4px 20px rgba(124, 42, 98, 0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      textAlign: 'left',
      minWidth: '200px',
    },
    logoText: {
      margin: 0,
      color: '#000000',
      fontSize: '2.2rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #7C2A62, #5a1a4a)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    tagline: {
      margin: 0,
      color: '#000000',
      fontSize: '0.9rem',
      fontWeight: '500',
    },
    mobileMenuButton: {
      display: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      color: '#7C2A62',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    navButton: {
      padding: '0.5rem 1rem',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontSize: '0.9rem',
      borderRadius: '20px',
      transition: 'all 0.3s ease',
      fontWeight: '600',
      color: '#000000',
    },
    activeNavButton: {
      backgroundColor: '#7C2A62',
      color: '#ffffff',
      boxShadow: '0 2px 10px rgba(124, 42, 98, 0.3)',
    },
    authButtons: {
      display: 'flex',
      gap: '0.5rem',
      marginLeft: '1rem',
    },
    loginButton: {
      padding: '0.5rem 1rem',
      border: '2px solid #7C2A62',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      borderRadius: '20px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      color: '#7C2A62',
    },
    adminButton: {
      padding: '0.5rem 1rem',
      border: 'none',
      backgroundColor: '#7C2A62',
      color: 'white',
      cursor: 'pointer',
      borderRadius: '20px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    // Mobile styles
    mobileNav: {
      display: 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: '#F7D9EB',
      flexDirection: 'column',
      padding: '1rem',
      boxShadow: '0 4px 20px rgba(124, 42, 98, 0.3)',
    }
  };

  // Apply mobile styles
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    styles.mobileMenuButton.display = 'block';
    styles.nav.display = 'none';
    if (isMobileMenuOpen) {
      styles.mobileNav.display = 'flex';
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1 style={styles.logoText}>QUICKMED</h1>
        <p style={styles.tagline}>Quick Care Smarter Health</p>
      </div>

      <button 
        style={styles.mobileMenuButton}
        onClick={onMobileMenuToggle}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      <nav style={styles.nav}>
        {navItems.map(item => (
          <button
            key={item.id}
            style={{
              ...styles.navButton,
              ...(activeSection === item.id && styles.activeNavButton)
            }}
            onClick={() => onSectionChange(item.id)}
          >
            {item.label}
          </button>
        ))}
        <div style={styles.authButtons}>
          <button style={styles.loginButton} onClick={onNavigateToAuth}>
            Login
          </button>
          <button style={styles.adminButton} onClick={onNavigateToAdmin}>
            🔧 Admin
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav style={styles.mobileNav}>
          {navItems.map(item => (
            <button
              key={item.id}
              style={{
                ...styles.navButton,
                ...(activeSection === item.id && styles.activeNavButton),
                width: '100%',
                marginBottom: '0.5rem'
              }}
              onClick={() => onSectionChange(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div style={{...styles.authButtons, marginLeft: 0, flexDirection: 'column'}}>
            <button style={{...styles.loginButton, width: '100%'}} onClick={onNavigateToAuth}>
              Login
            </button>
            <button style={{...styles.adminButton, width: '100%'}} onClick={onNavigateToAdmin}>
              🔧 Admin
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;