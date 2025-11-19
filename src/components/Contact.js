// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const styles = {
//     contact: {
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
//     contactContent: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '4rem',
//     },
//     contactInfo: {
//       padding: '3rem',
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//     },
//     contactInfoTitle: {
//       fontSize: '1.8rem',
//       marginBottom: '2rem',
//       color: '#7C2A62',
//       fontWeight: '600',
//     },
//     contactItems: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '2rem',
//     },
//     contactItem: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       gap: '1rem',
//     },
//     contactIcon: {
//       fontSize: '1.5rem',
//       color: '#7C2A62',
//       marginTop: '0.2rem',
//     },
//     contactText: {
//       flex: 1,
//     },
//     contactLabel: {
//       fontWeight: '600',
//       color: '#333',
//       marginBottom: '0.3rem',
//     },
//     contactDetail: {
//       color: '#666',
//     },
//     contactLink: {
//       color: '#7C2A62',
//       textDecoration: 'none',
//       transition: 'color 0.3s ease',
//     },
//     contactForm: {
//       padding: '3rem',
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//     },
//     formGroup: {
//       marginBottom: '1.5rem',
//     },
//     formInput: {
//       width: '100%',
//       padding: '1rem',
//       border: '2px solid #e8e8e8',
//       borderRadius: '10px',
//       fontSize: '1rem',
//       transition: 'border-color 0.3s ease',
//       outline: 'none',
//     },
//     formInputError: {
//       borderColor: '#ff4444',
//     },
//     formTextarea: {
//       width: '100%',
//       padding: '1rem',
//       border: '2px solid #e8e8e8',
//       borderRadius: '10px',
//       fontSize: '1rem',
//       minHeight: '120px',
//       resize: 'vertical',
//       transition: 'border-color 0.3s ease',
//       outline: 'none',
//       fontFamily: 'inherit',
//     },
//     errorText: {
//       color: '#ff4444',
//       fontSize: '0.8rem',
//       marginTop: '0.3rem',
//     },
//     submitButton: {
//       width: '100%',
//       padding: '1rem 2rem',
//       backgroundColor: '#7C2A62',
//       color: 'white',
//       border: 'none',
//       borderRadius: '10px',
//       cursor: 'pointer',
//       fontSize: '1.1rem',
//       fontWeight: 'bold',
//       transition: 'all 0.3s ease',
//     },
//     submitButtonDisabled: {
//       backgroundColor: '#cccccc',
//       cursor: 'not-allowed',
//     },
//     // Mobile styles
//     '@media (maxWidth: 768px)': {
//       contact: {
//         padding: '3rem 1rem',
//       },
//       sectionTitle: {
//         fontSize: '2rem',
//       },
//       contactContent: {
//         gridTemplateColumns: '1fr',
//         gap: '2rem',
//       },
//       contactInfo: {
//         padding: '2rem',
//       },
//       contactForm: {
//         padding: '2rem',
//       }
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//     if (errors[field]) {
//       setErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
//     if (!formData.message.trim()) newErrors.message = 'Message is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
    
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setIsSubmitting(true);
//     // Simulate form submission
//     setTimeout(() => {
//       alert('Thank you for your message! We will get back to you soon.');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   const contactInfo = [
//     {
//       icon: '📧',
//       label: 'Email',
//       detail: 'support@quickmed.com',
//       type: 'email'
//     },
//     {
//       icon: '📞',
//       label: 'Phone',
//       detail: '+91 9392416962',
//       type: 'phone'
//     },
//     {
//       icon: '🏠',
//       label: 'Address',
//       detail: '123 Healthcare Street, Medical District, City - 500001'
//     },
//     {
//       icon: '🕒',
//       label: 'Working Hours',
//       detail: '24/7 Emergency Services'
//     }
//   ];

//   return (
//     <section style={styles.contact}>
//       <div style={styles.container}>
//         <h2 style={styles.sectionTitle}>Contact Us</h2>
//         <p style={styles.sectionSubtitle}>
//           We're here to help with your healthcare needs
//         </p>

