
// import React from 'react';

// const Hero = ({ onSectionChange, onNavigateToAuth }) => {
//   const styles = {
//     hero: {
//       padding: '4rem 2rem',
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: 'linear-gradient(135deg, #F7D9EB 0%, #ffffff 50%, #F7D9EB 100%)',
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     heroContent: {
//       maxWidth: '1200px',
//       textAlign: 'center',
//       position: 'relative',
//       zIndex: 2,
//       width: '100%',
//     },
//     heroTitle: {
//       fontSize: '3.5rem',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//       fontWeight: '700',
//       background: 'linear-gradient(45deg, #7C2A62, #9C3A7A)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       lineHeight: '1.2',
//     },
//     heroSubtitle: {
//       fontSize: '1.8rem',
//       marginBottom: '1.5rem',
//       color: '#333',
//       fontWeight: '400',
//       background: 'linear-gradient(45deg, #333, #555)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//     },
//     heroText: {
//       fontSize: '1.3rem',
//       lineHeight: '1.8',
//       marginBottom: '3rem',
//       color: '#666',
//       maxWidth: '900px',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//       fontWeight: '300',
//     },
//     ctaButtons: {
//       display: 'flex',
//       gap: '1.5rem',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       marginBottom: '4rem',
//     },
//     primaryButton: {
//       padding: '1.2rem 2.5rem',
//       backgroundColor: '#7C2A62',
//       color: 'white',
//       border: 'none',
//       borderRadius: '50px',
//       cursor: 'pointer',
//       fontSize: '1.2rem',
//       fontWeight: 'bold',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 8px 25px rgba(124, 42, 98, 0.4)',
//     },
//     secondaryButton: {
//       padding: '1.2rem 2.5rem',
//       backgroundColor: 'transparent',
//       color: '#7C2A62',
//       border: '3px solid #7C2A62',
//       borderRadius: '50px',
//       cursor: 'pointer',
//       fontSize: '1.2rem',
//       fontWeight: 'bold',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 5px 15px rgba(124, 42, 98, 0.2)',
//     },
//     emergencyButton: {
//       padding: '1rem 2rem',
//       backgroundColor: '#FF6B6B',
//       color: 'white',
//       border: 'none',
//       borderRadius: '50px',
//       cursor: 'pointer',
//       fontSize: '1.1rem',
//       fontWeight: 'bold',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 5px 20px rgba(255, 107, 107, 0.4)',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '0.5rem',
//       margin: '0 auto',
//     },
//     statsContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '3rem',
//       marginBottom: '4rem',
//       flexWrap: 'wrap',
//     },
//     statItem: {
//       textAlign: 'center',
//       padding: '1.5rem',
//     },
//     statNumber: {
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       color: '#7C2A62',
//       marginBottom: '0.5rem',
//     },
//     statLabel: {
//       color: '#666',
//       fontSize: '1rem',
//       fontWeight: '500',
//     },
//     featuresGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '2rem',
//       marginBottom: '3rem',
//     },
//     featureCard: {
//       padding: '2.5rem 2rem',
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       boxShadow: '0 8px 30px rgba(124, 42, 98, 0.15)',
//       transition: 'all 0.4s ease',
//       border: '2px solid transparent',
//       textAlign: 'center',
//     },
//     featureIcon: {
//       fontSize: '3.5rem',
//       marginBottom: '1.5rem',
//       color: '#7C2A62',
//     },
//     featureTitle: {
//       fontSize: '1.4rem',
//       marginBottom: '1rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     featureText: {
//       color: '#666',
//       lineHeight: '1.6',
//       fontSize: '1rem',
//     },
//     servicesSection: {
//       marginTop: '4rem',
//       padding: '3rem 2rem',
//       backgroundColor: 'rgba(255, 255, 255, 0.8)',
//       borderRadius: '25px',
//       boxShadow: '0 10px 40px rgba(124, 42, 98, 0.1)',
//     },
//     servicesTitle: {
//       fontSize: '2.2rem',
//       textAlign: 'center',
//       marginBottom: '3rem',
//       color: '#7C2A62',
//       fontWeight: '700',
//     },
//     servicesGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '2rem',
//     },
//     serviceCard: {
//       padding: '2rem 1.5rem',
//       backgroundColor: 'white',
//       borderRadius: '15px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//       transition: 'all 0.3s ease',
//       border: '2px solid transparent',
//       cursor: 'pointer',
//       textAlign: 'center',
//     },
//     serviceIcon: {
//       fontSize: '3rem',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//     },
//     serviceName: {
//       fontSize: '1.3rem',
//       marginBottom: '0.8rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     serviceDescription: {
//       color: '#666',
//       fontSize: '0.95rem',
//       lineHeight: '1.5',
//       marginBottom: '1rem',
//     },
//     serviceButton: {
//       padding: '0.6rem 1.5rem',
//       backgroundColor: 'transparent',
//       color: '#7C2A62',
//       border: '2px solid #7C2A62',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       fontSize: '0.9rem',
//       fontWeight: '600',
//       transition: 'all 0.3s ease',
//     },
//     emergencySection: {
//       marginTop: '3rem',
//       padding: '2rem',
//       backgroundColor: 'rgba(255, 107, 107, 0.1)',
//       borderRadius: '20px',
//       border: '2px solid #FF6B6B',
//       textAlign: 'center',
//     },
//     emergencyTitle: {
//       fontSize: '1.5rem',
//       marginBottom: '1rem',
//       color: '#D32F2F',
//       fontWeight: '600',
//     },
//     emergencyText: {
//       color: '#666',
//       marginBottom: '1.5rem',
//       fontSize: '1rem',
//     },
//     benefitsSection: {
//       marginTop: '4rem',
//       padding: '3rem 2rem',
//       backgroundColor: 'rgba(124, 42, 98, 0.05)',
//       borderRadius: '25px',
//     },
//     benefitsTitle: {
//       fontSize: '2.2rem',
//       textAlign: 'center',
//       marginBottom: '3rem',
//       color: '#7C2A62',
//       fontWeight: '700',
//     },
//     benefitsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '2rem',
//     },
//     benefitCard: {
//       padding: '2rem',
//       backgroundColor: 'white',
//       borderRadius: '15px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//       textAlign: 'center',
//       transition: 'all 0.3s ease',
//     },
//     benefitIcon: {
//       fontSize: '2.5rem',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//     },
//     benefitTitle: {
//       fontSize: '1.2rem',
//       marginBottom: '0.8rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     benefitText: {
//       color: '#666',
//       fontSize: '0.9rem',
//       lineHeight: '1.5',
//     },
//     howItWorks: {
//       marginTop: '4rem',
//       padding: '3rem 2rem',
//       backgroundColor: 'white',
//       borderRadius: '25px',
//       boxShadow: '0 10px 40px rgba(124, 42, 98, 0.1)',
//     },
//     howItWorksTitle: {
//       fontSize: '2.2rem',
//       textAlign: 'center',
//       marginBottom: '3rem',
//       color: '#7C2A62',
//       fontWeight: '700',
//     },
//     stepsContainer: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '2rem',
//     },
//     stepCard: {
//       padding: '2rem 1.5rem',
//       backgroundColor: '#F7D9EB',
//       borderRadius: '15px',
//       textAlign: 'center',
//       transition: 'all 0.3s ease',
//     },
//     stepNumber: {
//       fontSize: '2rem',
//       fontWeight: 'bold',
//       color: '#7C2A62',
//       marginBottom: '1rem',
//     },
//     stepTitle: {
//       fontSize: '1.3rem',
//       marginBottom: '1rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     stepDescription: {
//       color: '#666',
//       fontSize: '0.95rem',
//       lineHeight: '1.5',
//     },

//     // Mobile styles
//     '@media (maxWidth: 768px)': {
//       hero: {
//         padding: '2rem 1rem',
//         minHeight: 'auto',
//       },
//       heroTitle: {
//         fontSize: '2.5rem',
//         marginBottom: '0.8rem',
//       },
//       heroSubtitle: {
//         fontSize: '1.4rem',
//         marginBottom: '1rem',
//       },
//       heroText: {
//         fontSize: '1.1rem',
//         marginBottom: '2rem',
//       },
//       ctaButtons: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '1rem',
//         marginBottom: '3rem',
//       },
//       primaryButton: {
//         width: '100%',
//         maxWidth: '300px',
//         padding: '1rem 2rem',
//         fontSize: '1.1rem',
//       },
//       secondaryButton: {
//         width: '100%',
//         maxWidth: '300px',
//         padding: '1rem 2rem',
//         fontSize: '1.1rem',
//       },
//       statsContainer: {
//         gap: '1.5rem',
//         marginBottom: '3rem',
//       },
//       statItem: {
//         padding: '1rem',
//       },
//       statNumber: {
//         fontSize: '2rem',
//       },
//       featuresGrid: {
//         gridTemplateColumns: '1fr',
//         gap: '1.5rem',
//         marginBottom: '2rem',
//       },
//       featureCard: {
//         padding: '2rem 1.5rem',
//       },
//       servicesSection: {
//         padding: '2rem 1rem',
//         marginTop: '3rem',
//       },
//       servicesTitle: {
//         fontSize: '1.8rem',
//         marginBottom: '2rem',
//       },
//       servicesGrid: {
//         gridTemplateColumns: '1fr',
//         gap: '1.5rem',
//       },
//       serviceCard: {
//         padding: '1.5rem 1rem',
//       },
//       emergencySection: {
//         marginTop: '2rem',
//         padding: '1.5rem',
//       },
//       benefitsSection: {
//         padding: '2rem 1rem',
//         marginTop: '3rem',
//       },
//       benefitsTitle: {
//         fontSize: '1.8rem',
//       },
//       benefitsGrid: {
//         gridTemplateColumns: '1fr',
//         gap: '1.5rem',
//       },
//       howItWorks: {
//         padding: '2rem 1rem',
//         marginTop: '3rem',
//       },
//       howItWorksTitle: {
//         fontSize: '1.8rem',
//       },
//       stepsContainer: {
//         gridTemplateColumns: '1fr',
//         gap: '1.5rem',
//       }
//     },

//     '@media (maxWidth: 480px)': {
//       heroTitle: {
//         fontSize: '2rem',
//       },
//       heroSubtitle: {
//         fontSize: '1.2rem',
//       },
//       heroText: {
//         fontSize: '1rem',
//       },
//       statNumber: {
//         fontSize: '1.8rem',
//       },
//       servicesTitle: {
//         fontSize: '1.6rem',
//       },
//       benefitsTitle: {
//         fontSize: '1.6rem',
//       },
//       howItWorksTitle: {
//         fontSize: '1.6rem',
//       }
//     }
//   };

//   const handleOrderMedicines = () => {
//     alert('Please login first to order medicines and access our full range of healthcare services.');
//     onNavigateToAuth();
//   };

//   const features = [
//     {
//       icon: '⚡',
//       title: 'Lightning Fast Delivery',
//       text: 'Get your medicines delivered in 30-40 minutes with our optimized delivery network and real-time tracking system'
//     },
//     {
//       icon: '👨‍⚕️',
//       title: '24/7 Doctor Support',
//       text: 'Connect with certified healthcare professionals anytime through secure video or audio consultations'
//     },
//     {
//       icon: '💊',
//       title: 'Genuine Medicines',
//       text: '100% authentic medicines sourced directly from verified pharmacies with proper quality assurance'
//     },
//     {
//       icon: '🛡️',
//       title: 'Safe & Secure',
//       text: 'HIPAA compliant platform ensuring complete privacy and security of your medical information'
//     }
//   ];

//   const services = [
//     {
//       icon: '🚚',
//       name: 'Medicine Delivery',
//       description: 'Prescription and OTC medicines delivered to your doorstep within 30-40 minutes with real-time tracking',
//       features: ['Same-day delivery', 'Prescription upload', 'Real-time tracking', 'Temperature control']
//     },
//     {
//       icon: '🎥',
//       name: 'Doctor Consultation',
//       description: 'Video consultations with specialist doctors for comprehensive medical advice and digital prescriptions',
//       features: ['24/7 availability', 'Specialist doctors', 'Digital prescriptions', 'Follow-up care']
//     },
//     {
//       icon: '📍',
//       name: 'Live Order Tracking',
//       description: 'Track your medical orders in real-time from dispatch to delivery with detailed updates',
//       features: ['Real-time GPS tracking', 'Delivery alerts', 'ETA updates', 'Route optimization']
//     }
//   ];

//   const stats = [
//     { number: '50,000+', label: 'Happy Customers' },
//     { number: '30-40 min', label: 'Avg Delivery Time' },
//     { number: '500+', label: 'Partner Pharmacies' },
//     { number: '100+', label: 'Expert Doctors' }
//   ];

//   const benefits = [
//     {
//       icon: '💰',
//       title: 'Affordable Pricing',
//       text: 'Competitive prices with regular discounts and offers on medicines and consultations'
//     },
//     {
//       icon: '⏰',
//       title: 'Save Time',
//       text: 'No more waiting in queues - get everything delivered to your doorstep quickly'
//     },
//     {
//       icon: '🏠',
//       title: 'Home Delivery',
//       text: 'Free home delivery on orders above ₹499 with contactless delivery options'
//     },
//     {
//       icon: '📞',
//       title: '24/7 Support',
//       text: 'Round-the-clock customer support for all your healthcare needs and queries'
//     }
//   ];

//   const howItWorks = [
//     {
//       number: '1',
//       title: 'Sign Up & Login',
//       description: 'Create your account or login to access our complete healthcare services'
//     },
//     {
//       number: '2',
//       title: 'Upload Prescription',
//       description: 'Upload your prescription or choose from our extensive medicine catalog'
//     },
//     {
//       number: '3',
//       title: 'Place Order',
//       description: 'Select medicines, choose delivery slot, and complete your order securely'
//     },
//     {
//       number: '4',
//       title: 'Fast Delivery',
//       description: 'Track your order in real-time and receive within 30-40 minutes'
//     }
//   ];

//   return (
//     <section style={styles.hero}>
//       <div style={styles.heroContent}>
//         {/* Main Hero Section */}
//         <h1 style={styles.heroTitle}>Your Health, Delivered Fast</h1>
//         <h2 style={styles.heroSubtitle}>Medicine Delivery in 30-40 Minutes Guaranteed</h2>
//         <p style={styles.heroText}>
//           QuickMed revolutionizes healthcare delivery by bringing pharmacy to your doorstep. 
//           Experience lightning-fast medicine delivery, expert doctor consultations, and comprehensive 
//           healthcare services - all accessible through our user-friendly platform. Your well-being is our top priority.
//         </p>
        
//         {/* Call to Action Buttons */}
//         <div style={styles.ctaButtons}>
//           <button 
//             style={styles.primaryButton}
//             onClick={handleOrderMedicines}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = '#5a1a4a';
//               e.target.style.transform = 'translateY(-3px)';
//               e.target.style.boxShadow = '0 12px 30px rgba(124, 42, 98, 0.5)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = '#7C2A62';
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 8px 25px rgba(124, 42, 98, 0.4)';
//             }}
//           >
//             🚀 Order Medicines Now
//           </button>
//           <button 
//             style={styles.secondaryButton}
//             onClick={() => onSectionChange('doctors')}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = '#7C2A62';
//               e.target.style.color = 'white';
//               e.target.style.transform = 'translateY(-3px)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = 'transparent';
//               e.target.style.color = '#7C2A62';
//               e.target.style.transform = 'translateY(0)';
//             }}
//           >
//             👨‍⚕️ Consult Doctor Online
//           </button>
//         </div>

//         {/* Statistics */}
//         <div style={styles.statsContainer}>
//           {stats.map((stat, index) => (
//             <div key={index} style={styles.statItem}>
//               <div style={styles.statNumber}>{stat.number}</div>
//               <div style={styles.statLabel}>{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Key Features */}
//         <div style={styles.featuresGrid}>
//           {features.map((feature, index) => (
//             <div 
//               key={index}
//               style={styles.featureCard}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-10px)';
//                 e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 42, 98, 0.2)';
//                 e.currentTarget.style.borderColor = '#7C2A62';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 8px 30px rgba(124, 42, 98, 0.15)';
//                 e.currentTarget.style.borderColor = 'transparent';
//               }}
//             >
//               <div style={styles.featureIcon}>{feature.icon}</div>
//               <h3 style={styles.featureTitle}>{feature.title}</h3>
//               <p style={styles.featureText}>{feature.text}</p>
//             </div>
//           ))}
//         </div>

//         {/* How It Works */}
//         <div style={styles.howItWorks}>
//           <h2 style={styles.howItWorksTitle}>How QuickMed Works</h2>
//           <div style={styles.stepsContainer}>
//             {howItWorks.map((step, index) => (
//               <div 
//                 key={index}
//                 style={styles.stepCard}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-5px)';
//                   e.currentTarget.style.boxShadow = '0 10px 25px rgba(124, 42, 98, 0.15)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = 'none';
//                 }}
//               >
//                 <div style={styles.stepNumber}>{step.number}</div>
//                 <h3 style={styles.stepTitle}>{step.title}</h3>
//                 <p style={styles.stepDescription}>{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Services Preview */}
//         <div style={styles.servicesSection}>
//           <h2 style={styles.servicesTitle}>Our Healthcare Services</h2>
//           <div style={styles.servicesGrid}>
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 style={styles.serviceCard}
//                 onClick={() => onSectionChange('services')}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-5px)';
//                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 42, 98, 0.2)';
//                   e.currentTarget.style.borderColor = '#7C2A62';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
//                   e.currentTarget.style.borderColor = 'transparent';
//                 }}
//               >
//                 <div style={styles.serviceIcon}>{service.icon}</div>
//                 <h3 style={styles.serviceName}>{service.name}</h3>
//                 <p style={styles.serviceDescription}>{service.description}</p>
//                 <ul style={{listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', textAlign: 'left'}}>
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} style={{color: '#666', fontSize: '0.9rem', marginBottom: '0.3rem', paddingLeft: '1rem', position: 'relative'}}>
//                       <span style={{position: 'absolute', left: 0, color: '#7C2A62'}}>•</span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <button 
//                   style={styles.serviceButton}
//                   onMouseEnter={(e) => {
//                     e.target.style.backgroundColor = '#7C2A62';
//                     e.target.style.color = 'white';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.backgroundColor = 'transparent';
//                     e.target.style.color = '#7C2A62';
//                   }}
//                 >
//                   Learn More
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <div style={styles.benefitsSection}>
//           <h2 style={styles.benefitsTitle}>Why Choose QuickMed?</h2>
//           <div style={styles.benefitsGrid}>
//             {benefits.map((benefit, index) => (
//               <div 
//                 key={index}
//                 style={styles.benefitCard}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-5px)';
//                   e.currentTarget.style.boxShadow = '0 10px 25px rgba(124, 42, 98, 0.15)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
//                 }}
//               >
//                 <div style={styles.benefitIcon}>{benefit.icon}</div>
//                 <h3 style={styles.benefitTitle}>{benefit.title}</h3>
//                 <p style={styles.benefitText}>{benefit.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Emergency Section */}
//         <div style={styles.emergencySection}>
//           <h3 style={styles.emergencyTitle}>🚨 Emergency Medical Assistance</h3>
//           <p style={styles.emergencyText}>
//             Need immediate medical help? Our emergency response team is available 24/7 to provide urgent care and connect you with nearby medical facilities.
//           </p>
//           <button 
//             style={styles.emergencyButton}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = '#D32F2F';
//               e.target.style.transform = 'scale(1.05)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = '#FF6B6B';
//               e.target.style.transform = 'scale(1)';
//             }}
//           >
//             🚑 Call Emergency: 9392416962
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React, { useState } from 'react';

