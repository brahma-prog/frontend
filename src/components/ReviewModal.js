import React, { useState } from 'react';

const ReviewModal = ({ onClose }) => {
  const [review, setReview] = useState({
    name: '',
    email: '',
    rating: 0,
    comment: ''
  });
  const [errors, setErrors] = useState({});

  const styles = {
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
      zIndex: 2000,
      padding: '20px',
    },
    modalContent: {
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      maxWidth: '500px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    modalTitle: {
      margin: 0,
      color: '#7C2A62',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      color: '#7C2A62',
    },
    reviewForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    formLabel: {
      marginBottom: '0.5rem',
      color: '#333',
      fontWeight: '600',
    },
    formInput: {
      padding: '12px 15px',
      border: '2px solid #e1e1e1',
      borderRadius: '10px',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      outline: 'none',
    },
    formInputError: {
      borderColor: '#d32f2f',
      backgroundColor: '#ffebee',
    },
    formTextarea: {
      padding: '12px 15px',
      border: '2px solid #e1e1e1',
      borderRadius: '10px',
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical',
      fontFamily: 'inherit',
    },
    ratingSelection: {
      display: 'flex',
      gap: '0.5rem',
      justifyContent: 'center',
      marginBottom: '0.5rem',
    },
    starButton: {
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '50%',
      transition: 'all 0.3s ease',
    },
    ratingText: {
      textAlign: 'center',
      color: '#7C2A62',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    errorText: {
      color: '#d32f2f',
      fontSize: '0.8rem',
      marginTop: '0.3rem',
    },
    charCount: {
      fontSize: '0.8rem',
      color: '#666',
      textAlign: 'right',
      marginTop: '0.3rem',
    },
    reviewNote: {
      backgroundColor: '#F7D9EB',
      padding: '1rem',
      borderRadius: '10px',
      border: '1px solid #7C2A62',
    },
    noteText: {
      margin: 0,
      color: '#7C2A62',
      fontSize: '0.9rem',
      textAlign: 'center',
    },
    submitButton: {
      padding: '12px 2rem',
      backgroundColor: '#7C2A62',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      transition: 'all 0.3s ease',
    }
  };

  const handleInputChange = (field, value) => {
    setReview(prev => ({
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

  const handleStarClick = (rating) => {
    setReview(prev => ({
      ...prev,
      rating
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!review.name.trim()) newErrors.name = 'Name is required';
    if (!review.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(review.email)) newErrors.email = 'Email is invalid';
    if (review.rating === 0) newErrors.rating = 'Please select a rating';
    if (!review.comment.trim()) newErrors.comment = 'Review comment is required';
    else if (review.comment.length < 10) newErrors.comment = 'Review should be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save review to localStorage
    const newReview = {
      id: Date.now(),
      ...review,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };

    const existingReviews = JSON.parse(localStorage.getItem('pendingReviews') || '[]');
    localStorage.setItem('pendingReviews', JSON.stringify([...existingReviews, newReview]));

    alert('Thank you for your review! It has been submitted for approval.');
    onClose();
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>Write a Review</h2>
          <button 
            style={styles.closeButton}
            onClick={onClose}
          >
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} style={styles.reviewForm}>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Your Name *</label>
            <input
              type="text"
              value={review.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your full name"
              style={{
                ...styles.formInput,
                ...(errors.name && styles.formInputError)
              }}
            />
            {errors.name && <span style={styles.errorText}>{errors.name}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Your Email *</label>
            <input
              type="email"
              value={review.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              style={{
                ...styles.formInput,
                ...(errors.email && styles.formInputError)
              }}
            />
            {errors.email && <span style={styles.errorText}>{errors.email}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Rating *</label>
            <div style={styles.ratingSelection}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  style={styles.starButton}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  {star <= review.rating ? '⭐' : '☆'}
                </button>
              ))}
            </div>
            <div style={styles.ratingText}>
              {review.rating > 0 ? (
                <span>{review.rating} {review.rating === 1 ? 'star' : 'stars'} selected</span>
              ) : (
                <span>No rating selected</span>
              )}
            </div>
            {errors.rating && <span style={styles.errorText}>{errors.rating}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Your Review *</label>
            <textarea
              value={review.comment}
              onChange={(e) => handleInputChange('comment', e.target.value)}
              placeholder="Share your experience with QuickMed..."
              style={{
                ...styles.formTextarea,
                ...(errors.comment && styles.formInputError)
              }}
              maxLength={500}
            />
            {errors.comment && <span style={styles.errorText}>{errors.comment}</span>}
            <div style={styles.charCount}>
              {review.comment.length}/500 characters
            </div>
          </div>

          <div style={styles.reviewNote}>
            <p style={styles.noteText}>
              <strong>Note:</strong> Your review will be submitted for approval and will be visible once approved.
            </p>
          </div>

          <button 
            type="submit" 
            style={styles.submitButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#5a1a4a';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#7C2A62';
            }}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;