// Styles.js - Complete Integrated Styles with Mobile Header and Hamburger Menu

const styles = {
  // Global Container with responsive padding
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    overflowX: 'hidden',
    '@media (max-width: 768px)': {
      padding: '0',
    },
  },

  // Header with primary color
  header: {
    backgroundColor: '#7C2A62',
    color: 'white',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(124, 42, 98, 0.3)',
    '@media (max-width: 768px)': {
      position: 'fixed',
      width: '100%',
    },
  },

  // Updated headerTop for mobile hamburger layout
  headerTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem 2rem',
    gap: '2rem',
    maxWidth: '100%',
    flexWrap: 'nowrap',
    '@media (max-width: 1024px)': {
      padding: '0.75rem 1rem',
      gap: '1rem',
    },
    '@media (max-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '1rem',
      padding: '0.5rem',
    },
  },

  // Hide the combined section on mobile (replaced by hamburger menu)
  combinedSection: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    margin: '0 20px',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },

  // Logo Section - Adjusted for mobile
  logoSection: {
    flexShrink: 0,
    minWidth: '150px',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      flex: 1,
    },
  },

  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    '@media (max-width: 768px)': {
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  },

  logo: {
    margin: 0,
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 1,
    background: 'linear-gradient(135deg, #fff, #F7D9EB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.25rem',
    },
  },

  logoSubtitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginTop: '0.2rem',
    '@media (max-width: 768px)': {
      justifyContent: 'flex-start',
    },
    '@media (max-width: 480px)': {
      flexDirection: 'row',
      gap: '0.5rem',
    },
  },

  subtitleText: {
    fontSize: '0.8rem',
    color: '#F7D9EB',
    fontStyle: 'italic',
    opacity: 0.9,
    fontWeight: '500',
    '@media (max-width: 480px)': {
      fontSize: '0.75rem',
    },
  },

  // Navigation Section - Hidden on mobile (moved to hamburger menu)
  navSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    minWidth: '300px',
    '@media (max-width: 768px)': {
      display: 'none',
      order: 2,
      minWidth: 'auto',
    },
  },

  // Updated nav for better spacing in new layout
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
    },
    '@media (max-width: 480px)': {
      gap: '0.25rem',
    },
  },

  navButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1rem',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.8)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
    },
    '@media (max-width: 768px)': {
      padding: '0.5rem 1rem',
      fontSize: '0.85rem',
      flex: '1 1 auto',
      minWidth: '120px',
      justifyContent: 'center',
    },
    '@media (max-width: 480px)': {
      padding: '0.4rem 0.75rem',
      fontSize: '0.8rem',
      minWidth: '100px',
    },
  },

  activeNavButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },

  navIcon: {
    fontSize: '1.1rem',
    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },

  navText: {
    '@media (max-width: 480px)': {
      display: 'none',
    },
  },

  // Combined Right Section
  headerRightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    flexShrink: 0,
    marginLeft: 'auto',
    '@media (max-width: 1024px)': {
      gap: '1rem',
    },
    '@media (max-width: 768px)': {
      width: 'auto',
      justifyContent: 'flex-end',
      order: 2,
      gap: '0.75rem',
    },
  },

  // Icons Group
  iconsGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    paddingRight: '1rem',
    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
    '@media (max-width: 768px)': {
      gap: '0.5rem',
      paddingRight: '0.75rem',
    },
    '@media (max-width: 480px)': {
      gap: '0.25rem',
    },
  },

  // Header Actions - Keep only essential items visible on mobile
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    '@media (max-width: 768px)': {
      gap: '0.5rem',
    },
  },

  // Chatbot Icon
  chatbotIconContainer: {
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(247, 217, 235, 0.1)',
    },
  },

  chatbotIcon: {
    fontSize: '1.3rem',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Cart Icon
  cartIconContainer: {
    cursor: 'pointer',
    position: 'relative',
    padding: '0.5rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(247, 217, 235, 0.1)',
    },
  },

  cartIcon: {
    fontSize: '1.3rem',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  cartBadge: {
    position: 'absolute',
    top: '-2px',
    right: '-2px',
    backgroundColor: '#FF6B6B',
    color: 'white',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    fontSize: '0.7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    border: '2px solid #7C2A62',
  },

  // Notification Styles
  notificationContainer: {
    position: 'relative',
  },

  notificationBell: {
    cursor: 'pointer',
    fontSize: '1.3rem',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '0.5rem',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(247, 217, 235, 0.1)',
    },
  },

  notificationBadge: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    backgroundColor: '#FF6B6B',
    color: 'white',
    borderRadius: '50%',
    width: '16px',
    height: '16px',
    fontSize: '0.6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    border: '2px solid #7C2A62',
  },

  notificationDropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    width: '350px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    zIndex: 1001,
    maxHeight: '400px',
    overflowY: 'auto',
    marginTop: '0.5rem',
    '@media (max-width: 480px)': {
      width: '300px',
      right: '-50px',
    },
  },

  notificationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 1.5rem',
    borderBottom: '1px solid #f0f0f0',
    backgroundColor: '#f8f9fa',
  },

  notificationTitle: {
    margin: 0,
    color: '#7C2A62',
    fontSize: '1.1rem',
    fontWeight: '600',
  },

  markAllReadButton: {
    background: 'none',
    border: 'none',
    color: '#7C2A62',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    textDecoration: 'underline',
  },

  notificationList: {
    maxHeight: '300px',
    overflowY: 'auto',
  },

  notificationItem: {
    display: 'flex',
    padding: '1rem 1.5rem',
    borderBottom: '1px solid #f0f0f0',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    gap: '1rem',
  },

  unreadNotification: {
    backgroundColor: '#f8f5ff',
  },

  readNotification: {
    backgroundColor: 'white',
  },

  notificationIcon: {
    fontSize: '1.2rem',
    width: '24px',
    textAlign: 'center',
    flexShrink: 0,
  },

  notificationContent: {
    flex: 1,
  },

  notificationItemTitle: {
    margin: '0 0 0.25rem 0',
    fontSize: '0.95rem',
    fontWeight: '600',
    color: '#333',
  },

  notificationMessage: {
    margin: '0 0 0.5rem 0',
    fontSize: '0.85rem',
    color: '#666',
    lineHeight: '1.4',
  },

  notificationTime: {
    fontSize: '0.75rem',
    color: '#999',
  },

  noNotifications: {
    textAlign: 'center',
    padding: '2rem',
    color: '#666',
    margin: 0,
  },

  // User Section - Keep avatar visible, hide welcome text on mobile
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flexShrink: 0,
    '@media (max-width: 768px)': {
      gap: '0.75rem',
    },
  },

  userWelcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    '@media (max-width: 480px)': {
      display: 'none',
    },
  },

  welcomeText: {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.8)',
    '@media (max-width: 480px)': {
      fontSize: '0.7rem',
    },
  },

  userName: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'white',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
    },
  },

  userAvatarContainer: {
    position: 'relative',
    cursor: 'pointer',
  },

  userAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#F7D9EB',
    color: '#7C2A62',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    '&:hover': {
      borderColor: '#F7D9EB',
      transform: 'scale(1.05)',
    },
    '@media (max-width: 480px)': {
      width: '35px',
      height: '35px',
      fontSize: '0.9rem',
    },
  },

  avatarImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  // Logout Button
  logoutButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.9rem',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '@media (max-width: 480px)': {
      padding: '0.5rem 0.75rem',
      fontSize: '0.8rem',
    },
  },

  logoutIcon: {
    fontSize: '1rem',
  },

  logoutText: {
    '@media (max-width: 480px)': {
      display: 'none',
    },
  },

  // ========== HAMBURGER MENU STYLES ==========
  
  // Hamburger Menu Button - Visible only on mobile
  hamburgerMenuButton: {
    display: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '4px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },

  hamburgerLine: {
    width: '20px',
    height: '2px',
    backgroundColor: 'white',
    margin: '2px 0',
    transition: 'all 0.3s ease',
  },

  // Mobile Menu Overlay
  mobileMenuOverlay: {
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1998,
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },

  // Mobile Menu Sidebar
  mobileMenuSidebar: {
    position: 'fixed',
    top: 0,
    left: '-100%',
    width: '280px',
    height: '100vh',
    backgroundColor: '#7C2A62',
    zIndex: 1999,
    transition: 'left 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    '@media (max-width: 768px)': {
      // Left position controlled by JavaScript
    },
  },

  mobileMenuSidebarOpen: {
    left: '0',
  },

  // Mobile Menu Header
  mobileMenuHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: '#6a2355',
  },

  mobileMenuTitle: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '600',
    margin: 0,
  },

  closeMobileMenu: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.25rem',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
  },

  // Mobile User Info Section
  mobileUserSection: {
    padding: '1.5rem 1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },

  mobileUserAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#F7D9EB',
    color: '#7C2A62',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    border: '2px solid rgba(255, 255, 255, 0.3)',
  },

  mobileUserInfo: {
    flex: 1,
  },

  mobileWelcomeText: {
    fontSize: '0.8rem',
    opacity: 0.8,
    color: 'white',
    margin: '0 0 0.25rem 0',
  },

  mobileUserName: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'white',
    margin: 0,
  },

  // Mobile Navigation Items
  mobileNavItems: {
    flex: 1,
    padding: '1rem 0',
  },

  mobileNavItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem 1.5rem',
    color: 'white',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    border: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '1rem',
  },

  mobileNavItemActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRight: '3px solid #F7D9EB',
  },

  mobileNavIcon: {
    fontSize: '1.2rem',
    width: '24px',
    textAlign: 'center',
  },

  mobileNavText: {
    flex: 1,
  },

  // Mobile Menu Footer
  mobileMenuFooter: {
    padding: '1rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },

  mobileCartInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    marginBottom: '1rem',
  },

  mobileNotificationInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    marginBottom: '1rem',
  },

  // Profile Dropdown with Responsiveness
  profileDropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    width: '300px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    zIndex: 2000,
    marginTop: '0.5rem',
    overflow: 'hidden',
    '@media (max-width: 480px)': {
      width: '280px',
      right: '50%',
      transform: 'translateX(50%)',
    },
  },

  profileDropdownHeader: {
    padding: '1rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    '@media (max-width: 480px)': {
      padding: '0.75rem 1rem',
    },
  },

  profileDropdownTitle: {
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: '600',
    '@media (max-width: 480px)': {
      fontSize: '1rem',
    },
  },

  profileDropdownContent: {
    padding: '1rem 1.5rem',
    borderBottom: '1px solid #f0f0f0',
    '@media (max-width: 480px)': {
      padding: '0.75rem 1rem',
    },
  },

  profileDetailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f8f8f8',
  },

  profileDetailLabel: {
    color: '#666',
    fontSize: '0.9rem',
    fontWeight: '500',
  },

  profileDetailValue: {
    color: '#333',
    fontSize: '0.9rem',
    fontWeight: '600',
  },

  profileDropdownActions: {
    padding: '1rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    '@media (max-width: 480px)': {
      padding: '0.75rem 1rem',
    },
  },

  viewProfileButton: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#6a2355',
    },
  },

  uploadPhotoButton: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#45a049',
    },
  },

  // Profile Photo Styles
  profilePhotoModal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    maxWidth: '500px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
      borderRadius: '15px 15px 0 0',
      maxHeight: '90vh',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  profilePhotoHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #F7D9EB',
    paddingBottom: '1rem',
  },

  profilePhotoPreviewSection: {
    border: '2px dashed #F7D9EB',
    borderRadius: '10px',
    padding: '2rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profilePhotoImageContainer: {
    width: '100%',
    maxHeight: '300px',
    overflow: 'hidden',
    borderRadius: '8px',
  },

  profilePhotoImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '300px',
    objectFit: 'contain',
  },

  profilePhotoRequirements: {
    backgroundColor: '#f8f5ff',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    border: '1px solid #F7D9EB',
  },

  removePhotoButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#FF6B6B',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  profilePhotoSection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    textAlign: 'center',
  },

  profilePhotoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },

  profilePhotoPreview: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#F7D9EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    border: '4px solid #7C2A62',
  },

  profilePhotoPlaceholder: {
    fontSize: '3rem',
    color: '#7C2A62',
    fontWeight: 'bold',
  },

  profilePhotoActions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  // Phone Input Styles
  phoneInputContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #F7D9EB',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: 'white',
    transition: 'border-color 0.3s ease',
  },

  phonePrefix: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem',
    backgroundColor: '#f8f5ff',
    borderRight: '1px solid #F7D9EB',
    fontWeight: '600',
    color: '#7C2A62',
    fontSize: '0.9rem',
  },

  indianFlag: {
    fontSize: '1.1rem',
  },

  countryCode: {
    fontSize: '0.9rem',
  },

  phoneInput: {
    flex: 1,
    padding: '0.75rem',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
  },

  phoneValidationMessage: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '0.25rem',
    fontSize: '0.8rem',
    color: '#4CAF50',
  },

  validPhoneIcon: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },

  validPhoneText: {
    color: '#4CAF50',
    fontSize: '0.8rem',
  },

  // Form Styles
  formActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end',
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '2px solid #F7D9EB',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
    },
  },

  updateButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
  },

  updateButtonDisabled: {
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
  },

  nonEditableField: {
    backgroundColor: '#f5f5f5',
    color: '#666',
    cursor: 'not-allowed',
    borderColor: '#ddd',
  },

  fieldNote: {
    color: '#666',
    fontSize: '0.8rem',
    marginTop: '0.25rem',
    fontStyle: 'italic',
  },

  // Address Form Styles
  addressForm: {
    marginBottom: '20px',
    padding: '16px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
  },

  addressFormTitle: {
    margin: '0 0 16px 0',
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
  },

  addressFormGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
    },
  },

  addressInput: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    gridColumn: 'span 1',
  },

  addressInputFull: {
    gridColumn: 'span 2',
    '@media (max-width: 480px)': {
      gridColumn: 'span 1',
    },
  },

  // Icons and Badges
  goldenStars: {
    color: '#FFD700',
    fontSize: '1.1rem',
  },

  uploadIcon: {
    marginRight: '0.5rem',
    fontSize: '1rem',
  },

  // Main Content Styles with Responsiveness - Updated for new header height
  mainContent: {
    marginTop: '120px',
    padding: '2rem',
    '@media (max-width: 768px)': {
      marginTop: '0',
      padding: '1rem',
    },
    '@media (max-width: 480px)': {
      padding: '0.75rem',
    },
  },

  welcomeSection: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: '15px',
    marginBottom: '2rem',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
      marginBottom: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
      marginBottom: '1rem',
    },
  },

  welcomeTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#7C2A62',
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.75rem',
      marginBottom: '0.75rem',
    },
  },

  welcomeSubtitle: {
    fontSize: '1.2rem',
    color: '#666',
    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1rem',
    },
  },

  // Services Section with Responsiveness
  servicesSection: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '1rem',
    },
  },

  serviceCard: {
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '2px solid transparent',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  serviceIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    '@media (max-width: 480px)': {
      fontSize: '2.5rem',
    },
  },

  serviceTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#7C2A62',
    '@media (max-width: 768px)': {
      fontSize: '1.3rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem',
    },
  },

  serviceDescription: {
    color: '#666',
    marginBottom: '1.5rem',
    lineHeight: '1.5',
    '@media (max-width: 480px)': {
      fontSize: '0.9rem',
      marginBottom: '1rem',
    },
  },

  serviceButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    '@media (max-width: 480px)': {
      padding: '0.6rem 1.2rem',
      fontSize: '0.85rem',
    },
  },

  // Medicine Page with Responsiveness - Updated for new header height
  medicineLayout: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '120px auto 0',
    minHeight: 'calc(100vh - 120px)',
    '@media (max-width: 768px)': {
      margin: '0 auto',
      padding: '1rem',
    },
    '@media (max-width: 480px)': {
      padding: '0.75rem',
    },
  },

  fullWidthContent: {
    width: '100%',
  },

  searchSection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '1.5rem',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
      marginBottom: '1rem',
    },
  },

  searchContainer: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '1rem',
    },
  },

  searchInput: {
    flex: 1,
    padding: '1rem',
    border: '2px solid #F7D9EB',
    borderRadius: '10px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    '@media (max-width: 480px)': {
      padding: '0.75rem',
      fontSize: '0.9rem',
    },
  },

  searchButton: {
    padding: '1rem 2rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    '@media (max-width: 768px)': {
      padding: '0.75rem 1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '0.75rem 1rem',
      fontSize: '0.9rem',
    },
  },

  // Prescription Upload Styles
  prescriptionUploadLabel: {
    padding: '1rem 1.5rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },

  // Products Section with Responsiveness
  productsSection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '1.5rem',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
      marginBottom: '1rem',
    },
  },

  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1rem',
    },
  },

  sectionTitle: {
    color: '#7C2A62',
    fontSize: '1.5rem',
    margin: 0,
    '@media (max-width: 768px)': {
      fontSize: '1.3rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.1rem',
    },
  },

  resultsCount: {
    color: '#666',
    fontSize: '0.9rem',
  },

  sectionSubtitle: {
    color: '#666',
    fontSize: '0.9rem',
    margin: 0,
  },

  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1rem',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '1rem',
    },
  },

  productCard: {
    border: '2px solid #F7D9EB',
    borderRadius: '12px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  productInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  productName: {
    margin: '0 0 0.5rem 0',
    color: '#7C2A62',
    fontSize: '1.1rem',
    fontWeight: '600',
    '@media (max-width: 480px)': {
      fontSize: '1rem',
    },
  },

  productVendor: {
    margin: '0 0 0.5rem 0',
    color: '#666',
    fontSize: '0.9rem',
  },

  productCategory: {
    marginBottom: '1rem',
  },

  categoryBadge: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#F7D9EB',
    color: '#7C2A62',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '500',
  },

  productFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'stretch',
    },
  },

  productPrice: {
    color: '#7C2A62',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    margin: 0,
    '@media (max-width: 480px)': {
      textAlign: 'center',
    },
  },

  addToCartButton: {
    padding: '0.75rem 1rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    '@media (max-width: 480px)': {
      padding: '0.6rem 0.8rem',
      fontSize: '0.85rem',
    },
  },

  // Quantity Controls with Responsiveness
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  quantityButton: {
    width: '32px',
    height: '32px',
    border: '1px solid #7C2A62',
    backgroundColor: 'transparent',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
    '@media (max-width: 480px)': {
      width: '28px',
      height: '28px',
      fontSize: '0.9rem',
    },
  },

  quantity: {
    padding: '0 0.5rem',
    fontWeight: '600',
    minWidth: '30px',
    textAlign: 'center',
  },

  // Pharmacies Section with Responsiveness
  pharmaciesSection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  pharmaciesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '1rem',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '1rem',
    },
  },

  pharmacyCard: {
    border: '2px solid #F7D9EB',
    borderRadius: '12px',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  pharmacyHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },

  pharmacyIcon: {
    fontSize: '2rem',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7D9EB',
    borderRadius: '10px',
  },

  pharmacyInfo: {
    flex: 1,
  },

  pharmacyName: {
    margin: '0 0 0.25rem 0',
    color: '#7C2A62',
    fontSize: '1.1rem',
    fontWeight: '600',
  },

  pharmacyRating: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },

  pharmacyDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },

  pharmacyDetailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  pharmacyDetailLabel: {
    color: '#666',
    fontSize: '0.9rem',
    fontWeight: '500',
  },

  pharmacyDetailValue: {
    color: '#333',
    fontSize: '0.9rem',
    fontWeight: '600',
  },

  feeValue: {
    color: '#7C2A62',
    fontWeight: 'bold',
    fontSize: '1rem',
  },

  viewButton: {
    padding: '0.75rem 1rem',
    border: '1px solid #7C2A62',
    backgroundColor: 'transparent',
    color: '#7C2A62',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
    marginTop: '0.5rem',
  },

  // Enhanced View Store Button Styles with Responsiveness
  viewStoreButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#7C2A62',
    border: '2px solid #7C2A62',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    marginTop: '1rem',
    width: '100%',
    textTransform: 'none',
    letterSpacing: '0.5px',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#7C2A62',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 15px rgba(124, 42, 98, 0.4)'
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '0 2px 5px rgba(124, 42, 98, 0.3)'
    },
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 3px rgba(124, 42, 98, 0.3)'
    },
    '&:disabled': {
      backgroundColor: '#cccccc',
      borderColor: '#cccccc',
      color: '#666666',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#cccccc',
        color: '#666666',
        transform: 'none',
        boxShadow: 'none'
      }
    },
    '@media (max-width: 480px)': {
      padding: '0.6rem 1.2rem',
      fontSize: '0.85rem',
    },
  },

  // Pharmacy Search
  pharmacySearchContainer: {
    margin: '0.5rem 0',
  },

  pharmacySearchInputSmall: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #F7D9EB',
    borderRadius: '8px',
    fontSize: '0.9rem',
  },

  pharmacySearchSection: {
    marginBottom: '1.5rem',
  },

  pharmacySearchInput: {
    width: '100%',
    padding: '1rem',
    border: '2px solid #F7D9EB',
    borderRadius: '10px',
    fontSize: '1rem',
  },

  // Cart Page with Responsiveness - Updated for new header height
  cartPageContainer: {
    marginTop: '120px',
    padding: '2rem',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 768px)': {
      marginTop: '0',
      padding: '1rem',
    },
  },

  cartPageContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem',
    alignItems: 'start',
    '@media (max-width: 968px)': {
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
    },
  },

  cartItemsSection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  cartSummarySection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: '160px',
    '@media (max-width: 968px)': {
      position: 'relative',
      top: '0',
    },
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  summaryCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  summaryTitle: {
    color: '#7C2A62',
    fontSize: '1.3rem',
    margin: 0,
  },

  summaryDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #f0f0f0',
  },

  grandTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '2px solid #7C2A62',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#7C2A62',
  },

  freeDelivery: {
    color: '#28a745',
    fontWeight: '600',
  },

  // Cart Items with Responsiveness
  cartHeader: {
    borderBottom: '2px solid #F7D9EB',
    paddingBottom: '1rem',
    marginBottom: '1rem',
  },

  cartTitle: {
    margin: '0 0 0.25rem 0',
    color: '#7C2A62',
    fontSize: '1.3rem',
  },

  cartSubtitle: {
    margin: 0,
    color: '#666',
    fontSize: '0.9rem',
  },

  cartItems: {
    marginBottom: '2rem',
  },

  cartItemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  emptyCart: {
    textAlign: 'center',
    padding: '3rem 1rem',
    color: '#666',
  },

  emptyCartIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },

  emptyCartText: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.3rem',
    fontWeight: '600',
  },

  emptyCartSubtext: {
    margin: '0 0 2rem 0',
    fontSize: '1rem',
  },

  cartItem: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr auto',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    border: '1px solid #F7D9EB',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
      gap: '0.5rem',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      textAlign: 'center',
    },
  },

  cartItemInfo: {
    display: 'flex',
    flexDirection: 'column',
  },

  cartItemName: {
    margin: '0 0 0.25rem 0',
    fontSize: '1rem',
    color: '#7C2A62',
    fontWeight: '600',
  },

  cartItemVendor: {
    margin: '0 0 0.25rem 0',
    fontSize: '0.8rem',
    color: '#666',
  },

  cartItemPrice: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#7C2A62',
  },

  itemTotal: {
    fontWeight: 'bold',
    color: '#7C2A62',
    fontSize: '1rem',
    textAlign: 'center',
  },

  removeButton: {
    width: '32px',
    height: '32px',
    border: 'none',
    backgroundColor: '#ff4444',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkoutButtonLarge: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },

  shopNowButton: {
    padding: '1rem 2rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
  },

  // Orders Page - Updated for new header height
  ordersContainer: {
    marginTop: '120px',
    padding: '2rem',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 768px)': {
      marginTop: '0',
      padding: '1rem',
    },
  },

  ordersList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  orderCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '2rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  orderHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '1rem',
    },
  },

  orderId: {
    margin: '0 0 0.5rem 0',
    color: '#7C2A62',
    fontSize: '1.2rem',
  },

  orderDate: {
    margin: '0 0 0.25rem 0',
    color: '#666',
    fontSize: '0.9rem',
  },

  paymentId: {
    margin: 0,
    color: '#666',
    fontSize: '0.8rem',
    fontFamily: 'monospace',
  },

  orderStatus: {
    textAlign: 'right',
    '@media (max-width: 768px)': {
      textAlign: 'left',
    },
  },

  statusBadge: {
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: '600',
  },

  orderItems: {
    marginBottom: '1.5rem',
  },

  orderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 0',
    borderBottom: '1px solid #F7D9EB',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.5rem',
    },
  },

  itemName: {
    flex: 2,
    color: '#333',
  },

  itemQuantity: {
    flex: 1,
    color: '#666',
    textAlign: 'center',
    '@media (max-width: 480px)': {
      textAlign: 'left',
    },
  },

  itemPrice: {
    flex: 1,
    color: '#7C2A62',
    fontWeight: '600',
    textAlign: 'right',
    '@media (max-width: 480px)': {
      textAlign: 'left',
    },
  },

  orderFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '2px solid #F7D9EB',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'flex-start',
    },
  },

  orderAddress: {
    color: '#666',
    fontSize: '0.9rem',
  },

  orderTotal: {
    color: '#7C2A62',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },

  orderActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  trackButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
  },

  noOrders: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },

  noOrdersText: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '1.5rem',
  },

  // Profile Page with Responsiveness - Updated for new header height
  profileContainer: {
    marginTop: '120px',
    padding: '2rem',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 768px)': {
      marginTop: '0',
      padding: '1rem',
    },
  },

  profileHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '2rem',
  },

  editProfileButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
  },

  profileForm: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '1rem',
    },
  },

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },

  formLabel: {
    marginBottom: '0.5rem',
    color: '#7C2A62',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  formInput: {
    padding: '0.75rem',
    border: '2px solid #F7D9EB',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
    cursor: 'text',
  },

  formInputError: {
    borderColor: '#FF6B6B !important',
  },

  formError: {
    color: '#FF6B6B',
    fontSize: '0.8rem',
    marginTop: '0.25rem',
  },

  formTextarea: {
    padding: '0.75rem',
    border: '2px solid #F7D9EB',
    borderRadius: '8px',
    fontSize: '1rem',
    resize: 'vertical',
    minHeight: '80px',
    fontFamily: 'inherit',
    cursor: 'text',
  },

  formNote: {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f8f5ff',
    borderRadius: '8px',
    border: '1px solid #F7D9EB',
  },

  noteText: {
    margin: 0,
    color: '#666',
    fontSize: '0.9rem',
  },

  // Consultation Page with Responsiveness - Updated for new header height
  consultationContainer: {
    marginTop: '120px',
    padding: '2rem',
    maxWidth: '1400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 768px)': {
      marginTop: '0',
      padding: '1rem',
    },
  },

  consultationHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },

  consultationSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    marginTop: '0.5rem',
  },

  consultationLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gap: '2rem',
    alignItems: 'start',
    '@media (max-width: 968px)': {
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
    },
  },

  filterPanel: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    height: 'fit-content',
    position: 'sticky',
    top: '160px',
    '@media (max-width: 968px)': {
      position: 'relative',
      top: '0',
    },
  },

  filterTitle: {
    color: '#7C2A62',
    marginBottom: '1.5rem',
    fontSize: '1.2rem',
    fontWeight: '600',
  },

  filterGroup: {
    marginBottom: '1.5rem',
  },

  filterLabel: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#7C2A62',
    fontWeight: '500',
    fontSize: '0.9rem',
  },

  filterSelect: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #F7D9EB',
    borderRadius: '8px',
    backgroundColor: 'white',
    fontSize: '0.9rem',
  },

  clearFiltersButton: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: 'transparent',
    color: '#7C2A62',
    border: '2px solid #7C2A62',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    marginTop: '1rem',
  },

  doctorsList: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  doctorsTitle: {
    color: '#7C2A62',
    marginBottom: '1.5rem',
    fontSize: '1.3rem',
  },

  noDoctors: {
    textAlign: 'center',
    padding: '3rem',
    color: '#666',
  },

  doctorsGrid: {
    display: 'grid',
    gap: '1.5rem',
  },

  doctorCard: {
    border: '2px solid #F7D9EB',
    borderRadius: '12px',
    padding: '1.5rem',
    transition: 'all 0.3s ease',
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  doctorHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },

  doctorImage: {
    fontSize: '3rem',
  },

  doctorBasicInfo: {
    flex: 1,
  },

  doctorName: {
    margin: '0 0 0.5rem 0',
    color: '#7C2A62',
    fontSize: '1.2rem',
  },

  doctorSpecialty: {
    margin: '0 0 0.5rem 0',
    color: '#666',
    fontSize: '0.9rem',
  },

  doctorRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  ratingText: {
    color: '#666',
    fontSize: '0.9rem',
  },

  doctorDetails: {
    marginBottom: '1rem',
  },

  doctorDetailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f0f0f0',
  },

  doctorDetailLabel: {
    color: '#666',
    fontSize: '0.9rem',
  },

  doctorDetailValue: {
    color: '#333',
    fontSize: '0.9rem',
  },

  doctorActions: {
    display: 'flex',
    gap: '1rem',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      gap: '0.5rem',
    },
  },

  bookButton: {
    flex: 2,
    padding: '0.75rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  messageButton: {
    flex: 1,
    padding: '0.75rem 1rem',
    backgroundColor: 'transparent',
    color: '#7C2A62',
    border: '2px solid #7C2A62',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  // Filter Tabs
  filterTabs: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },

  filterTab: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'white',
    color: '#7C2A62',
    border: '2px solid #F7D9EB',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.3s ease',
  },

  activeFilterTab: {
    backgroundColor: '#7C2A62',
    color: 'white',
    borderColor: '#7C2A62',
  },

  // Appointments - Updated for new header height
  appointmentsContainer: {
    marginTop: '120px',
    padding: '2rem',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 768px)': {
      marginTop: '0',
      padding: '1rem',
    },
  },

  appointmentsHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '2rem',
  },

  newAppointmentButton: {
    padding: '1rem 2rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
  },

  appointmentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  appointmentCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '2rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  appointmentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '1rem',
    },
  },

  appointmentId: {
    margin: '0 0 0.5rem 0',
    color: '#7C2A62',
    fontSize: '1.2rem',
  },

  appointmentDoctor: {
    margin: '0 0 0.25rem 0',
    color: '#333',
    fontSize: '1.1rem',
    fontWeight: '600',
  },

  appointmentSpecialty: {
    margin: 0,
    color: '#666',
    fontSize: '0.9rem',
  },

  appointmentDetails: {
    marginBottom: '1.5rem',
  },

  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f0f0f0',
  },

  appointmentActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
    },
  },

  rescheduleButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#FF9800',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },

  cancelAppointmentButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#FF6B6B',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },

  viewDetailsButton: {
    padding: '0.5rem 1rem',
    backgroundColor: 'transparent',
    color: '#7C2A62',
    border: '1px solid #7C2A62',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },

  noAppointments: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },

  noAppointmentsText: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '1.5rem',
  },

  bookAppointmentButton: {
    padding: '1rem 2rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
  },

  // Modal Styles with Responsiveness
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
    padding: '1rem',
    '@media (max-width: 768px)': {
      alignItems: 'flex-end',
    },
  },

  confirmationModal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    maxWidth: '500px',
    width: '90%',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
      borderRadius: '15px 15px 0 0',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  confirmationTitle: {
    color: '#7C2A62',
    marginBottom: '1rem',
    fontSize: '1.5rem',
    textAlign: 'center',
  },

  confirmationText: {
    color: '#666',
    marginBottom: '1.5rem',
    textAlign: 'center',
    lineHeight: '1.5',
  },

  confirmationItems: {
    marginBottom: '1.5rem',
    maxHeight: '200px',
    overflowY: 'auto',
  },

  confirmationItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f0f0f0',
  },

  confirmationActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
    },
  },

  cancelButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#7C2A62',
    border: '2px solid #7C2A62',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  confirmButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  // Prescription Modal
  prescriptionModal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
      borderRadius: '15px 15px 0 0',
      maxHeight: '90vh',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  prescriptionPreview: {
    border: '2px dashed #F7D9EB',
    borderRadius: '10px',
    padding: '2rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  prescriptionImageContainer: {
    position: 'relative',
    width: '100%',
    maxHeight: '300px',
    overflow: 'hidden',
    borderRadius: '8px',
  },

  prescriptionImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '300px',
    objectFit: 'contain',
  },

  fileInfoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },

  fileInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    justifyContent: 'center',
  },

  fileIcon: {
    fontSize: '2rem',
  },

  fileName: {
    margin: '0 0 0.25rem 0',
    fontWeight: '600',
    color: '#333',
  },

  fileSize: {
    margin: 0,
    color: '#666',
    fontSize: '0.9rem',
  },

  uploadPrompt: {
    textAlign: 'center',
  },

  uploadIconLarge: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#7C2A62',
  },

  uploadText: {
    margin: '0 0 0.5rem 0',
    color: '#666',
    fontSize: '1.1rem',
  },

  uploadSubtext: {
    margin: 0,
    color: '#999',
    fontSize: '0.9rem',
  },

  prescriptionRequirements: {
    backgroundColor: '#f8f5ff',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    border: '1px solid #F7D9EB',
  },

  requirementsTitle: {
    color: '#7C2A62',
    margin: '0 0 0.5rem 0',
    fontSize: '1rem',
  },

  requirementsList: {
    margin: 0,
    paddingLeft: '1.5rem',
    color: '#666',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },

  modalActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  uploadButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#7C2A62',
    border: '2px solid #7C2A62',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },

  submitButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  // Logout Confirmation Modal
  logoutConfirmationModal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  logoutConfirmationIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },

  logoutConfirmationTitle: {
    color: '#7C2A62',
    marginBottom: '1rem',
    fontSize: '1.5rem',
  },

  logoutConfirmationText: {
    color: '#666',
    marginBottom: '2rem',
    lineHeight: '1.5',
  },

  logoutConfirmationActions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
    },
  },

  logoutCancelButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#7C2A62',
    border: '2px solid #7C2A62',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    flex: 1,
  },

  logoutConfirmButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    flex: 1,
  },

  // Pharmacy Store Modal
  pharmacyStoreModal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    maxWidth: '800px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  pharmacyStoreHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #F7D9EB',
    paddingBottom: '1rem',
  },

  pharmacyInfoSection: {
    marginBottom: '2rem',
  },

  pharmacyDetailsSection: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },

  pharmacyDistance: {
    color: '#666',
    fontSize: '0.9rem',
    margin: '0.5rem 0',
  },

  pharmacyDelivery: {
    color: '#4CAF50',
    fontSize: '0.9rem',
    margin: '0.5rem 0',
  },

  pharmacyRatingText: {
    color: '#FFD700',
    fontSize: '0.9rem',
    margin: '0.5rem 0',
  },

  pharmacyMedicines: {
    marginBottom: '2rem',
  },

  medicinesTitle: {
    color: '#7C2A62',
    marginBottom: '1rem',
    fontSize: '1.2rem',
  },

  medicinesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
    },
  },

  medicineItem: {
    border: '1px solid #F7D9EB',
    borderRadius: '8px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  medicineInfo: {
    marginBottom: '1rem',
  },

  medicineName: {
    margin: '0 0 0.5rem 0',
    color: '#7C2A62',
    fontSize: '1rem',
  },

  medicineCategory: {
    margin: '0 0 0.5rem 0',
    color: '#666',
    fontSize: '0.8rem',
  },

  medicinePrice: {
    margin: 0,
    color: '#7C2A62',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },

  addToCartPharmacyButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
  },

  noMedicinesFound: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '2rem',
    color: '#666',
  },

  pharmacyActions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1rem',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
    },
  },

  viewCartButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
  },

  backToPharmaciesButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    color: '#7C2A62',
    border: '2px solid #7C2A62',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
  },

  // Appointment Details Modal
  appointmentDetailsModal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    maxWidth: '700px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  appointmentDetailsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    borderBottom: '2px solid #F7D9EB',
    paddingBottom: '1rem',
  },

  appointmentDetailsContent: {
    marginBottom: '2rem',
  },

  detailSection: {
    marginBottom: '2rem',
  },

  detailSectionTitle: {
    color: '#7C2A62',
    marginBottom: '1rem',
    fontSize: '1.1rem',
  },

  detailGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  },

  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },

  detailLabel: {
    color: '#666',
    fontSize: '0.9rem',
    fontWeight: '500',
  },

  detailValue: {
    color: '#333',
    fontSize: '1rem',
  },

  appointmentDetailsActions: {
    display: 'flex',
    justifyContent: 'center',
  },

  closeDetailsButton: {
    padding: '0.75rem 2rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'button',
    fontWeight: '600',
  },

  // Live Tracking with Responsiveness - Updated for new header height
  liveTrackingContainer: {
    marginTop: '120px',
    padding: '2rem',
    minHeight: 'calc(100vh - 120px)',
    backgroundColor: '#f8fafc',
    '@media (max-width: 768px)': {
      marginTop: '0',
      padding: '1rem',
    },
  },

  trackingHeader: {
    backgroundColor: 'white',
    padding: '1.5rem 2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    '@media (max-width: 768px)': {
      padding: '1rem',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },

  backButton: {
    padding: '0.5rem 1rem',
    backgroundColor: 'transparent',
    color: '#7C2A62',
    border: '1px solid #7C2A62',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },

  trackingTitle: {
    margin: 0,
    color: '#7C2A62',
    fontSize: '1.8rem',
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },

  trackingSubtitle: {
    margin: 0,
    color: '#666',
    fontSize: '1rem',
  },

  trackingContent: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem',
    height: '600px',
    '@media (max-width: 968px)': {
      gridTemplateColumns: '1fr',
      height: 'auto',
      gap: '1.5rem',
    },
  },

  mapContainer: {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    height: '100%',
  },

  trackingSidebar: {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    overflowY: 'auto',
  },

  deliveryInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  sidebarTitle: {
    color: '#7C2A62',
    margin: '0 0 1rem 0',
    fontSize: '1.3rem',
  },

  progressSection: {
    marginBottom: '1rem',
  },

  progressBar: {
    height: '8px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '0.5rem',
  },

  progressFill: {
    height: '100%',
    backgroundColor: '#7C2A62',
    transition: 'width 0.5s ease',
  },

  progressLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
    color: '#666',
  },

  statusCard: {
    backgroundColor: '#f8f5ff',
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid #F7D9EB',
  },

  currentStatus: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },

  statusLabel: {
    color: '#666',
    fontSize: '0.9rem',
  },

  statusValue: {
    color: '#7C2A62',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  eta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  etaLabel: {
    color: '#666',
    fontSize: '0.9rem',
  },

  etaValue: {
    color: '#4CAF50',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  deliveryPartner: {
    border: '1px solid #F7D9EB',
    borderRadius: '10px',
    padding: '1rem',
  },

  partnerTitle: {
    color: '#7C2A62',
    margin: '0 0 1rem 0',
    fontSize: '1.1rem',
  },

  partnerInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },

  partnerAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#F7D9EB',
    color: '#7C2A62',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },

  partnerDetails: {
    flex: 1,
  },

  partnerName: {
    margin: '0 0 0.25rem 0',
    fontWeight: '600',
    color: '#333',
  },

  partnerVehicle: {
    margin: '0 0 0.25rem 0',
    color: '#666',
    fontSize: '0.9rem',
  },

  partnerRating: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },

  callButton: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
  },

  orderSummary: {
    border: '1px solid #F7D9EB',
    borderRadius: '10px',
    padding: '1rem',
  },

  summaryTitleText: {
    color: '#7C2A62',
    margin: '0 0 1rem 0',
    fontSize: '1.1rem',
  },

  orderSummaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f0f0f0',
  },

  // Chatbot with Responsiveness
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '350px',
    height: '500px',
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(124, 42, 98, 0.3)',
    zIndex: 2000,
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #7C2A62',
    '@media (max-width: 768px)': {
      width: '100%',
      height: '100%',
      bottom: 0,
      right: 0,
      borderRadius: 0,
    },
  },

  chatbotHeader: {
    padding: '1rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    borderTopLeftRadius: '13px',
    borderTopRightRadius: '13px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
    '@media (max-width: 768px)': {
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
    },
  },

  chatbotTitle: {
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: '600',
  },

  closeChatbot: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },

  chatMessages: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: '#fafafa',
  },

  chatMessage: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '85%',
  },

  userMessage: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
  },

  botMessage: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },

  messageBubble: {
    padding: '0.75rem 1rem',
    borderRadius: '15px',
    fontSize: '0.9rem',
    lineHeight: '1.4',
    wordWrap: 'break-word',
    maxWidth: '100%',
  },

  userMessageBubble: {
    backgroundColor: '#7C2A62',
    color: 'white',
    borderBottomRightRadius: '5px',
  },

  botMessageBubble: {
    backgroundColor: '#F7D9EB',
    color: '#7C2A62',
    borderBottomLeftRadius: '5px',
  },

  messageTime: {
    fontSize: '0.7rem',
    color: '#666',
    marginTop: '0.25rem',
    padding: '0 0.5rem',
  },

  chatInputContainer: {
    padding: '1rem',
    borderTop: '1px solid #e0e0e0',
    display: 'flex',
    gap: '0.5rem',
    backgroundColor: 'white',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    flexShrink: 0,
    '@media (max-width: 768px)': {
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
    },
  },

  chatInput: {
    flex: 1,
    padding: '0.75rem 1rem',
    border: '1px solid #ddd',
    borderRadius: '25px',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    backgroundColor: '#f8f9fa',
    '&:focus': {
      borderColor: '#7C2A62',
    },
  },

  sendButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
    minWidth: '60px',
    '&:hover:not(:disabled)': {
      backgroundColor: '#6a2355',
    },
    '&:disabled': {
      backgroundColor: '#cccccc',
      cursor: 'not-allowed',
    },
  },

  // Doctor Chat Modal
  doctorChatModal: {
    backgroundColor: 'white',
    padding: '0',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    width: '450px',
    height: '650px',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
      width: '100%',
      height: '100%',
      borderRadius: '0',
    },
  },

  doctorChatHeader: {
    padding: '1rem 1.5rem',
    backgroundColor: '#7C2A62',
    color: 'white',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
    },
  },

  doctorChatInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flex: 1,
  },

  doctorChatActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },

  goBackButton: {
    padding: '0.5rem 1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  },

  doctorImageSmall: {
    fontSize: '2rem',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
  },

  doctorChatName: {
    margin: 0,
    fontSize: '1.1rem',
    fontWeight: '600',
  },

  doctorChatSpecialty: {
    margin: 0,
    fontSize: '0.9rem',
    opacity: 0.9,
  },

  doctorChatMessages: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    backgroundColor: '#fafafa',
  },

  doctorChatInputContainer: {
    padding: '1rem',
    borderTop: '1px solid #e0e0e0',
    display: 'flex',
    gap: '0.5rem',
    backgroundColor: 'white',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    '@media (max-width: 768px)': {
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
    },
  },

  doctorChatInput: {
    flex: 1,
    padding: '0.75rem 1rem',
    border: '1px solid #ddd',
    borderRadius: '25px',
    fontSize: '0.9rem',
    outline: 'none',
  },

  closeModalButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: 'white',
    padding: '0',
    width: '35px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background-color 0.2s ease',
  },

  // Page Header with Back Button
  pageHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },

  // NEW STYLES - Emergency Mode Styles with Responsiveness
  emergencyModeSection: {
    marginTop: '1.5rem',
    padding: '1rem',
    backgroundColor: '#FFF3CD',
    border: '2px solid #FFC107',
    borderRadius: '10px',
    textAlign: 'center',
    '@media (max-width: 480px)': {
      padding: '0.75rem',
    },
  },

  emergencyModeToggle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    cursor: 'pointer',
  },

  emergencyModeSlider: {
    width: '50px',
    height: '25px',
    backgroundColor: '#ccc',
    borderRadius: '25px',
    position: 'relative',
    transition: 'background-color 0.3s ease',
  },

  emergencyModeText: {
    fontWeight: 'bold',
    color: '#666',
  },

  emergencyModeNote: {
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    color: '#D32F2F',
    fontWeight: '500',
  },

  // NEW STYLES - Offers Section with Responsiveness
  offersSection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    marginTop: '2rem',
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
    '@media (max-width: 480px)': {
      padding: '1rem',
    },
  },

  offersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
    },
  },

  offerCard: {
    padding: '1.5rem',
    border: '2px solid #FFD700',
    borderRadius: '10px',
    backgroundColor: '#FFFDE7',
    position: 'relative',
  },

  offerBadge: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: '#FF6B6B',
    color: 'white',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
  },

  offerCode: {
    color: '#7C2A62',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },

  offerDescription: {
    color: '#666',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
  },

  offerValidity: {
    color: '#999',
    fontSize: '0.8rem',
  },

  // NEW STYLES - Empty State Styles
  emptyState: {
    textAlign: 'center',
    padding: '3rem 1rem',
    color: '#666',
  },

  emptyStateIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },

  emptyStateText: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.3rem',
    fontWeight: '600',
  },

  emptyStateSubtext: {
    margin: '0 0 2rem 0',
    fontSize: '1rem',
    color: '#999',
  },

  // NEW STYLES - Detail Item Styles
  detailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0',
    borderBottom: '1px solid #f0f0f0',
  },

  detailLabel: {
    color: '#666',
    fontSize: '0.9rem',
    fontWeight: '500',
  },

  detailValue: {
    color: '#333',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
};

// Additional responsive utility styles
export const responsiveUtils = {
  hideOnMobile: {
    '@media (max-width: 768px)': {
      display: 'none !important',
    },
  },
  hideOnDesktop: {
    '@media (min-width: 769px)': {
      display: 'none !important',
    },
  },
  textCenterMobile: {
    '@media (max-width: 768px)': {
      textAlign: 'center',
    },
  },
  flexColumnMobile: {
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
};

// Breakpoints for reference
export const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

export default styles;