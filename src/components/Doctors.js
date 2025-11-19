// import React from 'react';

// const Doctors = () => {
//   const styles = {
//     doctors: {
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
//     doctorsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '2rem',
//     },
//     doctorCard: {
//       padding: '2rem',
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//       textAlign: 'center',
//       transition: 'all 0.3s ease',
//       position: 'relative',
//     },
//     doctorImage: {
//       width: '120px',
//       height: '120px',
//       borderRadius: '50%',
//       backgroundColor: '#F7D9EB',
//       margin: '0 auto 1.5rem',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '2rem',
//       color: '#7C2A62',
//       border: '4px solid #7C2A62',
//     },
//     rating: {
//       position: 'absolute',
//       top: '1rem',
//       right: '1rem',
//       backgroundColor: '#FFD700',
//       color: '#000',
//       padding: '0.3rem 0.8rem',
//       borderRadius: '15px',
//       fontSize: '0.9rem',
//       fontWeight: 'bold',
//     },
//     doctorName: {
//       fontSize: '1.3rem',
//       marginBottom: '0.5rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     doctorSpecialty: {
//       fontSize: '1.1rem',
//       marginBottom: '0.5rem',
//       color: '#7C2A62',
//       fontWeight: '500',
//     },
//     doctorExperience: {
//       color: '#666',
//       marginBottom: '1rem',
//     },
//     consultationButton: {
//       padding: '0.8rem 1.5rem',
//       backgroundColor: '#7C2A62',
//       color: 'white',
//       border: 'none',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       fontWeight: '600',
//       transition: 'all 0.3s ease',
//     },
//     // Mobile styles
//     '@media (maxWidth: 768px)': {
//       doctors: {
//         padding: '3rem 1rem',
//       },
//       sectionTitle: {
//         fontSize: '2rem',
//       },
//       doctorsGrid: {
//         gridTemplateColumns: '1fr',
//         gap: '1.5rem',
//       },
//       doctorCard: {
//         padding: '1.5rem',
//       }
//     }
//   };

//   const doctors = [
//     {
//       name: 'Dr. Priya Sharma',
//       specialty: 'General Physician',
//       experience: '10 years',
//       rating: '4.9',
//       initial: 'PS'
//     },
//     {
//       name: 'Dr. Rajesh Kumar',
//       specialty: 'Cardiologist',
//       experience: '12 years',
//       rating: '4.8',
//       initial: 'RK'
//     },
//     {
//       name: 'Dr. Anjali Mehta',
//       specialty: 'Pediatrician',
//       experience: '8 years',
//       rating: '4.9',
//       initial: 'AM'
//     },
//     {
//       name: 'Dr. Sanjay Verma',
//       specialty: 'Orthopedic',
//       experience: '15 years',
//       rating: '4.7',
//       initial: 'SV'
//     },
//     {
//       name: 'Dr. Neha Gupta',
//       specialty: 'Dermatologist',
//       experience: '9 years',
//       rating: '4.8',
//       initial: 'NG'
//     },
//     {
//       name: 'Dr. Amit Patel',
//       specialty: 'Psychiatrist',
//       experience: '11 years',
//       rating: '4.9',
//       initial: 'AP'
//     }
//   ];

//   return (
//     <section style={styles.doctors}>
//       <div style={styles.container}>
//         <h2 style={styles.sectionTitle}>Our Medical Experts</h2>
//         <p style={styles.sectionSubtitle}>
//           Connect with certified healthcare professionals online
//         </p>
        
//         <div style={styles.doctorsGrid}>
//           {doctors.map((doctor, index) => (
//             <div
//               key={index}
//               style={styles.doctorCard}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-5px)';
//                 e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 42, 98, 0.15)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
//               }}
//             >
//               <div style={styles.rating}>⭐ {doctor.rating}</div>
//               <div style={styles.doctorImage}>{doctor.initial}</div>
//               <h3 style={styles.doctorName}>{doctor.name}</h3>
//               <p style={styles.doctorSpecialty}>{doctor.specialty}</p>
//               <p style={styles.doctorExperience}>Experience: {doctor.experience}</p>
//               <button
//                 style={styles.consultationButton}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#5a1a4a';
//                   e.target.style.transform = 'scale(1.05)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = '#7C2A62';
//                   e.target.style.transform = 'scale(1)';
//                 }}
//               >
//                 Book Consultation
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Doctors;
// import React, { useState } from 'react';

