

// import React, { useState, useEffect } from 'react';

// // Data constants
// const QUICK_LINKS = [
//   { label: 'Home', section: 'home' },
//   { label: 'About Us', section: 'about' },
//   { label: 'Services', section: 'services' },
//   { label: 'Doctors', section: 'doctors' },
//   { label: 'Contact', section: 'contact' }
// ];

// const LEGAL_LINKS = [
//   'Terms & Conditions',
//   'Privacy Policy',
//   'Editorial Policy',
//   'Returns & Cancellations'
// ];

// const SOCIAL_LINKS = [
//   { 
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//       </svg>
//     ), 
//     url: 'https://facebook.com/quickmed',
//     label: 'Facebook'
//   },
//   { 
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//       </svg>
//     ), 
//     url: 'https://twitter.com/quickmed',
//     label: 'Twitter'
//   },
//   { 
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//       </svg>
//     ), 
//     url: 'https://instagram.com/quickmed',
//     label: 'Instagram'
//   },
//   { 
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//       </svg>
//     ), 
//     url: 'https://linkedin.com/company/quickmed',
//     label: 'LinkedIn'
//   }
// ];

// const APP_LINKS = [
//   {
//     icon: '📱',
//     smallText: 'GET IT ON',
//     largeText: 'Google Play',
//     url: '#'
//   },
//   {
//     icon: '📱',
//     smallText: 'Download on the',
//     largeText: 'App Store',
//     url: '#'
//   }
// ];

