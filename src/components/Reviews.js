// import React, { useState } from 'react';

// const Reviews = ({ onWriteReview }) => {
//   const [reviews] = useState([
//     {
//       id: 1,
//       name: 'Rahul Sharma',
//       rating: 5,
//       date: '2024-01-15',
//       comment: 'QuickMed saved me during my emergency! The medicine delivery was super fast - received within 25 minutes. Highly recommended!',
//       avatar: 'RS'
//     },
//     {
//       id: 2,
//       name: 'Priya Patel',
//       rating: 4,
//       date: '2024-01-12',
//       comment: 'Excellent service! The doctor consultation was smooth and the medicine reached within 30 minutes as promised.',
//       avatar: 'PP'
//     },
//     {
//       id: 3,
//       name: 'Ankit Verma',
//       rating: 5,
//       date: '2024-01-10',
//       comment: 'Best healthcare app I have used. The live tracking feature is amazing and the doctors are very professional.',
//       avatar: 'AV'
//     }
//   ]);

//   const styles = {
//     reviews: {
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
//     ratingSummary: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 2fr',
//       gap: '3rem',
//       marginBottom: '4rem',
//       padding: '3rem',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '20px',
//     },
//     overallRating: {
//       textAlign: 'center',
//       padding: '2rem',
//     },
//     overallScore: {
//       fontSize: '4rem',
//       fontWeight: 'bold',
//       color: '#7C2A62',
//       margin: '0 0 1rem 0',
//     },
//     starsLarge: {
//       fontSize: '2rem',
//       marginBottom: '1rem',
//     },
//     ratingCount: {
//       color: '#666',
//       fontSize: '1.1rem',
//     },
//     ratingBreakdown: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '1rem',
//     },
//     ratingBar: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '1rem',
//     },
//     barContainer: {
//       flex: 1,
//       height: '8px',
//       backgroundColor: '#e8e8e8',
//       borderRadius: '4px',
//       overflow: 'hidden',
//     },
//     barFill: {
//       height: '100%',
//       backgroundColor: '#7C2A62',
//     },
//     reviewsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
//       gap: '2rem',
//       marginBottom: '4rem',
//     },
//     reviewCard: {
//       padding: '2rem',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '15px',
//       boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
//       transition: 'all 0.3s ease',
//     },
//     reviewHeader: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'flex-start',
//       marginBottom: '1.5rem',
//     },
//     reviewerInfo: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '1rem',
//     },
//     avatar: {
//       width: '50px',
//       height: '50px',
//       borderRadius: '50%',
//       backgroundColor: '#F7D9EB',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontWeight: 'bold',
//       color: '#7C2A62',
//     },
//     reviewerName: {
//       margin: '0 0 0.5rem 0',
//       color: '#333',
//       fontSize: '1.2rem',
//     },
//     reviewStars: {
//       color: '#FFD700',
//       fontSize: '1rem',
//     },
//     reviewDate: {
//       color: '#666',
//       fontSize: '0.9rem',
//     },
//     reviewComment: {
//       color: '#333',
//       lineHeight: '1.6',
//       fontSize: '1rem',
//       margin: 0,
//     },
//     addReviewSection: {
//       textAlign: 'center',
//       padding: '3rem',
//       backgroundColor: '#F7D9EB',
//       borderRadius: '20px',
//     },
//     addReviewTitle: {
//       fontSize: '2rem',
//       marginBottom: '1rem',
//       color: '#7C2A62',
//     },
//     addReviewText: {
//       color: '#666',
//       marginBottom: '2rem',
//       fontSize: '1.1rem',
//     },
//     addReviewButton: {
//       padding: '1rem 2.5rem',
//       backgroundColor: '#7C2A62',
//       border: 'none',
//       borderRadius: '25px',
//       cursor: 'pointer',
//       fontSize: '1.1rem',
//       fontWeight: 'bold',
//       color: 'white',
//       transition: 'all 0.3s ease',
//     },
//     // Mobile styles
//     '@media (maxWidth: 768px)': {
//       reviews: {
//         padding: '3rem 1rem',
//       },
//       sectionTitle: {
//         fontSize: '2rem',
//       },
//       ratingSummary: {
//         gridTemplateColumns: '1fr',
//         gap: '2rem',
//         padding: '2rem',
//       },
//       reviewsGrid: {
//         gridTemplateColumns: '1fr',
//       },
//       reviewHeader: {
//         flexDirection: 'column',
//         gap: '1rem',
//       },
//       addReviewSection: {
//         padding: '2rem',
//       }
//     }
//   };