// const Doctors = ({ onNavigateToLogin }) => {
//   const [selectedDoctor, setSelectedDoctor] = useState(null);

//   const styles = {
//     doctors: {
//       padding: '5rem 2rem',
//       backgroundColor: '#f8f9fa',
//       minHeight: '100vh',
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
//     doctorsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '2rem',
//     },
//     doctorCard: {
//       padding: '2rem',
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//       textAlign: 'center',
//       transition: 'all 0.3s ease',
//       position: 'relative',
//     },
//     doctorImage: {
//       width: '120px',
//       height: '120px',
//       borderRadius: '50%',
//       backgroundColor: '#F7D9EB',
//       margin: '0 auto 1.5rem',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '2rem',
//       color: '#7C2A62',
//       border: '4px solid #7C2A62',
//     },
//     rating: {
//       position: 'absolute',
//       top: '1rem',
//       right: '1rem',
//       backgroundColor: '#FFD700',
//       color: '#000',
//       padding: '0.3rem 0.8rem',
//       borderRadius: '15px',
//       fontSize: '0.9rem',
//       fontWeight: 'bold',
//     },
//     doctorName: {
//       fontSize: '1.3rem',
//       marginBottom: '0.5rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     doctorSpecialty: {
//       fontSize: '1.1rem',
//       marginBottom: '0.5rem',
//       color: '#7C2A62',
//       fontWeight: '500',
//     },
//     doctorExperience: {
//       color: '#666',
//       marginBottom: '1rem',
//     },
//     viewProfileButton: {
//       padding: '0.8rem 1.5rem',
//       backgroundColor: 'transparent',
//       color: '#7C2A62',
//       border: '2px solid #7C2A62',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       fontWeight: '600',
//       transition: 'all 0.3s ease',
//     },
//     // Profile Modal Styles
//     profileModal: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       zIndex: 1000,
//       padding: '1rem',
//     },
//     profileContent: {
//       backgroundColor: 'white',
//       padding: '2.5rem',
//       borderRadius: '20px',
//       maxWidth: '500px',
//       width: '100%',
//       maxHeight: '90vh',
//       overflowY: 'auto',
//       position: 'relative',
//       textAlign: 'center',
//     },
//     closeButton: {
//       position: 'absolute',
//       top: '1rem',
//       right: '1rem',
//       background: 'none',
//       border: 'none',
//       fontSize: '1.5rem',
//       cursor: 'pointer',
//       color: '#7C2A62',
//       width: '40px',
//       height: '40px',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       transition: 'all 0.3s ease',
//     },
//     profileImage: {
//       width: '150px',
//       height: '150px',
//       borderRadius: '50%',
//       backgroundColor: '#F7D9EB',
//       margin: '0 auto 2rem',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '2.5rem',
//       color: '#7C2A62',
//       border: '4px solid #7C2A62',
//     },
//     profileName: {
//       fontSize: '1.8rem',
//       marginBottom: '0.5rem',
//       color: '#333',
//       fontWeight: '600',
//     },
//     profileSpecialty: {
//       fontSize: '1.3rem',
//       marginBottom: '0.5rem',
//       color: '#7C2A62',
//       fontWeight: '500',
//     },
//     profileDetails: {
//       textAlign: 'left',
//       margin: '2rem 0',
//     },
//     detailItem: {
//       marginBottom: '1rem',
//       padding: '0.8rem',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '10px',
//     },
//     detailLabel: {
//       fontWeight: '600',
//       color: '#333',
//       marginBottom: '0.3rem',
//     },
//     detailValue: {
//       color: '#666',
//     },
//     bookConsultationButton: {
//       padding: '1rem 2rem',
//       backgroundColor: '#7C2A62',
//       color: 'white',
//       border: 'none',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       fontWeight: '600',
//       fontSize: '1.1rem',
//       transition: 'all 0.3s ease',
//       width: '100%',
//       marginTop: '1rem',
//     },
//     loginMessage: {
//       backgroundColor: '#FFF3CD',
//       border: '1px solid #FFEAA7',
//       padding: '1rem',
//       borderRadius: '10px',
//       marginTop: '1rem',
//       color: '#856404',
//       textAlign: 'center',
//     },
//     loginLink: {
//       color: '#7C2A62',
//       fontWeight: '600',
//       textDecoration: 'underline',
//       cursor: 'pointer',
//       marginLeft: '0.3rem',
//     }
//   };