// const Hero = ({ onSectionChange, onNavigateToAuth }) => {
//   const [showEmergencyModal, setShowEmergencyModal] = useState(false);

//   const styles = {
//     hero: {
//       padding: '4rem 2rem',
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: 'linear-gradient(135deg, #F7D9EB 0%, #ffffff 50%, #F7D9EB 100%)',
//       position: 'relative',
//       overflow: 'hidden',
//     },
//     heroContent: {
//       maxWidth: '1200px',
//       textAlign: 'center',
//       position: 'relative',
//       zIndex: 2,
//       width: '100%',
//     },
//     heroTitle: {
//       fontSize: '3.5rem',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//       fontWeight: '700',
//       background: 'linear-gradient(45deg, #7C2A62, #9C3A7A)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       lineHeight: '1.2',
//     },
//     heroSubtitle: {
//       fontSize: '1.8rem',
//       marginBottom: '1.5rem',
//       color: '#333',
//       fontWeight: '400',
//       background: 'linear-gradient(45deg, #333, #555)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//     },
//     heroText: {
//       fontSize: '1.3rem',
//       lineHeight: '1.8',
//       marginBottom: '3rem',
//       color: '#666',
//       maxWidth: '900px',
//       marginLeft: 'auto',
//       marginRight: 'auto',
//       fontWeight: '300',
//     },
//     ctaButtons: {
//       display: 'flex',
//       gap: '1.5rem',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       marginBottom: '4rem',
//     },
//     primaryButton: {
//       padding: '1.2rem 2.5rem',
//       backgroundColor: '#7C2A62',
//       color: 'white',
//       border: 'none',
//       borderRadius: '50px',
//       cursor: 'pointer',
//       fontSize: '1.2rem',
//       fontWeight: 'bold',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 8px 25px rgba(124, 42, 98, 0.4)',
//     },
//     secondaryButton: {
//       padding: '1.2rem 2.5rem',
//       backgroundColor: 'transparent',
//       color: '#7C2A62',
//       border: '3px solid #7C2A62',
//       borderRadius: '50px',
//       cursor: 'pointer',
//       fontSize: '1.2rem',
//       fontWeight: 'bold',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 5px 15px rgba(124, 42, 98, 0.2)',
//     },
//     emergencyButton: {
//       padding: '1rem 2rem',
//       backgroundColor: '#FF6B6B',
//       color: 'white',
//       border: 'none',
//       borderRadius: '50px',
//       cursor: 'pointer',
//       fontSize: '1.1rem',
//       fontWeight: 'bold',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 5px 20px rgba(255, 107, 107, 0.4)',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '0.5rem',
//       margin: '0 auto',
//     },
//     statsContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '3rem',
//       marginBottom: '4rem',
//       flexWrap: 'wrap',
//     },
//     statItem: {
//       textAlign: 'center',
//       padding: '1.5rem',
//     },
//     statNumber: {
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       color: '#7C2A62',
//       marginBottom: '0.5rem',
//     },
//     statLabel: {
//       color: '#666',
//       fontSize: '1rem',
//       fontWeight: '500',
//     },
//     featuresGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '2rem',
//       marginBottom: '3rem',
//     },
//     featureCard: {
//       padding: '2.5rem 2rem',
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       boxShadow: '0 8px 30px rgba(124, 42, 98, 0.15)',
//       transition: 'all 0.4s ease',
//       border: '2px solid transparent',
//       textAlign: 'center',
//     },
//     featureIcon: {
//       fontSize: '3.5rem',
//       marginBottom: '1.5rem',
//       color: '#7C2A62',
//     },
//     featureTitle: {
//       fontSize: '1.4rem',
//       marginBottom: '1rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     featureText: {
//       color: '#666',
//       lineHeight: '1.6',
//       fontSize: '1rem',
//     },
//     servicesSection: {
//       marginTop: '4rem',
//       padding: '3rem 2rem',
//       backgroundColor: 'rgba(255, 255, 255, 0.8)',
//       borderRadius: '25px',
//       boxShadow: '0 10px 40px rgba(124, 42, 98, 0.1)',
//     },
//     servicesTitle: {
//       fontSize: '2.2rem',
//       textAlign: 'center',
//       marginBottom: '3rem',
//       color: '#7C2A62',
//       fontWeight: '700',
//     },
//     servicesGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '2rem',
//     },
//     serviceCard: {
//       padding: '2rem 1.5rem',
//       backgroundColor: 'white',
//       borderRadius: '15px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//       transition: 'all 0.3s ease',
//       border: '2px solid transparent',
//       cursor: 'pointer',
//       textAlign: 'center',
//     },
//     serviceIcon: {
//       fontSize: '3rem',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//     },
//     serviceName: {
//       fontSize: '1.3rem',
//       marginBottom: '0.8rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     serviceDescription: {
//       color: '#666',
//       fontSize: '0.95rem',
//       lineHeight: '1.5',
//       marginBottom: '1rem',
//     },
//     serviceButton: {
//       padding: '0.6rem 1.5rem',
//       backgroundColor: 'transparent',
//       color: '#7C2A62',
//       border: '2px solid #7C2A62',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       fontSize: '0.9rem',
//       fontWeight: '600',
//       transition: 'all 0.3s ease',
//     },
//     emergencySection: {
//       marginTop: '3rem',
//       padding: '2rem',
//       backgroundColor: 'rgba(255, 107, 107, 0.1)',
//       borderRadius: '20px',
//       border: '2px solid #FF6B6B',
//       textAlign: 'center',
//     },
//     emergencyTitle: {
//       fontSize: '1.5rem',
//       marginBottom: '1rem',
//       color: '#D32F2F',
//       fontWeight: '600',
//     },
//     emergencyText: {
//       color: '#666',
//       marginBottom: '1.5rem',
//       fontSize: '1rem',
//     },
//     benefitsSection: {
//       marginTop: '4rem',
//       padding: '3rem 2rem',
//       backgroundColor: 'rgba(124, 42, 98, 0.05)',
//       borderRadius: '25px',
//     },
//     benefitsTitle: {
//       fontSize: '2.2rem',
//       textAlign: 'center',
//       marginBottom: '3rem',
//       color: '#7C2A62',
//       fontWeight: '700',
//     },
//     benefitsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '2rem',
//     },
//     benefitCard: {
//       padding: '2rem',
//       backgroundColor: 'white',
//       borderRadius: '15px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//       textAlign: 'center',
//       transition: 'all 0.3s ease',
//     },
//     benefitIcon: {
//       fontSize: '2.5rem',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//     },
//     benefitTitle: {
//       fontSize: '1.2rem',
//       marginBottom: '0.8rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     benefitText: {
//       color: '#666',
//       fontSize: '0.9rem',
//       lineHeight: '1.5',
//     },
//     howItWorks: {
//       marginTop: '4rem',
//       padding: '3rem 2rem',
//       backgroundColor: 'white',
//       borderRadius: '25px',
//       boxShadow: '0 10px 40px rgba(124, 42, 98, 0.1)',
//     },
//     howItWorksTitle: {
//       fontSize: '2.2rem',
//       textAlign: 'center',
//       marginBottom: '3rem',
//       color: '#7C2A62',
//       fontWeight: '700',
//     },
//     stepsContainer: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '2rem',
//     },
//     stepCard: {
//       padding: '2rem 1.5rem',
//       backgroundColor: '#F7D9EB',
//       borderRadius: '15px',
//       textAlign: 'center',
//       transition: 'all 0.3s ease',
//     },
//     stepNumber: {
//       fontSize: '2rem',
//       fontWeight: 'bold',
//       color: '#7C2A62',
//       marginBottom: '1rem',
//     },
//     stepTitle: {
//       fontSize: '1.3rem',
//       marginBottom: '1rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     stepDescription: {
//       color: '#666',
//       fontSize: '0.95rem',
//       lineHeight: '1.5',
//     },

