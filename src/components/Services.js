
// import React, { useState } from 'react';

// const Services = () => {
//   const [expandedService, setExpandedService] = useState(null);

//   const styles = {
//     services: {
//       padding: '5rem 2rem',
//       backgroundColor: 'white',
//     },
//     container: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//     },
//     sectionTitle: {
//       fontSize: '3rem',
//       textAlign: 'center',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//       fontWeight: '700',
//     },
//     sectionSubtitle: {
//       fontSize: '1.2rem',
//       textAlign: 'center',
//       marginBottom: '4rem',
//       color: '#666',
//     },
//     servicesGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '2rem',
//     },
//     serviceCard: {
//       padding: '2.5rem',
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//       textAlign: 'center',
//       transition: 'all 0.3s ease',
//       border: '2px solid transparent',
//     },
//     serviceIcon: {
//       fontSize: '4rem',
//       marginBottom: '1.5rem',
//     },
//     serviceTitle: {
//       fontSize: '1.5rem',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//       fontWeight: '600',
//     },
//     serviceDescription: {
//       color: '#666',
//       lineHeight: '1.6',
//       marginBottom: '2rem',
//     },
//     learnMoreButton: {
//       padding: '0.8rem 1.5rem',
//       backgroundColor: 'transparent',
//       color: '#7C2A62',
//       border: '2px solid #7C2A62',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       fontWeight: '600',
//       transition: 'all 0.3s ease',
//     },
//     expandedContent: {
//       marginTop: '1.5rem',
//       padding: '1.5rem',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '10px',
//       textAlign: 'left',
//       animation: 'fadeIn 0.3s ease-in',
//     },
//     detailItem: {
//       marginBottom: '0.8rem',
//       paddingLeft: '1rem',
//       position: 'relative',
//       fontSize: '0.95rem',
//       lineHeight: '1.5',
//       color: '#555',
//     },
//     detailItemBefore: {
//       position: 'absolute',
//       left: '0',
//       color: '#7C2A62',
//       fontWeight: 'bold',
//     },
//     featuresContainer: {
//       display: 'flex',
//       gap: '0.5rem',
//       justifyContent: 'center',
//       flexWrap: 'wrap',
//       margin: '1rem 0 1.5rem 0',
//     },
//     featureTag: {
//       backgroundColor: '#F7D9EB',
//       color: '#7C2A62',
//       padding: '0.4rem 1rem',
//       borderRadius: '15px',
//       fontWeight: '600',
//       fontSize: '0.8rem',
//     },
//     expandedTitle: {
//       fontSize: '1.1rem',
//       fontWeight: '600',
//       color: '#7C2A62',
//       marginBottom: '1rem',
//       textAlign: 'center',
//     }
//   };

//   const services = [
//     {
//       icon: '💊',
//       title: 'Medicine Delivery',
//       description: 'Get prescribed medicines delivered to your doorstep within 30-40 minutes with real-time tracking and temperature-controlled packaging.',
//       learnMoreContent: {
//         title: 'Fast & Reliable Medicine Delivery',
//         details: [
//           '30-40 minutes average delivery time',
//           'Real-time order tracking with GPS',
//           'Temperature-controlled packaging for sensitive medicines',
//           'Secure handling of prescription drugs',
//           'Digital prescription verification',
//           'Automatic refill reminders',
//           '24/7 delivery service available'
//         ],
//         features: ['Express Delivery', 'Scheduled Delivery', 'Emergency Orders']
//       }
//     },
//     {
//       icon: '👨‍⚕️',
//       title: 'Doctor Consultation',
//       description: '24/7 online consultations with certified doctors. Get digital prescriptions and medical advice from the comfort of your home.',
//       learnMoreContent: {
//         title: '24/7 Online Doctor Consultation',
//         details: [
//           'Instant video consultations with certified doctors',
//           'Digital prescriptions sent directly to your pharmacy',
//           'Specialist consultations across 15+ departments',
//           'Follow-up consultations at no extra cost',
//           'Secure medical record storage',
//           'Multi-language support available',
//           'Insurance claim assistance'
//         ],
//         features: ['Video Consultations', 'Chat Support', 'Specialist Access']
//       }
//     },
//     {
//       icon: '📱',
//       title: 'Live Order Tracking',
//       description: 'Real-time tracking of your orders with live GPS updates, delivery agent details, and estimated time of arrival.',
//       learnMoreContent: {
//         title: 'Real-time Order Tracking',
//         details: [
//           'Live GPS tracking of your delivery agent',
//           'Real-time order status updates',
//           'Delivery agent contact information',
//           'Estimated time of arrival (ETA)',
//           'Order preparation status',
//           'Delivery route visualization',
//           'Instant notifications for order milestones'
//         ],
//         features: ['Live GPS Tracking', 'Status Updates', 'ETA Alerts']
//       }
//     },
//     {
//       icon: '🛒',
//       title: 'Over-the-Counter Drugs',
//       description: 'Wide range of OTC medications, wellness products, and self-care essentials delivered quickly to your home.',
//       learnMoreContent: {
//         title: 'Comprehensive OTC Products',
//         details: [
//           'Pain relievers and fever medications',
//           'Cold and cough remedies',
//           'Allergy and sinus medications',
//           'Digestive health products',
//           'First aid supplies and bandages',
//           'Vitamins and supplements',
//           'Personal care and wellness products'
//         ],
//         features: ['Pain Relief', 'Wellness Products', 'First Aid']
//       }
//     },
//     {
//       icon: '🏥',
//       title: 'Healthcare Products',
//       description: 'Medical devices, equipment, and healthcare essentials for home use with expert guidance and support.',
//       learnMoreContent: {
//         title: 'Medical Equipment & Healthcare Essentials',
//         details: [
//           'Blood pressure monitors and glucometers',
//           'Nebulizers and oxygen concentrators',
//           'First aid kits and medical supplies',
//           'Personal protective equipment (PPE)',
//           'Mobility aids and support devices',
//           'Baby care and maternal health products',
//           'Elderly care equipment and supplies'
//         ],
//         features: ['Medical Devices', 'Home Care', 'Safety Equipment']
//       }
//     }
//   ];