//   const doctors = [
//     {
//       name: 'Dr. Priya Sharma',
//       specialty: 'General Physician',
//       experience: '10 years',
//       rating: '4.9',
//       initial: 'PS',
//       education: 'MBBS, MD - General Medicine',
//       languages: 'English, Hindi, Tamil',
//       consultationFee: '₹500',
//       availability: 'Mon-Sat: 9 AM - 6 PM',
//       about: 'Specialized in general medicine with 10 years of experience. Expertise in chronic disease management and preventive healthcare.',
//       patients: '5000+'
//     },
//     {
//       name: 'Dr. Rajesh Kumar',
//       specialty: 'Cardiologist',
//       experience: '12 years',
//       rating: '4.8',
//       initial: 'RK',
//       education: 'MBBS, MD - Cardiology, DM - Cardiology',
//       languages: 'English, Hindi',
//       consultationFee: '₹800',
//       availability: 'Mon-Fri: 10 AM - 4 PM',
//       about: 'Senior cardiologist with expertise in heart disease prevention and treatment. Performed 1000+ successful procedures.',
//       patients: '3000+'
//     },
//     {
//       name: 'Dr. Anjali Mehta',
//       specialty: 'Pediatrician',
//       experience: '8 years',
//       rating: '4.9',
//       initial: 'AM',
//       education: 'MBBS, MD - Pediatrics',
//       languages: 'English, Hindi, Gujarati',
//       consultationFee: '₹600',
//       availability: 'Mon-Sat: 8 AM - 5 PM',
//       about: 'Dedicated pediatrician with expertise in child healthcare, vaccination, and growth monitoring.',
//       patients: '4000+'
//     },
//     {
//       name: 'Dr. Sanjay Verma',
//       specialty: 'Orthopedic',
//       experience: '15 years',
//       rating: '4.7',
//       initial: 'SV',
//       education: 'MBBS, MS - Orthopedics',
//       languages: 'English, Hindi, Punjabi',
//       consultationFee: '₹700',
//       availability: 'Tue-Sat: 11 AM - 7 PM',
//       about: 'Orthopedic surgeon specializing in joint replacement and sports injuries. 15 years of surgical experience.',
//       patients: '6000+'
//     },
//     {
//       name: 'Dr. Neha Gupta',
//       specialty: 'Dermatologist',
//       experience: '9 years',
//       rating: '4.8',
//       initial: 'NG',
//       education: 'MBBS, MD - Dermatology',
//       languages: 'English, Hindi, Bengali',
//       consultationFee: '₹750',
//       availability: 'Mon-Fri: 9 AM - 5 PM',
//       about: 'Skin and hair specialist with expertise in cosmetic dermatology and skin disease treatment.',
//       patients: '3500+'
//     },
//     {
//       name: 'Dr. Amit Patel',
//       specialty: 'Psychiatrist',
//       experience: '11 years',
//       rating: '4.9',
//       initial: 'AP',
//       education: 'MBBS, MD - Psychiatry',
//       languages: 'English, Hindi, Marathi',
//       consultationFee: '₹900',
//       availability: 'Mon-Sat: 10 AM - 6 PM',
//       about: 'Mental health specialist with expertise in anxiety, depression, and relationship counseling.',
//       patients: '2000+'
//     }
//   ];

//   const handleViewProfile = (doctor) => {
//     setSelectedDoctor(doctor);
//   };

//   const handleCloseProfile = () => {
//     setSelectedDoctor(null);
//   };

//   const handleBookConsultation = () => {
//     // Show alert message
//     alert('Please login first to book a consultation with ' + selectedDoctor.name);
    
//     // Close the profile modal
//     handleCloseProfile();
    
//     // Navigate to login page after a short delay
//     setTimeout(() => {
//       if (onNavigateToLogin) {
//         onNavigateToLogin();
//       }
//     }, 500);
//   };

//   const handleLoginLinkClick = () => {
//     handleBookConsultation();
//   };

