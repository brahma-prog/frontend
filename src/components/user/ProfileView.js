// import React, { useState, useEffect, useContext } from 'react';
// import ProfileContext from './ProfileContext'; // Import the context directly
// import { styles } from './Styles';

// const ProfileView = ({
//   setActiveView,
//   triggerProfilePhotoUpload,
//   removeProfilePhoto,
//   user,
//   addNotification
// }) => {
//   // Use the profile context with proper hook usage
//   const profileContext = useContext(ProfileContext);
  
//   // Create fallback profile data if context is not available
//   const fallbackProfile = {
//     profile: {
//       fullName: user?.fullName || 'Jagan',
//       email: user?.email || 'yerrajagan29@gmail.com',
//       phone: user?.phone || '6300604470',
//       profilePhoto: user?.profilePhoto || null,
//       address: user?.address || '',
//       city: user?.city || '',
//       pincode: user?.pincode || '',
//       dateOfBirth: user?.dateOfBirth || '',
//       age: user?.age || '',
//       gender: user?.gender || ''
//     },
//     updateProfile: (newProfile) => {
//       console.log('Profile would update to:', newProfile);
//       if (user && typeof user === 'object') {
//         Object.assign(user, newProfile);
//       }
//     }
//   };

//   // Use context if available, otherwise use fallback
//   const { profile, updateProfile } = profileContext || fallbackProfile;
  
//   // Move the form state to local component state for better control
//   const [localProfile, setLocalProfile] = useState({
//     phone: profile.phone || '',
//     address: profile.address || '',
//     city: profile.city || '',
//     pincode: profile.pincode || '',
//     dateOfBirth: profile.dateOfBirth || '',
//     age: profile.age || '',
//     gender: profile.gender || ''
//   });
//   const [localFormErrors, setLocalFormErrors] = useState({});
//   const [localIsFormValid, setLocalIsFormValid] = useState(false);
//   const [localIsFormTouched, setLocalIsFormTouched] = useState(false);

//   // Update localProfile when profile context changes
//   useEffect(() => {
//     setLocalProfile({
//       phone: profile.phone || '',
//       address: profile.address || '',
//       city: profile.city || '',
//       pincode: profile.pincode || '',
//       dateOfBirth: profile.dateOfBirth || '',
//       age: profile.age || '',
//       gender: profile.gender || ''
//     });
//   }, [profile]);

//   // Local validation function with updated phone validation
//   const validateLocalForm = () => {
//     const errors = {};

//     // Phone validation (only numbers, 10 digits, required, must start with 6, 7, 8, or 9)
//     if (!localProfile.phone.trim()) {
//       errors.phone = 'Phone number is required';
//     } else if (!/^\d{10}$/.test(localProfile.phone)) {
//       errors.phone = 'Phone number must be 10 digits';
//     } else if (!/^[6789]/.test(localProfile.phone)) {
//       errors.phone = 'Phone number must start with 6, 7, 8, or 9';
//     }

//     // Address validation (required)
//     if (!localProfile.address.trim()) {
//       errors.address = 'Address is required';
//     }

//     // City validation (only alphabets and spaces, required)
//     if (!localProfile.city.trim()) {
//       errors.city = 'City is required';
//     } else if (!/^[A-Za-z\s]+$/.test(localProfile.city)) {
//       errors.city = 'City should contain only alphabets';
//     }

//     // Pincode validation (only numbers, 6 digits, required)
//     if (!localProfile.pincode.trim()) {
//       errors.pincode = 'Pincode is required';
//     } else if (!/^\d{6}$/.test(localProfile.pincode)) {
//       errors.pincode = 'Pincode must be 6 digits';
//     }

//     // Date of Birth validation (required)
//     if (!localProfile.dateOfBirth.trim()) {
//       errors.dateOfBirth = 'Date of Birth is required';
//     }