//     // Emergency Modal Styles
//     modalOverlay: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.7)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 1000,
//       padding: '1rem',
//     },
//     modalContent: {
//       backgroundColor: 'white',
//       padding: '2.5rem',
//       borderRadius: '20px',
//       maxWidth: '500px',
//       width: '100%',
//       textAlign: 'center',
//       boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
//     },
//     modalTitle: {
//       fontSize: '1.8rem',
//       color: '#D32F2F',
//       marginBottom: '1rem',
//       fontWeight: 'bold',
//     },
//     modalSubtitle: {
//       fontSize: '1.1rem',
//       color: '#666',
//       marginBottom: '2rem',
//       lineHeight: '1.5',
//     },
//     emergencyOptions: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '1rem',
//       marginBottom: '2rem',
//     },
//     emergencyOption: {
//       padding: '1.2rem',
//       backgroundColor: '#FFF5F5',
//       border: '2px solid #FF6B6B',
//       borderRadius: '12px',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       textAlign: 'left',
//     },
//     emergencyOptionTitle: {
//       fontSize: '1.1rem',
//       fontWeight: 'bold',
//       color: '#D32F2F',
//       marginBottom: '0.3rem',
//     },
//     emergencyOptionDesc: {
//       fontSize: '0.9rem',
//       color: '#666',
//       lineHeight: '1.4',
//     },
//     modalButtons: {
//       display: 'flex',
//       gap: '1rem',
//       justifyContent: 'center',
//     },
//     cancelButton: {
//       padding: '0.8rem 2rem',
//       backgroundColor: '#666',
//       color: 'white',
//       border: 'none',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       fontSize: '1rem',
//       fontWeight: 'bold',
//       transition: 'all 0.3s ease',
//     },