//   const renderStars = (rating) => {
//     return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
//   };

//   const ratingBars = [
//     { stars: 5, percentage: 68 },
//     { stars: 4, percentage: 24 },
//     { stars: 3, percentage: 6 },
//     { stars: 2, percentage: 2 },
//     { stars: 1, percentage: 0 }
//   ];

//   return (
//     <section style={styles.reviews}>
//       <div style={styles.container}>
//         <h2 style={styles.sectionTitle}>Patient Reviews</h2>
//         <p style={styles.sectionSubtitle}>
//           See what our patients say about their experience with QuickMed
//         </p>

//         <div style={styles.ratingSummary}>
//           <div style={styles.overallRating}>
//             <div style={styles.overallScore}>4.8</div>
//             <div style={styles.starsLarge}>{renderStars(5)}</div>
//             <div style={styles.ratingCount}>Based on 1,234 reviews</div>
//           </div>
//           <div style={styles.ratingBreakdown}>
//             {ratingBars.map((bar, index) => (
//               <div key={index} style={styles.ratingBar}>
//                 <span>{bar.stars} stars</span>
//                 <div style={styles.barContainer}>
//                   <div style={{...styles.barFill, width: `${bar.percentage}%`}}></div>
//                 </div>
//                 <span>{bar.percentage}%</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div style={styles.reviewsGrid}>
//           {reviews.map((review) => (
//             <div
//               key={review.id}
//               style={styles.reviewCard}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-5px)';
//                 e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 42, 98, 0.15)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
//               }}
//             >
//               <div style={styles.reviewHeader}>
//                 <div style={styles.reviewerInfo}>
//                   <div style={styles.avatar}>{review.avatar}</div>
//                   <div>
//                     <h4 style={styles.reviewerName}>{review.name}</h4>
//                     <div style={styles.reviewStars}>{renderStars(review.rating)}</div>
//                   </div>
//                 </div>
//                 <span style={styles.reviewDate}>{review.date}</span>
//               </div>
//               <p style={styles.reviewComment}>{review.comment}</p>
//             </div>
//           ))}
//         </div>

//         <div style={styles.addReviewSection}>
//           <h3 style={styles.addReviewTitle}>Share Your Experience</h3>
//           <p style={styles.addReviewText}>
//             Help others make informed decisions about their healthcare
//           </p>
//           <button
//             style={styles.addReviewButton}
//             onClick={onWriteReview}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = '#5a1a4a';
//               e.target.style.transform = 'scale(1.05)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = '#7C2A62';
//               e.target.style.transform = 'scale(1)';
//             }}
//           >
//             Write a Review
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;
import React, { useState } from 'react';

