import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

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
  bloodGroup: '',
  emergencyContact: '',
  profilePhoto: null,
  lastUpdated: ''
};

export const ProfileProvider = ({ children, user }) => {
  const [profile, setProfile] = useState(defaultProfile);
  const initialLoadRef = useRef(true);
  const previousUserRef = useRef(null);

  // Helper function to calculate age from date of birth
  const calculateAge = useCallback((birthDate) => {
    try {
      if (!birthDate) return '';
      
      const dob = new Date(birthDate);
      const today = new Date();
      
      if (dob > today) return '0';

      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      
      return age > 0 ? age.toString() : '0';
    } catch (error) {
      console.error('Error calculating age:', error);
      return '';
    }
  }, []);

  // Initialize profile once on component mount
  useEffect(() => {
    if (!initialLoadRef.current) return;
    
    try {
      console.log('🔄 Initializing profile...');
      
      // First priority: user data from props (login data)
      if (user && (user.email || user.name)) {
        console.log('✅ Initializing profile from user props:', user);
        const userProfile = {
          fullName: user.fullName || user.name || '',
          email: user.email || '',
          phone: user.phone || '+91 9876543210',
          address: user.address || '123 Main Street, Bangalore, Karnataka 560001',
          city: user.city || '',
          pincode: user.pincode || '',
          dateOfBirth: user.dateOfBirth || '1990-01-01',
          age: user.age || '',
          gender: user.gender || 'Male',
          bloodGroup: user.bloodGroup || 'O+',
          emergencyContact: user.emergencyContact || '+91 9876543211',
          profilePhoto: user.profilePhoto || null,
          lastUpdated: user.lastUpdated || new Date().toISOString()
        };
        
        // Auto-calculate age if dateOfBirth is provided
        if (user.dateOfBirth && !user.age) {
          userProfile.age = calculateAge(user.dateOfBirth);
        }
        
        setProfile(userProfile);
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        initialLoadRef.current = false;
        previousUserRef.current = user.email || user.name;
        return;
      }
      
      // Second priority: localStorage data
      const saved = localStorage.getItem('userProfile');
      if (saved) {
        console.log('✅ Initializing profile from localStorage');
        const savedProfile = JSON.parse(saved);
        setProfile(savedProfile);
        initialLoadRef.current = false;
        return;
      }
      
      // Fallback: default profile with sample data
      console.log('✅ Initializing with default profile');
      const fallbackProfile = {
        ...defaultProfile,
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+91 9876543210',
        address: '123 Main Street, Bangalore, Karnataka 560001',
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        bloodGroup: 'O+',
        emergencyContact: '+91 9876543211'
      };
      setProfile(fallbackProfile);
      initialLoadRef.current = false;
      
    } catch (error) {
      console.error('❌ Error loading profile:', error);
      initialLoadRef.current = false;
    }
  }, [user, calculateAge]);

  // Sync profile to localStorage whenever it changes (with debounce)
  useEffect(() => {
    if (initialLoadRef.current) return; // Skip initial sync
    
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem('userProfile', JSON.stringify(profile));
        console.log('💾 Profile saved to localStorage:', profile.fullName || 'Unknown');
      } catch (error) {
        console.error('❌ Error saving profile to localStorage:', error);
      }
    }, 100); // Small debounce to prevent excessive writes
    
    return () => clearTimeout(timeoutId);
  }, [profile]);

  // Update profile when user prop changes
  useEffect(() => {
    if (initialLoadRef.current) return;
    
    const currentUserEmail = user?.email || user?.name;
    const previousUserEmail = previousUserRef.current;
    
    // Only update if user actually changed
    if (user && (user.email || user.name) && currentUserEmail !== previousUserEmail) {
      console.log('🔄 User data changed - UPDATING PROFILE:', user);
      
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
          bloodGroup: user.bloodGroup || prevProfile.bloodGroup,
          emergencyContact: user.emergencyContact || prevProfile.emergencyContact,
          profilePhoto: user.profilePhoto || prevProfile.profilePhoto,
          lastUpdated: new Date().toISOString()
        };
        
        // Auto-calculate age if dateOfBirth is provided
        if (user.dateOfBirth && user.dateOfBirth !== prevProfile.dateOfBirth && !user.age) {
          updatedProfile.age = calculateAge(user.dateOfBirth);
        }
        
        console.log('✅ Profile updated from user data');
        return updatedProfile;
      });
      
      previousUserRef.current = currentUserEmail;
    }
  }, [user, calculateAge]);

  // Enhanced updateProfile function
  const updateProfile = useCallback((newProfileData) => {
    console.log('🔄 Updating profile with new data');
    setProfile(prevProfile => {
      const updatedProfile = {
        ...prevProfile,
        ...newProfileData,
        lastUpdated: new Date().toISOString()
      };
      
      // Auto-calculate age if dateOfBirth is provided and changed
      if (newProfileData.dateOfBirth && newProfileData.dateOfBirth !== prevProfile.dateOfBirth) {
        updatedProfile.age = calculateAge(newProfileData.dateOfBirth);
      }
      
      return updatedProfile;
    });
  }, [calculateAge]);

  const updateProfilePhoto = useCallback((photoUrl) => {
    console.log('📸 Updating profile photo');
    setProfile(prevProfile => ({
      ...prevProfile,
      profilePhoto: photoUrl,
      lastUpdated: new Date().toISOString()
    }));
  }, []);

  const removeProfilePhoto = useCallback(() => {
    console.log('🗑️ Removing profile photo');
    setProfile(prevProfile => ({
      ...prevProfile,
      profilePhoto: null,
      lastUpdated: new Date().toISOString()
    }));
  }, []);

  // Clear profile (for logout)
  const clearProfile = useCallback(() => {
    console.log('🧹 Clearing profile data');
    localStorage.removeItem('userProfile');
    setProfile(defaultProfile);
    previousUserRef.current = null;
    initialLoadRef.current = true;
  }, []);

  // Check if profile is complete
  const isProfileComplete = useCallback(() => {
    const requiredFields = ['fullName', 'email', 'phone', 'address'];
    return requiredFields.every(field => 
      profile[field] && profile[field].toString().trim() !== ''
    );
  }, [profile]);

  // Get profile completion percentage
  const getProfileCompletion = useCallback(() => {
    const fields = ['fullName', 'email', 'phone', 'address', 'city', 'pincode', 'dateOfBirth', 'gender', 'bloodGroup'];
    const filledFields = fields.filter(field => 
      profile[field] && profile[field].toString().trim() !== ''
    );
    return Math.round((filledFields.length / fields.length) * 100);
  }, [profile]);

  // Force immediate profile sync (useful after login)
  const forceProfileUpdate = useCallback((userData) => {
    console.log('⚡ Force updating profile');
    if (userData) {
      updateProfile(userData);
    }
  }, [updateProfile]);

  const contextValue = React.useMemo(() => ({
    profile, 
    updateProfile,
    updateProfilePhoto,
    removeProfilePhoto,
    clearProfile,
    isProfileComplete,
    getProfileCompletion,
    forceProfileUpdate
  }), [
    profile, 
    updateProfile,
    updateProfilePhoto,
    removeProfilePhoto,
    clearProfile,
    isProfileComplete,
    getProfileCompletion,
    forceProfileUpdate
  ]);

  return (
    <ProfileContext.Provider value={contextValue}>
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

export default ProfileContext;