//   const handleLearnMore = (serviceIndex) => {
//     setExpandedService(expandedService === serviceIndex ? null : serviceIndex);
//   };

//   return (
//     <section style={styles.services}>
//       <div style={styles.container}>
//         <h2 style={{
//           ...styles.sectionTitle,
//           ...(window.innerWidth <= 768 && { fontSize: '2rem' }),
//           ...(window.innerWidth <= 480 && { fontSize: '1.8rem' })
//         }}>
//           Our Services
//         </h2>
//         <p style={{
//           ...styles.sectionSubtitle,
//           ...(window.innerWidth <= 768 && { fontSize: '1rem', marginBottom: '3rem' }),
//           ...(window.innerWidth <= 480 && { fontSize: '0.9rem', padding: '0 1rem' })
//         }}>
//           Comprehensive healthcare solutions delivered to your doorstep
//         </p>
        
//         <div style={{
//           ...styles.servicesGrid,
//           ...(window.innerWidth <= 768 && { 
//             gridTemplateColumns: '1fr',
//             gap: '1.5rem'
//           })
//         }}>
//           {services.map((service, index) => (
//             <div
//               key={index}
//               style={{
//                 ...styles.serviceCard,
//                 ...(window.innerWidth <= 768 && { 
//                   padding: '2rem 1.5rem',
//                   margin: '0 0.5rem'
//                 }),
//                 ...(window.innerWidth <= 480 && { 
//                   padding: '1.5rem 1rem'
//                 })
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-10px)';
//                 e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 42, 98, 0.15)';
//                 e.currentTarget.style.borderColor = '#7C2A62';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
//                 e.currentTarget.style.borderColor = 'transparent';
//               }}
//             >
//               <div style={{
//                 ...styles.serviceIcon,
//                 ...(window.innerWidth <= 768 && { fontSize: '3.5rem' }),
//                 ...(window.innerWidth <= 480 && { fontSize: '3rem' })
//               }}>
//                 {service.icon}
//               </div>
//               <h3 style={{
//                 ...styles.serviceTitle,
//                 ...(window.innerWidth <= 768 && { fontSize: '1.3rem' }),
//                 ...(window.innerWidth <= 480 && { fontSize: '1.2rem' })
//               }}>
//                 {service.title}
//               </h3>
//               <p style={{
//                 ...styles.serviceDescription,
//                 ...(window.innerWidth <= 480 && { fontSize: '0.9rem' })
//               }}>
//                 {service.description}
//               </p>
              
//               <button
//                 style={{
//                   ...styles.learnMoreButton,
//                   ...(window.innerWidth <= 480 && { 
//                     padding: '0.6rem 1.2rem',
//                     fontSize: '0.9rem'
//                   })
//                 }}
//                 onClick={() => handleLearnMore(index)}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#7C2A62';
//                   e.target.style.color = 'white';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = 'transparent';
//                   e.target.style.color = '#7C2A62';
//                 }}
//               >
//                 {expandedService === index ? 'Show Less' : 'Learn More →'}
//               </button>

//               {expandedService === index && (
//                 <div style={styles.expandedContent}>
//                   <h4 style={styles.expandedTitle}>{service.learnMoreContent.title}</h4>
                  
//                   <div style={styles.featuresContainer}>
//                     {service.learnMoreContent.features.map((feature, idx) => (
//                       <span key={idx} style={styles.featureTag}>
//                         {feature}
//                       </span>
//                     ))}
//                   </div>

//                   {service.learnMoreContent.details.map((detail, idx) => (
//                     <div key={idx} style={styles.detailItem}>
//                       <span style={styles.detailItemBefore}>•</span>
//                       {detail}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React, { useState } from 'react';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const styles = {
    services: {
      padding: '5rem 2rem',
      backgroundColor: 'white',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '3rem',
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#7C2A62',
      fontWeight: '700',
    },
    sectionSubtitle: {
      fontSize: '1.2rem',
      textAlign: 'center',
      marginBottom: '4rem',
      color: '#666',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    serviceCard: {
      padding: '2.5rem',
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
    },
    serviceIcon: {
      fontSize: '4rem',
      marginBottom: '1.5rem',
    },
    serviceTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#7C2A62',
      fontWeight: '600',
    },
    serviceDescription: {
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '2rem',
    },
    learnMoreButton: {
      padding: '0.8rem 1.5rem',
      backgroundColor: 'transparent',
      color: '#7C2A62',
      border: '2px solid #7C2A62',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    expandedContent: {
      marginTop: '1.5rem',
      padding: '1.5rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      textAlign: 'left',
      animation: 'fadeIn 0.3s ease-in',
    },
    detailItem: {
      marginBottom: '0.8rem',
      paddingLeft: '1rem',
      position: 'relative',
      fontSize: '0.95rem',
      lineHeight: '1.5',
      color: '#555',
    },
    detailItemBefore: {
      position: 'absolute',
      left: '0',
      color: '#7C2A62',
      fontWeight: 'bold',
    },
    featuresContainer: {
      display: 'flex',
      gap: '0.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '1rem 0 1.5rem 0',
    },
    featureTag: {
      backgroundColor: '#F7D9EB',
      color: '#7C2A62',
      padding: '0.4rem 1rem',
      borderRadius: '15px',
      fontWeight: '600',
      fontSize: '0.8rem',
    },
    expandedTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#7C2A62',
      marginBottom: '1rem',
      textAlign: 'center',
    }
  };

  const services = [
    {
      icon: '💊',
      title: 'Medicine Delivery',
      description: 'Get prescribed medicines delivered to your doorstep within 30-40 minutes with real-time tracking and temperature-controlled packaging.',
      learnMoreContent: {
        title: 'Fast & Reliable Medicine Delivery',
        details: [
          '30-40 minutes average delivery time',
          'Real-time order tracking with GPS',
          'Temperature-controlled packaging for sensitive medicines',
          'Secure handling of prescription drugs',
          'Digital prescription verification',
          'Automatic refill reminders',
          '24/7 delivery service available'
        ],
        features: ['Express Delivery', 'Scheduled Delivery', 'Emergency Orders']
      }
    },
    {
      icon: '👨‍⚕️',
      title: 'Doctor Consultation',
      description: '24/7 online consultations with certified doctors. Get digital prescriptions and medical advice from the comfort of your home.',
      learnMoreContent: {
        title: '24/7 Online Doctor Consultation',
        details: [
          'Instant video consultations with certified doctors',
          'Digital prescriptions sent directly to your pharmacy',
          'Specialist consultations across 15+ departments',
          'Follow-up consultations at no extra cost',
          'Secure medical record storage',
          'Multi-language support available',
          'Insurance claim assistance'
        ],
        features: ['Video Consultations', 'Chat Support', 'Specialist Access']
      }
    },
    {
      icon: '🤖',
      title: 'AI Chatbot Assistant',
      description: '24/7 AI-powered chatbot to answer your health queries, provide medication information, and assist with appointment scheduling.',
      learnMoreContent: {
        title: 'AI-Powered Health Assistant',
        details: [
          'Instant responses to health-related queries 24/7',
          'Medication information and side effects database',
          'Symptom checker and preliminary assessment',
          'Appointment scheduling assistance',
          'Medication reminder setup',
          'Health tips and wellness advice',
          'Multi-language support and natural conversation'
        ],
        features: ['24/7 Support', 'Symptom Checker', 'Medication Info']
      }
    },
    {
      icon: '📱',
      title: 'Live Order Tracking',
      description: 'Real-time tracking of your orders with live GPS updates, delivery agent details, and estimated time of arrival.',
      learnMoreContent: {
        title: 'Real-time Order Tracking',
        details: [
          'Live GPS tracking of your delivery agent',
          'Real-time order status updates',
          'Delivery agent contact information',
          'Estimated time of arrival (ETA)',
          'Order preparation status',
          'Delivery route visualization',
          'Instant notifications for order milestones'
        ],
        features: ['Live GPS Tracking', 'Status Updates', 'ETA Alerts']
      }
    },
    {
      icon: '🛒',
      title: 'Over-the-Counter Drugs',
      description: 'Wide range of OTC medications, wellness products, and self-care essentials delivered quickly to your home.',
      learnMoreContent: {
        title: 'Comprehensive OTC Products',
        details: [
          'Pain relievers and fever medications',
          'Cold and cough remedies',
          'Allergy and sinus medications',
          'Digestive health products',
          'First aid supplies and bandages',
          'Vitamins and supplements',
          'Personal care and wellness products'
        ],
        features: ['Pain Relief', 'Wellness Products', 'First Aid']
      }
    },
    {
      icon: '🏥',
      title: 'Healthcare Products',
      description: 'Medical devices, equipment, and healthcare essentials for home use with expert guidance and support.',
      learnMoreContent: {
        title: 'Medical Equipment & Healthcare Essentials',
        details: [
          'Blood pressure monitors and glucometers',
          'Nebulizers and oxygen concentrators',
          'First aid kits and medical supplies',
          'Personal protective equipment (PPE)',
          'Mobility aids and support devices',
          'Baby care and maternal health products',
          'Elderly care equipment and supplies'
        ],
        features: ['Medical Devices', 'Home Care', 'Safety Equipment']
      }
    }
  ];

  const handleLearnMore = (serviceIndex) => {
    setExpandedService(expandedService === serviceIndex ? null : serviceIndex);
  };

  return (
    <section style={styles.services}>
      <div style={styles.container}>
        <h2 style={{
          ...styles.sectionTitle,
          ...(window.innerWidth <= 768 && { fontSize: '2rem' }),
          ...(window.innerWidth <= 480 && { fontSize: '1.8rem' })
        }}>
          Our Services
        </h2>
        <p style={{
          ...styles.sectionSubtitle,
          ...(window.innerWidth <= 768 && { fontSize: '1rem', marginBottom: '3rem' }),
          ...(window.innerWidth <= 480 && { fontSize: '0.9rem', padding: '0 1rem' })
        }}>
          Comprehensive healthcare solutions delivered to your doorstep
        </p>
        
        <div style={{
          ...styles.servicesGrid,
          ...(window.innerWidth <= 768 && { 
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
          })
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                ...styles.serviceCard,
                ...(window.innerWidth <= 768 && { 
                  padding: '2rem 1.5rem',
                  margin: '0 0.5rem'
                }),
                ...(window.innerWidth <= 480 && { 
                  padding: '1.5rem 1rem'
                })
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 42, 98, 0.15)';
                e.currentTarget.style.borderColor = '#7C2A62';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{
                ...styles.serviceIcon,
                ...(window.innerWidth <= 768 && { fontSize: '3.5rem' }),
                ...(window.innerWidth <= 480 && { fontSize: '3rem' })
              }}>
                {service.icon}
              </div>
              <h3 style={{
                ...styles.serviceTitle,
                ...(window.innerWidth <= 768 && { fontSize: '1.3rem' }),
                ...(window.innerWidth <= 480 && { fontSize: '1.2rem' })
              }}>
                {service.title}
              </h3>
              <p style={{
                ...styles.serviceDescription,
                ...(window.innerWidth <= 480 && { fontSize: '0.9rem' })
              }}>
                {service.description}
              </p>
              
              <button
                style={{
                  ...styles.learnMoreButton,
                  ...(window.innerWidth <= 480 && { 
                    padding: '0.6rem 1.2rem',
                    fontSize: '0.9rem'
                  })
                }}
                onClick={() => handleLearnMore(index)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#7C2A62';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#7C2A62';
                }}
              >
                {expandedService === index ? 'Show Less' : 'Learn More →'}
              </button>

              {expandedService === index && (
                <div style={styles.expandedContent}>
                  <h4 style={styles.expandedTitle}>{service.learnMoreContent.title}</h4>
                  
                  <div style={styles.featuresContainer}>
                    {service.learnMoreContent.features.map((feature, idx) => (
                      <span key={idx} style={styles.featureTag}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  {service.learnMoreContent.details.map((detail, idx) => (
                    <div key={idx} style={styles.detailItem}>
                      <span style={styles.detailItemBefore}>•</span>
                      {detail}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;