//     // Age validation (1-120, required)
//     if (!localProfile.age.trim()) {
//       errors.age = 'Age is required';
//     } else if (!/^\d+$/.test(localProfile.age) || parseInt(localProfile.age) < 1 || parseInt(localProfile.age) > 120) {
//       errors.age = 'Age must be between 1 and 120';
//     }

//     // Gender validation (required)
//     if (!localProfile.gender.trim()) {
//       errors.gender = 'Gender is required';
//     }

//     setLocalFormErrors(errors);
//     setLocalIsFormValid(Object.keys(errors).length === 0);
//   };

//   useEffect(() => {
//     validateLocalForm();
//   }, [localProfile]);

//   const handleLocalProfileChange = (e) => {
//     const { name, value } = e.target;
    
//     setLocalProfile(prev => {
//       const updatedProfile = {
//         ...prev,
//         [name]: value
//       };
      
//       // Automatically calculate age when date of birth is updated
//       if (name === 'dateOfBirth' && value) {
//         const today = new Date();
//         const birthDate = new Date(value);
//         let age = today.getFullYear() - birthDate.getFullYear();
//         const monthDiff = today.getMonth() - birthDate.getMonth();
        
//         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//           age--;
//         }
        
//         updatedProfile.age = age > 0 ? age.toString() : '';
//       }
      
//       return updatedProfile;
//     });
    
//     setLocalIsFormTouched(true);
//   };

//   const handleLocalProfileBlur = (e) => {
//     const { name, value } = e.target;
//     let processedValue = value;

//     // Input sanitization based on field type - only on blur
//     switch (name) {
//       case 'city':
//         processedValue = value.replace(/[^A-Za-z\s]/g, '');
//         break;
//       case 'phone':
//         // Only allow numbers, max 10 digits, must start with 6, 7, 8, or 9
//         processedValue = value.replace(/\D/g, '').slice(0, 10);
//         // If first digit is not 6, 7, 8, or 9, clear the input
//         if (processedValue && !/^[6789]/.test(processedValue)) {
//           processedValue = '';
//         }
//         break;
//       case 'pincode':
//         processedValue = value.replace(/\D/g, '').slice(0, 6);
//         break;
//       case 'age':
//         processedValue = value.replace(/\D/g, '');
//         if (processedValue && (parseInt(processedValue) < 1 || parseInt(processedValue) > 120)) {
//           processedValue = processedValue.slice(0, -1);
//         }
//         break;
//       default:
//         processedValue = value;
//     }

//     if (processedValue !== value) {
//       setLocalProfile(prev => ({
//         ...prev,
//         [name]: processedValue
//       }));
//     }
//   };

//   const handleLocalProfileUpdate = (e) => {
//     e.preventDefault();
//     setLocalIsFormTouched(true);
    
//     if (!localIsFormValid) {
//       alert('Please fix all form errors before updating.');
//       return;
//     }
    
//     // Update the profile using context - this will update globally
//     const updatedProfile = {
//       ...profile, // Keep all existing profile data
//       phone: localProfile.phone,
//       address: localProfile.address,
//       city: localProfile.city,
//       pincode: localProfile.pincode,
//       dateOfBirth: localProfile.dateOfBirth,
//       age: localProfile.age,
//       gender: localProfile.gender
//     };
    
//     // Update the global profile state using context
//     updateProfile(updatedProfile);
    
//     // Update user profile in parent component (if provided)
//     if (user && typeof user === 'object') {
//       user.phone = localProfile.phone;
//       user.address = localProfile.address;
//       user.city = localProfile.city;
//       user.pincode = localProfile.pincode;
//       user.dateOfBirth = localProfile.dateOfBirth;
//       user.age = localProfile.age;
//       user.gender = localProfile.gender;
//     }
    
//     alert('Profile updated successfully!');
//     if (addNotification) {
//       addNotification('Profile Updated', 'Your profile information has been updated successfully', 'info');
//     }
    
