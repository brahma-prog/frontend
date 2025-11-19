// import React from 'react';

// const AboutUs = () => {
//   const styles = {
//     about: {
//       padding: '5rem 2rem',
//       backgroundColor: '#f8f9fa',
//     },
//     container: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//     },
//     sectionTitle: {
//       fontSize: '3rem',
//       textAlign: 'center',
//       marginBottom: '3rem',
//       color: '#7C2A62',
//       fontWeight: '700',
//     },
//     contentGrid: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '4rem',
//       alignItems: 'center',
//     },
//     textContent: {
//       padding: '2rem',
//     },
//     paragraph: {
//       fontSize: '1.1rem',
//       lineHeight: '1.8',
//       marginBottom: '2rem',
//       color: '#333',
//     },
//     missionVision: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '2rem',
//       marginTop: '3rem',
//     },
//     missionCard: {
//       padding: '2rem',
//       backgroundColor: 'white',
//       borderRadius: '15px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//       textAlign: 'center',
//       transition: 'all 0.3s ease',
//     },
//     missionIcon: {
//       fontSize: '3rem',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//     },
//     missionTitle: {
//       fontSize: '1.5rem',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//       fontWeight: '600',
//     },
//     statsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '2rem',
//       marginTop: '3rem',
//     },
//     statCard: {
//       textAlign: 'center',
//       padding: '2rem',
//       backgroundColor: 'white',
//       borderRadius: '15px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//     },
//     statNumber: {
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       color: '#7C2A62',
//       marginBottom: '0.5rem',
//     },
//     statLabel: {
//       color: '#666',
//       fontWeight: '500',
//     },
//     imageContainer: {
//       position: 'relative',
//       borderRadius: '20px',
//       overflow: 'hidden',
//       boxShadow: '0 10px 30px rgba(124, 42, 98, 0.2)',
//     },
//     aboutImage: {
//       width: '100%',
//       height: '400px',
//       backgroundColor: '#F7D9EB',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '1.5rem',
//       color: '#7C2A62',
//     },
//     // Mobile styles
//     '@media (maxWidth: 768px)': {
//       about: {
//         padding: '3rem 1rem',
//       },
//       sectionTitle: {
//         fontSize: '2rem',
//       },
//       contentGrid: {
//         gridTemplateColumns: '1fr',
//         gap: '2rem',
//       },
//       missionVision: {
//         gridTemplateColumns: '1fr',
//         gap: '1rem',
//       },
//       statsGrid: {
//         gridTemplateColumns: '1fr',
//         gap: '1rem',
//       },
//       textContent: {
//         padding: '1rem',
//       }
//     }
//   };

//   return (
//     <section style={styles.about}>
//       <div style={styles.container}>
//         <h2 style={styles.sectionTitle}>About QuickMed</h2>
        
//         <div style={styles.contentGrid}>
//           <div style={styles.textContent}>
//             <p style={styles.paragraph}>
//               QuickMed is revolutionizing healthcare delivery by bringing medical services 
//               and products right to your doorstep. Founded with the vision to make healthcare 
//               accessible to everyone, we understand that when you're unwell, the last thing 
//               you want to do is wait in long queues or travel to distant medical stores.
//             </p>
//             <p style={styles.paragraph}>
//               Our team of dedicated professionals works round the clock to ensure that your 
//               medical needs are met promptly and efficiently. We partner with certified pharmacies, 
//               experienced doctors, and reliable diagnostic centers to provide a comprehensive 
//               healthcare ecosystem.
//             </p>

//             <div style={styles.missionVision}>
//               <div 
//                 style={styles.missionCard}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-5px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 <div style={styles.missionIcon}>🎯</div>
//                 <h3 style={styles.missionTitle}>Our Mission</h3>
//                 <p>To make quality healthcare accessible and affordable for everyone through technology and innovation.</p>
//               </div>
//               <div 
//                 style={styles.missionCard}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-5px)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }}
//               >
//                 <div style={styles.missionIcon}>👁️</div>
//                 <h3 style={styles.missionTitle}>Our Vision</h3>
//                 <p>To become the most trusted healthcare delivery platform in the country.</p>
//               </div>
//             </div>