//         <div style={styles.contactContent}>
//           <div style={styles.contactInfo}>
//             <h3 style={styles.contactInfoTitle}>Get in Touch</h3>
//             <div style={styles.contactItems}>
//               {contactInfo.map((item, index) => (
//                 <div key={index} style={styles.contactItem}>
//                   <div style={styles.contactIcon}>{item.icon}</div>
//                   <div style={styles.contactText}>
//                     <div style={styles.contactLabel}>{item.label}</div>
//                     {item.type === 'email' || item.type === 'phone' ? (
//                       <a
//                         href={item.type === 'email' ? `mailto:${item.detail}` : `tel:${item.detail}`}
//                         style={styles.contactLink}
//                         onMouseEnter={(e) => {
//                           e.target.style.color = '#5a1a4a';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.target.style.color = '#7C2A62';
//                         }}
//                       >
//                         {item.detail}
//                       </a>
//                     ) : (
//                       <div style={styles.contactDetail}>{item.detail}</div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <form style={styles.contactForm} onSubmit={handleSubmit}>
//             <div style={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 style={{
//                   ...styles.formInput,
//                   ...(errors.name && styles.formInputError)
//                 }}
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//               />
//               {errors.name && <span style={styles.errorText}>{errors.name}</span>}
//             </div>

//             <div style={styles.formGroup}>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 style={{
//                   ...styles.formInput,
//                   ...(errors.email && styles.formInputError)
//                 }}
//                 value={formData.email}
//                 onChange={(e) => handleInputChange('email', e.target.value)}
//               />
//               {errors.email && <span style={styles.errorText}>{errors.email}</span>}
//             </div>

//             <div style={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 style={{
//                   ...styles.formInput,
//                   ...(errors.subject && styles.formInputError)
//                 }}
//                 value={formData.subject}
//                 onChange={(e) => handleInputChange('subject', e.target.value)}
//               />
//               {errors.subject && <span style={styles.errorText}>{errors.subject}</span>}
//             </div>

//             <div style={styles.formGroup}>
//               <textarea
//                 placeholder="Your Message"
//                 style={{
//                   ...styles.formTextarea,
//                   ...(errors.message && styles.formInputError)
//                 }}
//                 value={formData.message}
//                 onChange={(e) => handleInputChange('message', e.target.value)}
//               />
//               {errors.message && <span style={styles.errorText}>{errors.message}</span>}
//             </div>

//             <button
//               type="submit"
//               style={{
//                 ...styles.submitButton,
//                 ...(isSubmitting && styles.submitButtonDisabled)
//               }}
//               disabled={isSubmitting}
//               onMouseEnter={(e) => {
//                 if (!isSubmitting) {
//                   e.target.style.backgroundColor = '#5a1a4a';
//                   e.target.style.transform = 'scale(1.02)';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (!isSubmitting) {
//                   e.target.style.backgroundColor = '#7C2A62';
//                   e.target.style.transform = 'scale(1)';
//                 }
//               }}
//             >
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// import React, { useState, useEffect } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Check screen size on mount and resize
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
    
//     return () => {
//       window.removeEventListener('resize', checkScreenSize);
//     };
//   }, []);

//   // Base styles
//   const baseStyles = {
//     contact: {
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
//     contactContent: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '4rem',
//     },
//     contactInfo: {
//       padding: '3rem',
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//     },
//     contactInfoTitle: {
//       fontSize: '1.8rem',
//       marginBottom: '2rem',
//       color: '#7C2A62',
//       fontWeight: '600',
//     },
//     contactItems: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '2rem',
//     },
//     contactItem: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       gap: '1rem',
//     },
//     contactIcon: {
//       fontSize: '1.5rem',
//       color: '#7C2A62',
//       marginTop: '0.2rem',
//     },
//     contactText: {
//       flex: 1,
//     },
//     contactLabel: {
//       fontWeight: '600',
//       color: '#333',
//       marginBottom: '0.3rem',
//     },
//     contactDetail: {
//       color: '#666',
//     },
//     contactLink: {
//       color: '#7C2A62',
//       textDecoration: 'none',
//       transition: 'color 0.3s ease',
//     },
//     contactForm: {
//       padding: '3rem',
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//     },
//     formGroup: {
//       marginBottom: '1.5rem',
//     },
//     formInput: {
//       width: '100%',
//       padding: '1rem',
//       border: '2px solid #e8e8e8',
//       borderRadius: '10px',
//       fontSize: '1rem',
//       transition: 'border-color 0.3s ease',
//       outline: 'none',
//     },
//     formInputError: {
//       borderColor: '#ff4444',
//     },
//     formTextarea: {
//       width: '100%',
//       padding: '1rem',
//       border: '2px solid #e8e8e8',
//       borderRadius: '10px',
//       fontSize: '1rem',
//       minHeight: '120px',
//       resize: 'vertical',
//       transition: 'border-color 0.3s ease',
//       outline: 'none',
//       fontFamily: 'inherit',
//     },
//     errorText: {
//       color: '#ff4444',
//       fontSize: '0.8rem',
//       marginTop: '0.3rem',
//     },
//     submitButton: {
//       width: '100%',
//       padding: '1rem 2rem',
//       backgroundColor: '#7C2A62',
//       color: 'white',
//       border: 'none',
//       borderRadius: '10px',
//       cursor: 'pointer',
//       fontSize: '1.1rem',
//       fontWeight: 'bold',
//       transition: 'all 0.3s ease',
//     },
//     submitButtonDisabled: {
//       backgroundColor: '#cccccc',
//       cursor: 'not-allowed',
//     },
//   };

//   // Mobile styles
//   const mobileStyles = {
//     contact: {
//       padding: '3rem 1rem',
//     },
//     sectionTitle: {
//       fontSize: '2rem',
//     },
//     sectionSubtitle: {
//       fontSize: '1rem',
//       marginBottom: '2rem',
//     },
//     contactContent: {
//       gridTemplateColumns: '1fr',
//       gap: '2rem',
//     },
//     contactInfo: {
//       padding: '2rem',
//     },
//     contactForm: {
//       padding: '2rem',
//     },
//     contactItem: {
//       flexDirection: 'column',
//       gap: '0.5rem',
//     }
//   };

//   // Combine styles based on screen size
//   const getCombinedStyles = () => {
//     if (!isMobile) return baseStyles;
    
//     const combined = { ...baseStyles };
//     Object.keys(mobileStyles).forEach(key => {
//       combined[key] = { ...baseStyles[key], ...mobileStyles[key] };
//     });
//     return combined;
//   };

//   const styles = getCombinedStyles();

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//     if (errors[field]) {
//       setErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
//     if (!formData.message.trim()) newErrors.message = 'Message is required';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
    
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setIsSubmitting(true);
//     setTimeout(() => {
//       alert('Thank you for your message! We will get back to you soon.');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   const contactInfo = [
//     {
//       icon: '📧',
//       label: 'Email',
//       detail: 'support@quickmed.com',
//       type: 'email'
//     },
//     {
//       icon: '📞',
//       label: 'Phone',
//       detail: '+91 9392416962',
//       type: 'phone'
//     },
//     {
//       icon: '🏠',
//       label: 'Address',
//       detail: '123 Healthcare Street, Medical District, City - 500001'
//     },
//     {
//       icon: '🕒',
//       label: 'Working Hours',
//       detail: '24/7 Emergency Services'
//     }
//   ];

//   return (
//     <section style={styles.contact}>
//       <div style={styles.container}>
//         <h2 style={styles.sectionTitle}>Contact Us</h2>
//         <p style={styles.sectionSubtitle}>
//           We're here to help with your healthcare needs
//         </p>