//     // Mobile styles
//     '@media (maxWidth: 768px)': {
//       hero: {
//         padding: '2rem 1rem',
//         minHeight: 'auto',
//       },
//       heroTitle: {
//         fontSize: '2.5rem',
//         marginBottom: '0.8rem',
//       },
//       heroSubtitle: {
//         fontSize: '1.4rem',
//         marginBottom: '1rem',
//       },
//       heroText: {
//         fontSize: '1.1rem',
//         marginBottom: '2rem',
//       },
//       ctaButtons: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '1rem',
//         marginBottom: '3rem',
//       },
//       primaryButton: {
//         width: '100%',
//         maxWidth: '300px',
//         padding: '1rem 2rem',
//         fontSize: '1.1rem',
//       },
//       secondaryButton: {
//         width: '100%',
//         maxWidth: '300px',
//         padding: '1rem 2rem',
//         fontSize: '1.1rem',
//       },
//       statsContainer: {
//         gap: '1.5rem',
//         marginBottom: '3rem',
//       },
//       statItem: {
//         padding: '1rem',
//       },
//       statNumber: {
//         fontSize: '2rem',
//       },
//       featuresGrid: {
//         gridTemplateColumns: '1fr',
//         gap: '1.5rem',
//         marginBottom: '2rem',
//       },
//       featureCard: {
//         padding: '2rem 1.5rem',
//       },
//       servicesSection: {
//         padding: '2rem 1rem',
//         marginTop: '3rem',
//       },
//       servicesTitle: {
//         fontSize: '1.8rem',
//         marginBottom: '2rem',
//       },
//       servicesGrid: {
//         gridTemplateColumns: '1fr',
//         gap: '1.5rem',
//       },
//       serviceCard: {
//         padding: '1.5rem 1rem',
//       },
//       emergencySection: {
//         marginTop: '2rem',
//         padding: '1.5rem',
//       },
//       benefitsSection: {
//         padding: '2rem 1rem',
//         marginTop: '3rem',
//       },
//       benefitsTitle: {
//         fontSize: '1.8rem',
//       },
//       benefitsGrid: {
//         gridTemplateColumns: '1fr',
//         gap: '1.5rem',
//       },
//       howItWorks: {
//         padding: '2rem 1rem',
//         marginTop: '3rem',
//       },
//       howItWorksTitle: {
//         fontSize: '1.8rem',
//       },
//       stepsContainer: {
//         gridTemplateColumns: '1fr',
//         gap: '1.5rem',
//       },
//       modalContent: {
//         padding: '2rem 1.5rem',
//         margin: '1rem',
//       },
//       modalTitle: {
//         fontSize: '1.5rem',
//       },
//       emergencyOptions: {
//         gap: '0.8rem',
//       }
//     },