//             <div style={styles.statsGrid}>
//               <div style={styles.statCard}>
//                 <div style={styles.statNumber}>50,000+</div>
//                 <div style={styles.statLabel}>Happy Customers</div>
//               </div>
//               <div style={styles.statCard}>
//                 <div style={styles.statNumber}>500+</div>
//                 <div style={styles.statLabel}>Partner Pharmacies</div>
//               </div>
//               <div style={styles.statCard}>
//                 <div style={styles.statNumber}>100+</div>
//                 <div style={styles.statLabel}>Expert Doctors</div>
//               </div>
//               <div style={styles.statCard}>
//                 <div style={styles.statNumber}>30min</div>
//                 <div style={styles.statLabel}>Avg. Delivery Time</div>
//               </div>
//             </div>
//           </div>

//           <div style={styles.imageContainer}>
//             <div style={styles.aboutImage}>
//               Healthcare Innovation
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
import React from 'react';

const AboutUs = () => {
  const styles = {
    about: {
      padding: '80px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#7C2A62',
      marginBottom: '16px',
      background: 'linear-gradient(45deg, #7C2A62, #9C3A7A)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    sectionSubtitle: {
      fontSize: '20px',
      color: '#666',
      fontWeight: '300',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '40px',
      alignItems: 'start',
      marginBottom: '80px',
    },
    textSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
    paragraph: {
      fontSize: '18px',
      lineHeight: '1.8',
      color: '#333',
      textAlign: 'left',
    },
    highlightBox: {
      backgroundColor: 'rgba(124, 42, 98, 0.05)',
      padding: '30px',
      borderRadius: '15px',
      borderLeft: '4px solid #7C2A62',
      textAlign: 'center',
      margin: '30px 0',
    },
    highlightText: {
      fontSize: '20px',
      color: '#7C2A62',
      fontWeight: '600',
      fontStyle: 'italic',
      lineHeight: '1.6',
      margin: 0,
    },
    missionVisionSection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      marginBottom: '60px',
    },
    missionCard: {
      backgroundColor: 'white',
      padding: '40px 30px',
      borderRadius: '20px',
      boxShadow: '0 8px 30px rgba(124, 42, 98, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
    },
    missionIcon: {
      fontSize: '48px',
      marginBottom: '20px',
      color: '#7C2A62',
    },
    missionTitle: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#7C2A62',
      marginBottom: '20px',
    },
    missionDescription: {
      fontSize: '16px',
      color: '#555',
      lineHeight: '1.7',
      marginBottom: '20px',
    },
    missionPoints: {
      textAlign: 'left',
    },
    missionPoint: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '12px',
      paddingLeft: '20px',
      position: 'relative',
      lineHeight: '1.5',
    },
    pointIcon: {
      position: 'absolute',
      left: '0',
      color: '#7C2A62',
      fontWeight: 'bold',
    },
    statsSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      marginBottom: '80px',
    },
    statCard: {
      backgroundColor: 'white',
      padding: '40px 20px',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
    statNumber: {
      fontSize: '42px',
      fontWeight: '700',
      color: '#7C2A62',
      marginBottom: '10px',
      background: 'linear-gradient(45deg, #7C2A62, #9C3A7A)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    statLabel: {
      fontSize: '16px',
      color: '#666',
      fontWeight: '500',
    },
    valuesSection: {
      backgroundColor: 'white',
      padding: '60px 40px',
      borderRadius: '25px',
      boxShadow: '0 10px 40px rgba(124, 42, 98, 0.1)',
    },
    valuesTitle: {
      fontSize: '36px',
      textAlign: 'center',
      fontWeight: '700',
      color: '#7C2A62',
      marginBottom: '50px',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
    },
    valueCard: {
      backgroundColor: '#F7D9EB',
      padding: '30px 20px',
      borderRadius: '15px',
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
    valueIcon: {
      fontSize: '40px',
      marginBottom: '20px',
      color: '#7C2A62',
    },
    valueTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '15px',
    },
    valueDescription: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.6',
    },
  };

  const values = [
    {
      icon: '🤝',
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through consistent, reliable service and genuine care for our customers.'
    },
    {
      icon: '⚡',
      title: 'Speed & Efficiency',
      description: 'Delivering healthcare solutions with unmatched speed and operational excellence.'
    },
    {
      icon: '❤️',
      title: 'Patient-Centric Care',
      description: 'Putting patients at the center of everything we do, ensuring their comfort and well-being.'
    },
    {
      icon: '🔬',
      title: 'Innovation',
      description: 'Continuously evolving with technology to provide cutting-edge healthcare solutions.'
    }
  ];

  return (
    <section style={styles.about}>
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.header}>
          <h2 style={styles.sectionTitle}>About QuickMed</h2>
          <p style={styles.sectionSubtitle}>
            Revolutionizing healthcare delivery with speed, technology, and compassion since 2025
          </p>
        </div>

        {/* Main Content Section - Single Column Layout */}
        <div style={styles.mainContent}>
          <div style={styles.textSection}>
            <p style={styles.paragraph}>
  At QuickMed, we understand that healthcare emergencies don't follow a schedule. That's why 
  we've built a 24/7 ecosystem where patients can connect with certified healthcare professionals 
  within minutes, not hours. Our telemedicine services allow for instant consultations, 
  while our AI-powered symptom checker helps users make informed decisions about their health.
