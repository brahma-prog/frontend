import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutUs from './AboutUs';
import Services from './Services';
import Doctors from './Doctors';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';
import AdminLoginModal from './AdminLoginModal';
import ReviewModal from './ReviewModal';
import ServiceDetailsModal from './ServiceDetailsModal';

const HomePage = ({ onNavigateToAuth, onNavigateToAdmin, onNavigateToHome }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceLearnMore = (service) => {
    setSelectedService(service);
    setShowServiceModal(true);
  };

  const styles = {
    homepage: {
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }
  };

  return (
    <div style={styles.homepage}>
      <Header 
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        onNavigateToAuth={onNavigateToAuth}
        onNavigateToAdmin={() => setShowAdminModal(true)}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {activeSection === 'home' && <Hero onSectionChange={handleSectionChange} />}
      {activeSection === 'about' && <AboutUs />}
      {activeSection === 'services' && <Services onLearnMore={handleServiceLearnMore} />}
      {activeSection === 'doctors' && <Doctors />}
      {activeSection === 'reviews' && <Reviews onWriteReview={() => setShowReviewModal(true)} />}
      {activeSection === 'contact' && <Contact />}

      <Footer onSectionChange={handleSectionChange} />

      {/* Modals */}
      {showAdminModal && (
        <AdminLoginModal 
          onClose={() => setShowAdminModal(false)}
          onLoginSuccess={onNavigateToAdmin}
          onBackToHome={onNavigateToHome}
        />
      )}

      {showReviewModal && (
        <ReviewModal 
          onClose={() => setShowReviewModal(false)}
        />
      )}

      {showServiceModal && selectedService && (
        <ServiceDetailsModal 
          service={selectedService}
          onClose={() => setShowServiceModal(false)}
          onBookService={onNavigateToAuth}
        />
      )}
    </div>
  );
};

export default HomePage;