//     '@media (maxWidth: 480px)': {
//       heroTitle: {
//         fontSize: '2rem',
//       },
//       heroSubtitle: {
//         fontSize: '1.2rem',
//       },
//       heroText: {
//         fontSize: '1rem',
//       },
//       statNumber: {
//         fontSize: '1.8rem',
//       },
//       servicesTitle: {
//         fontSize: '1.6rem',
//       },
//       benefitsTitle: {
//         fontSize: '1.6rem',
//       },
//       howItWorksTitle: {
//         fontSize: '1.6rem',
//       },
//       modalTitle: {
//         fontSize: '1.3rem',
//       }
//     }
//   };

//   const handleOrderMedicines = () => {
//     alert('Please login first to order medicines and access our full range of healthcare services.');
//     onNavigateToAuth();
//   };

//   // Emergency contact functionality
//   const handleEmergencyContact = () => {
//     setShowEmergencyModal(true);
//   };

//   const handleEmergencyCall = () => {
//     // Direct call - this will work on mobile devices
//     window.open('tel:9392416962');
//     setShowEmergencyModal(false);
    
//     // Show confirmation message
//     setTimeout(() => {
//       alert('Emergency call initiated. If the call doesn\'t connect automatically, please dial 9392416962 manually.');
//     }, 500);
//   };

//   const handleEmergencyMessage = () => {
//     // Open WhatsApp with emergency message
//     const message = 'EMERGENCY: I need immediate medical assistance! Please help.';
//     window.open(`https://wa.me/9392416962?text=${encodeURIComponent(message)}`, '_blank');
//     setShowEmergencyModal(false);
//   };

//   const handleEmergencyLocation = () => {
//     // Get user's location and share via SMS
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           const locationUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
//           const message = `EMERGENCY: I need medical help! My location: ${locationUrl}`;
          
//           // Open SMS with location
//           window.open(`sms:9392416962?body=${encodeURIComponent(message)}`);
//         },
//         (error) => {
//           // If location access denied, send SMS without location
//           const message = 'EMERGENCY: I need immediate medical assistance! Please help.';
//           window.open(`sms:9392416962?body=${encodeURIComponent(message)}`);
//         }
//       );
//     } else {
//       // Fallback if geolocation not supported
//       const message = 'EMERGENCY: I need immediate medical assistance! Please help.';
//       window.open(`sms:9392416962?body=${encodeURIComponent(message)}`);
//     }
//     setShowEmergencyModal(false);
//   };

//   const handleVideoConsultation = () => {
//     // Initiate emergency video consultation
//     alert('Connecting you with the nearest available emergency doctor...\n\nPlease ensure you have a stable internet connection for the video call.');
    
//     // Simulate connecting to video consultation
//     setTimeout(() => {
//       const confirmCall = window.confirm('Emergency video consultation is ready. Click OK to start the call.');
//       if (confirmCall) {
//         // In a real app, this would connect to your video service
//         window.open('#', '_blank');
//       }
//     }, 2000);
    
//     setShowEmergencyModal(false);
//   };

//   const closeModal = () => {
//     setShowEmergencyModal(false);
//   };

//   const features = [
//     {
//       icon: '⚡',
//       title: 'Lightning Fast Delivery',
//       text: 'Get your medicines delivered in 30-40 minutes with our optimized delivery network and real-time tracking system'
//     },
//     {
//       icon: '👨‍⚕️',
//       title: '24/7 Doctor Support',
//       text: 'Connect with certified healthcare professionals anytime through secure video or audio consultations'
//     },
//     {
//       icon: '💊',
//       title: 'Genuine Medicines',
//       text: '100% authentic medicines sourced directly from verified pharmacies with proper quality assurance'
//     },
//     {
//       icon: '🛡️',
//       title: 'Safe & Secure',
//       text: 'HIPAA compliant platform ensuring complete privacy and security of your medical information'
//     }
//   ];

//   const services = [
//     {
//       icon: '🚚',
//       name: 'Medicine Delivery',
//       description: 'Prescription and OTC medicines delivered to your doorstep within 30-40 minutes with real-time tracking',
//       features: ['Same-day delivery', 'Prescription upload', 'Real-time tracking', 'Temperature control']
//     },
//     {
//       icon: '🎥',
//       name: 'Doctor Consultation',
//       description: 'Video consultations with specialist doctors for comprehensive medical advice and digital prescriptions',
//       features: ['24/7 availability', 'Specialist doctors', 'Digital prescriptions', 'Follow-up care']
//     },
//     {
//       icon: '📍',
//       name: 'Live Order Tracking',
//       description: 'Track your medical orders in real-time from dispatch to delivery with detailed updates',
//       features: ['Real-time GPS tracking', 'Delivery alerts', 'ETA updates', 'Route optimization']
//     }
//   ];

//   const stats = [
//     { number: '50,000+', label: 'Happy Customers' },
//     { number: '30-40 min', label: 'Avg Delivery Time' },
//     { number: '500+', label: 'Partner Pharmacies' },
//     { number: '100+', label: 'Expert Doctors' }
//   ];

//   const benefits = [
//     {
//       icon: '💰',
//       title: 'Affordable Pricing',
//       text: 'Competitive prices with regular discounts and offers on medicines and consultations'
//     },
//     {
//       icon: '⏰',
//       title: 'Save Time',
//       text: 'No more waiting in queues - get everything delivered to your doorstep quickly'
//     },
//     {
//       icon: '🏠',
//       title: 'Home Delivery',
//       text: 'Free home delivery on orders above ₹499 with contactless delivery options'
//     },
//     {
//       icon: '📞',
//       title: '24/7 Support',
//       text: 'Round-the-clock customer support for all your healthcare needs and queries'
//     }
//   ];

//   const howItWorks = [
//     {
//       number: '1',
//       title: 'Sign Up & Login',
//       description: 'Create your account or login to access our complete healthcare services'
//     },
//     {
//       number: '2',
//       title: 'Upload Prescription',
//       description: 'Upload your prescription or choose from our extensive medicine catalog'
//     },
//     {
//       number: '3',
//       title: 'Place Order',
//       description: 'Select medicines, choose delivery slot, and complete your order securely'
//     },
//     {
//       number: '4',
//       title: 'Fast Delivery',
//       description: 'Track your order in real-time and receive within 30-40 minutes'
//     }
//   ];

//   const emergencyOptions = [
//     {
//       title: '📞 Emergency Call',
//       description: 'Direct voice call with emergency medical response team',
//       action: handleEmergencyCall
//     },
//     {
//       title: '💬 WhatsApp Message',
//       description: 'Send immediate message with your location and details',
//       action: handleEmergencyMessage
//     },
//     {
//       title: '📍 SMS with Location',
//       description: 'Share your exact location via SMS for faster assistance',
//       action: handleEmergencyLocation
//     },
//     {
//       title: '🎥 Video Consultation',
//       description: 'Instant video call with emergency doctor',
//       action: handleVideoConsultation
//     }
//   ];

//   return (
//     <>
//       <section style={styles.hero}>
//         <div style={styles.heroContent}>
//           {/* Main Hero Section */}
//           <h1 style={styles.heroTitle}>Your Health Our Priority</h1>
//           <h2 style={styles.heroSubtitle}>Medicine Delivery in 30-40 Minutes Guaranteed</h2>
//           <p style={styles.heroText}>
//             QuickMed revolutionizes healthcare delivery by bringing pharmacy to your doorstep. 
//             Experience lightning-fast medicine delivery, expert doctor consultations, and comprehensive 
//             healthcare services - all accessible through our user-friendly platform. Your well-being is our top priority.
//           </p>
          