</p>




<p style={styles.paragraph}>
  Safety and quality are at the core of everything we do. All our partner pharmacies 
  are licensed and regularly audited. Our delivery personnel undergo thorough background 
  checks and training in handling medical supplies. We maintain temperature-controlled 
  logistics for sensitive medications and ensure proper storage throughout the delivery chain.
</p>

<p style={styles.paragraph}>
  The QuickMed team comprises healthcare professionals, technology experts, and logistics 
  specialists who share a common passion for making a difference in people's lives. 
  Together, we're redefining what's possible in healthcare delivery and creating a 
  healthier future for generations to come.
</p>

            <div style={styles.highlightBox}>
              <p style={styles.highlightText}>
                "We believe that everyone deserves immediate access to quality healthcare. 
                That's why we've built QuickMed - to make healthcare faster, smarter, and more accessible for all."
              </p>
            </div>

            <p style={styles.paragraph}>
              Today, QuickMed stands at the forefront of digital healthcare innovation, serving 
              thousands of customers with our reliable medicine delivery and online consultation services. 
              Our commitment to excellence drives us to continuously improve and expand our services.
            </p>

            <p style={styles.paragraph}>
              We leverage cutting-edge technology to streamline healthcare processes, from instant 
              prescription verification to real-time delivery tracking. Our network of partner pharmacies 
              and certified healthcare professionals ensures that you receive the highest quality care 
              whenever you need it.
            </p>

            <p style={styles.paragraph}>
              At QuickMed, we're not just delivering medicines; we're delivering peace of mind, 
              convenience, and a healthier tomorrow for every individual and family we serve.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div 
          style={{
            ...styles.missionVisionSection,
            ...(window.innerWidth <= 768 && { gridTemplateColumns: '1fr', gap: '25px' })
          }}
        >
          <div 
            style={{
              ...styles.missionCard,
              ...(window.innerWidth <= 768 && { padding: '30px 20px' })
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 42, 98, 0.15)';
              e.currentTarget.style.borderColor = '#7C2A62';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(124, 42, 98, 0.1)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
          >
            <div 
              style={{
                ...styles.missionIcon,
                ...(window.innerWidth <= 768 && { fontSize: '40px', marginBottom: '15px' })
              }}
            >🎯</div>
            <h3 
              style={{
                ...styles.missionTitle,
                ...(window.innerWidth <= 768 && { fontSize: '24px', marginBottom: '15px' })
              }}
            >Our Mission</h3>
            <p style={styles.missionDescription}>
              To democratize healthcare access by leveraging technology to deliver fast, 
              affordable, and reliable medical services to every doorstep.
            </p>
            <div style={styles.missionPoints}>
              <p style={styles.missionPoint}>
                <span style={styles.pointIcon}>•</span> Make healthcare accessible to everyone
              </p>
              <p style={styles.missionPoint}>
                <span style={styles.pointIcon}>•</span> Reduce medication delivery time
              </p>
              <p style={styles.missionPoint}>
                <span style={styles.pointIcon}>•</span> Provide 24/7 doctor access
              </p>
              <p style={styles.missionPoint}>
                <span style={styles.pointIcon}>•</span> Ensure affordable pricing
              </p>
            </div>
          </div>
          
          <div 
            style={{
              ...styles.missionCard,
              ...(window.innerWidth <= 768 && { padding: '30px 20px' })
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 42, 98, 0.15)';
              e.currentTarget.style.borderColor = '#7C2A62';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(124, 42, 98, 0.1)';
              e.currentTarget.style.borderColor = 'transparent';
            }}
          >
            <div 
              style={{
                ...styles.missionIcon,
                ...(window.innerWidth <= 768 && { fontSize: '40px', marginBottom: '15px' })
              }}
            >👁️</div>
            <h3 
              style={{
                ...styles.missionTitle,
                ...(window.innerWidth <= 768 && { fontSize: '24px', marginBottom: '15px' })
              }}
            >Our Vision</h3>
            <p style={styles.missionDescription}>
              To become India's most trusted digital healthcare platform, setting new 
              standards in medical service delivery and patient care.
            </p>
            <div style={styles.missionPoints}>
              <p style={styles.missionPoint}>
                <span style={styles.pointIcon}>•</span> Expand to 100+ cities across India
              </p>
              <p style={styles.missionPoint}>
                <span style={styles.pointIcon}>•</span> Serve 1 million+ customers
              </p>
              <p style={styles.missionPoint}>
                <span style={styles.pointIcon}>•</span> Integrate AI for smart healthcare
              </p>
              <p style={styles.missionPoint}>
                <span style={styles.pointIcon}>•</span> Create fastest delivery network
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div 
          style={{
            ...styles.statsSection,
            ...(window.innerWidth <= 1024 && window.innerWidth > 768 && { gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }),
            ...(window.innerWidth <= 768 && { gridTemplateColumns: '1fr', gap: '20px', marginBottom: '60px' })
          }}
        >
          <div 
            style={{
              ...styles.statCard,
              ...(window.innerWidth <= 768 && { padding: '30px 15px' })
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 42, 98, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
            }}
          >
            <div 
              style={{
                ...styles.statNumber,
                ...(window.innerWidth <= 768 && { fontSize: '36px' }),
                ...(window.innerWidth <= 480 && { fontSize: '32px' })
              }}
            >50,000+</div>
            <div style={styles.statLabel}>Happy Customers</div>
          </div>
          <div 
            style={{
              ...styles.statCard,
              ...(window.innerWidth <= 768 && { padding: '30px 15px' })
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 42, 98, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
            }}
          >
            <div 
              style={{
                ...styles.statNumber,
                ...(window.innerWidth <= 768 && { fontSize: '36px' }),
                ...(window.innerWidth <= 480 && { fontSize: '32px' })
              }}
            >500+</div>
            <div style={styles.statLabel}>Partner Pharmacies</div>
          </div>
          <div 
            style={{
              ...styles.statCard,
              ...(window.innerWidth <= 768 && { padding: '30px 15px' })
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 42, 98, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
            }}
          >
            <div 
              style={{
                ...styles.statNumber,
                ...(window.innerWidth <= 768 && { fontSize: '36px' }),
                ...(window.innerWidth <= 480 && { fontSize: '32px' })
              }}
            >100+</div>
            <div style={styles.statLabel}>Expert Doctors</div>
          </div>
          <div 
            style={{
              ...styles.statCard,
              ...(window.innerWidth <= 768 && { padding: '30px 15px' })
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 42, 98, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
            }}
          >
            <div 
              style={{
                ...styles.statNumber,
                ...(window.innerWidth <= 768 && { fontSize: '36px' }),
                ...(window.innerWidth <= 480 && { fontSize: '32px' })
              }}
            >30-40 min</div>
            <div style={styles.statLabel}>Avg. Delivery Time</div>
          </div>
        </div>

        {/* Values Section */}
        <div 
          style={{
            ...styles.valuesSection,
            ...(window.innerWidth <= 768 && { padding: '40px 20px' })
          }}
        >
          <h2 
            style={{
              ...styles.valuesTitle,
              ...(window.innerWidth <= 768 && { fontSize: '28px', marginBottom: '30px' }),
              ...(window.innerWidth <= 480 && { fontSize: '24px' })
            }}
          >Our Core Values</h2>
          <div 
            style={{
              ...styles.valuesGrid,
              ...(window.innerWidth <= 1024 && window.innerWidth > 768 && { gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }),
              ...(window.innerWidth <= 768 && { gridTemplateColumns: '1fr', gap: '20px' })
            }}
          >
            {values.map((value, index) => (
              <div 
                key={index}
                style={{
                  ...styles.valueCard,
                  ...(window.innerWidth <= 768 && { padding: '25px 15px' })
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(124, 42, 98, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;