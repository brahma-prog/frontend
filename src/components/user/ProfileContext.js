// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ProfileContext = createContext();

// // Default profile structure
// const defaultProfile = {
//   fullName: '',
//   email: '',
//   phone: '',
//   address: '',
//   city: '',
//   pincode: '',
//   dateOfBirth: '',
//   age: '',
//   gender: '',
//   profilePhoto: null,
//   lastUpdated: ''
// };

// export const ProfileProvider = ({ children, user }) => {
//   const [profile, setProfile] = useState(() => {
//     try {
//       // First priority: user data from props (login data)
//       if (user && user.email) {
//         console.log('Initializing profile from user props:', user);
//         const userProfile = {
//           fullName: user.fullName || user.name || '',
//           email: user.email || '',
//           phone: user.phone || '',
//           address: user.address || '',
//           city: user.city || '',
//           pincode: user.pincode || '',
//           dateOfBirth: user.dateOfBirth || '',
//           age: user.age || '',
//           gender: user.gender || '',
//           profilePhoto: user.profilePhoto || null,
//           lastUpdated: user.lastUpdated || new Date().toISOString()
//         };
        
//         // Save user data to localStorage
//         localStorage.setItem('userProfile', JSON.stringify(userProfile));
//         return userProfile;
//       }
      
//       // Second priority: localStorage data
//       const saved = localStorage.getItem('userProfile');
//       if (saved) {
//         console.log('Initializing profile from localStorage');
//         return JSON.parse(saved);
//       }
      
//       // Fallback: default profile
//       console.log('Initializing with default profile');
//       return defaultProfile;
//     } catch (error) {
//       console.error('Error loading profile:', error);
//       return defaultProfile;
//     }
//   });

//   // Sync profile to localStorage whenever it changes
//   useEffect(() => {
//     try {
//       localStorage.setItem('userProfile', JSON.stringify(profile));
//       console.log('Profile saved to localStorage:', profile.fullName);
//     } catch (error) {
//       console.error('Error saving profile to localStorage:', error);
//     }
//   }, [profile]);

//   // Update profile when user prop changes (login/logout) - IMMEDIATE UPDATE
//   useEffect(() => {
//     if (user && user.email) {
//       console.log('User data received in ProfileProvider - UPDATING PROFILE:', user);
//       setProfile(prevProfile => {
//         const updatedProfile = {
//           ...prevProfile,
//           fullName: user.fullName || user.name || prevProfile.fullName,
//           email: user.email || prevProfile.email,
//           phone: user.phone || prevProfile.phone,
//           address: user.address || prevProfile.address,
//           city: user.city || prevProfile.city,
//           pincode: user.pincode || prevProfile.pincode,
//           dateOfBirth: user.dateOfBirth || prevProfile.dateOfBirth,
//           age: user.age || prevProfile.age,
//           gender: user.gender || prevProfile.gender,
//           profilePhoto: user.profilePhoto || prevProfile.profilePhoto,
//           lastUpdated: new Date().toISOString()
//         };
        
//         console.log('Profile updated from user data:', updatedProfile);
//         return updatedProfile;
//       });
//     }
//   }, [user]); // This will trigger immediately when user prop changes

//   // Enhanced updateProfile function
//   const updateProfile = (newProfileData) => {
//     console.log('Updating profile with new data:', newProfileData);
//     setProfile(prevProfile => {
//       const updatedProfile = {
//         ...prevProfile,
//         ...newProfileData,
//         lastUpdated: new Date().toISOString()
//       };
      
//       // Auto-calculate age if dateOfBirth is provided and changed
//       if (newProfileData.dateOfBirth && newProfileData.dateOfBirth !== prevProfile.dateOfBirth) {
//         const calculatedAge = calculateAge(newProfileData.dateOfBirth);
//         updatedProfile.age = calculatedAge.toString();
//       }
      
//       console.log('Final updated profile:', updatedProfile);
//       return updatedProfile;
//     });
//   };

//   const updateProfilePhoto = (photoUrl) => {
//     console.log('Updating profile photo:', photoUrl);
//     setProfile(prevProfile => ({
//       ...prevProfile,
//       profilePhoto: photoUrl,
//       lastUpdated: new Date().toISOString()
//     }));
//   };