//     // Clear the form fields after successful update
//     setLocalProfile({
//       phone: localProfile.phone,
//       address: localProfile.address,
//       city: localProfile.city,
//       pincode: localProfile.pincode,
//       dateOfBirth: localProfile.dateOfBirth,
//       age: localProfile.age,
//       gender: localProfile.gender
//     });
    
//     setLocalIsFormTouched(false);
//   };

//   const BackButton = ({ onClick, text = 'Back' }) => (
//     <button 
//       style={styles.backButton}
//       onClick={onClick}
//       type="button"
//     >
//       ← {text}
//     </button>
//   );

//   return (
//     <div style={styles.profileContainer}>
//       <div style={styles.pageHeader}>
//         <BackButton onClick={() => setActiveView('dashboard')} text="" />
//         <h2 style={styles.sectionTitle}>My Profile</h2>
//       </div>
      
//       {/* Profile Photo Section */}
//       <div style={styles.profilePhotoSection}>
//         <div style={styles.profilePhotoContainer}>
//           <div style={styles.profilePhotoPreview}>
//             {profile.profilePhoto ? (
//               <img
//                 src={profile.profilePhoto}
//                 alt="Profile"
//                 style={styles.profilePhotoImage}
//               />
//             ) : (
//               <div style={styles.profilePhotoPlaceholder}>
//                 {profile.fullName?.charAt(0) || 'U'}
//               </div>
//             )}
//           </div>
//           <div style={styles.profilePhotoActions}>
//             <button 
//               style={styles.uploadPhotoButton}
//               onClick={triggerProfilePhotoUpload}
//               type="button"
//             >
//               📷 Update Photo
//             </button>
//             {profile.profilePhoto && (
//               <button 
//                 style={styles.removePhotoButton}
//                 onClick={removeProfilePhoto}
//                 type="button"
//               >
//                 🗑️ Remove Photo
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       <form onSubmit={handleLocalProfileUpdate} style={styles.profileForm}>
//         <div style={styles.formGrid}>
//           {/* Non-editable Name Field */}
//           <div style={styles.formGroup}>
//             <label style={styles.formLabel}>Full Name</label>
//             <input
//               type="text"
//               value={profile.fullName || ''}
//               style={{
//                 ...styles.formInput,
//                 ...styles.nonEditableField
//               }}
//               readOnly
//               disabled
//             />
//             <p style={styles.fieldNote}>Name cannot be changed</p>
//           </div>
          
//           {/* Non-editable Email Field */}
//           <div style={styles.formGroup}>
//             <label style={styles.formLabel}>Email</label>
//             <input
//               type="email"
//               value={profile.email || ''}
//               style={{
//                 ...styles.formInput,
//                 ...styles.nonEditableField
//               }}
//               readOnly
//               disabled
//             />
//             <p style={styles.fieldNote}>Email cannot be changed</p>
//           </div>
          
//           {/* Editable Phone Field with Indian Flag and Validation */}
//           <div style={styles.formGroup}>
//             <label style={styles.formLabel}>Phone *</label>
//             <div style={styles.phoneInputContainer}>
//               <div style={styles.phonePrefix}>
//                 <span style={styles.indianFlag}>🇮🇳</span>
//                 <span style={styles.countryCode}>+91</span>
//               </div>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={localProfile.phone}
//                 onChange={handleLocalProfileChange}
//                 onBlur={handleLocalProfileBlur}
//                 style={{
//                   ...styles.phoneInput,
//                   ...(localIsFormTouched && localFormErrors.phone && styles.formInputError)
//                 }}
//                 placeholder="Enter 10-digit mobile number"
//                 maxLength="10"
//                 required
//               />
//             </div>
//             {localIsFormTouched && localFormErrors.phone && <span style={styles.formError}>{localFormErrors.phone}</span>}
//             {!localFormErrors.phone && localProfile.phone && (
//               <div style={styles.phoneValidationMessage}>
//                 <span style={styles.validPhoneIcon}>✓</span>
//                 <span style={styles.validPhoneText}>Valid Indian mobile number</span>
//               </div>
//             )}
//           </div>

