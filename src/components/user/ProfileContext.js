import React, { useState, useContext, useCallback, useEffect } from 'react';

// Create a context for global profile state
const ProfileContext = React.createContext();

// Profile Provider Component (should be at app root level)
export const ProfileProvider = ({ children, initialUser = {} }) => {
  // Initialize profile state with localStorage data if available, otherwise use initialUser props
  const [profile, setProfile] = useState(() => {
    try {
      // Try to load from localStorage for persistence
      const savedProfile = localStorage.getItem('userProfile');
      if (savedProfile) {
        return JSON.parse(savedProfile);
      }
    } catch (error) {
      console.warn('Failed to load profile from localStorage:', error);
    }
    
    // Fallback to initialUser props or defaults
    return {
      fullName: initialUser?.fullName || 'Jagan',
      email: initialUser?.email || 'yerrajagan29@gmail.com',
      phone: initialUser?.phone || '6300604470',
      profilePhoto: initialUser?.profilePhoto || null,
      address: initialUser?.address || '',
      city: initialUser?.city || '',
      pincode: initialUser?.pincode || '',
      dateOfBirth: initialUser?.dateOfBirth || '',
      age: initialUser?.age || '',
      gender: initialUser?.gender || '',
      lastUpdated: new Date().toISOString()
    };
  });

  // Save to localStorage whenever profile changes
  useEffect(() => {
    try {
      localStorage.setItem('userProfile', JSON.stringify(profile));
    } catch (error) {
      console.warn('Failed to save profile to localStorage:', error);
    }
  }, [profile]);

  // Memoized update function to prevent unnecessary re-renders
  const updateProfile = useCallback((newProfile) => {
    setProfile(prevProfile => {
      const updatedProfile = {
        ...prevProfile,
        ...newProfile,
        lastUpdated: new Date().toISOString()
      };
      return updatedProfile;
    });
  }, []);

  // Function to update specific profile fields
  const updateProfileField = useCallback((field, value) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [field]: value,
      lastUpdated: new Date().toISOString()
    }));
  }, []);

  // Function to reset profile to initial state
  const resetProfile = useCallback(() => {
    setProfile({
      fullName: initialUser?.fullName || 'Jagan',
      email: initialUser?.email || 'yerrajagan29@gmail.com',
      phone: initialUser?.phone || '6300604470',
      profilePhoto: initialUser?.profilePhoto || null,
      address: initialUser?.address || '',
      city: initialUser?.city || '',
      pincode: initialUser?.pincode || '',
      dateOfBirth: initialUser?.dateOfBirth || '',
      age: initialUser?.age || '',
      gender: initialUser?.gender || '',
      lastUpdated: new Date().toISOString()
    });
    
    // Clear localStorage
    try {
      localStorage.removeItem('userProfile');
    } catch (error) {
      console.warn('Failed to clear profile from localStorage:', error);
    }
  }, [initialUser]);

  // Function to clear profile data (logout scenario)
  const clearProfile = useCallback(() => {
    setProfile({
      fullName: '',
      email: '',
      phone: '',
      profilePhoto: null,
      address: '',
      city: '',
      pincode: '',
      dateOfBirth: '',
      age: '',
      gender: '',
      lastUpdated: new Date().toISOString()
    });
    
    try {
      localStorage.removeItem('userProfile');
    } catch (error) {
      console.warn('Failed to clear profile from localStorage:', error);
    }
  }, []);

  // Context value with memoized functions
  const contextValue = React.useMemo(() => ({
    profile,
    updateProfile,
    updateProfileField,
    resetProfile,
    clearProfile,
    // Computed properties
    isProfileComplete: !!(profile.fullName && profile.email && profile.phone),
    hasProfilePhoto: !!profile.profilePhoto
  }), [profile, updateProfile, updateProfileField, resetProfile, clearProfile]);

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};

// Hook to use profile context with better error handling
export const useProfile = () => {
  const context = useContext(ProfileContext);
  
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  
  return context;
};

// Optional: Hook for profile-related utilities
export const useProfileActions = () => {
  const { updateProfile, updateProfileField, resetProfile, clearProfile } = useProfile();
  
  return {
    updateProfile,
    updateProfileField,
    resetProfile,
    clearProfile
  };
};

// Optional: Hook for specific profile data
export const useProfileData = () => {
  const { profile, isProfileComplete, hasProfilePhoto } = useProfile();
  
  return {
    profile,
    isProfileComplete,
    hasProfilePhoto
  };
};

export default ProfileContext;