//   return (
//     <section style={styles.doctors}>
//       <div style={styles.container}>
//         <h2 style={{
//           ...styles.sectionTitle,
//           ...(window.innerWidth <= 768 && { fontSize: '2rem' }),
//           ...(window.innerWidth <= 480 && { fontSize: '1.8rem' })
//         }}>
//           Our Medical Experts
//         </h2>
//         <p style={{
//           ...styles.sectionSubtitle,
//           ...(window.innerWidth <= 768 && { fontSize: '1rem', marginBottom: '3rem' }),
//           ...(window.innerWidth <= 480 && { fontSize: '0.9rem', padding: '0 1rem' })
//         }}>
//           Connect with certified healthcare professionals online
//         </p>
        
//         <div style={{
//           ...styles.doctorsGrid,
//           ...(window.innerWidth <= 768 && { 
//             gridTemplateColumns: '1fr',
//             gap: '1.5rem'
//           })
//         }}>
//           {doctors.map((doctor, index) => (
//             <div
//               key={index}
//               style={{
//                 ...styles.doctorCard,
//                 ...(window.innerWidth <= 768 && { 
//                   padding: '1.5rem',
//                   margin: '0 0.5rem'
//                 })
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-5px)';
//                 e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 42, 98, 0.15)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
//               }}
//             >
//               <div style={styles.rating}>⭐ {doctor.rating}</div>
//               <div style={styles.doctorImage}>{doctor.initial}</div>
//               <h3 style={styles.doctorName}>{doctor.name}</h3>
//               <p style={styles.doctorSpecialty}>{doctor.specialty}</p>
//               <p style={styles.doctorExperience}>Experience: {doctor.experience}</p>
//               <button
//                 style={{
//                   ...styles.viewProfileButton,
//                   ...(window.innerWidth <= 480 && { 
//                     padding: '0.6rem 1.2rem',
//                     fontSize: '0.9rem'
//                   })
//                 }}
//                 onClick={() => handleViewProfile(doctor)}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#7C2A62';
//                   e.target.style.color = 'white';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = 'transparent';
//                   e.target.style.color = '#7C2A62';
//                 }}
//               >
//                 View Profile
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Doctor Profile Modal */}
//         {selectedDoctor && (
//           <div style={styles.profileModal} onClick={handleCloseProfile}>
//             <div style={{
//               ...styles.profileContent,
//               ...(window.innerWidth <= 480 && { 
//                 padding: '1.5rem',
//                 margin: '1rem'
//               })
//             }} onClick={(e) => e.stopPropagation()}>
//               <button 
//                 style={{
//                   ...styles.closeButton,
//                   ...(window.innerWidth <= 480 && {
//                     top: '0.5rem',
//                     right: '0.5rem'
//                   })
//                 }}
//                 onClick={handleCloseProfile}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#F7D9EB';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = 'transparent';
//                 }}
//               >
//                 ×
//               </button>
              
//               <div style={styles.profileImage}>{selectedDoctor.initial}</div>
//               <h2 style={styles.profileName}>{selectedDoctor.name}</h2>
//               <p style={styles.profileSpecialty}>{selectedDoctor.specialty}</p>
//               <div style={styles.rating}>⭐ {selectedDoctor.rating} Rating</div>

//               <div style={styles.profileDetails}>
//                 <div style={styles.detailItem}>
//                   <div style={styles.detailLabel}>Education</div>
//                   <div style={styles.detailValue}>{selectedDoctor.education}</div>
//                 </div>
//                 <div style={styles.detailItem}>
//                   <div style={styles.detailLabel}>Experience</div>
//                   <div style={styles.detailValue}>{selectedDoctor.experience}</div>
//                 </div>
//                 <div style={styles.detailItem}>
//                   <div style={styles.detailLabel}>Languages Spoken</div>
//                   <div style={styles.detailValue}>{selectedDoctor.languages}</div>
//                 </div>
//                 <div style={styles.detailItem}>
//                   <div style={styles.detailLabel}>Consultation Fee</div>
//                   <div style={styles.detailValue}>{selectedDoctor.consultationFee}</div>
//                 </div>
//                 <div style={styles.detailItem}>
//                   <div style={styles.detailLabel}>Availability</div>
//                   <div style={styles.detailValue}>{selectedDoctor.availability}</div>
//                 </div>
//                 <div style={styles.detailItem}>
//                   <div style={styles.detailLabel}>Patients Treated</div>
//                   <div style={styles.detailValue}>{selectedDoctor.patients}</div>
//                 </div>
//                 <div style={styles.detailItem}>
//                   <div style={styles.detailLabel}>About</div>
//                   <div style={styles.detailValue}>{selectedDoctor.about}</div>
//                 </div>
//               </div>