// const Footer = ({ onSectionChange }) => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width <= 768);
//       setIsTablet(width <= 1024 && width > 768);
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
    
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   const styles = {
//     footer: {
//       backgroundColor: '#7C2A62',
//       color: 'white',
//       padding: isMobile ? '2rem 1rem 1rem' : '3rem 2rem 1rem',
//       fontFamily: 'Arial, sans-serif',
//     },
//     container: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//     },
//     footerContent: {
//       display: 'grid',
//       gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
//       gap: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
//       marginBottom: '2rem',
//     },
//     footerSection: {
//       display: 'flex',
//       flexDirection: 'column',
//       textAlign: isMobile ? 'left' : 'left',
//     },
//     sectionTitle: {
//       fontSize: '1.1rem',
//       marginBottom: '1.5rem',
//       color: '#FFFFFF',
//       fontWeight: '600',
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px',
//     },
//     linkList: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '0.8rem',
//     },
//     link: {
//       color: '#F7D9EB',
//       textDecoration: 'none',
//       fontSize: '0.9rem',
//       transition: 'all 0.3s ease',
//       cursor: 'pointer',
//       background: 'none',
//       border: 'none',
//       textAlign: 'left',
//       padding: 0,
//     },
//     description: {
//       color: '#F7D9EB',
//       fontSize: '0.9rem',
//       lineHeight: '1.5',
//       marginBottom: '1rem',
//     },
//     socialLinks: {
//       display: 'flex',
//       gap: '1rem',
//       marginTop: '0.5rem',
//       justifyContent: isMobile ? 'flex-start' : 'flex-start',
//     },
//     socialIcon: {
//       width: '40px',
//       height: '40px',
//       borderRadius: '8px',
//       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: '#FFFFFF',
//       textDecoration: 'none',
//       transition: 'all 0.3s ease',
//       fontSize: '1.2rem',
//     },
//     appBadges: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '0.8rem',
//       marginTop: '1rem',
//     },
//     appBadge: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '0.8rem',
//       backgroundColor: 'rgba(255, 255, 255, 0.1)',
//       padding: '0.8rem 1rem',
//       borderRadius: '8px',
//       color: '#FFFFFF',
//       textDecoration: 'none',
//       transition: 'all 0.3s ease',
//       fontSize: '0.9rem',
//     },
//     appIcon: {
//       fontSize: '1.3rem',
//     },
//     appText: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     appSmallText: {
//       fontSize: '0.7rem',
//     },
//     appLargeText: {
//       fontSize: '0.9rem',
//       fontWeight: 'bold',
//     },
//     contactInfo: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '0.8rem',
//     },
//     contactItem: {
//       color: '#F7D9EB',
//       fontSize: '0.9rem',
//       display: 'flex',
//       alignItems: 'flex-start',
//       gap: '0.5rem',
//     },
//     contactIcon: {
//       marginTop: '0.2rem',
//       minWidth: '16px',
//     },
//     footerBottom: {
//       borderTop: '1px solid rgba(255, 255, 255, 0.2)',
//       paddingTop: '2rem',
//       textAlign: 'center',
//     },
//     copyright: {
//       color: '#F7D9EB',
//       fontSize: '0.9rem',
//       marginBottom: '0.5rem',
//     },
//     madeWithLove: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: '0.3rem',
//       color: '#F7D9EB',
//       fontSize: '0.9rem',
//     },
//     heart: {
//       color: '#ff6b6b',
//     },
//   };

//   // Social Icon Component with better hover handling
//   const SocialIcon = ({ children, href, label, ...props }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//       <a
//         href={href}
//         aria-label={label}
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           ...styles.socialIcon,
//           backgroundColor: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.1)',
//           color: isHovered ? '#7C2A62' : '#FFFFFF',
//           transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
//         }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         {...props}
//       >
//         {children}
//       </a>
//     );
//   };

//   // Link Component with hover effects
//   const LinkButton = ({ children, onClick, ...props }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//       <button
//         style={{
//           ...styles.link,
//           color: isHovered ? '#FFFFFF' : '#F7D9EB',
//           transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
//         }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         onClick={onClick}
//         {...props}
//       >
//         {children}
//       </button>
//     );
//   };

//   // App Badge Component with hover effects
//   const AppBadge = ({ app, ...props }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//       <a
//         href={app.url}
//         style={{
//           ...styles.appBadge,
//           backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
//           transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
//         }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         {...props}
//       >
//         <span style={styles.appIcon}>{app.icon}</span>
//         <div style={styles.appText}>
//           <span style={styles.appSmallText}>{app.smallText}</span>
//           <span style={styles.appLargeText}>{app.largeText}</span>
//         </div>
//       </a>
//     );
//   };

//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         <div style={styles.footerContent}>
          
//           {/* Quick Links Section */}
//           <div style={styles.footerSection}>
//             <h4 style={styles.sectionTitle}>Quick Links</h4>
//             <div style={styles.linkList}>
//               {QUICK_LINKS.map((link, index) => (
//                 <LinkButton
//                   key={index}
//                   onClick={() => onSectionChange && onSectionChange(link.section)}
//                 >
//                   {link.label}
//                 </LinkButton>
//               ))}
//             </div>
//           </div>

//           {/* Legal & Social Section */}
//           <div style={styles.footerSection}>
//             <h4 style={styles.sectionTitle}>Legal</h4>
//             <div style={styles.linkList}>
//               {LEGAL_LINKS.map((link, index) => (
//                 <LinkButton key={index}>
//                   {link}
//                 </LinkButton>
//               ))}
//             </div>

//             {/* Social Links */}
//             <h4 style={{...styles.sectionTitle, marginTop: isMobile ? '1.5rem' : '2rem'}}>Follow Us</h4>
//             <div style={styles.socialLinks}>
//               {SOCIAL_LINKS.map((social, index) => (
//                 <SocialIcon
//                   key={index}
//                   href={social.url}
//                   label={social.label}
//                 >
//                   {social.icon}
//                 </SocialIcon>
//               ))}
//             </div>
//           </div>

//           {/* Download & Contact Section */}
//           <div style={styles.footerSection}>
//             <h4 style={styles.sectionTitle}>Download App</h4>
//             <p style={styles.description}>
//               Manage your health with ease! Download QuickMed today for easy access to medicine refills, health information, and more.
//             </p>

//             <div style={styles.appBadges}>
//               {APP_LINKS.map((app, index) => (
//                 <AppBadge key={index} app={app} />
//               ))}
//             </div>

//             <h4 style={{...styles.sectionTitle, marginTop: isMobile ? '1.5rem' : '2rem'}}>Contact Us</h4>
//             <div style={styles.contactInfo}>
//               <p style={styles.description}>
//                 Our customer support team is available 7 days a week from 8:00 AM – 10:00 PM.
//               </p>
//               <div style={styles.contactItem}>
//                 <span style={styles.contactIcon}>📧</span>
//                 <a 
//                   href="mailto:support@quickmed.com" 
//                   style={styles.link}
//                 >
//                   support@quickmed.com
//                 </a>
//               </div>
//               <div style={styles.contactItem}>
//                 <span style={styles.contactIcon}>📞</span>
//                 <a 
//                   href="tel:+91939246982" 
//                   style={styles.link}
//                 >
//                   +91 93924 6982
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div style={styles.footerBottom}>
//           <p style={styles.copyright}>
//             © 2025 QuickMed | All rights reserved. Our contents are for informational purposes only.
//           </p>
//           <div style={styles.madeWithLove}>
//             <span>Made with</span>
//             <span style={styles.heart}>❤️</span>
//             <span>for better healthcare</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState, useEffect } from 'react';

// Data constants
const QUICK_LINKS = [
  { label: 'Home', section: 'home' },
  { label: 'About Us', section: 'about' },
  { label: 'Services', section: 'services' },
  { label: 'Doctors', section: 'doctors' },
  { label: 'Contact', section: 'contact' }
];

const LEGAL_LINKS = [
  'Terms & Conditions',
  'Privacy Policy',
  'Editorial Policy',
  'Returns & Cancellations'
];

const SOCIAL_LINKS = [
  { 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ), 
    url: 'https://facebook.com/quickmed',
    label: 'Facebook'
  },
  { 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ), 
    url: 'https://twitter.com/quickmed',
    label: 'Twitter'
  },
  { 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ), 
    url: 'https://instagram.com/quickmed',
    label: 'Instagram'
  },
  { 
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ), 
    url: 'https://linkedin.com/company/quickmed',
    label: 'LinkedIn'
  }
];