//         <div style={styles.contactContent}>
//           <div style={styles.contactInfo}>
//             <h3 style={styles.contactInfoTitle}>Get in Touch</h3>
//             <div style={styles.contactItems}>
//               {contactInfo.map((item, index) => (
//                 <div key={index} style={styles.contactItem}>
//                   <div style={styles.contactIcon}>{item.icon}</div>
//                   <div style={styles.contactText}>
//                     <div style={styles.contactLabel}>{item.label}</div>
//                     {item.type === 'email' || item.type === 'phone' ? (
//                       <a
//                         href={item.type === 'email' ? `mailto:${item.detail}` : `tel:${item.detail}`}
//                         style={styles.contactLink}
//                         onMouseEnter={(e) => {
//                           e.target.style.color = '#5a1a4a';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.target.style.color = '#7C2A62';
//                         }}
//                       >
//                         {item.detail}
//                       </a>
//                     ) : (
//                       <div style={styles.contactDetail}>{item.detail}</div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <form style={styles.contactForm} onSubmit={handleSubmit}>
//             <div style={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 style={{
//                   ...styles.formInput,
//                   ...(errors.name && styles.formInputError)
//                 }}
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//               />
//               {errors.name && <span style={styles.errorText}>{errors.name}</span>}
//             </div>

//             <div style={styles.formGroup}>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 style={{
//                   ...styles.formInput,
//                   ...(errors.email && styles.formInputError)
//                 }}
//                 value={formData.email}
//                 onChange={(e) => handleInputChange('email', e.target.value)}
//               />
//               {errors.email && <span style={styles.errorText}>{errors.email}</span>}
//             </div>