//               <button
//                 style={styles.bookConsultationButton}
//                 onClick={handleBookConsultation}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = '#5a1a4a';
//                   e.target.style.transform = 'scale(1.05)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = '#7C2A62';
//                   e.target.style.transform = 'scale(1)';
//                 }}
//               >
//                 Book Consultation
//               </button>

//               <div style={styles.loginMessage}>
//                 Please 
//                 <span style={styles.loginLink} onClick={handleLoginLinkClick}>
//                   login
//                 </span> 
//                 to book a consultation
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Doctors;

import React, { useState } from 'react';

const Doctors = ({ onNavigateToLogin }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const styles = {
    doctors: {
      padding: '5rem 2rem',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
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
    doctorsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    doctorCard: {
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      position: 'relative',
    },
    doctorImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      backgroundColor: '#F7D9EB',
      margin: '0 auto 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      color: '#7C2A62',
      border: '4px solid #7C2A62',
    },
    rating: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      backgroundColor: '#FFD700',
      color: '#000',
      padding: '0.3rem 0.8rem',
      borderRadius: '15px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
    },
    doctorName: {
      fontSize: '1.3rem',
      marginBottom: '0.5rem',
      color: '#333',
      fontWeight: '600',
    },
    doctorSpecialty: {
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
      color: '#7C2A62',
      fontWeight: '500',
    },
    doctorExperience: {
      color: '#666',
      marginBottom: '1.5rem',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
    },
    viewProfileButton: {
      padding: '0.8rem 1.5rem',
      backgroundColor: 'transparent',
      color: '#7C2A62',
      border: '2px solid #7C2A62',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    bookConsultationButton: {
      padding: '0.8rem 1.5rem',
      backgroundColor: '#7C2A62',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s ease',
    },
    // Profile Modal Styles
    profileModal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '1rem',
    },
    profileContent: {
      backgroundColor: 'white',
      padding: '2.5rem',
      borderRadius: '20px',
      maxWidth: '500px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      position: 'relative',
      textAlign: 'center',
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#7C2A62',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      zIndex: 1001,
    },
    profileImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      backgroundColor: '#F7D9EB',
      margin: '0 auto 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      color: '#7C2A62',
      border: '4px solid #7C2A62',
    },
    profileName: {
      fontSize: '1.8rem',
      marginBottom: '0.5rem',
      color: '#333',
      fontWeight: '600',
    },
    profileSpecialty: {
      fontSize: '1.3rem',
      marginBottom: '0.5rem',
      color: '#7C2A62',
      fontWeight: '500',
    },
    profileRating: {
      backgroundColor: '#FFD700',
      color: '#000',
      padding: '0.3rem 0.8rem',
      borderRadius: '15px',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      display: 'inline-block',
      marginBottom: '1.5rem',
    },
    profileDetails: {
      textAlign: 'left',
      margin: '2rem 0',
    },
    detailItem: {
      marginBottom: '1rem',
      padding: '0.8rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
    },
    detailLabel: {
      fontWeight: '600',
      color: '#333',
      marginBottom: '0.3rem',
    },
    detailValue: {
      color: '#666',
    },
    modalBookConsultationButton: {
      padding: '1rem 2rem',
      backgroundColor: '#7C2A62',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '1.1rem',
      transition: 'all 0.3s ease',
      width: '100%',
      marginTop: '1rem',
    },
    loginMessage: {
      backgroundColor: '#FFF3CD',
      border: '1px solid #FFEAA7',
      padding: '1rem',
      borderRadius: '10px',
      marginTop: '1rem',
      color: '#856404',
      textAlign: 'center',
    },
    loginLink: {
      color: '#7C2A62',
      fontWeight: '600',
      textDecoration: 'underline',
      cursor: 'pointer',
      marginLeft: '0.3rem',
    }
  };

  const doctors = [
    {
      name: 'Dr. Priya Sharma',
      specialty: 'General Physician',
      experience: '10 years',
      rating: '4.9',
      initial: 'PS',
      education: 'MBBS, MD - General Medicine',
      languages: 'English, Hindi, Tamil',
      consultationFee: '₹500',
      availability: 'Mon-Sat: 9 AM - 6 PM',
      about: 'Specialized in general medicine with 10 years of experience. Expertise in chronic disease management and preventive healthcare.',
      patients: '5000+'
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiologist',
      experience: '12 years',
      rating: '4.8',
      initial: 'RK',
      education: 'MBBS, MD - Cardiology, DM - Cardiology',
      languages: 'English, Hindi',
      consultationFee: '₹800',
      availability: 'Mon-Fri: 10 AM - 4 PM',
      about: 'Senior cardiologist with expertise in heart disease prevention and treatment. Performed 1000+ successful procedures.',
      patients: '3000+'
    },
    {
      name: 'Dr. Anjali Mehta',
      specialty: 'Pediatrician',
      experience: '8 years',
      rating: '4.9',
      initial: 'AM',
      education: 'MBBS, MD - Pediatrics',
      languages: 'English, Hindi, Gujarati',
      consultationFee: '₹600',
      availability: 'Mon-Sat: 8 AM - 5 PM',
      about: 'Dedicated pediatrician with expertise in child healthcare, vaccination, and growth monitoring.',
      patients: '4000+'
    },
    {
      name: 'Dr. Sanjay Verma',
      specialty: 'Orthopedic',
      experience: '15 years',
      rating: '4.7',
      initial: 'SV',
      education: 'MBBS, MS - Orthopedics',
      languages: 'English, Hindi, Punjabi',
      consultationFee: '₹700',
      availability: 'Tue-Sat: 11 AM - 7 PM',
      about: 'Orthopedic surgeon specializing in joint replacement and sports injuries. 15 years of surgical experience.',
      patients: '6000+'
    },
    {
      name: 'Dr. Neha Gupta',
      specialty: 'Dermatologist',
      experience: '9 years',
      rating: '4.8',
      initial: 'NG',
      education: 'MBBS, MD - Dermatology',
      languages: 'English, Hindi, Bengali',
      consultationFee: '₹750',
      availability: 'Mon-Fri: 9 AM - 5 PM',
      about: 'Skin and hair specialist with expertise in cosmetic dermatology and skin disease treatment.',
      patients: '3500+'
    },
    {
      name: 'Dr. Amit Patel',
      specialty: 'Psychiatrist',
      experience: '11 years',
      rating: '4.9',
      initial: 'AP',
      education: 'MBBS, MD - Psychiatry',
      languages: 'English, Hindi, Marathi',
      consultationFee: '₹900',
      availability: 'Mon-Sat: 10 AM - 6 PM',
      about: 'Mental health specialist with expertise in anxiety, depression, and relationship counseling.',
      patients: '2000+'
    }
  ];

  const handleViewProfile = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseProfile = () => {
    setSelectedDoctor(null);
  };

  const handleBookConsultation = (doctor = null) => {
    const doctorName = doctor ? doctor.name : (selectedDoctor ? selectedDoctor.name : 'the doctor');
    
    // Show alert message
    alert('Please login first to book a consultation with ' + doctorName);
    
    // Close the profile modal if open
    if (selectedDoctor) {
      handleCloseProfile();
    }
    
    // Navigate to login page after a short delay
    setTimeout(() => {
      if (onNavigateToLogin) {
        onNavigateToLogin();
      }
    }, 500);
  };

  const handleLoginLinkClick = () => {
    handleBookConsultation();
  };

  return (
    <section style={styles.doctors}>
      <div style={styles.container}>
        <h2 style={{
          ...styles.sectionTitle,
          ...(window.innerWidth <= 768 && { fontSize: '2rem' }),
          ...(window.innerWidth <= 480 && { fontSize: '1.8rem' })
        }}>
          Our Medical Experts
        </h2>
        <p style={{
          ...styles.sectionSubtitle,
          ...(window.innerWidth <= 768 && { fontSize: '1rem', marginBottom: '3rem' }),
          ...(window.innerWidth <= 480 && { fontSize: '0.9rem', padding: '0 1rem' })
        }}>
          Connect with certified healthcare professionals online
        </p>
        
        <div style={{
          ...styles.doctorsGrid,
          ...(window.innerWidth <= 768 && { 
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
          })
        }}>
          {doctors.map((doctor, index) => (
            <div
              key={index}
              style={{
                ...styles.doctorCard,
                ...(window.innerWidth <= 768 && { 
                  padding: '1.5rem',
                  margin: '0 0.5rem'
                })
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(124, 42, 98, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
              }}
            >
              <div style={styles.rating}>⭐ {doctor.rating}</div>
              <div style={styles.doctorImage}>{doctor.initial}</div>
              <h3 style={styles.doctorName}>{doctor.name}</h3>
              <p style={styles.doctorSpecialty}>{doctor.specialty}</p>
              <p style={styles.doctorExperience}>Experience: {doctor.experience}</p>
              
              <div style={styles.buttonContainer}>
                <button
                  style={{
                    ...styles.viewProfileButton,
                    ...(window.innerWidth <= 480 && { 
                      padding: '0.6rem 1.2rem',
                      fontSize: '0.9rem'
                    })
                  }}
                  onClick={() => handleViewProfile(doctor)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#7C2A62';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#7C2A62';
                  }}
                >
                  View Profile
                </button>
                
                <button
                  style={{
                    ...styles.bookConsultationButton,
                    ...(window.innerWidth <= 480 && { 
                      padding: '0.6rem 1.2rem',
                      fontSize: '0.9rem'
                    })
                  }}
                  onClick={() => handleBookConsultation(doctor)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#5a1a4a';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#7C2A62';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Profile Modal */}
        {selectedDoctor && (
          <div style={styles.profileModal} onClick={handleCloseProfile}>
            <div style={{
              ...styles.profileContent,
              ...(window.innerWidth <= 480 && { 
                padding: '1.5rem',
                margin: '1rem'
              })
            }} onClick={(e) => e.stopPropagation()}>
              <button 
                style={{
                  ...styles.closeButton,
                  ...(window.innerWidth <= 480 && {
                    top: '0.5rem',
                    right: '0.5rem'
                  })
                }}
                onClick={handleCloseProfile}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#F7D9EB';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                ×
              </button>
              
              <div style={styles.profileImage}>{selectedDoctor.initial}</div>
              <h2 style={styles.profileName}>{selectedDoctor.name}</h2>
              <p style={styles.profileSpecialty}>{selectedDoctor.specialty}</p>
              <div style={styles.profileRating}>⭐ {selectedDoctor.rating} Rating</div>

              <div style={styles.profileDetails}>
                <div style={styles.detailItem}>
                  <div style={styles.detailLabel}>Education</div>
                  <div style={styles.detailValue}>{selectedDoctor.education}</div>
                </div>
                <div style={styles.detailItem}>
                  <div style={styles.detailLabel}>Experience</div>
                  <div style={styles.detailValue}>{selectedDoctor.experience}</div>
                </div>
                <div style={styles.detailItem}>
                  <div style={styles.detailLabel}>Languages Spoken</div>
                  <div style={styles.detailValue}>{selectedDoctor.languages}</div>
                </div>
                <div style={styles.detailItem}>
                  <div style={styles.detailLabel}>Consultation Fee</div>
                  <div style={styles.detailValue}>{selectedDoctor.consultationFee}</div>
                </div>
                <div style={styles.detailItem}>
                  <div style={styles.detailLabel}>Availability</div>
                  <div style={styles.detailValue}>{selectedDoctor.availability}</div>
                </div>
                <div style={styles.detailItem}>
                  <div style={styles.detailLabel}>Patients Treated</div>
                  <div style={styles.detailValue}>{selectedDoctor.patients}</div>
                </div>
                <div style={styles.detailItem}>
                  <div style={styles.detailLabel}>About</div>
                  <div style={styles.detailValue}>{selectedDoctor.about}</div>
                </div>
              </div>

              <button
                style={styles.modalBookConsultationButton}
                onClick={() => handleBookConsultation(selectedDoctor)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#5a1a4a';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#7C2A62';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Book Consultation
              </button>

              <div style={styles.loginMessage}>
                Please 
                <span style={styles.loginLink} onClick={handleLoginLinkClick}>
                  login
                </span> 
                to book a consultation
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Doctors;