//           {/* Editable Date of Birth Field */}
//           <div style={styles.formGroup}>
//             <label style={styles.formLabel}>Date of Birth *</label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               value={localProfile.dateOfBirth}
//               onChange={handleLocalProfileChange}
//               onBlur={handleLocalProfileBlur}
//               style={{
//                 ...styles.formInput,
//                 ...(localIsFormTouched && localFormErrors.dateOfBirth && styles.formInputError)
//               }}
//               required
//             />
//             {localIsFormTouched && localFormErrors.dateOfBirth && <span style={styles.formError}>{localFormErrors.dateOfBirth}</span>}
//           </div>
          
//           {/* Editable Age Field */}
//           <div style={styles.formGroup}>
//             <label style={styles.formLabel}>Age *</label>
//             <input
//               type="text"
//               name="age"
//               value={localProfile.age}
//               onChange={handleLocalProfileChange}
//               onBlur={handleLocalProfileBlur}
//               style={{
//                 ...styles.formInput,
//                 ...(localIsFormTouched && localFormErrors.age && styles.formInputError)
//               }}
//               placeholder="Enter your age"
//               required
//             />
//             {localIsFormTouched && localFormErrors.age && <span style={styles.formError}>{localFormErrors.age}</span>}
//           </div>
          
//           {/* Editable Gender Field */}
//           <div style={styles.formGroup}>
//             <label style={styles.formLabel}>Gender *</label>
//             <select
//               name="gender"
//               value={localProfile.gender}
//               onChange={handleLocalProfileChange}
//               style={{
//                 ...styles.formInput,
//                 ...(localIsFormTouched && localFormErrors.gender && styles.formInputError)
//               }}
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//               <option value="prefer-not-to-say">Prefer not to say</option>
//             </select>
//             {localIsFormTouched && localFormErrors.gender && <span style={styles.formError}>{localFormErrors.gender}</span>}
//           </div>
          
//           {/* Editable Address Field */}
//           <div style={styles.formGroup}>
//             <label style={styles.formLabel}>Address *</label>
//             <textarea
//               name="address"
//               value={localProfile.address}
//               onChange={handleLocalProfileChange}
//               onBlur={handleLocalProfileBlur}
//               style={{
//                 ...styles.formTextarea,
//                 ...(localIsFormTouched && localFormErrors.address && styles.formInputError)
//               }}
//               rows="3"
//               placeholder="Enter your complete address"
//               required
//             />
//             {localIsFormTouched && localFormErrors.address && <span style={styles.formError}>{localFormErrors.address}</span>}
//           </div>
          
//           {/* Editable City Field */}
//           <div style={styles.formGroup}>
//             <label style={styles.formLabel}>City *</label>
//             <input
//               type="text"
//               name="city"
//               value={localProfile.city}
//               onChange={handleLocalProfileChange}
//               onBlur={handleLocalProfileBlur}
//               style={{
//                 ...styles.formInput,
//                 ...(localIsFormTouched && localFormErrors.city && styles.formInputError)
//               }}
//               placeholder="Enter your city"
//               required
//             />
//             {localIsFormTouched && localFormErrors.city && <span style={styles.formError}>{localFormErrors.city}</span>}
//           </div>
          
//           {/* Editable Pincode Field */}
//           <div style={styles.formGroup}>
//             <label style={styles.formLabel}>Pincode *</label>
//             <input
//               type="text"
//               name="pincode"
//               value={localProfile.pincode}
//               onChange={handleLocalProfileChange}
//               onBlur={handleLocalProfileBlur}
//               style={{
//                 ...styles.formInput,
//                 ...(localIsFormTouched && localFormErrors.pincode && styles.formInputError)
//               }}
//               placeholder="Enter your pincode"
//               required
//             />
//             {localIsFormTouched && localFormErrors.pincode && <span style={styles.formError}>{localFormErrors.pincode}</span>}
//           </div>
//         </div>
        