//             <div style={styles.formGroup}>
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 style={{
//                   ...styles.formInput,
//                   ...(errors.subject && styles.formInputError)
//                 }}
//                 value={formData.subject}
//                 onChange={(e) => handleInputChange('subject', e.target.value)}
//               />
//               {errors.subject && <span style={styles.errorText}>{errors.subject}</span>}
//             </div>

//             <div style={styles.formGroup}>
//               <textarea
//                 placeholder="Your Message"
//                 style={{
//                   ...styles.formTextarea,
//                   ...(errors.message && styles.formInputError)
//                 }}
//                 value={formData.message}
//                 onChange={(e) => handleInputChange('message', e.target.value)}
//               />
//               {errors.message && <span style={styles.errorText}>{errors.message}</span>}
//             </div>

//             <button
//               type="submit"
//               style={{
//                 ...styles.submitButton,
//                 ...(isSubmitting && styles.submitButtonDisabled)
//               }}
//               disabled={isSubmitting}
//               onMouseEnter={(e) => {
//                 if (!isSubmitting) {
//                   e.target.style.backgroundColor = '#5a1a4a';
//                   e.target.style.transform = 'scale(1.02)';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (!isSubmitting) {
//                   e.target.style.backgroundColor = '#7C2A62';
//                   e.target.style.transform = 'scale(1)';
//                 }
//               }}
//             >
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const sectionRef = useRef(null);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Base styles
  const baseStyles = {
    contact: {
      padding: '6rem 2rem',
      backgroundColor: '#f8f9fa',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      opacity: 0,
      transform: 'translateY(30px)',
      transition: 'all 0.8s ease-out',
      ...(isVisible && {
        opacity: 1,
        transform: 'translateY(0)'
      })
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    sectionTitle: {
      fontSize: '3.5rem',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #7C2A62 0%, #9d4b8a 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: '800',
      letterSpacing: '-0.5px',
    },
    sectionSubtitle: {
      fontSize: '1.3rem',
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    contactContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'start',
    },
    contactInfo: {
      padding: '3rem',
      backgroundColor: 'white',
      borderRadius: '25px',
      boxShadow: '0 15px 40px rgba(124, 42, 98, 0.12)',
      border: '1px solid rgba(124, 42, 98, 0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    contactInfoHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 50px rgba(124, 42, 98, 0.15)',
    },
    contactInfoTitle: {
      fontSize: '2rem',
      marginBottom: '2rem',
      color: '#7C2A62',
      fontWeight: '700',
      position: 'relative',
    },
    titleUnderline: {
      position: 'absolute',
      bottom: '-10px',
      left: '0',
      width: '60px',
      height: '4px',
      background: 'linear-gradient(90deg, #7C2A62, #ff6b9d)',
      borderRadius: '2px',
    },
    contactItems: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2.5rem',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1.5rem',
      padding: '1.5rem',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(124, 42, 98, 0.03)',
    },
    contactItemHover: {
      backgroundColor: 'rgba(124, 42, 98, 0.08)',
      transform: 'translateX(5px)',
    },
    contactIcon: {
      fontSize: '2rem',
      color: '#7C2A62',
      marginTop: '0.2rem',
      transition: 'transform 0.3s ease',
    },
    contactIconHover: {
      transform: 'scale(1.1)',
    },
    contactText: {
      flex: 1,
    },
    contactLabel: {
      fontWeight: '700',
      color: '#333',
      marginBottom: '0.5rem',
      fontSize: '1.1rem',
    },
    contactDetail: {
      color: '#666',
      lineHeight: '1.5',
    },
    contactLink: {
      color: '#7C2A62',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontWeight: '500',
    },
    contactLinkHover: {
      color: '#5a1a4a',
      textShadow: '0 0 8px rgba(124, 42, 98, 0.2)',
    },
    additionalInfo: {
      marginTop: '3rem',
      padding: '2rem',
      backgroundColor: 'rgba(124, 42, 98, 0.05)',
      borderRadius: '15px',
      borderLeft: '4px solid #7C2A62',
    },
    infoTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#7C2A62',
      marginBottom: '1rem',
    },
    infoList: {
      listStyle: 'none',
      padding: 0,
    },
    infoItem: {
      padding: '0.5rem 0',
      color: '#555',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    bullet: {
      width: '6px',
      height: '6px',
      backgroundColor: '#7C2A62',
      borderRadius: '50%',
    },
    contactForm: {
      padding: '3rem',
      backgroundColor: 'white',
      borderRadius: '25px',
      boxShadow: '0 15px 40px rgba(124, 42, 98, 0.12)',
      border: '1px solid rgba(124, 42, 98, 0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    contactFormHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 50px rgba(124, 42, 98, 0.15)',
    },
    formGroup: {
      marginBottom: '2rem',
      position: 'relative',
    },
    formLabel: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      color: '#333',
      fontSize: '0.95rem',
    },
    formInput: {
      width: '100%',
      padding: '1.2rem 1rem',
      border: '2px solid #e8e8e8',
      borderRadius: '12px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      backgroundColor: '#fcfcfc',
    },
    formInputFocus: {
      borderColor: '#7C2A62',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px rgba(124, 42, 98, 0.1)',
    },
    formInputError: {
      borderColor: '#ff4444',
      backgroundColor: '#fff5f5',
    },
    formTextarea: {
      width: '100%',
      padding: '1.2rem 1rem',
      border: '2px solid #e8e8e8',
      borderRadius: '12px',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
      transition: 'all 0.3s ease',
      outline: 'none',
      fontFamily: 'inherit',
      backgroundColor: '#fcfcfc',
    },
    formTextareaFocus: {
      borderColor: '#7C2A62',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px rgba(124, 42, 98, 0.1)',
    },
    errorText: {
      color: '#ff4444',
      fontSize: '0.85rem',
      marginTop: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',
    },
    submitButton: {
      width: '100%',
      padding: '1.3rem 2rem',
      background: 'linear-gradient(135deg, #7C2A62 0%, #9d4b8a 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    submitButtonHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 25px rgba(124, 42, 98, 0.3)',
    },
    submitButtonDisabled: {
      background: 'linear-gradient(135deg, #cccccc 0%, #aaaaaa 100%)',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
    buttonRipple: {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      transform: 'scale(0)',
      animation: 'ripple 0.6s linear',
      pointerEvents: 'none',
    },
    emergencyBanner: {
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)',
      color: 'white',
      padding: '2rem',
      borderRadius: '20px',
      textAlign: 'center',
      marginTop: '3rem',
      boxShadow: '0 10px 30px rgba(255, 107, 107, 0.3)',
    },
    emergencyTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '0.5rem',
    },
    emergencyNumber: {
      fontSize: '2rem',
      fontWeight: '800',
      marginBottom: '1rem',
    },
    emergencyText: {
      fontSize: '1rem',
      opacity: '0.9',
    },
  };

  // Mobile styles
  const mobileStyles = {
    contact: {
      padding: '4rem 1rem',
    },
    sectionTitle: {
      fontSize: '2.5rem',
    },
    sectionSubtitle: {
      fontSize: '1.1rem',
      marginBottom: '3rem',
    },
    contactContent: {
      gridTemplateColumns: '1fr',
      gap: '2.5rem',
    },
    contactInfo: {
      padding: '2rem',
    },
    contactForm: {
      padding: '2rem',
    },
    contactItem: {
      flexDirection: 'column',
      gap: '1rem',
      padding: '1.2rem',
    },
    emergencyBanner: {
      padding: '1.5rem',
    },
    emergencyNumber: {
      fontSize: '1.7rem',
    },
  };

  // Combine styles based on screen size
  const getCombinedStyles = () => {
    if (!isMobile) return baseStyles;
    
    const combined = { ...baseStyles };
    Object.keys(mobileStyles).forEach(key => {
      combined[key] = { ...baseStyles[key], ...mobileStyles[key] };
    });
    return combined;
  };

  const styles = getCombinedStyles();

  // State for hover effects
  const [hoverStates, setHoverStates] = useState({
    contactInfo: false,
    contactForm: false,
    contactItems: Array(4).fill(false),
    submitButton: false,
    formFocus: {
      name: false,
      email: false,
      subject: false,
      message: false
    }
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleFocus = (field) => {
    setHoverStates(prev => ({
      ...prev,
      formFocus: {
        ...prev.formFocus,
        [field]: true
      }
    }));
  };

  const handleBlur = (field) => {
    setHoverStates(prev => ({
      ...prev,
      formFocus: {
        ...prev.formFocus,
        [field]: false
      }
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email Us',
      detail: 'support@quickmed.com',
      type: 'email',
      description: 'Send us an email anytime for non-urgent queries'
    },
    {
      icon: '📞',
      label: 'Call Us',
      detail: '+91 9392416962',
      type: 'phone',
      description: 'Available 24/7 for urgent medical consultations'
    },
    {
      icon: '🏠',
      label: 'Visit Us',
      detail: '123 Healthcare Street, Medical District, City - 500001',
      description: 'Main hospital location with full facilities'
    },
    {
      icon: '🕒',
      label: 'Working Hours',
      detail: '24/7 Emergency Services',
      description: 'Outpatient: 8 AM - 8 PM | Emergency: 24/7'
    }
  ];

  const quickServices = [
    'Online Consultation Booking',
    'Emergency Ambulance Service',
    'Medical Reports Delivery',
    'Pharmacy & Medicine Delivery',
    'Home Care Services',
    'Specialist Appointments'
  ];

  return (
    <section style={styles.contact} ref={sectionRef}>
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <p style={styles.sectionSubtitle}>
            We're here to provide you with the best healthcare experience. 
            Reach out to us for appointments, emergencies, or any medical queries.
          </p>
        </div>

        <div style={styles.contactContent}>
          <div 
            style={{
              ...styles.contactInfo,
              ...(hoverStates.contactInfo && styles.contactInfoHover)
            }}
            onMouseEnter={() => setHoverStates(prev => ({ ...prev, contactInfo: true }))}
            onMouseLeave={() => setHoverStates(prev => ({ ...prev, contactInfo: false }))}
          >
            <h3 style={styles.contactInfoTitle}>
              Contact Information
              <div style={styles.titleUnderline}></div>
            </h3>
            
            <div style={styles.contactItems}>
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  style={{
                    ...styles.contactItem,
                    ...(hoverStates.contactItems[index] && styles.contactItemHover)
                  }}
                  onMouseEnter={() => {
                    const newHoverStates = [...hoverStates.contactItems];
                    newHoverStates[index] = true;
                    setHoverStates(prev => ({ ...prev, contactItems: newHoverStates }));
                  }}
                  onMouseLeave={() => {
                    const newHoverStates = [...hoverStates.contactItems];
                    newHoverStates[index] = false;
                    setHoverStates(prev => ({ ...prev, contactItems: newHoverStates }));
                  }}
                >
                  <div 
                    style={{
                      ...styles.contactIcon,
                      ...(hoverStates.contactItems[index] && styles.contactIconHover)
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={styles.contactText}>
                    <div style={styles.contactLabel}>{item.label}</div>
                    {item.type === 'email' || item.type === 'phone' ? (
                      <a
                        href={item.type === 'email' ? `mailto:${item.detail}` : `tel:${item.detail}`}
                        style={{
                          ...styles.contactLink,
                          ...(hoverStates.contactItems[index] && styles.contactLinkHover)
                        }}
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <div style={styles.contactDetail}>{item.detail}</div>
                    )}
                    <div style={{ ...styles.contactDetail, fontSize: '0.9rem', marginTop: '0.3rem' }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.additionalInfo}>
              <h4 style={styles.infoTitle}>Quick Services Available</h4>
              <ul style={styles.infoList}>
                {quickServices.map((service, index) => (
                  <li key={index} style={styles.infoItem}>
                    <div style={styles.bullet}></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form 
            style={{
              ...styles.contactForm,
              ...(hoverStates.contactForm && styles.contactFormHover)
            }}
            onMouseEnter={() => setHoverStates(prev => ({ ...prev, contactForm: true }))}
            onMouseLeave={() => setHoverStates(prev => ({ ...prev, contactForm: false }))}
            onSubmit={handleSubmit}
          >
            <h3 style={styles.contactInfoTitle}>
              Send us a Message
              <div style={styles.titleUnderline}></div>
            </h3>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                style={{
                  ...styles.formInput,
                  ...(hoverStates.formFocus.name && styles.formInputFocus),
                  ...(errors.name && styles.formInputError)
                }}
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
              />
              {errors.name && (
                <span style={styles.errorText}>⚠️ {errors.name}</span>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Email Address *</label>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  ...styles.formInput,
                  ...(hoverStates.formFocus.email && styles.formInputFocus),
                  ...(errors.email && styles.formInputError)
                }}
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
              />
              {errors.email && (
                <span style={styles.errorText}>⚠️ {errors.email}</span>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Subject *</label>
              <input
                type="text"
                placeholder="What is this regarding?"
                style={{
                  ...styles.formInput,
                  ...(hoverStates.formFocus.subject && styles.formInputFocus),
                  ...(errors.subject && styles.formInputError)
                }}
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
              />
              {errors.subject && (
                <span style={styles.errorText}>⚠️ {errors.subject}</span>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Message *</label>
              <textarea
                placeholder="Please describe your query in detail..."
                style={{
                  ...styles.formTextarea,
                  ...(hoverStates.formFocus.message && styles.formTextareaFocus),
                  ...(errors.message && styles.formInputError)
                }}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
              />
              {errors.message && (
                <span style={styles.errorText}>⚠️ {errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              style={{
                ...styles.submitButton,
                ...(hoverStates.submitButton && !isSubmitting && styles.submitButtonHover),
                ...(isSubmitting && styles.submitButtonDisabled)
              }}
              disabled={isSubmitting}
              onMouseEnter={() => !isSubmitting && setHoverStates(prev => ({ ...prev, submitButton: true }))}
              onMouseLeave={() => !isSubmitting && setHoverStates(prev => ({ ...prev, submitButton: false }))}
            >
              {isSubmitting ? (
                <>
                  <span style={{ marginRight: '8px' }}>⏳</span>
                  Sending Your Message...
                </>
              ) : (
                <>
                  <span style={{ marginRight: '8px' }}>📨</span>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div style={styles.emergencyBanner}>
          <div style={styles.emergencyTitle}>Medical Emergency?</div>
          <div style={styles.emergencyNumber}>🚑 +91 9392416962</div>
          <div style={styles.emergencyText}>
            Immediate assistance available 24/7. Don't hesitate to call in case of emergencies.
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Contact;