const Reviews = ({ onWriteReview }) => {
  const [reviews] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      rating: 5,
      date: '2024-01-15',
      comment: 'QuickMed saved me during my emergency! The medicine delivery was super fast - received within 25 minutes. Highly recommended!',
      avatar: 'RS'
    },
    {
      id: 2,
      name: 'Priya Patel',
      rating: 4,
      date: '2024-01-12',
      comment: 'Excellent service! The doctor consultation was smooth and the medicine reached within 30 minutes as promised.',
      avatar: 'PP'
    },
    {
      id: 3,
      name: 'Ankit Verma',
      rating: 5,
      date: '2024-01-10',
      comment: 'Best healthcare app I have used. The live tracking feature is amazing and the doctors are very professional.',
      avatar: 'AV'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      rating: 5,
      date: '2024-01-08',
      comment: '24/7 doctor consultation is a lifesaver! Got immediate help for my child fever at midnight.',
      avatar: 'SR'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      rating: 4,
      date: '2024-01-05',
      comment: 'Great platform for medicine delivery. The delivery executive was very professional and polite.',
      avatar: 'VS'
    },
    {
      id: 6,
      name: 'Meera Joshi',
      rating: 5,
      date: '2024-01-03',
      comment: 'The OTC products section is very comprehensive. Found all my regular health supplements easily.',
      avatar: 'MJ'
    }
  ]);

  const styles = {
    reviews: {
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
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    ratingSummary: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '3rem',
      marginBottom: '4rem',
      padding: '3rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '20px',
    },
    overallRating: {
      textAlign: 'center',
      padding: '2rem',
    },
    overallScore: {
      fontSize: '4rem',
      fontWeight: 'bold',
      color: '#7C2A62',
      margin: '0 0 1rem 0',
    },
    starsLarge: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    ratingCount: {
      color: '#666',
      fontSize: '1.1rem',
    },
    ratingBreakdown: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    ratingBar: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    barContainer: {
      flex: 1,
      height: '8px',
      backgroundColor: '#e8e8e8',
      borderRadius: '4px',
      overflow: 'hidden',
    },
    barFill: {
      height: '100%',
      backgroundColor: '#7C2A62',
    },
    reviewsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginBottom: '4rem',
    },
    reviewCard: {
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(124, 42, 98, 0.1)',
      transition: 'all 0.3s ease',
    },
    reviewHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1.5rem',
    },
    reviewerInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#F7D9EB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      color: '#7C2A62',
      fontSize: '1rem',
    },
    reviewerName: {
      margin: '0 0 0.5rem 0',
      color: '#333',
      fontSize: '1.2rem',
      fontWeight: '600',
    },
    reviewStars: {
      color: '#FFD700',
      fontSize: '1rem',
    },
    reviewDate: {
      color: '#666',
      fontSize: '0.9rem',
    },
    reviewComment: {
      color: '#333',
      lineHeight: '1.6',
      fontSize: '1rem',
      margin: 0,
    },
    addReviewSection: {
      textAlign: 'center',
      padding: '3rem',
      backgroundColor: '#F7D9EB',
      borderRadius: '20px',
    },
    addReviewTitle: {
      fontSize: '2rem',
      marginBottom: '1rem',
      color: '#7C2A62',
      fontWeight: '600',
    },
    addReviewText: {
      color: '#666',
      marginBottom: '2rem',
      fontSize: '1.1rem',
      maxWidth: '500px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    addReviewButton: {
      padding: '1rem 2.5rem',
      backgroundColor: '#7C2A62',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: 'white',
      transition: 'all 0.3s ease',
    },
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const ratingBars = [
    { stars: 5, percentage: 68 },
    { stars: 4, percentage: 24 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 0 }
  ];

  return (
    <section style={styles.reviews}>
      <div style={styles.container}>
        <h2 style={{
          ...styles.sectionTitle,
          ...(window.innerWidth <= 768 && { fontSize: '2.2rem' }),
          ...(window.innerWidth <= 480 && { fontSize: '1.8rem' })
        }}>
          Patient Reviews
        </h2>
        <p style={{
          ...styles.sectionSubtitle,
          ...(window.innerWidth <= 768 && { fontSize: '1rem', marginBottom: '3rem' }),
          ...(window.innerWidth <= 480 && { fontSize: '0.9rem', padding: '0 1rem' })
        }}>
          See what our patients say about their experience with QuickMed
        </p>

        {/* Rating Summary Section */}
        <div style={{
          ...styles.ratingSummary,
          ...(window.innerWidth <= 768 && { 
            gridTemplateColumns: '1fr',
            gap: '2rem',
            padding: '2rem 1.5rem'
          }),
          ...(window.innerWidth <= 480 && { 
            padding: '1.5rem 1rem'
          })
        }}>
          <div style={styles.overallRating}>
            <div style={{
              ...styles.overallScore,
              ...(window.innerWidth <= 480 && { fontSize: '3rem' })
            }}>4.8</div>
            <div style={{
              ...styles.starsLarge,
              ...(window.innerWidth <= 480 && { fontSize: '1.5rem' })
            }}>{renderStars(5)}</div>
            <div style={{
              ...styles.ratingCount,
              ...(window.innerWidth <= 480 && { fontSize: '0.9rem' })
            }}>Based on 1,234 reviews</div>
          </div>
          <div style={styles.ratingBreakdown}>
            {ratingBars.map((bar, index) => (
              <div key={index} style={styles.ratingBar}>
                <span style={{
                  ...(window.innerWidth <= 480 && { fontSize: '0.8rem', minWidth: '50px' })
                }}>{bar.stars} stars</span>
                <div style={styles.barContainer}>
                  <div style={{...styles.barFill, width: `${bar.percentage}%`}}></div>
                </div>
                <span style={{
                  ...(window.innerWidth <= 480 && { fontSize: '0.8rem', minWidth: '30px' })
                }}>{bar.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{
          ...styles.reviewsGrid,
          ...(window.innerWidth <= 768 && { 
            gridTemplateColumns: '1fr',
            gap: '1.5rem'
          })
        }}>
          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                ...styles.reviewCard,
                ...(window.innerWidth <= 768 && { 
                  padding: '1.5rem',
                  margin: '0 0.5rem'
                }),
                ...(window.innerWidth <= 480 && { 
                  padding: '1.2rem'
                })
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(124, 42, 98, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(124, 42, 98, 0.1)';
              }}
            >
              <div style={{
                ...styles.reviewHeader,
                ...(window.innerWidth <= 480 && { 
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '1rem'
                })
              }}>
                <div style={styles.reviewerInfo}>
                  <div style={{
                    ...styles.avatar,
                    ...(window.innerWidth <= 480 && { 
                      width: '40px',
                      height: '40px',
                      fontSize: '0.9rem'
                    })
                  }}>{review.avatar}</div>
                  <div>
                    <h4 style={{
                      ...styles.reviewerName,
                      ...(window.innerWidth <= 480 && { fontSize: '1.1rem' })
                    }}>{review.name}</h4>
                    <div style={styles.reviewStars}>{renderStars(review.rating)}</div>
                  </div>
                </div>
                <span style={{
                  ...styles.reviewDate,
                  ...(window.innerWidth <= 480 && { fontSize: '0.8rem' })
                }}>{review.date}</span>
              </div>
              <p style={{
                ...styles.reviewComment,
                ...(window.innerWidth <= 480 && { fontSize: '0.9rem' })
              }}>{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Add Review Section */}
        <div style={{
          ...styles.addReviewSection,
          ...(window.innerWidth <= 768 && { 
            padding: '2rem 1.5rem'
          }),
          ...(window.innerWidth <= 480 && { 
            padding: '1.5rem 1rem'
          })
        }}>
          <h3 style={{
            ...styles.addReviewTitle,
            ...(window.innerWidth <= 768 && { fontSize: '1.6rem' }),
            ...(window.innerWidth <= 480 && { fontSize: '1.4rem' })
          }}>Share Your Experience</h3>
          <p style={{
            ...styles.addReviewText,
            ...(window.innerWidth <= 768 && { fontSize: '1rem' }),
            ...(window.innerWidth <= 480 && { fontSize: '0.9rem' })
          }}>
            Help others make informed decisions about their healthcare
          </p>
          <button
            style={{
              ...styles.addReviewButton,
              ...(window.innerWidth <= 480 && { 
                padding: '0.8rem 2rem',
                fontSize: '1rem'
              })
            }}
            onClick={onWriteReview}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#5a1a4a';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#7C2A62';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;