//   const removeProfilePhoto = () => {
//     console.log('Removing profile photo');
//     setProfile(prevProfile => ({
//       ...prevProfile,
//       profilePhoto: null,
//       lastUpdated: new Date().toISOString()
//     }));
//   };

//   // Helper function to calculate age from date of birth
//   const calculateAge = (birthDate) => {
//     try {
//       const dob = new Date(birthDate);
//       const today = new Date();
      
//       if (dob > today) {
//         return 0;
//       }

//       let age = today.getFullYear() - dob.getFullYear();
//       const monthDiff = today.getMonth() - dob.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
//         age--;
//       }
      
//       return age > 0 ? age : 0;
//     } catch (error) {
//       console.error('Error calculating age:', error);
//       return 0;
//     }
//   };

//   // Clear profile (for logout)
//   const clearProfile = () => {
//     console.log('Clearing profile data');
//     localStorage.removeItem('userProfile');
//     setProfile(defaultProfile);
//   };

//   // Check if profile is complete
//   const isProfileComplete = () => {
//     const requiredFields = ['fullName', 'email', 'phone', 'address', 'city', 'pincode', 'dateOfBirth', 'gender'];
//     return requiredFields.every(field => profile[field] && profile[field].toString().trim() !== '');
//   };

//   // Force immediate profile sync (useful after login)
//   const forceProfileUpdate = (userData) => {
//     console.log('Force updating profile:', userData);
//     if (userData) {
//       updateProfile(userData);
//     }
//   };

//   return (
//     <ProfileContext.Provider value={{ 
//       profile, 
//       updateProfile,
//       updateProfilePhoto,
//       removeProfilePhoto,
//       clearProfile,
//       isProfileComplete,
//       forceProfileUpdate // Add this new function
//     }}>
//       {children}
//     </ProfileContext.Provider>
//   );
// };

// export const useProfile = () => {
//   const context = useContext(ProfileContext);
//   if (!context) {
//     throw new Error('useProfile must be used within a ProfileProvider');
//   }
//   return context;
// };

// export default ProfileContext;
import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProfileContext = createContext();

// Default profile structure
const defaultProfile = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  pincode: '',
  dateOfBirth: '',
  age: '',
  gender: '',
  profilePhoto: null,
  lastUpdated: '',
  // Enhanced health profile fields
  bloodGroup: 'Not specified',
  emergencyContact: '',
  healthMetrics: {
    height: '',
    weight: '',
    bmi: '',
    bloodPressure: '',
    lastCheckup: ''
  },
  medicalHistory: {
    conditions: [],
    allergies: [],
    medications: [],
    surgeries: []
  },
  insurance: {
    provider: '',
    policyNumber: '',
    validity: ''
  }
};

export const ProfileProvider = ({ children, user }) => {
  const [profile, setProfile] = useState(() => {
    try {
      // First priority: user data from props (login data)
      if (user && user.email) {
        console.log('Initializing profile from user props:', user);
        const userProfile = {
          ...defaultProfile,
          fullName: user.fullName || user.name || '',
          email: user.email || '',
          phone: user.phone || '',
          address: user.address || '',
          city: user.city || '',
          pincode: user.pincode || '',
          dateOfBirth: user.dateOfBirth || '',
          age: user.age || '',
          gender: user.gender || '',
          profilePhoto: user.profilePhoto || null,
          lastUpdated: user.lastUpdated || new Date().toISOString(),
          // Enhanced health fields - SAFE ACCESS
          bloodGroup: user.bloodGroup || defaultProfile.bloodGroup,
          emergencyContact: user.emergencyContact || '',
          healthMetrics: {
            ...defaultProfile.healthMetrics,
            ...(user.healthMetrics || {})
          },
          medicalHistory: {
            ...defaultProfile.medicalHistory,
            ...(user.medicalHistory || {})
          },
          insurance: {
            ...defaultProfile.insurance,
            ...(user.insurance || {})
          }
        };
        
        // Save user data to localStorage
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        return userProfile;
      }
      
      // Second priority: localStorage data
      const saved = localStorage.getItem('userProfile');
      if (saved) {
        console.log('Initializing profile from localStorage');
        return JSON.parse(saved);
      }
      
      // Fallback: default profile
      console.log('Initializing with default profile');
      return defaultProfile;
    } catch (error) {
      console.error('Error loading profile:', error);
      return defaultProfile;
    }
  });

  // Enhanced health data management
  const [healthData, setHealthData] = useState({
    vitalHistory: [],
    medicationAdherence: {},
    labResults: [],
    appointmentHistory: []
  });

  // Sync profile to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('userProfile', JSON.stringify(profile));
      console.log('Profile saved to localStorage:', profile.fullName);
    } catch (error) {
      console.error('Error saving profile to localStorage:', error);
    }
  }, [profile]);

  // Update profile when user prop changes (login/logout) - IMMEDIATE UPDATE
  useEffect(() => {
    if (user && user.email) {
      console.log('User data received in ProfileProvider - UPDATING PROFILE:', user);
      setProfile(prevProfile => {
        const updatedProfile = {
          ...prevProfile,
          fullName: user.fullName || user.name || prevProfile.fullName,
          email: user.email || prevProfile.email,
          phone: user.phone || prevProfile.phone,
          address: user.address || prevProfile.address,
          city: user.city || prevProfile.city,
          pincode: user.pincode || prevProfile.pincode,
          dateOfBirth: user.dateOfBirth || prevProfile.dateOfBirth,
          age: user.age || prevProfile.age,
          gender: user.gender || prevProfile.gender,
          profilePhoto: user.profilePhoto || prevProfile.profilePhoto,
          lastUpdated: new Date().toISOString(),
          // Enhanced health fields - SAFE ACCESS
          bloodGroup: user.bloodGroup || prevProfile.bloodGroup,
          emergencyContact: user.emergencyContact || prevProfile.emergencyContact,
          healthMetrics: {
            ...prevProfile.healthMetrics,
            ...(user.healthMetrics || {})
          },
          medicalHistory: {
            ...prevProfile.medicalHistory,
            ...(user.medicalHistory || {})
          },
          insurance: {
            ...prevProfile.insurance,
            ...(user.insurance || {})
          }
        };
        
        // Auto-calculate age if dateOfBirth is provided and changed
        if (user.dateOfBirth && user.dateOfBirth !== prevProfile.dateOfBirth) {
          const calculatedAge = calculateAge(user.dateOfBirth);
          updatedProfile.age = calculatedAge.toString();
        }
        
        console.log('Profile updated from user data:', updatedProfile);
        return updatedProfile;
      });
    }
  }, [user]); // This will trigger immediately when user prop changes

  // Enhanced updateProfile function
  const updateProfile = (newProfileData) => {
    console.log('Updating profile with new data:', newProfileData);
    setProfile(prevProfile => {
      const updatedProfile = {
        ...prevProfile,
        ...newProfileData,
        lastUpdated: new Date().toISOString()
      };
      
      // Auto-calculate age if dateOfBirth is provided and changed
      if (newProfileData.dateOfBirth && newProfileData.dateOfBirth !== prevProfile.dateOfBirth) {
        const calculatedAge = calculateAge(newProfileData.dateOfBirth);
        updatedProfile.age = calculatedAge.toString();
      }
      
      // Handle nested health data updates - SAFE ACCESS
      if (newProfileData.healthMetrics) {
        updatedProfile.healthMetrics = {
          ...prevProfile.healthMetrics,
          ...newProfileData.healthMetrics
        };
      }
      
      if (newProfileData.medicalHistory) {
        updatedProfile.medicalHistory = {
          ...prevProfile.medicalHistory,
          ...newProfileData.medicalHistory
        };
      }
      
      if (newProfileData.insurance) {
        updatedProfile.insurance = {
          ...prevProfile.insurance,
          ...newProfileData.insurance
        };
      }
      
      console.log('Final updated profile:', updatedProfile);
      return updatedProfile;
    });
  };

  const updateProfilePhoto = (photoUrl) => {
    console.log('Updating profile photo:', photoUrl);
    setProfile(prevProfile => ({
      ...prevProfile,
      profilePhoto: photoUrl,
      lastUpdated: new Date().toISOString()
    }));
  };

  const removeProfilePhoto = () => {
    console.log('Removing profile photo');
    setProfile(prevProfile => ({
      ...prevProfile,
      profilePhoto: null,
      lastUpdated: new Date().toISOString()
    }));
  };

  // Health data management functions
  const updateHealthData = (newData) => {
    setHealthData(prev => ({
      ...prev,
      ...newData
    }));
  };

  // Helper function to calculate age from date of birth
  const calculateAge = (birthDate) => {
    try {
      const dob = new Date(birthDate);
      const today = new Date();
      
      if (dob > today) {
        return 0;
      }

      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      
      return age > 0 ? age : 0;
    } catch (error) {
      console.error('Error calculating age:', error);
      return 0;
    }
  };

  // Clear profile (for logout)
  const clearProfile = () => {
    console.log('Clearing profile data');
    localStorage.removeItem('userProfile');
    setProfile(defaultProfile);
    setHealthData({
      vitalHistory: [],
      medicationAdherence: {},
      labResults: [],
      appointmentHistory: []
    });
  };

  // Check if profile is complete
  const isProfileComplete = () => {
    const requiredFields = ['fullName', 'email', 'phone', 'address', 'city', 'pincode', 'dateOfBirth', 'gender'];
    return requiredFields.every(field => profile[field] && profile[field].toString().trim() !== '');
  };

  // Force immediate profile sync (useful after login)
  const forceProfileUpdate = (userData) => {
    console.log('Force updating profile:', userData);
    if (userData) {
      updateProfile(userData);
    }
  };

  // Calculate BMI if height and weight are available - SAFE ACCESS
  const calculateBMI = () => {
    const height = parseFloat(profile.healthMetrics?.height || 0);
    const weight = parseFloat(profile.healthMetrics?.weight || 0);
    
    if (height && weight && height > 0) {
      const heightInMeters = height / 100; // convert cm to meters
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      return bmi;
    }
    return null;
  };

  // Update BMI when height or weight changes - SAFE ACCESS
  useEffect(() => {
    const bmi = calculateBMI();
    if (bmi && bmi !== profile.healthMetrics?.bmi) {
      updateProfile({
        healthMetrics: {
          ...profile.healthMetrics,
          bmi: bmi
        }
      });
    }
  }, [profile.healthMetrics?.height, profile.healthMetrics?.weight]);

  // Get profile completion percentage
  const getProfileCompletion = () => {
    const requiredFields = [
      'fullName', 'email', 'phone', 'address', 'city', 
      'pincode', 'dateOfBirth', 'gender'
    ];
    
    const completedFields = requiredFields.filter(field => 
      profile[field] && profile[field].toString().trim() !== ''
    ).length;
    
    return Math.round((completedFields / requiredFields.length) * 100);
  };

  // Get missing profile fields
  const getMissingFields = () => {
    const requiredFields = [
      'fullName', 'email', 'phone', 'address', 'city', 
      'pincode', 'dateOfBirth', 'gender'
    ];
    
    return requiredFields.filter(field => 
      !profile[field] || profile[field].toString().trim() === ''
    );
  };

  // Export profile data
  const exportProfileData = () => {
    const data = {
      profile,
      healthData,
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `profile-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const value = {
    profile,
    updateProfile,
    updateProfilePhoto,
    removeProfilePhoto,
    clearProfile,
    isProfileComplete,
    forceProfileUpdate,
    // Health data functions
    healthData,
    updateHealthData,
    calculateBMI,
    // Additional utility functions
    getProfileCompletion,
    getMissingFields,
    exportProfileData
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

// PropTypes for better development experience
ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    fullName: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    pincode: PropTypes.string,
    dateOfBirth: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    profilePhoto: PropTypes.string,
    lastUpdated: PropTypes.string,
    bloodGroup: PropTypes.string,
    emergencyContact: PropTypes.string,
    healthMetrics: PropTypes.object,
    medicalHistory: PropTypes.object,
    insurance: PropTypes.object
  })
};

ProfileProvider.defaultProps = {
  user: null
};

export default ProfileContext;