//         <div style={styles.formNote}>
//           <p style={styles.noteText}>* Please fill in all mandatory fields marked with an asterisk (*)</p>
//           <p style={styles.noteText}>Name and email cannot be changed for security reasons</p>
//           <p style={styles.noteText}>Phone number must be a valid Indian mobile number starting with 6, 7, 8, or 9</p>
//         </div>
        
//         <div style={styles.formActions}>
//           <button 
//             type="submit" 
//             style={{
//               ...styles.updateButton,
//               ...(!localIsFormValid && styles.updateButtonDisabled)
//             }}
//             disabled={!localIsFormValid}
//           >
//             Update Profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProfileView;

import React, { useState, useEffect, useContext } from 'react';
import ProfileContext from './ProfileContext';
import styles from './Styles';
 

const ProfileView = ({
  setActiveView,
  triggerProfilePhotoUpload,
  removeProfilePhoto,
  user,
  addNotification
}) => {
  // Use context with fallback
  const profileContext = useContext(ProfileContext);
  
  const fallbackProfile = {
    profile: {
      fullName: user?.fullName || 'Jagan',
      email: user?.email || 'yerrajagan29@gmail.com',
      phone: user?.phone || '6300604470',
      profilePhoto: user?.profilePhoto || null,
      address: user?.address || '',
      city: user?.city || '',
      pincode: user?.pincode || '',
      dateOfBirth: user?.dateOfBirth || '',
      age: user?.age || '',
      gender: user?.gender || ''
    },
    updateProfile: (newProfile) => {
      console.log('Profile would update to:', newProfile);
      if (user && typeof user === 'object') {
        Object.assign(user, newProfile);
      }
    }
  };

  const { profile, updateProfile } = profileContext || fallbackProfile;
  
  // Local state management
  const [localProfile, setLocalProfile] = useState({
    phone: profile.phone || '',
    address: profile.address || '',
    city: profile.city || '',
    pincode: profile.pincode || '',
    dateOfBirth: profile.dateOfBirth || '',
    age: profile.age || '',
    gender: profile.gender || ''
  });
  
  const [localFormErrors, setLocalFormErrors] = useState({});
  const [localIsFormValid, setLocalIsFormValid] = useState(false);
  const [localIsFormTouched, setLocalIsFormTouched] = useState(false);

  // Update localProfile when profile context changes
  useEffect(() => {
    setLocalProfile({
      phone: profile.phone || '',
      address: profile.address || '',
      city: profile.city || '',
      pincode: profile.pincode || '',
      dateOfBirth: profile.dateOfBirth || '',
      age: profile.age || '',
      gender: profile.gender || ''
    });
  }, [profile]);

  // Enhanced age calculator
  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age > 0 ? age.toString() : '';
  };

  // Enhanced validation function
  const validateLocalForm = () => {
    const errors = {};

    // Phone validation
    if (!localProfile.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(localProfile.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    } else if (!/^[6789]/.test(localProfile.phone)) {
      errors.phone = 'Phone number must start with 6, 7, 8, or 9';
    }

    // Address validation
    if (!localProfile.address.trim()) {
      errors.address = 'Address is required';
    }

    // City validation
    if (!localProfile.city.trim()) {
      errors.city = 'City is required';
    } else if (!/^[A-Za-z\s]+$/.test(localProfile.city)) {
      errors.city = 'City should contain only alphabets';
    }

    // Pincode validation - Enhanced for 6 digits only
    if (!localProfile.pincode.trim()) {
      errors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(localProfile.pincode)) {
      errors.pincode = 'Pincode must be exactly 6 digits';
    }

    // Date of Birth validation
    if (!localProfile.dateOfBirth.trim()) {
      errors.dateOfBirth = 'Date of Birth is required';
    } else {
      const today = new Date();
      const birthDate = new Date(localProfile.dateOfBirth);
      if (birthDate > today) {
        errors.dateOfBirth = 'Date of Birth cannot be in the future';
      }
    }

    // Age validation
    if (!localProfile.age.trim()) {
      errors.age = 'Age is required';
    } else if (!/^\d+$/.test(localProfile.age) || parseInt(localProfile.age) < 1 || parseInt(localProfile.age) > 120) {
      errors.age = 'Age must be between 1 and 120';
    }

    // Gender validation
    if (!localProfile.gender.trim()) {
      errors.gender = 'Gender is required';
    }

    setLocalFormErrors(errors);
    setLocalIsFormValid(Object.keys(errors).length === 0);
  };

  useEffect(() => {
    validateLocalForm();
  }, [localProfile]);

  const handleLocalProfileChange = (e) => {
    const { name, value } = e.target;
    
    setLocalProfile(prev => {
      const updatedProfile = {
        ...prev,
        [name]: value
      };
      
      // Automatically calculate age when date of birth is updated
      if (name === 'dateOfBirth' && value) {
        const calculatedAge = calculateAge(value);
        updatedProfile.age = calculatedAge;
      }
      
      return updatedProfile;
    });
    
    setLocalIsFormTouched(true);
  };

  const handleLocalProfileBlur = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Enhanced input sanitization
    switch (name) {
      case 'city':
        processedValue = value.replace(/[^A-Za-z\s]/g, '');
        break;
      case 'phone':
        processedValue = value.replace(/\D/g, '').slice(0, 10);
        if (processedValue && !/^[6789]/.test(processedValue)) {
          processedValue = '';
        }
        break;
      case 'pincode':
        // Strict 6-digit pincode validation
        processedValue = value.replace(/\D/g, '').slice(0, 6);
        break;
      case 'age':
        processedValue = value.replace(/\D/g, '');
        if (processedValue && (parseInt(processedValue) < 1 || parseInt(processedValue) > 120)) {
          processedValue = processedValue.slice(0, -1);
        }
        break;
      default:
        processedValue = value;
    }

    if (processedValue !== value) {
      setLocalProfile(prev => ({
        ...prev,
        [name]: processedValue
      }));
    }
  };

  // Enhanced update function with better error handling
  const handleLocalProfileUpdate = async (e) => {
    e.preventDefault();
    setLocalIsFormTouched(true);
    
    if (!localIsFormValid) {
      alert('Please fix all form errors before updating.');
      return;
    }
    
    try {
      // Update the profile using context
      const updatedProfile = {
        ...profile,
        phone: localProfile.phone,
        address: localProfile.address,
        city: localProfile.city,
        pincode: localProfile.pincode,
        dateOfBirth: localProfile.dateOfBirth,
        age: localProfile.age,
        gender: localProfile.gender
      };
      
      updateProfile(updatedProfile);
      
      // Update user profile in parent component (if provided)
      if (user && typeof user === 'object') {
        Object.assign(user, {
          phone: localProfile.phone,
          address: localProfile.address,
          city: localProfile.city,
          pincode: localProfile.pincode,
          dateOfBirth: localProfile.dateOfBirth,
          age: localProfile.age,
          gender: localProfile.gender
        });
      }
      
      // Show success message
      alert('Profile updated successfully!');
      if (addNotification) {
        addNotification('Profile Updated', 'Your profile information has been updated successfully', 'info');
      }
      
      // Reset form state
      setLocalIsFormTouched(false);
      
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile. Please try again.');
    }
  };

  const BackButton = ({ onClick, text = 'Back' }) => (
    <button 
      style={styles.backButton}
      onClick={onClick}
      type="button"
    >
      ← {text}
    </button>
  );

  return (
    <div style={styles.profileContainer}>
      <div style={styles.pageHeader}>
        <BackButton onClick={() => setActiveView('dashboard')} text="" />
        <h2 style={styles.sectionTitle}>My Profile</h2>
      </div>
      
      {/* Profile Photo Section */}
      <div style={styles.profilePhotoSection}>
        <div style={styles.profilePhotoContainer}>
          <div style={styles.profilePhotoPreview}>
            {profile.profilePhoto ? (
              <img
                src={profile.profilePhoto}
                alt="Profile"
                style={styles.profilePhotoImage}
              />
            ) : (
              <div style={styles.profilePhotoPlaceholder}>
                {profile.fullName?.charAt(0) || 'U'}
              </div>
            )}
          </div>
          <div style={styles.profilePhotoActions}>
            <button 
              style={styles.uploadPhotoButton}
              onClick={triggerProfilePhotoUpload}
              type="button"
            >
              📷 Update Photo
            </button>
            {profile.profilePhoto && (
              <button 
                style={styles.removePhotoButton}
                onClick={removeProfilePhoto}
                type="button"
              >
                🗑️ Remove Photo
              </button>
            )}
          </div>
        </div>
      </div>

      <form onSubmit={handleLocalProfileUpdate} style={styles.profileForm}>
        <div style={styles.formGrid}>
          {/* Non-editable Name Field */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Full Name</label>
            <input
              type="text"
              value={profile.fullName || ''}
              style={{
                ...styles.formInput,
                ...styles.nonEditableField
              }}
              readOnly
              disabled
            />
            <p style={styles.fieldNote}>Name cannot be changed</p>
          </div>
          
          {/* Non-editable Email Field */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Email</label>
            <input
              type="email"
              value={profile.email || ''}
              style={{
                ...styles.formInput,
                ...styles.nonEditableField
              }}
              readOnly
              disabled
            />
            <p style={styles.fieldNote}>Email cannot be changed</p>
          </div>
          
          {/* Editable Phone Field with Indian Flag and Validation */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Phone *</label>
            <div style={styles.phoneInputContainer}>
              <div style={styles.phonePrefix}>
                <span style={styles.indianFlag}>🇮🇳</span>
                <span style={styles.countryCode}>+91</span>
              </div>
              <input
                type="tel"
                name="phone"
                value={localProfile.phone}
                onChange={handleLocalProfileChange}
                onBlur={handleLocalProfileBlur}
                style={{
                  ...styles.phoneInput,
                  ...(localIsFormTouched && localFormErrors.phone && styles.formInputError)
                }}
                placeholder="Enter 10-digit mobile number"
                maxLength="10"
                required
              />
            </div>
            {localIsFormTouched && localFormErrors.phone && <span style={styles.formError}>{localFormErrors.phone}</span>}
            {!localFormErrors.phone && localProfile.phone && (
              <div style={styles.phoneValidationMessage}>
                <span style={styles.validPhoneIcon}>✓</span>
                <span style={styles.validPhoneText}>Valid Indian mobile number</span>
              </div>
            )}
          </div>

          {/* Editable Date of Birth Field with Age Auto-calculation */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Date of Birth *</label>
            <input
              type="date"
              name="dateOfBirth"
              value={localProfile.dateOfBirth}
              onChange={handleLocalProfileChange}
              onBlur={handleLocalProfileBlur}
              style={{
                ...styles.formInput,
                ...(localIsFormTouched && localFormErrors.dateOfBirth && styles.formInputError)
              }}
              required
            />
            {localIsFormTouched && localFormErrors.dateOfBirth && <span style={styles.formError}>{localFormErrors.dateOfBirth}</span>}
            {localProfile.dateOfBirth && localProfile.age && (
              <div style={styles.ageCalculationNote}>
                <span style={styles.ageCalculationText}>Age calculated: {localProfile.age} years</span>
              </div>
            )}
          </div>
          
          {/* Editable Age Field (auto-calculated and read-only) */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Age *</label>
            <input
              type="text"
              name="age"
              value={localProfile.age}
              onChange={handleLocalProfileChange}
              onBlur={handleLocalProfileBlur}
              style={{
                ...styles.formInput,
                ...(localIsFormTouched && localFormErrors.age && styles.formInputError),
                ...styles.nonEditableField
              }}
              placeholder="Auto-calculated from Date of Birth"
              readOnly
              required
            />
            <p style={styles.fieldNote}>Auto-calculated from Date of Birth</p>
            {localIsFormTouched && localFormErrors.age && <span style={styles.formError}>{localFormErrors.age}</span>}
          </div>
          
          {/* Editable Gender Field */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Gender *</label>
            <select
              name="gender"
              value={localProfile.gender}
              onChange={handleLocalProfileChange}
              style={{
                ...styles.formInput,
                ...(localIsFormTouched && localFormErrors.gender && styles.formInputError)
              }}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
            {localIsFormTouched && localFormErrors.gender && <span style={styles.formError}>{localFormErrors.gender}</span>}
          </div>
          
          {/* Editable Address Field */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Address *</label>
            <textarea
              name="address"
              value={localProfile.address}
              onChange={handleLocalProfileChange}
              onBlur={handleLocalProfileBlur}
              style={{
                ...styles.formTextarea,
                ...(localIsFormTouched && localFormErrors.address && styles.formInputError)
              }}
              rows="3"
              placeholder="Enter your complete address"
              required
            />
            {localIsFormTouched && localFormErrors.address && <span style={styles.formError}>{localFormErrors.address}</span>}
          </div>
          
          {/* Editable City Field */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>City *</label>
            <input
              type="text"
              name="city"
              value={localProfile.city}
              onChange={handleLocalProfileChange}
              onBlur={handleLocalProfileBlur}
              style={{
                ...styles.formInput,
                ...(localIsFormTouched && localFormErrors.city && styles.formInputError)
              }}
              placeholder="Enter your city"
              required
            />
            {localIsFormTouched && localFormErrors.city && <span style={styles.formError}>{localFormErrors.city}</span>}
          </div>
          
          {/* Editable Pincode Field with strict 6-digit validation */}
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Pincode *</label>
            <input
              type="text"
              name="pincode"
              value={localProfile.pincode}
              onChange={handleLocalProfileChange}
              onBlur={handleLocalProfileBlur}
              style={{
                ...styles.formInput,
                ...(localIsFormTouched && localFormErrors.pincode && styles.formInputError)
              }}
              placeholder="Enter 6-digit pincode"
              maxLength="6"
              required
            />
            {localIsFormTouched && localFormErrors.pincode && <span style={styles.formError}>{localFormErrors.pincode}</span>}
            {!localFormErrors.pincode && localProfile.pincode && localProfile.pincode.length === 6 && (
              <div style={styles.pincodeValidationMessage}>
                <span style={styles.validPincodeIcon}>✓</span>
                <span style={styles.validPincodeText}>Valid 6-digit pincode</span>
              </div>
            )}
          </div>
        </div>
        
        <div style={styles.formNote}>
          <p style={styles.noteText}>* Please fill in all mandatory fields marked with an asterisk (*)</p>
          <p style={styles.noteText}>Name and email cannot be changed for security reasons</p>
          <p style={styles.noteText}>Phone number must be a valid Indian mobile number starting with 6, 7, 8, or 9</p>
          <p style={styles.noteText}>Pincode must be exactly 6 digits</p>
          <p style={styles.noteText}>Age is automatically calculated from your Date of Birth</p>
        </div>
        
        <div style={styles.formActions}>
          <button 
            type="submit" 
            style={{
              ...styles.updateButton,
              ...(!localIsFormValid && styles.updateButtonDisabled)
            }}
            disabled={!localIsFormValid}
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileView;