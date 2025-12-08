
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
// import HomePage from './components/Homepage/HomePage';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import UserDashboard from './components/user/UserDashboard';
// import VendorDashboard from './components/vendor/VendorDashboard';
// import DoctorDashboard from './components/doctor/DoctorDashboard';
// import DeliveryDashboard from './components/delivery/DeliveryDashboard';
// import AdminLogin from './components/admin/AdminLogin';
// import AdminDashboard from './components/admin/AdminDashboard';
// import ReviewModal from './components/Homepage/ReviewModal';

// import { ProfileProvider } from './components/user/ProfileContext';
// import './App.css';

// // Main App Component
// function App() {
//   return (
//     <ProfileProvider>
//       <Router>
//         <AppWrapper />
//       </Router>
//     </ProfileProvider>
//   );
// }

// // App Wrapper Component
// const AppWrapper = () => {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [authMode, setAuthMode] = useState('login');
//   const [currentUser, setCurrentUser] = useState(() => {
//     try {
//       const user = localStorage.getItem('currentUser');
//       return user ? JSON.parse(user) : null;
//     } catch (error) {
//       console.error('Error parsing user data:', error);
//       localStorage.removeItem('currentUser');
//       return null;
//     }
//   });
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [reviews, setReviews] = useState(() => {
//     try {
//       const savedReviews = localStorage.getItem('quickmed-reviews');
//       return savedReviews ? JSON.parse(savedReviews) : [];
//     } catch (error) {
//       console.error('Error parsing reviews:', error);
//       return [];
//     }
//   });

//   const navigate = useNavigate();
//   const location = useLocation();

//   const userTypeToPageMap = {
//     vendor: '/vendor/dashboard',
//     doctor: '/doctor/dashboard',
//     delivery: '/delivery/dashboard',
//     admin: '/admin/dashboard',
//     user: '/user/dashboard',
//     patient: '/user/dashboard'
//   };

//   const userTypeToSimplePageMap = {
//     vendor: 'vendorDashboard',
//     doctor: 'doctorDashboard',
//     delivery: 'deliveryDashboard',
//     admin: 'adminDashboard',
//     user: 'dashboard',
//     patient: 'dashboard'
//   };

//   // Load reviews from localStorage on component mount
//   useEffect(() => {
//     const savedReviews = localStorage.getItem('quickmed-reviews');
//     if (savedReviews) {
//       setReviews(JSON.parse(savedReviews));
//     }
//   }, []);

//   // Check for logged-in user on mount and route changes
//   useEffect(() => {
//     const user = localStorage.getItem('currentUser');
//     if (user) {
//       try {
//         const userData = JSON.parse(user);
//         setCurrentUser(userData);
        
//         // Set current page based on route for backward compatibility
//         const path = location.pathname;
//         if (path === '/') {
//           setCurrentPage('home');
//         } else if (path === '/login' || path === '/signup') {
//           setCurrentPage('auth');
//         } else if (path === '/admin/login') {
//           setCurrentPage('adminAuth');
//         } else {
//           // Extract page from route for state management
//           const pageFromRoute = getPageFromRoute(path);
//           if (pageFromRoute) {
//             setCurrentPage(pageFromRoute);
//           }
//         }
//       } catch (error) {
//         console.error('Error parsing user data:', error);
//         localStorage.removeItem('currentUser');
//         setCurrentUser(null);
//       }
//     }
//   }, [location.pathname]);

//   // Helper function to extract page from route
//   const getPageFromRoute = (path) => {
//     if (path.startsWith('/user')) return 'dashboard';
//     if (path.startsWith('/vendor')) return 'vendorDashboard';
//     if (path.startsWith('/doctor')) return 'doctorDashboard';
//     if (path.startsWith('/delivery')) return 'deliveryDashboard';
//     if (path.startsWith('/admin')) return 'adminDashboard';
//     return null;
//   };

//   const handleLoginSuccess = (user) => {
//     setCurrentUser(user);
//     localStorage.setItem('currentUser', JSON.stringify(user));
    
//     // Use routing navigation
//     navigate(userTypeToPageMap[user.userType] || '/user/dashboard');
    
//     // Also update state for backward compatibility
//     setCurrentPage(userTypeToSimplePageMap[user.userType] || 'dashboard');
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser');
//     setCurrentUser(null);
//     setCurrentPage('home');
//     navigate('/');
//   };

//   const navigateToAuth = () => {
//     setCurrentPage('auth');
//     setAuthMode('login');
//     navigate('/login');
//   };

//   const navigateToAdmin = () => {
//     setCurrentPage('adminAuth');
//     setAuthMode('login');
//     navigate('/admin/login');
//   };

//   const switchToSignup = () => {
//     setAuthMode('signup');
//     navigate('/signup');
//   };

//   const switchToLogin = () => {
//     setAuthMode('login');
//     navigate('/login');
//   };

//   const handleSignupSuccess = () => {
//     setAuthMode('login');
//     setCurrentPage('auth');
//     navigate('/login');
//   };

//   const handleBackToHome = () => {
//     setCurrentPage('home');
//     navigate('/');
//   };

//   const handleNavigateToLogin = () => {
//     setCurrentPage('auth');
//     setAuthMode('login');
//     navigate('/login');
//   };

//   // Review Modal Functions
//   const handleWriteReview = () => {
//     setShowReviewModal(true);
//   };

//   const handleReviewSubmit = (newReview) => {
//     const reviewToAdd = {
//       ...newReview,
//       avatar: newReview.name.split(' ').map(n => n[0]).join('').toUpperCase(),
//       id: Date.now()
//     };
    
//     const updatedReviews = [reviewToAdd, ...reviews];
//     setReviews(updatedReviews);
//     localStorage.setItem('quickmed-reviews', JSON.stringify(updatedReviews));
//     setShowReviewModal(false);
//   };

//   const handleCloseReviewModal = () => {
//     setShowReviewModal(false);
//   };

//   // Render auth page for backward compatibility
//   const renderAuthPage = () => (
//     authMode === 'login' ? (
//       <Login 
//         onSwitchToSignup={switchToSignup}
//         onLoginSuccess={handleLoginSuccess}
//         onBackToHome={handleBackToHome}
//       />
//     ) : (
//       <Signup 
//         onSwitchToLogin={switchToLogin}
//         onSignupSuccess={handleSignupSuccess}
//         onBackToHome={handleBackToHome}
//       />
//     )
//   );

//   // For backward compatibility: render page based on state
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return (
//           <HomePage
//             onNavigateToAuth={navigateToAuth}
//             onNavigateToAdmin={navigateToAdmin}
//             onNavigateToLogin={handleNavigateToLogin}
//             onWriteReview={handleWriteReview}
//             reviews={reviews}
//           />
//         );

//       case 'auth':
//         return renderAuthPage();

//       case 'adminAuth':
//         return (
//           <AdminLogin
//             onLoginSuccess={handleLoginSuccess}
//             onBackToHome={handleBackToHome}
//           />
//         );

//       case 'dashboard':
//         return (
//           <UserDashboard
//             user={currentUser}
//             onLogout={handleLogout}
//             onWriteReview={handleWriteReview}
//           />
//         );

//       case 'vendorDashboard':
//         return (
//           <VendorDashboard
//             user={currentUser}
//             onLogout={handleLogout}
//           />
//         );

//       case 'doctorDashboard':
//         return (
//           <DoctorDashboard
//             user={currentUser}
//             onLogout={handleLogout}
//           />
//         );

//       case 'deliveryDashboard':
//         return (
//           <DeliveryDashboard
//             user={currentUser}
//             onLogout={handleLogout}
//           />
//         );

//       case 'adminDashboard':
//         return (
//           <AdminDashboard
//             user={currentUser}
//             onLogout={handleLogout}
//           />
//         );

//       default:
//         return (
//           <HomePage
//             onNavigateToAuth={navigateToAuth}
//             onNavigateToAdmin={navigateToAdmin}
//             onNavigateToLogin={handleNavigateToLogin}
//             onWriteReview={handleWriteReview}
//             reviews={reviews}
//           />
//         );
//     }
//   };

//   // Protected Route Component
//   const ProtectedRoute = ({ children, allowedTypes }) => {
//     if (!currentUser) {
//       return <Navigate to="/login" replace />;
//     }
    
//     if (allowedTypes && !allowedTypes.includes(currentUser.userType)) {
//       return <Navigate to="/login" replace />;
//     }
    
//     return children;
//   };

//   // Route Handler Components for different user types
//   const UserRouteHandler = () => {
//     return (
//       <ProtectedRoute allowedTypes={['user', 'patient']}>
//         <UserDashboard 
//           user={currentUser}
//           onLogout={handleLogout}
//           onWriteReview={handleWriteReview}
//         />
//       </ProtectedRoute>
//     );
//   };

//   const VendorRouteHandler = () => {
//     return (
//       <ProtectedRoute allowedTypes={['vendor']}>
//         <VendorDashboard
//           user={currentUser}
//           onLogout={handleLogout}
//         />
//       </ProtectedRoute>
//     );
//   };

//   const DoctorRouteHandler = () => {
//     return (
//       <ProtectedRoute allowedTypes={['doctor']}>
//         <DoctorDashboard
//           user={currentUser}
//           onLogout={handleLogout}
//         />
//       </ProtectedRoute>
//     );
//   };

//   const DeliveryRouteHandler = () => {
//     return (
//       <ProtectedRoute allowedTypes={['delivery']}>
//         <DeliveryDashboard
//           user={currentUser}
//           onLogout={handleLogout}
//         />
//       </ProtectedRoute>
//     );
//   };

//   const AdminRouteHandler = () => {
//     return (
//       <ProtectedRoute allowedTypes={['admin']}>
//         <AdminDashboard
//           user={currentUser}
//           onLogout={handleLogout}
//         />
//       </ProtectedRoute>
//     );
//   };

//   return (
//     <div className="App">
//       {/* Routes for navigation-based flow */}
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={
//           currentUser && location.pathname === '/' ? (
//             <Navigate to={userTypeToPageMap[currentUser.userType] || '/user/dashboard'} replace />
//           ) : (
//             <HomePage 
//               onNavigateToAuth={navigateToAuth}
//               onNavigateToAdmin={navigateToAdmin}
//               onNavigateToLogin={handleNavigateToLogin}
//               onWriteReview={handleWriteReview}
//               reviews={reviews}
//             />
//           )
//         } />
        
//         <Route path="/home" element={<Navigate to="/" replace />} />
        
//         <Route path="/login" element={
//           currentUser ? (
//             <Navigate to={userTypeToPageMap[currentUser.userType] || '/user/dashboard'} replace />
//           ) : (
//             <Login 
//               onSwitchToSignup={switchToSignup}
//               onLoginSuccess={handleLoginSuccess}
//               onBackToHome={handleBackToHome}
//             />
//           )
//         } />
        
//         <Route path="/signup" element={
//           currentUser ? (
//             <Navigate to={userTypeToPageMap[currentUser.userType] || '/user/dashboard'} replace />
//           ) : (
//             <Signup 
//               onSwitchToLogin={switchToLogin}
//               onSignupSuccess={handleSignupSuccess}
//               onBackToHome={handleBackToHome}
//             />
//           )
//         } />
        
//         <Route path="/admin/login" element={
//           currentUser?.userType === 'admin' ? (
//             <Navigate to="/admin/dashboard" replace />
//           ) : (
//             <AdminLogin
//               onLoginSuccess={handleLoginSuccess}
//               onBackToHome={handleBackToHome}
//             />
//           )
//         } />

//         {/* User Routes */}
//         <Route path="/user/*" element={<UserRouteHandler />} />
//         <Route path="/user/dashboard/*" element={<UserRouteHandler />} />
//         <Route path="/user/dashboard" element={<UserRouteHandler />} />
//         <Route path="/user/profile" element={<UserRouteHandler />} />
//         <Route path="/user/consultation" element={<UserRouteHandler />} />
//         <Route path="/user/appointments" element={<UserRouteHandler />} />
//         <Route path="/user/orders" element={<UserRouteHandler />} />
//         <Route path="/user/medicine" element={<UserRouteHandler />} />
//         <Route path="/user/products" element={<UserRouteHandler />} />
//         <Route path="/user/cart" element={<UserRouteHandler />} />
//         <Route path="/user/live-tracking" element={<UserRouteHandler />} />
//         <Route path="/user/notifications" element={<UserRouteHandler />} />
//         <Route path="/user/pregnancy-care" element={<UserRouteHandler />} />
//         <Route path="/user/baby-care" element={<UserRouteHandler />} />
//         <Route path="/user/lab-tests" element={<UserRouteHandler />} />
//         <Route path="/user/health-records" element={<UserRouteHandler />} />
//         <Route path="/user/blood-bank" element={<UserRouteHandler />} />

//         {/* Vendor Dashboard */}
//         <Route path="/vendor/dashboard" element={<VendorRouteHandler />} />
//         <Route path="/vendor/dashboard/*" element={<VendorRouteHandler />} />

//         {/* Doctor Dashboard */}
//         <Route path="/doctor/dashboard" element={<DoctorRouteHandler />} />
//         <Route path="/doctor/dashboard/*" element={<DoctorRouteHandler />} />

//         {/* Delivery Dashboard */}
//         <Route path="/delivery/dashboard" element={<DeliveryRouteHandler />} />
//         <Route path="/delivery/dashboard/*" element={<DeliveryRouteHandler />} />
//         <Route path="/delivery/dashboard/delivery-history" element={<DeliveryRouteHandler />} />
//         <Route path="/delivery/dashboard/earnings" element={<DeliveryRouteHandler />} />
//         <Route path="/delivery/dashboard/performance" element={<DeliveryRouteHandler />} />
//         <Route path="/delivery/dashboard/profile" element={<DeliveryRouteHandler />} />

//         {/* Admin Dashboard */}
//         <Route path="/admin/dashboard" element={<AdminRouteHandler />} />
//         <Route path="/admin/dashboard/*" element={<AdminRouteHandler />} />

//         {/* Alternative routes (for backward compatibility) */}
//         <Route path="/user-dashboard" element={<UserRouteHandler />} />
//         <Route path="/vendor-dashboard" element={<VendorRouteHandler />} />
//         <Route path="/doctor-dashboard" element={<DoctorRouteHandler />} />
//         <Route path="/delivery-dashboard" element={<DeliveryRouteHandler />} />
//         <Route path="/delivery-dashboard/*" element={<DeliveryRouteHandler />} />
//         <Route path="/admin-dashboard" element={<AdminRouteHandler />} />
        
//         <Route path="/admin-login" element={
//           currentUser?.userType === 'admin' ? (
//             <Navigate to="/admin/dashboard" replace />
//           ) : (
//             <AdminLogin
//               onLoginSuccess={handleLoginSuccess}
//               onBackToHome={handleBackToHome}
//             />
//           )
//         } />

//         {/* State-based routes (for backward compatibility) */}
//         <Route path="/auth" element={renderAuthPage()} />
//         <Route path="/admin-auth" element={
//           <AdminLogin
//             onLoginSuccess={handleLoginSuccess}
//             onBackToHome={handleBackToHome}
//           />
//         } />

//         {/* Catch all route - redirect to home */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
      
//       {/* Review Modal */}
//       {showReviewModal && (
//         <ReviewModal
//           onClose={handleCloseReviewModal}
//           onReviewSubmit={handleReviewSubmit}
//         />
//       )}
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect, useCallback } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
// import './App.css';

// // Import Homepage Components
// import HomePage from './components/Homepage/HomePage';
// import Footer from './components/Homepage/Footer';

// // Import Authentication Components
// import Login from './components/Login';
// import Signup from './components/Signup';

// // Import Modal Components
// import ReviewModal from './components/Homepage/ReviewModal';

// // Import Dashboard Components
// import DoctorDashboard from './components/doctor/DoctorDashboard';
// import UserDashboard from './components/user/UserDashboard';
// import VendorDashboard from './components/vendor/VendorDashboard';
// import DeliveryDashboard from './components/delivery/DeliveryDashboard';

// // Import Context Provider
// import { ProfileProvider } from './components/user/ProfileContext';

// // Main App Component
// function App() {
//   return (
//     <ProfileProvider>
//       <Router>
//         <AppWrapper />
//       </Router>
//     </ProfileProvider>
//   );
// }

// // App Wrapper Component with integrated logic
// const AppWrapper = () => {
//   const [currentUser, setCurrentUser] = useState(() => {
//     try {
//       const user = localStorage.getItem('currentUser');
//       return user ? JSON.parse(user) : null;
//     } catch (error) {
//       console.error('Error parsing user data:', error);
//       localStorage.removeItem('currentUser');
//       return null;
//     }
//   });
  
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [reviews, setReviews] = useState(() => {
//     try {
//       const savedReviews = localStorage.getItem('quickmed-reviews');
//       return savedReviews ? JSON.parse(savedReviews) : [];
//     } catch (error) {
//       console.error('Error parsing reviews:', error);
//       return [];
//     }
//   });
  
//   const navigate = useNavigate();
//   const location = useLocation();

//   // User type to page mapping - moved to useCallback for stable reference
//   const userTypeToPageMap = useCallback((userType) => {
//     const map = {
//       vendor: '/vendor/dashboard',
//       doctor: '/doctor/dashboard',
//       delivery: '/delivery/dashboard',
//       user: '/user/dashboard',
//       patient: '/user/dashboard'
//     };
//     return map[userType] || '/user/dashboard';
//   }, []);

//   // Check for logged-in user on mount and route changes
//   useEffect(() => {
//     const user = localStorage.getItem('currentUser');
//     if (user) {
//       try {
//         const userData = JSON.parse(user);
//         setCurrentUser(userData);
        
//         // Also set legacy token for compatibility
//         localStorage.setItem('token', 'user-authenticated');
//         localStorage.setItem('userRole', userData.userType);
        
//         // Prevent redirecting if already on correct user route
//         const isUserRoute = location.pathname.startsWith('/user/') || 
//                            location.pathname.startsWith('/doctor/') || 
//                            location.pathname.startsWith('/vendor/') || 
//                            location.pathname.startsWith('/delivery/');
        
//         if (!isUserRoute && (location.pathname === '/' || location.pathname === '/home')) {
//           const redirectPath = userTypeToPageMap(userData.userType);
//           navigate(redirectPath);
//         }
//       } catch (error) {
//         console.error('Error parsing user data:', error);
//         localStorage.removeItem('currentUser');
//         localStorage.removeItem('token');
//         localStorage.removeItem('userRole');
//         setCurrentUser(null);
//       }
//     }
//   }, [location.pathname, navigate, userTypeToPageMap]);

//   // Authentication handlers
//   const handleLoginSuccess = useCallback((user) => {
//     setCurrentUser(user);
//     localStorage.setItem('currentUser', JSON.stringify(user));
//     localStorage.setItem('token', 'user-authenticated');
//     localStorage.setItem('userRole', user.userType);
//     const redirectPath = userTypeToPageMap(user.userType);
//     navigate(redirectPath);
//   }, [navigate, userTypeToPageMap]);

//   const handleLogout = useCallback(() => {
//     localStorage.removeItem('currentUser');
//     localStorage.removeItem('token');
//     localStorage.removeItem('userRole');
//     setCurrentUser(null);
//     navigate('/');
//   }, [navigate]);

//   const handleSignupSuccess = useCallback(() => {
//     navigate('/login');
//   }, [navigate]);

//   const handleWriteReview = useCallback(() => {
//     setShowReviewModal(true);
//   }, []);

//   const handleReviewSubmit = useCallback((newReview) => {
//     const reviewToAdd = {
//       ...newReview,
//       avatar: newReview.name.split(' ').map(n => n[0]).join('').toUpperCase(),
//       id: Date.now()
//     };
    
//     const updatedReviews = [reviewToAdd, ...reviews];
//     setReviews(updatedReviews);
//     localStorage.setItem('quickmed-reviews', JSON.stringify(updatedReviews));
//     setShowReviewModal(false);
//   }, [reviews]);

//   const handleCloseReviewModal = useCallback(() => {
//     setShowReviewModal(false);
//   }, []);

//   // Protected Route Component
//   const ProtectedRoute = useCallback(({ children, allowedTypes }) => {
//     if (!currentUser) {
//       return <Navigate to="/login" replace />;
//     }
    
//     if (allowedTypes && !allowedTypes.includes(currentUser.userType)) {
//       return <Navigate to="/login" replace />;
//     }
    
//     return children;
//   }, [currentUser]);

//   // User Route Handler Component
//   const UserRouteHandler = useCallback(() => {
//     return (
//       <ProtectedRoute allowedTypes={['user', 'patient']}>
//         <UserDashboard 
//           user={currentUser}
//           onLogout={handleLogout}
//           onWriteReview={handleWriteReview}
//         />
//       </ProtectedRoute>
//     );
//   }, [ProtectedRoute, currentUser, handleLogout, handleWriteReview]);

//   // Vendor Route Handler
//   const VendorRouteHandler = useCallback(() => {
//     return (
//       <ProtectedRoute allowedTypes={['vendor']}>
//         <VendorDashboard
//           user={currentUser}
//           onLogout={handleLogout}
//         />
//       </ProtectedRoute>
//     );
//   }, [ProtectedRoute, currentUser, handleLogout]);

//   // Doctor Route Handler
//   const DoctorRouteHandler = useCallback(() => {
//     return (
//       <ProtectedRoute allowedTypes={['doctor']}>
//         <DoctorDashboard
//           user={currentUser}
//           onLogout={handleLogout}
//         />
//       </ProtectedRoute>
//     );
//   }, [ProtectedRoute, currentUser, handleLogout]);

//   // Delivery Route Handler
//   const DeliveryRouteHandler = useCallback(() => {
//     return (
//       <ProtectedRoute allowedTypes={['delivery']}>
//         <DeliveryDashboard
//           user={currentUser}
//           onLogout={handleLogout}
//         />
//       </ProtectedRoute>
//     );
//   }, [ProtectedRoute, currentUser, handleLogout]);

//   // Check if current route is a dashboard route - FIXED with proper parentheses
//   const isDashboardRoute = useCallback(() => {
//     const path = location.pathname;
    
//     // Check for dashboard routes using array method for clarity
//     const dashboardPaths = [
//       '/doctor/dashboard',
//       '/user/dashboard',
//       '/vendor/dashboard',
//       '/delivery/dashboard',
//       '/doctor-dashboard',
//       '/user-dashboard',
//       '/vendor-dashboard',
//       '/delivery-dashboard',
//       '/delivery/dashboard',
//       '/user/dashboard',
//       '/doctor/dashboard',
//       '/vendor/dashboard'
//     ];
    
//     // Check if path starts with any dashboard path
//     const isDashboard = dashboardPaths.some(dashboardPath => path.startsWith(dashboardPath));
    
//     // Also check if it's a delivery sub-route
//     const isDeliverySubRoute = 
//       path === '/delivery/dashboard/delivery-history' ||
//       path === '/delivery/dashboard/earnings' ||
//       path === '/delivery/dashboard/performance' ||
//       path === '/delivery/dashboard/profile';
    
//     // Check for wildcard user routes with proper parentheses
//     const isWildcardUserRoute = 
//       (path.startsWith('/user/') && path !== '/user') ||
//       (path.startsWith('/doctor/') && path !== '/doctor') ||
//       (path.startsWith('/vendor/') && path !== '/vendor') ||
//       (path.startsWith('/delivery/') && path !== '/delivery');
    
//     return isDashboard || isDeliverySubRoute || isWildcardUserRoute;
//   }, [location.pathname]);

//   // Navigation handlers for HomePage
//   const handleNavigateToLogin = useCallback(() => {
//     navigate('/login');
//   }, [navigate]);

//   const handleNavigateToHome = useCallback(() => {
//     navigate('/');
//   }, [navigate]);

//   return (
//     <div className="App">
//       <main>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={
//             <HomePage 
//               onNavigateToAuth={handleNavigateToLogin}
//               onNavigateToHome={handleNavigateToHome}
//               onNavigateToLogin={handleNavigateToLogin}
//               onWriteReview={handleWriteReview}
//               reviews={reviews}
//             />
//           } />
//           <Route path="/home" element={<Navigate to="/" replace />} />
//           <Route path="/about" element={
//             <HomePage 
//               onNavigateToAuth={handleNavigateToLogin}
//               onNavigateToHome={handleNavigateToHome}
//               onNavigateToLogin={handleNavigateToLogin}
//               onWriteReview={handleWriteReview}
//               reviews={reviews}
//             />
//           } />
//           <Route path="/contact" element={
//             <HomePage 
//               onNavigateToAuth={handleNavigateToLogin}
//               onNavigateToHome={handleNavigateToHome}
//               onNavigateToLogin={handleNavigateToLogin}
//               onWriteReview={handleWriteReview}
//               reviews={reviews}
//             />
//           } />
//           <Route path="/doctors" element={
//             <HomePage 
//               onNavigateToAuth={handleNavigateToLogin}
//               onNavigateToHome={handleNavigateToHome}
//               onNavigateToLogin={handleNavigateToLogin}
//               onWriteReview={handleWriteReview}
//               reviews={reviews}
//             />
//           } />
//           <Route path="/services" element={
//             <HomePage 
//               onNavigateToAuth={handleNavigateToLogin}
//               onNavigateToHome={handleNavigateToHome}
//               onNavigateToLogin={handleNavigateToLogin}
//               onWriteReview={handleWriteReview}
//               reviews={reviews}
//             />
//           } />
//           <Route path="/reviews" element={
//             <HomePage 
//               onNavigateToAuth={handleNavigateToLogin}
//               onNavigateToHome={handleNavigateToHome}
//               onNavigateToLogin={handleNavigateToLogin}
//               onWriteReview={handleWriteReview}
//               reviews={reviews}
//             />
//           } />
          
//           {/* Authentication Routes */}
//           <Route path="/login" element={
//             currentUser ? (
//               <Navigate to={userTypeToPageMap(currentUser.userType)} replace />
//             ) : (
//               <Login 
//                 onSwitchToSignup={() => navigate('/signup')}
//                 onLoginSuccess={handleLoginSuccess}
//                 onBackToHome={() => navigate('/')}
//               />
//             )
//           } />
          
//           <Route path="/signup" element={
//             currentUser ? (
//               <Navigate to={userTypeToPageMap(currentUser.userType)} replace />
//             ) : (
//               <Signup 
//                 onSwitchToLogin={() => navigate('/login')}
//                 onSignupSuccess={handleSignupSuccess}
//                 onBackToHome={() => navigate('/')}
//               />
//             )
//           } />
          
//           {/* Doctor Routes - Protected with both specific and wildcard routes */}
//           <Route path="/doctor/dashboard" element={<DoctorRouteHandler />} />
//           <Route path="/doctor/dashboard/*" element={<DoctorRouteHandler />} />
//           <Route path="/doctor/*" element={<DoctorRouteHandler />} />

//           {/* User Routes - Protected */}
//           <Route path="/user/dashboard" element={<UserRouteHandler />} />
//           <Route path="/user/dashboard/*" element={<UserRouteHandler />} />
//           <Route path="/user/*" element={<UserRouteHandler />} />
          
//           {/* User Sub-routes - All will be handled by the UserRouteHandler wildcard */}
//           <Route path="/user/profile" element={<UserRouteHandler />} />
//           <Route path="/user/consultation" element={<UserRouteHandler />} />
//           <Route path="/user/appointments" element={<UserRouteHandler />} />
//           <Route path="/user/orders" element={<UserRouteHandler />} />
//           <Route path="/user/medicine" element={<UserRouteHandler />} />
//           <Route path="/user/products" element={<UserRouteHandler />} />
//           <Route path="/user/cart" element={<UserRouteHandler />} />
//           <Route path="/user/live-tracking" element={<UserRouteHandler />} />
//           <Route path="/user/notifications" element={<UserRouteHandler />} />
//           <Route path="/user/pregnancy-care" element={<UserRouteHandler />} />
//           <Route path="/user/baby-care" element={<UserRouteHandler />} />
//           <Route path="/user/lab-tests" element={<UserRouteHandler />} />
//           <Route path="/user/health-records" element={<UserRouteHandler />} />
//           <Route path="/user/blood-bank" element={<UserRouteHandler />} />

//           {/* Vendor Routes - Protected */}
//           <Route path="/vendor/dashboard" element={<VendorRouteHandler />} />
//           <Route path="/vendor/dashboard/*" element={<VendorRouteHandler />} />
//           <Route path="/vendor/*" element={<VendorRouteHandler />} />

//           {/* Delivery Routes - Protected */}
//           <Route path="/delivery/dashboard" element={<DeliveryRouteHandler />} />
//           <Route path="/delivery/dashboard/*" element={<DeliveryRouteHandler />} />
//           <Route path="/delivery/*" element={<DeliveryRouteHandler />} />
//           <Route path="/delivery/dashboard/delivery-history" element={<DeliveryRouteHandler />} />
//           <Route path="/delivery/dashboard/earnings" element={<DeliveryRouteHandler />} />
//           <Route path="/delivery/dashboard/performance" element={<DeliveryRouteHandler />} />
//           <Route path="/delivery/dashboard/profile" element={<DeliveryRouteHandler />} />

//           {/* Alternative routes (for backward compatibility) */}
//           <Route path="/user-dashboard" element={<UserRouteHandler />} />
//           <Route path="/vendor-dashboard" element={<VendorRouteHandler />} />
//           <Route path="/doctor-dashboard" element={<DoctorRouteHandler />} />
//           <Route path="/delivery-dashboard" element={<DeliveryRouteHandler />} />
//           <Route path="/delivery-dashboard/*" element={<DeliveryRouteHandler />} />

//           {/* Catch all route - redirect to home */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </main>

//       {/* Conditionally render Footer - show only on public routes */}
//       {!isDashboardRoute() && location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />}
      
//       {/* Review Modal (floating) */}
//       {showReviewModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <ReviewModal
//             onClose={handleCloseReviewModal}
//             onReviewSubmit={handleReviewSubmit}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

// Import Homepage Components
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Homepage/Footer';

// Import Authentication Components
import Login from './components/Login';
import Signup from './components/Signup';

// Import Modal Components
import ReviewModal from './components/Homepage/ReviewModal';

// Import Dashboard Components
import DoctorDashboard from './components/doctor/DoctorDashboard';
import UserDashboard from './components/user/UserDashboard';
import VendorDashboard from './components/vendor/VendorDashboard';
import DeliveryDashboard from './components/delivery/DeliveryDashboard';

// Import Context Provider
import { ProfileProvider } from './components/user/ProfileContext';

// Main App Component
function App() {
  return (
    <ProfileProvider>
      <Router>
        <AppWrapper />
      </Router>
    </ProfileProvider>
  );
}

// App Wrapper Component with integrated logic
const AppWrapper = () => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      localStorage.removeItem('currentUser');
      return null;
    }
  });
  
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviews, setReviews] = useState(() => {
    try {
      const savedReviews = localStorage.getItem('quickmed-reviews');
      return savedReviews ? JSON.parse(savedReviews) : [];
    } catch (error) {
      console.error('Error parsing reviews:', error);
      return [];
    }
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  // User type to page mapping - moved to useCallback for stable reference
  const userTypeToPageMap = useCallback((userType) => {
    const map = {
      vendor: '/vendor/dashboard',
      doctor: '/doctor/dashboard',
      delivery: '/delivery/dashboard',
      user: '/user/dashboard',
      patient: '/user/dashboard'
    };
    return map[userType] || '/user/dashboard';
  }, []);

  // Check for logged-in user on mount and route changes
  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      try {
        const userData = JSON.parse(user);
        setCurrentUser(userData);
        
        // Also set legacy token for compatibility
        localStorage.setItem('token', 'user-authenticated');
        localStorage.setItem('userRole', userData.userType);
        
        // Prevent redirecting if already on correct user route
        const isUserRoute = location.pathname.startsWith('/user/') || 
                           location.pathname.startsWith('/doctor/') || 
                           location.pathname.startsWith('/vendor/') || 
                           location.pathname.startsWith('/delivery/');
        
        if (!isUserRoute && (location.pathname === '/' || location.pathname === '/home')) {
          const redirectPath = userTypeToPageMap(userData.userType);
          navigate(redirectPath);
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        setCurrentUser(null);
      }
    }
  }, [location.pathname, navigate, userTypeToPageMap]);

  // Authentication handlers
  const handleLoginSuccess = useCallback((user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('token', 'user-authenticated');
    localStorage.setItem('userRole', user.userType);
    const redirectPath = userTypeToPageMap(user.userType);
    navigate(redirectPath);
  }, [navigate, userTypeToPageMap]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setCurrentUser(null);
    navigate('/');
  }, [navigate]);

  const handleSignupSuccess = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const handleWriteReview = useCallback(() => {
    setShowReviewModal(true);
  }, []);

  const handleReviewSubmit = useCallback((newReview) => {
    const reviewToAdd = {
      ...newReview,
      avatar: newReview.name.split(' ').map(n => n[0]).join('').toUpperCase(),
      id: Date.now()
    };
    
    const updatedReviews = [reviewToAdd, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('quickmed-reviews', JSON.stringify(updatedReviews));
    setShowReviewModal(false);
  }, [reviews]);

  const handleCloseReviewModal = useCallback(() => {
    setShowReviewModal(false);
  }, []);

  // Protected Route Component
  const ProtectedRoute = useCallback(({ children, allowedTypes }) => {
    if (!currentUser) {
      return <Navigate to="/login" replace />;
    }
    
    if (allowedTypes && !allowedTypes.includes(currentUser.userType)) {
      return <Navigate to="/login" replace />;
    }
    
    return children;
  }, [currentUser]);

  // User Route Handler Component
  const UserRouteHandler = useCallback(() => {
    return (
      <ProtectedRoute allowedTypes={['user', 'patient']}>
        <UserDashboard 
          user={currentUser}
          onLogout={handleLogout}
          onWriteReview={handleWriteReview}
        />
      </ProtectedRoute>
    );
  }, [ProtectedRoute, currentUser, handleLogout, handleWriteReview]);

  // Vendor Route Handler
  const VendorRouteHandler = useCallback(() => {
    return (
      <ProtectedRoute allowedTypes={['vendor']}>
        <VendorDashboard
          user={currentUser}
          onLogout={handleLogout}
        />
      </ProtectedRoute>
    );
  }, [ProtectedRoute, currentUser, handleLogout]);

  // Doctor Route Handler
  const DoctorRouteHandler = useCallback(() => {
    return (
      <ProtectedRoute allowedTypes={['doctor']}>
        <DoctorDashboard
          user={currentUser}
          onLogout={handleLogout}
        />
      </ProtectedRoute>
    );
  }, [ProtectedRoute, currentUser, handleLogout]);

  // Delivery Route Handler
  const DeliveryRouteHandler = useCallback(() => {
    return (
      <ProtectedRoute allowedTypes={['delivery']}>
        <DeliveryDashboard
          user={currentUser}
          onLogout={handleLogout}
        />
      </ProtectedRoute>
    );
  }, [ProtectedRoute, currentUser, handleLogout]);

  // Check if current route is a dashboard route - FIXED with proper parentheses
  const isDashboardRoute = useCallback(() => {
    const path = location.pathname;
    
    // Check for dashboard routes using array method for clarity
    const dashboardPaths = [
      '/doctor/dashboard',
      '/user/dashboard',
      '/vendor/dashboard',
      '/delivery/dashboard',
      '/doctor-dashboard',
      '/user-dashboard',
      '/vendor-dashboard',
      '/delivery-dashboard',
      '/delivery/dashboard',
      '/user/dashboard',
      '/doctor/dashboard',
      '/vendor/dashboard'
    ];
    
    // Check if path starts with any dashboard path
    const isDashboard = dashboardPaths.some(dashboardPath => path.startsWith(dashboardPath));
    
    // Also check if it's a delivery sub-route
    const isDeliverySubRoute = 
      path === '/delivery/dashboard/delivery-history' ||
      path === '/delivery/dashboard/earnings' ||
      path === '/delivery/dashboard/performance' ||
      path === '/delivery/dashboard/profile';
    
    // Check for wildcard user routes with proper parentheses
    const isWildcardUserRoute = 
      (path.startsWith('/user/') && path !== '/user') ||
      (path.startsWith('/doctor/') && path !== '/doctor') ||
      (path.startsWith('/vendor/') && path !== '/vendor') ||
      (path.startsWith('/delivery/') && path !== '/delivery');
    
    return isDashboard || isDeliverySubRoute || isWildcardUserRoute;
  }, [location.pathname]);

  // Navigation handlers for HomePage
  const handleNavigateToLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const handleNavigateToHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="App">
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <HomePage 
              onNavigateToAuth={handleNavigateToLogin}
              onNavigateToHome={handleNavigateToHome}
              onNavigateToLogin={handleNavigateToLogin}
              onWriteReview={handleWriteReview}
              reviews={reviews}
            />
          } />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={
            <HomePage 
              onNavigateToAuth={handleNavigateToLogin}
              onNavigateToHome={handleNavigateToHome}
              onNavigateToLogin={handleNavigateToLogin}
              onWriteReview={handleWriteReview}
              reviews={reviews}
            />
          } />
          <Route path="/contact" element={
            <HomePage 
              onNavigateToAuth={handleNavigateToLogin}
              onNavigateToHome={handleNavigateToHome}
              onNavigateToLogin={handleNavigateToLogin}
              onWriteReview={handleWriteReview}
              reviews={reviews}
            />
          } />
          <Route path="/doctors" element={
            <HomePage 
              onNavigateToAuth={handleNavigateToLogin}
              onNavigateToHome={handleNavigateToHome}
              onNavigateToLogin={handleNavigateToLogin}
              onWriteReview={handleWriteReview}
              reviews={reviews}
            />
          } />
          <Route path="/services" element={
            <HomePage 
              onNavigateToAuth={handleNavigateToLogin}
              onNavigateToHome={handleNavigateToHome}
              onNavigateToLogin={handleNavigateToLogin}
              onWriteReview={handleWriteReview}
              reviews={reviews}
            />
          } />
          <Route path="/reviews" element={
            <HomePage 
              onNavigateToAuth={handleNavigateToLogin}
              onNavigateToHome={handleNavigateToHome}
              onNavigateToLogin={handleNavigateToLogin}
              onWriteReview={handleWriteReview}
              reviews={reviews}
            />
          } />
          
          {/* Authentication Routes */}
          <Route path="/login" element={
            currentUser ? (
              <Navigate to={userTypeToPageMap(currentUser.userType)} replace />
            ) : (
              <Login 
                onSwitchToSignup={() => navigate('/signup')}
                onLoginSuccess={handleLoginSuccess}
                onBackToHome={() => navigate('/')}
              />
            )
          } />
          
          <Route path="/signup" element={
            currentUser ? (
              <Navigate to={userTypeToPageMap(currentUser.userType)} replace />
            ) : (
              <Signup 
                onSwitchToLogin={() => navigate('/login')}
                onSignupSuccess={handleSignupSuccess}
                onBackToHome={() => navigate('/')}
              />
            )
          } />
          
          {/* Doctor Routes - Protected with both specific and wildcard routes */}
          <Route path="/doctor/dashboard" element={<DoctorRouteHandler />} />
          <Route path="/doctor/dashboard/*" element={<DoctorRouteHandler />} />
          <Route path="/doctor/*" element={<DoctorRouteHandler />} />

          {/* User Routes - Protected */}
          <Route path="/user/dashboard" element={<UserRouteHandler />} />
          <Route path="/user/dashboard/*" element={<UserRouteHandler />} />
          <Route path="/user/*" element={<UserRouteHandler />} />
          
          {/* User Sub-routes - All will be handled by the UserRouteHandler wildcard */}
          <Route path="/user/profile" element={<UserRouteHandler />} />
          <Route path="/user/consultation" element={<UserRouteHandler />} />
          <Route path="/user/appointments" element={<UserRouteHandler />} />
          <Route path="/user/orders" element={<UserRouteHandler />} />
          <Route path="/user/medicine" element={<UserRouteHandler />} />
          <Route path="/user/products" element={<UserRouteHandler />} />
          <Route path="/user/cart" element={<UserRouteHandler />} />
          <Route path="/user/live-tracking" element={<UserRouteHandler />} />
          <Route path="/user/notifications" element={<UserRouteHandler />} />
          <Route path="/user/pregnancy-care" element={<UserRouteHandler />} />
          <Route path="/user/baby-care" element={<UserRouteHandler />} />
          <Route path="/user/lab-tests" element={<UserRouteHandler />} />
          <Route path="/user/health-records" element={<UserRouteHandler />} />
          <Route path="/user/blood-bank" element={<UserRouteHandler />} />

          {/* Vendor Routes - Protected */}
          <Route path="/vendor/dashboard" element={<VendorRouteHandler />} />
          <Route path="/vendor/dashboard/*" element={<VendorRouteHandler />} />
          <Route path="/vendor/*" element={<VendorRouteHandler />} />

          {/* Delivery Routes - Protected */}
          <Route path="/delivery/dashboard" element={<DeliveryRouteHandler />} />
          <Route path="/delivery/dashboard/*" element={<DeliveryRouteHandler />} />
          <Route path="/delivery/*" element={<DeliveryRouteHandler />} />
          <Route path="/delivery/dashboard/delivery-history" element={<DeliveryRouteHandler />} />
          <Route path="/delivery/dashboard/earnings" element={<DeliveryRouteHandler />} />
          <Route path="/delivery/dashboard/performance" element={<DeliveryRouteHandler />} />
          <Route path="/delivery/dashboard/profile" element={<DeliveryRouteHandler />} />

          {/* Alternative routes (for backward compatibility) */}
          <Route path="/user-dashboard" element={<UserRouteHandler />} />
          <Route path="/vendor-dashboard" element={<VendorRouteHandler />} />
          <Route path="/doctor-dashboard" element={<DoctorRouteHandler />} />
          <Route path="/delivery-dashboard" element={<DeliveryRouteHandler />} />
          <Route path="/delivery-dashboard/*" element={<DeliveryRouteHandler />} />

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Conditionally render Footer - show only on public routes */}
      {!isDashboardRoute() && location.pathname !== '/login' && location.pathname !== '/signup' && <Footer />}
      
      {/* Review Modal (floating) */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <ReviewModal
            onClose={handleCloseReviewModal}
            onReviewSubmit={handleReviewSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default App;