//           {/* Call to Action Buttons */}
//           <div style={styles.ctaButtons}>
//             <button 
//               style={styles.primaryButton}
//               onClick={handleOrderMedicines}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#5a1a4a';
//                 e.target.style.transform = 'translateY(-3px)';
//                 e.target.style.boxShadow = '0 12px 30px rgba(124, 42, 98, 0.5)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = '#7C2A62';
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '0 8px 25px rgba(124, 42, 98, 0.4)';
//               }}
//             >
//               🚀 Order Medicines Now
//             </button>
//             <button 
//               style={styles.secondaryButton}
//               onClick={() => onSectionChange('doctors')}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#7C2A62';
//                 e.target.style.color = 'white';
//                 e.target.style.transform = 'translateY(-3px)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = 'transparent';
//                 e.target.style.color = '#7C2A62';
//                 e.target.style.transform = 'translateY(0)';
//               }}
//             >
//               👨‍⚕️ Consult Doctor Online
//             </button>
//           </div>

//           {/* Statistics */}
//           <div style={styles.statsContainer}>
//             {stats.map((stat, index) => (
//               <div key={index} style={styles.statItem}>
//                 <div style={styles.statNumber}>{stat.number}</div>
//                 <div style={styles.statLabel}>{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Key Features */}
//           <div style={styles.featuresGrid}>
//             {features.map((feature, index) => (
//               <div 
//                 key={index}
//                 style={styles.featureCard}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-10px)';
//                   e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 42, 98, 0.2)';
//                   e.currentTarget.style.borderColor = '#7C2A62';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 8px 30px rgba(124, 42, 98, 0.15)';
//                   e.currentTarget.style.borderColor = 'transparent';
//                 }}
//               >
//                 <div style={styles.featureIcon}>{feature.icon}</div>
//                 <h3 style={styles.featureTitle}>{feature.title}</h3>
//                 <p style={styles.featureText}>{feature.text}</p>
//               </div>
//             ))}
//           </div>

//           {/* How It Works */}
//           <div style={styles.howItWorks}>
//             <h2 style={styles.howItWorksTitle}>How QuickMed Works</h2>
//             <div style={styles.stepsContainer}>
//               {howItWorks.map((step, index) => (
//                 <div 
//                   key={index}
//                   style={styles.stepCard}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'translateY(-5px)';
//                     e.currentTarget.style.boxShadow = '0 10px 25px rgba(124, 42, 98, 0.15)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'translateY(0)';
//                     e.currentTarget.style.boxShadow = 'none';
//                   }}
//                 >
//                   <div style={styles.stepNumber}>{step.number}</div>
//                   <h3 style={styles.stepTitle}>{step.title}</h3>
//                   <p style={styles.stepDescription}>{step.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Services Preview */}
//           <div style={styles.servicesSection}>
//             <h2 style={styles.servicesTitle}>Our Healthcare Services</h2>
//             <div style={styles.servicesGrid}>
//               {services.map((service, index) => (
//                 <div
//                   key={index}
//                   style={styles.serviceCard}
//                   onClick={() => onSectionChange('services')}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'translateY(-5px)';
//                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 42, 98, 0.2)';
//                     e.currentTarget.style.borderColor = '#7C2A62';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'translateY(0)';
//                     e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
//                     e.currentTarget.style.borderColor = 'transparent';
//                   }}
//                 >
//                   <div style={styles.serviceIcon}>{service.icon}</div>
//                   <h3 style={styles.serviceName}>{service.name}</h3>
//                   <p style={styles.serviceDescription}>{service.description}</p>
//                   <ul style={{listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', textAlign: 'left'}}>
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} style={{color: '#666', fontSize: '0.9rem', marginBottom: '0.3rem', paddingLeft: '1rem', position: 'relative'}}>
//                         <span style={{position: 'absolute', left: 0, color: '#7C2A62'}}>•</span>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <button 
//                     style={styles.serviceButton}
//                     onMouseEnter={(e) => {
//                       e.target.style.backgroundColor = '#7C2A62';
//                       e.target.style.color = 'white';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.backgroundColor = 'transparent';
//                       e.target.style.color = '#7C2A62';
//                     }}
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Benefits Section */}
//           <div style={styles.benefitsSection}>
//             <h2 style={styles.benefitsTitle}>Why Choose QuickMed?</h2>
//             <div style={styles.benefitsGrid}>
//               {benefits.map((benefit, index) => (
//                 <div 
//                   key={index}
//                   style={styles.benefitCard}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'translateY(-5px)';
//                     e.currentTarget.style.boxShadow = '0 10px 25px rgba(124, 42, 98, 0.15)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'translateY(0)';
//                     e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
//                   }}
//                 >
//                   <div style={styles.benefitIcon}>{benefit.icon}</div>
//                   <h3 style={styles.benefitTitle}>{benefit.title}</h3>
//                   <p style={styles.benefitText}>{benefit.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Emergency Section */}
//           <div style={styles.emergencySection}>
//             <h3 style={styles.emergencyTitle}>🚨 Emergency Medical Assistance</h3>
//             <p style={styles.emergencyText}>
//               Need immediate medical help? Our emergency response team is available 24/7 to provide urgent care and connect you with nearby medical facilities.
//             </p>
//             <button 
//               style={styles.emergencyButton}
//               onClick={handleEmergencyContact}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = '#D32F2F';
//                 e.target.style.transform = 'scale(1.05)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = '#FF6B6B';
//                 e.target.style.transform = 'scale(1)';
//               }}
//             >
//               🚑 Emergency Contact: 9392416962
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Emergency Contact Modal */}
//       {showEmergencyModal && (
//         <div style={styles.modalOverlay} onClick={closeModal}>
//           <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//             <h2 style={styles.modalTitle}>🚨 Emergency Assistance</h2>
//             <p style={styles.modalSubtitle}>
//               Choose how you'd like to contact our emergency medical response team:
//             </p>
            
//             <div style={styles.emergencyOptions}>
//               {emergencyOptions.map((option, index) => (
//                 <div
//                   key={index}
//                   style={styles.emergencyOption}
//                   onClick={option.action}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = '#FFE5E5';
//                     e.currentTarget.style.transform = 'translateX(5px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = '#FFF5F5';
//                     e.currentTarget.style.transform = 'translateX(0)';
//                   }}
//                 >
//                   <div style={styles.emergencyOptionTitle}>{option.title}</div>
//                   <div style={styles.emergencyOptionDesc}>{option.description}</div>
//                 </div>
//               ))}
//             </div>

//             <div style={styles.modalButtons}>
//               <button 
//                 style={styles.cancelButton}
//                 onClick={closeModal}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#555';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = '#666';
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Hero;



import React, { useState } from 'react';
import './Hero.css'; // We'll create a separate CSS file for responsiveness