const APP_LINKS = [

  {
    icon: '📱',
    smallText: 'Download on the',
    largeText: 'App Store',
    url: 'https://apps.apple.com/app/quickmed-healthcare/id123456789'
  }
];

const Footer = ({ onSectionChange }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width <= 1024 && width > 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const styles = {
    footer: {
      backgroundColor: '#7C2A62',
      color: 'white',
      padding: isMobile ? '2rem 1rem 1rem' : '3rem 2rem 1rem',
      fontFamily: 'Arial, sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      marginBottom: '2rem',
    },
    footerSection: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: isMobile ? 'left' : 'left',
    },
    sectionTitle: {
      fontSize: '1.1rem',
      marginBottom: '1.5rem',
      color: '#FFFFFF',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
    },
    link: {
      color: '#F7D9EB',
      textDecoration: 'none',
      fontSize: '0.9rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      textAlign: 'left',
      padding: 0,
    },
    description: {
      color: '#F7D9EB',
      fontSize: '0.9rem',
      lineHeight: '1.5',
      marginBottom: '1rem',
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '0.5rem',
      justifyContent: isMobile ? 'flex-start' : 'flex-start',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontSize: '1.2rem',
    },
    appBadges: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
      marginTop: '1rem',
    },
    appBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '0.8rem 1rem',
      borderRadius: '8px',
      color: '#FFFFFF',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontSize: '0.9rem',
    },
    appIcon: {
      fontSize: '1.3rem',
    },
    appText: {
      display: 'flex',
      flexDirection: 'column',
    },
    appSmallText: {
      fontSize: '0.7rem',
    },
    appLargeText: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
    },
    contactItem: {
      color: '#F7D9EB',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem',
    },
    contactIcon: {
      marginTop: '0.2rem',
      minWidth: '16px',
    },
    footerBottom: {
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      paddingTop: '2rem',
      textAlign: 'center',
    },
    copyright: {
      color: '#F7D9EB',
      fontSize: '0.9rem',
      marginBottom: '0.5rem',
    },
    madeWithLove: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.3rem',
      color: '#F7D9EB',
      fontSize: '0.9rem',
    },
    heart: {
      color: '#ff6b6b',
    },
  };

  // Social Icon Component with better hover handling
  const SocialIcon = ({ children, href, label, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...styles.socialIcon,
          backgroundColor: isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.1)',
          color: isHovered ? '#7C2A62' : '#FFFFFF',
          transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {children}
      </a>
    );
  };

  // Link Component with hover effects
  const LinkButton = ({ children, onClick, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <button
        style={{
          ...styles.link,
          color: isHovered ? '#FFFFFF' : '#F7D9EB',
          transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };

  // App Badge Component with hover effects - UPDATED to open app stores
  const AppBadge = ({ app, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...styles.appBadge,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <span style={styles.appIcon}>{app.icon}</span>
        <div style={styles.appText}>
          <span style={styles.appSmallText}>{app.smallText}</span>
          <span style={styles.appLargeText}>{app.largeText}</span>
        </div>
      </a>
    );
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          
          {/* Quick Links Section */}
          <div style={styles.footerSection}>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <div style={styles.linkList}>
              {QUICK_LINKS.map((link, index) => (
                <LinkButton
                  key={index}
                  onClick={() => onSectionChange && onSectionChange(link.section)}
                >
                  {link.label}
                </LinkButton>
              ))}
            </div>
          </div>

          {/* Legal & Social Section */}
          <div style={styles.footerSection}>
            <h4 style={styles.sectionTitle}>Legal</h4>
            <div style={styles.linkList}>
              {LEGAL_LINKS.map((link, index) => (
                <LinkButton key={index}>
                  {link}
                </LinkButton>
              ))}
            </div>

            {/* Social Links */}
            <h4 style={{...styles.sectionTitle, marginTop: isMobile ? '1.5rem' : '2rem'}}>Follow Us</h4>
            <div style={styles.socialLinks}>
              {SOCIAL_LINKS.map((social, index) => (
                <SocialIcon
                  key={index}
                  href={social.url}
                  label={social.label}
                >
                  {social.icon}
                </SocialIcon>
              ))}
            </div>
          </div>

          {/* Download & Contact Section */}
          <div style={styles.footerSection}>
            <h4 style={styles.sectionTitle}>Download App</h4>
            <p style={styles.description}>
              Manage your health with ease! Download QuickMed today for easy access to medicine refills, health information, and more.
            </p>

            <div style={styles.appBadges}>
              {APP_LINKS.map((app, index) => (
                <AppBadge key={index} app={app} />
              ))}
            </div>

            <h4 style={{...styles.sectionTitle, marginTop: isMobile ? '1.5rem' : '2rem'}}>Contact Us</h4>
            <div style={styles.contactInfo}>
              <p style={styles.description}>
                Our customer support team is available 7 days a week from 8:00 AM – 10:00 PM.
              </p>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📧</span>
                <a 
                  href="mailto:support@quickmed.com" 
                  style={styles.link}
                >
                  support@quickmed.com
                </a>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📞</span>
                <a 
                  href="tel:+919392416962" 
                  style={styles.link}
                >
                  +91 93924 16962
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>
            © 2025 QuickMed | All rights reserved. Our contents are for informational purposes only.
          </p>
          <div style={styles.madeWithLove}>
            <span>Made with</span>
            <span style={styles.heart}>❤️</span>
            <span>for better healthcare</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;