const Hero = ({ onSectionChange, onNavigateToAuth }) => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  // Default function if onNavigateToAuth is not provided
  const defaultNavigateToAuth = () => {
    console.log('Navigate to auth - function not provided');
    // You can add a default behavior here, like:
    // window.location.href = '/auth';
  };

  // Use the provided function or default
  const handleAuthNavigation = onNavigateToAuth || defaultNavigateToAuth;

  const styles = {
    hero: {
      padding: '4rem 2rem',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #F7D9EB 0%, #ffffff 50%, #F7D9EB 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    heroContent: {
      maxWidth: '1200px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
      width: '100%',
    },
    heroTitle: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      color: '#7C2A62',
      fontWeight: '700',
      background: 'linear-gradient(45deg, #7C2A62, #9C3A7A)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: '1.2',
    },
    heroSubtitle: {
      fontSize: '1.8rem',
      marginBottom: '1.5rem',
      color: '#333',
      fontWeight: '400',
      background: 'linear-gradient(45deg, #333, #555)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    heroText: {
      fontSize: '1.3rem',
      lineHeight: '1.8',
      marginBottom: '3rem',
      color: '#666',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontWeight: '300',
    },
    ctaButtons: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '4rem',
    },
    primaryButton: {
      padding: '1.2rem 2.5rem',
      backgroundColor: '#7C2A62',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(124, 42, 98, 0.4)',
    },
    secondaryButton: {
      padding: '1.2rem 2.5rem',
      backgroundColor: 'transparent',
      color: '#7C2A62',
      border: '3px solid #7C2A62',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 15px rgba(124, 42, 98, 0.2)',
    },
    emergencyButton: {
      padding: '1rem 2rem',
      backgroundColor: '#FF6B6B',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 20px rgba(255, 107, 107, 0.4)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '0 auto',
    },
    statsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      marginBottom: '4rem',
      flexWrap: 'wrap',
    },
    statItem: {
      textAlign: 'center',
      padding: '1.5rem',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#7C2A62',
      marginBottom: '0.5rem',
    },
    statLabel: {
      color: '#666',
      fontSize: '1rem',
      fontWeight: '500',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '3rem',
    },
    featureCard: {
      padding: '2.5rem 2rem',
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(124, 42, 98, 0.15)',
      transition: 'all 0.4s ease',
      border: '2px solid transparent',
      textAlign: 'center',
    },
    featureIcon: {
      fontSize: '3.5rem',
      marginBottom: '1.5rem',
      color: '#7C2A62',
    },
    featureTitle: {
      fontSize: '1.4rem',
      marginBottom: '1rem',
      color: '#333',
      fontWeight: '600',
    },
    featureText: {
      color: '#666',
      lineHeight: '1.6',
      fontSize: '1rem',
    },
    servicesSection: {
      marginTop: '4rem',
      padding: '3rem 2rem',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '25px',
      boxShadow: '0 10px 40px rgba(124, 42, 98, 0.1)',
    },
    servicesTitle: {
      fontSize: '2.2rem',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#7C2A62',
      fontWeight: '700',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    serviceCard: {
      padding: '2rem 1.5rem',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
      cursor: 'pointer',
      textAlign: 'center',
    },
    serviceIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: '#7C2A62',
    },
    serviceName: {
      fontSize: '1.3rem',
      marginBottom: '0.8rem',
      color: '#333',
      fontWeight: '600',
    },
    serviceDescription: {
      color: '#666',
      fontSize: '0.95rem',
      lineHeight: '1.5',
      marginBottom: '1rem',
    },
    serviceButton: {
      padding: '0.6rem 1.5rem',
      backgroundColor: 'transparent',
      color: '#7C2A62',
      border: '2px solid #7C2A62',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    emergencySection: {
      marginTop: '3rem',
      padding: '2rem',
      backgroundColor: 'rgba(255, 107, 107, 0.1)',
      borderRadius: '20px',
      border: '2px solid #FF6B6B',
      textAlign: 'center',
    },
    emergencyTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#D32F2F',
      fontWeight: '600',
    },
    emergencyText: {
      color: '#666',
      marginBottom: '1.5rem',
      fontSize: '1rem',
    },
    benefitsSection: {
      marginTop: '4rem',
      padding: '3rem 2rem',
      backgroundColor: 'rgba(124, 42, 98, 0.05)',
      borderRadius: '25px',
    },
    benefitsTitle: {
      fontSize: '2.2rem',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#7C2A62',
      fontWeight: '700',
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    benefitCard: {
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
    benefitIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#7C2A62',
    },
    benefitTitle: {
      fontSize: '1.2rem',
      marginBottom: '0.8rem',
      color: '#333',
      fontWeight: '600',
    },
    benefitText: {
      color: '#666',
      fontSize: '0.9rem',
      lineHeight: '1.5',
    },
    howItWorks: {
      marginTop: '4rem',
      padding: '3rem 2rem',
      backgroundColor: 'white',
      borderRadius: '25px',
      boxShadow: '0 10px 40px rgba(124, 42, 98, 0.1)',
    },
    howItWorksTitle: {
      fontSize: '2.2rem',
      textAlign: 'center',
      marginBottom: '3rem',
      color: '#7C2A62',
      fontWeight: '700',
    },
    stepsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    stepCard: {
      padding: '2rem 1.5rem',
      backgroundColor: '#F7D9EB',
      borderRadius: '15px',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
    stepNumber: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#7C2A62',
      marginBottom: '1rem',
    },
    stepTitle: {
      fontSize: '1.3rem',
      marginBottom: '1rem',
      color: '#333',
      fontWeight: '600',
    },
    stepDescription: {
      color: '#666',
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },

    // Emergency Modal Styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '20px',
      maxWidth: '500px',
      width: '100%',
      textAlign: 'center',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    },
    modalTitle: {
      fontSize: '1.8rem',
      color: '#D32F2F',
      marginBottom: '1rem',
      fontWeight: 'bold',
    },
    modalSubtitle: {
      fontSize: '1.1rem',
      color: '#666',
      marginBottom: '2rem',
      lineHeight: '1.5',
    },
    emergencyOptions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      marginBottom: '2rem',
    },
    emergencyOption: {
      padding: '1.2rem',
      backgroundColor: '#FFF5F5',
      border: '2px solid #FF6B6B',
      borderRadius: '12px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'left',
    },
    emergencyOptionTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#D32F2F',
      marginBottom: '0.3rem',
    },
    emergencyOptionDesc: {
      fontSize: '0.9rem',
      color: '#666',
      lineHeight: '1.4',
    },
    modalButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
    },
    cancelButton: {
      padding: '0.8rem 2rem',
      backgroundColor: '#666',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
    },
  };

  const handleOrderMedicines = () => {
    alert('Please login first to order medicines and access our full range of healthcare services.');
    handleAuthNavigation();
  };

  // Emergency contact functionality
  const handleEmergencyContact = () => {
    setShowEmergencyModal(true);
  };

  const handleEmergencyCall = () => {
    window.open('tel:9392416962');
    setShowEmergencyModal(false);
    
    setTimeout(() => {
      alert('Emergency call initiated. If the call doesn\'t connect automatically, please dial 9392416962 manually.');
    }, 500);
  };

  const handleEmergencyMessage = () => {
    const message = 'EMERGENCY: I need immediate medical assistance! Please help.';
    window.open(`https://wa.me/9392416962?text=${encodeURIComponent(message)}`, '_blank');
    setShowEmergencyModal(false);
  };

  const handleEmergencyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
          const message = `EMERGENCY: I need medical help! My location: ${locationUrl}`;
          window.open(`sms:9392416962?body=${encodeURIComponent(message)}`);
        },
        (error) => {
          const message = 'EMERGENCY: I need immediate medical assistance! Please help.';
          window.open(`sms:9392416962?body=${encodeURIComponent(message)}`);
        }
      );
    } else {
      const message = 'EMERGENCY: I need immediate medical assistance! Please help.';
      window.open(`sms:9392416962?body=${encodeURIComponent(message)}`);
    }
    setShowEmergencyModal(false);
  };

  const handleVideoConsultation = () => {
    alert('Connecting you with the nearest available emergency doctor...\n\nPlease ensure you have a stable internet connection for the video call.');
    
    setTimeout(() => {
      const confirmCall = window.confirm('Emergency video consultation is ready. Click OK to start the call.');
      if (confirmCall) {
        window.open('#', '_blank');
      }
    }, 2000);
    
    setShowEmergencyModal(false);
  };

  const closeModal = () => {
    setShowEmergencyModal(false);
  };

  const features = [
    {
      icon: '👨‍⚕️',
      title: '24/7 Doctor Support',
      text: 'Connect with certified healthcare professionals anytime through secure video or audio consultations'
    },
    {
      icon: '💊',
      title: 'Genuine Medicines',
      text: '100% authentic medicines sourced directly from verified pharmacies with proper quality assurance'
    },
    {
      icon: '🛡️',
      title: 'Safe & Secure',
      text: 'HIPAA compliant platform ensuring complete privacy and security of your medical information'
    }
  ];

  const services = [
    {
      icon: '🚚',
      name: 'Medicine Delivery',
      description: 'Prescription and OTC medicines delivered to your doorstep within 30-40 minutes with real-time tracking',
      features: ['Same-day delivery', 'Prescription upload', 'Real-time tracking', 'Temperature control']
    },
    {
      icon: '🎥',
      name: 'Doctor Consultation',
      description: 'Video consultations with specialist doctors for comprehensive medical advice and digital prescriptions',
      features: ['24/7 availability', 'Specialist doctors', 'Digital prescriptions', 'Follow-up care']
    },
    {
      icon: '📍',
      name: 'Live Order Tracking',
      description: 'Track your medical orders in real-time from dispatch to delivery with detailed updates',
      features: ['Real-time GPS tracking', 'Delivery alerts', 'ETA updates', 'Route optimization']
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '30-40 min', label: 'Avg Delivery Time' },
    { number: '500+', label: 'Partner Pharmacies' },
    { number: '100+', label: 'Expert Doctors' }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Affordable Pricing',
      text: 'Competitive prices with regular discounts and offers on medicines and consultations'
    },
    {
      icon: '⏰',
      title: 'Save Time',
      text: 'No more waiting in queues - get everything delivered to your doorstep quickly'
    },
    {
      icon: '🏠',
      title: 'Home Delivery',
      text: 'Free home delivery on orders above ₹499 with contactless delivery options'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      text: 'Round-the-clock customer support for all your healthcare needs and queries'
    }
  ];

  const howItWorks = [
    {
      number: '1',
      title: 'Sign Up & Login',
      description: 'Create your account or login to access our complete healthcare services'
    },
    {
      number: '2',
      title: 'Upload Prescription',
      description: 'Upload your prescription or choose from our extensive medicine catalog'
    },
    {
      number: '3',
      title: 'Place Order',
      description: 'Select medicines, choose delivery slot, and complete your order securely'
    },
    {
      number: '4',
      title: 'Fast Delivery',
      description: 'Track your order in real-time and receive within 30-40 minutes'
    }
  ];

  const emergencyOptions = [
    {
      title: '📞 Emergency Call',
      description: 'Direct voice call with emergency medical response team',
      action: handleEmergencyCall
    },
    {
      title: '💬 WhatsApp Message',
      description: 'Send immediate message with your location and details',
      action: handleEmergencyMessage
    },
    {
      title: '📍 SMS with Location',
      description: 'Share your exact location via SMS for faster assistance',
      action: handleEmergencyLocation
    },
    {
      title: '🎥 Video Consultation',
      description: 'Instant video call with emergency doctor',
      action: handleVideoConsultation
    }
  ];

  return (
    <>
      <section style={styles.hero} className="hero-section">
        <div style={styles.heroContent} className="hero-content">
          {/* Main Hero Section */}
          <h1 style={styles.heroTitle} className="hero-title">Your Health is Our Priority</h1>
          <h2 style={styles.heroSubtitle} className="hero-subtitle">Medicine Delivery in 30-40 Minutes Guaranteed</h2>
          <p style={styles.heroText} className="hero-text">
            QuickMed revolutionizes healthcare delivery by bringing pharmacy to your doorstep. 
            Experience lightning-fast medicine delivery, expert doctor consultations, and comprehensive 
            healthcare services - all accessible through our user-friendly platform. Your well-being is our top priority.
          </p>
          
          {/* Call to Action Buttons */}
          <div style={styles.ctaButtons} className="cta-buttons">
            <button 
              style={styles.primaryButton}
              className="primary-button"
              onClick={handleOrderMedicines}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#5a1a4a';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 30px rgba(124, 42, 98, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#7C2A62';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(124, 42, 98, 0.4)';
              }}
            >
              🚀 Order Medicines Now
            </button>
            <button 
              style={styles.secondaryButton}
              className="secondary-button"
              onClick={() => onSectionChange && onSectionChange('doctors')}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#7C2A62';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#7C2A62';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              👨‍⚕️ Consult Doctor Online
            </button>
          </div>

          {/* Statistics */}
          <div style={styles.statsContainer} className="stats-container">
            {stats.map((stat, index) => (
              <div key={index} style={styles.statItem} className="stat-item">
                <div style={styles.statNumber} className="stat-number">{stat.number}</div>
                <div style={styles.statLabel} className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div style={styles.featuresGrid} className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                style={styles.featureCard}
                className="feature-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 42, 98, 0.2)';
                  e.currentTarget.style.borderColor = '#7C2A62';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(124, 42, 98, 0.15)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={styles.featureIcon} className="feature-icon">{feature.icon}</div>
                <h3 style={styles.featureTitle} className="feature-title">{feature.title}</h3>
                <p style={styles.featureText} className="feature-text">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div style={styles.howItWorks} className="how-it-works">
            <h2 style={styles.howItWorksTitle} className="how-it-works-title">How QuickMed Works</h2>
            <div style={styles.stepsContainer} className="steps-container">
              {howItWorks.map((step, index) => (
                <div 
                  key={index}
                  style={styles.stepCard}
                  className="step-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(124, 42, 98, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={styles.stepNumber} className="step-number">{step.number}</div>
                  <h3 style={styles.stepTitle} className="step-title">{step.title}</h3>
                  <p style={styles.stepDescription} className="step-description">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Preview */}
          <div style={styles.servicesSection} className="services-section">
            <h2 style={styles.servicesTitle} className="services-title">Our Healthcare Services</h2>
            <div style={styles.servicesGrid} className="services-grid">
              {services.map((service, index) => (
                <div
                  key={index}
                  style={styles.serviceCard}
                  className="service-card"
                  onClick={() => onSectionChange && onSectionChange('services')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 42, 98, 0.2)';
                    e.currentTarget.style.borderColor = '#7C2A62';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div style={styles.serviceIcon} className="service-icon">{service.icon}</div>
                  <h3 style={styles.serviceName} className="service-name">{service.name}</h3>
                  <p style={styles.serviceDescription} className="service-description">{service.description}</p>
                  <ul style={{listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', textAlign: 'left'}}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{color: '#666', fontSize: '0.9rem', marginBottom: '0.3rem', paddingLeft: '1rem', position: 'relative'}}>
                        <span style={{position: 'absolute', left: 0, color: '#7C2A62'}}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    style={styles.serviceButton}
                    className="service-button"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#7C2A62';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#7C2A62';
                    }}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div style={styles.benefitsSection} className="benefits-section">
            <h2 style={styles.benefitsTitle} className="benefits-title">Why Choose QuickMed?</h2>
            <div style={styles.benefitsGrid} className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  style={styles.benefitCard}
                  className="benefit-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(124, 42, 98, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
                  }}
                >
                  <div style={styles.benefitIcon} className="benefit-icon">{benefit.icon}</div>
                  <h3 style={styles.benefitTitle} className="benefit-title">{benefit.title}</h3>
                  <p style={styles.benefitText} className="benefit-text">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Section */}
          <div style={styles.emergencySection} className="emergency-section">
            <h3 style={styles.emergencyTitle} className="emergency-title">🚨 Emergency Medical Assistance</h3>
            <p style={styles.emergencyText} className="emergency-text">
              Need immediate medical help? Our emergency response team is available 24/7 to provide urgent care and connect you with nearby medical facilities.
            </p>
            <button 
              style={styles.emergencyButton}
              className="emergency-button"
              onClick={handleEmergencyContact}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#D32F2F';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FF6B6B';
                e.target.style.transform = 'scale(1)';
              }}
            >
              🚑 Emergency Contact: 9392416962
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Contact Modal */}
      {showEmergencyModal && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.modalTitle}>🚨 Emergency Assistance</h2>
            <p style={styles.modalSubtitle}>
              Choose how you'd like to contact our emergency medical response team:
            </p>
            
            <div style={styles.emergencyOptions}>
              {emergencyOptions.map((option, index) => (
                <div
                  key={index}
                  style={styles.emergencyOption}
                  onClick={option.action}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFE5E5';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFF5F5';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={styles.emergencyOptionTitle}>{option.title}</div>
                  <div style={styles.emergencyOptionDesc}>{option.description}</div>
                </div>
              ))}
            </div>

            <div style={styles.modalButtons}>
              <button 
                style={styles.cancelButton}
                onClick={closeModal}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#555';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#666';
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;