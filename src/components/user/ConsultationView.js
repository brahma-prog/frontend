import React, { useState, useEffect, useRef } from 'react';

// Doctors Data with priority indicators
const pediatricDoctors = [
  {
    id: 'ped_1', name: 'Dr. Ananya Sharma', specialty: 'Pediatrics', experience: '12 years',
    languages: 'English, Hindi, Telugu', consultationFee: '800', videoConsultFee: '500',
    availableSlots: ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'], rating: 4.9, patients: '1.2k+',
    description: 'Specialized in newborn care, vaccinations, and developmental disorders',
    hospital: 'Apollo Children\'s Hospital', isPediatric: true, homeConsultation: true, homeConsultFee: '1200',
    priority: 'L1', // High priority for critical pediatric cases
    keywords: ['newborn', 'vaccination', 'fever', 'cough', 'diarrhea', 'rash']
  },
  {
    id: 'ped_2', name: 'Dr. Rohan Verma', specialty: 'Pediatric Cardiology', experience: '15 years',
    languages: 'English, Hindi', consultationFee: '1200', videoConsultFee: '800',
    availableSlots: ['10:00 AM', '01:00 PM', '03:00 PM'], rating: 4.8, patients: '800+',
    description: 'Expert in congenital heart defects and pediatric heart care',
    hospital: 'Fortis Hospital', isPediatric: true, homeConsultation: false,
    priority: 'L1', // High priority for heart conditions
    keywords: ['heart', 'chest pain', 'breathing difficulty', 'congenital']
  },
  {
    id: 'ped_3', name: 'Dr. Priya Reddy', specialty: 'Pediatric Neurology', experience: '10 years',
    languages: 'English, Telugu, Tamil', consultationFee: '1000', videoConsultFee: '600',
    availableSlots: ['09:30 AM', '11:30 AM', '02:30 PM'], rating: 4.7, patients: '600+',
    description: 'Specialized in epilepsy, developmental delays, and neurological disorders in children',
    hospital: 'Narayana Health', isPediatric: true, homeConsultation: true, homeConsultFee: '1500',
    priority: 'L1', // High priority for neurological issues
    keywords: ['seizure', 'headache', 'developmental delay', 'epilepsy']
  },
  {
    id: 'ped_4', name: 'Dr. Amit Patel', specialty: 'Pediatric Gastroenterology', experience: '8 years',
    languages: 'English, Hindi, Gujarati', consultationFee: '900', videoConsultFee: '550',
    availableSlots: ['10:30 AM', '12:30 PM', '03:30 PM'], rating: 4.6, patients: '500+',
    description: 'Expert in digestive disorders, nutrition, and feeding issues in infants',
    hospital: 'Medanta Hospital', isPediatric: true, homeConsultation: true, homeConsultFee: '1300',
    priority: 'L2', // Medium priority for digestive issues
    keywords: ['vomiting', 'diarrhea', 'constipation', 'nutrition']
  },
  {
    id: 'ped_5', name: 'Dr. Charitha Kasturi', specialty: 'General Pediatrics', experience: '20 years',
    languages: 'English, Telugu', consultationFee: '700', videoConsultFee: '400',
    availableSlots: ['09:00 AM', '11:00 AM', '02:00 PM', '05:00 PM'], rating: 4.9, patients: '2k+',
    description: 'Your baby\'s pediatrician - Expert in routine checkups, vaccinations, and growth monitoring',
    hospital: 'KIMS Hospital', isPediatric: true, homeConsultation: true, homeConsultFee: '1000',
    priority: 'L3', // Low priority for routine checkups
    keywords: ['routine checkup', 'vaccination', 'growth', 'general']
  }
];

const pregnancyDoctors = [
  {
    id: 'preg_1', name: 'Dr. Sarah Johnson', specialty: 'Obstetrics & Gynecology', experience: '15 years',
    languages: 'English, Hindi', consultationFee: '1200', videoConsultFee: '800',
    availableSlots: ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'], rating: 4.9, patients: '2.5k+',
    description: 'Expert in high-risk pregnancies, prenatal care, and delivery',
    hospital: 'Apollo Hospital', isPregnancy: true, homeConsultation: true, homeConsultFee: '1500',
    specializations: ['High-Risk Pregnancy', 'Prenatal Ultrasound', 'Delivery'],
    priority: 'L1', // High priority for high-risk pregnancies
    keywords: ['high-risk', 'bleeding', 'preeclampsia', 'delivery']
  },
  {
    id: 'preg_2', name: 'Dr. Priya Sharma', specialty: 'Maternal-Fetal Medicine', experience: '12 years',
    languages: 'English, Telugu, Tamil', consultationFee: '1500', videoConsultFee: '1000',
    availableSlots: ['10:00 AM', '01:00 PM', '03:00 PM'], rating: 4.8, patients: '1.8k+',
    description: 'Specialized in fetal medicine, genetic counseling, and prenatal diagnosis',
    hospital: 'Fortis La Femme', isPregnancy: true, homeConsultation: false,
    specializations: ['Fetal Medicine', 'Genetic Counseling', 'Ultrasound'],
    priority: 'L1', // High priority for fetal medicine
    keywords: ['genetic', 'ultrasound', 'fetal', 'diagnosis']
  },
  {
    id: 'preg_3', name: 'Dr. Meera Reddy', specialty: 'Obstetrics & Gynecology', experience: '18 years',
    languages: 'English, Telugu, Hindi', consultationFee: '1000', videoConsultFee: '600',
    availableSlots: ['09:30 AM', '11:30 AM', '02:30 PM', '05:30 PM'], rating: 4.9, patients: '3k+',
    description: 'Expert in normal deliveries, pregnancy care, and postnatal recovery',
    hospital: 'KIMS Cuddles', isPregnancy: true, homeConsultation: true, homeConsultFee: '1200',
    specializations: ['Normal Delivery', 'Postnatal Care', 'Lactation'],
    priority: 'L2', // Medium priority for normal pregnancy
    keywords: ['normal delivery', 'postnatal', 'lactation', 'pregnancy']
  },
  {
    id: 'preg_4', name: 'Dr. Anjali Gupta', specialty: 'Pregnancy Nutrition & Wellness', experience: '10 years',
    languages: 'English, Hindi, Gujarati', consultationFee: '800', videoConsultFee: '500',
    availableSlots: ['10:30 AM', '12:30 PM', '03:30 PM'], rating: 4.7, patients: '1.2k+',
    description: 'Specialized in pregnancy nutrition, weight management, and gestational diabetes',
    hospital: 'Manipal Hospital', isPregnancy: true, homeConsultation: true, homeConsultFee: '1000',
    specializations: ['Nutrition', 'Gestational Diabetes', 'Weight Management'],
    priority: 'L2', // Medium priority for nutrition
    keywords: ['nutrition', 'diabetes', 'weight', 'diet']
  },
  {
    id: 'preg_5', name: 'Dr. Kavita Singh', specialty: 'Pregnancy Mental Health', experience: '8 years',
    languages: 'English, Hindi, Punjabi', consultationFee: '900', videoConsultFee: '550',
    availableSlots: ['09:00 AM', '12:00 PM', '04:00 PM'], rating: 4.6, patients: '800+',
    description: 'Expert in prenatal and postpartum depression, anxiety, and mental wellness',
    hospital: 'Max Healthcare', isPregnancy: true, homeConsultation: false,
    specializations: ['Mental Health', 'Postpartum Depression', 'Stress Management'],
    priority: 'L2', // Medium priority for mental health
    keywords: ['depression', 'anxiety', 'mental health', 'stress']
  },
  {
    id: 'preg_6', name: 'Dr. Radha Menon', specialty: 'Pregnancy Yoga & Fitness', experience: '14 years',
    languages: 'English, Malayalam, Tamil', consultationFee: '700', videoConsultFee: '400',
    availableSlots: ['08:00 AM', '11:00 AM', '03:00 PM', '06:00 PM'], rating: 4.8, patients: '1.5k+',
    description: 'Certified pregnancy yoga instructor and fitness expert for all trimesters',
    hospital: 'Aster Maternity', isPregnancy: true, homeConsultation: true, homeConsultFee: '900',
    specializations: ['Pregnancy Yoga', 'Fitness', 'Lamaze Classes'],
    priority: 'L3', // Low priority for fitness/yoga
    keywords: ['yoga', 'fitness', 'exercise', 'lamaze']
  }
];

// General Doctors for Pregnancy Care and Baby Care
const generalDoctors = [
  {
    id: 'gen_1', name: 'Dr. Arjun Mehta', specialty: 'General Physician & Pregnancy Care', experience: '18 years',
    languages: 'English, Hindi, Bengali', consultationFee: '900', videoConsultFee: '600',
    availableSlots: ['08:30 AM', '11:30 AM', '03:00 PM', '06:00 PM'], rating: 4.8, patients: '3.5k+',
    description: 'Expert in pregnancy care, routine checkups, and general health consultations for expecting mothers',
    hospital: 'Global Health City', isGeneral: true, isPregnancy: true, homeConsultation: true, homeConsultFee: '1400',
    specializations: ['Pregnancy Care', 'General Health', 'Preventive Medicine'],
    priority: 'L2',
    keywords: ['pregnancy', 'general health', 'checkup', 'preventive']
  },
  {
    id: 'gen_2', name: 'Dr. Neha Kapoor', specialty: 'Family Medicine & Baby Care', experience: '14 years',
    languages: 'English, Hindi, Punjabi', consultationFee: '850', videoConsultFee: '550',
    availableSlots: ['09:00 AM', '12:00 PM', '04:00 PM', '07:00 PM'], rating: 4.7, patients: '2.8k+',
    description: 'Specialized in family health, baby care, vaccinations, and pediatric wellness',
    hospital: 'Columbia Asia Hospital', isGeneral: true, isPediatric: true, homeConsultation: true, homeConsultFee: '1300',
    specializations: ['Baby Care', 'Family Health', 'Vaccinations', 'Pediatric Wellness'],
    priority: 'L2',
    keywords: ['baby care', 'family medicine', 'vaccinations', 'pediatric']
  },
  {
    id: 'gen_3', name: 'Dr. Vikram Singh', specialty: 'General Medicine & Pregnancy Consultation', experience: '20 years',
    languages: 'English, Hindi, Tamil', consultationFee: '1000', videoConsultFee: '700',
    availableSlots: ['08:00 AM', '10:00 AM', '02:00 PM', '05:00 PM'], rating: 4.9, patients: '4k+',
    description: 'Comprehensive care for pregnancy, general health issues, and chronic disease management',
    hospital: 'Apollo Hospitals', isGeneral: true, isPregnancy: true, homeConsultation: true, homeConsultFee: '1600',
    specializations: ['Pregnancy Consultation', 'Chronic Disease', 'General Medicine'],
    priority: 'L1',
    keywords: ['pregnancy consultation', 'general medicine', 'chronic disease', 'comprehensive care']
  },
  {
    id: 'gen_4', name: 'Dr. Sunita Rao', specialty: 'Women\'s Health & Baby Wellness', experience: '16 years',
    languages: 'English, Hindi, Telugu', consultationFee: '950', videoConsultFee: '650',
    availableSlots: ['09:30 AM', '01:30 PM', '04:30 PM'], rating: 4.8, patients: '2.5k+',
    description: 'Expert in women\'s health, pregnancy care, baby wellness, and postnatal recovery',
    hospital: 'Fortis La Femme', isGeneral: true, isPregnancy: true, isPediatric: true, homeConsultation: true, homeConsultFee: '1500',
    specializations: ['Women\'s Health', 'Baby Wellness', 'Postnatal Care'],
    priority: 'L2',
    keywords: ['women health', 'baby wellness', 'postnatal', 'recovery']
  },
  {
    id: 'gen_5', name: 'Dr. Rajesh Kumar', specialty: 'General Physician & Child Care', experience: '12 years',
    languages: 'English, Hindi, Marathi', consultationFee: '800', videoConsultFee: '500',
    availableSlots: ['08:00 AM', '11:00 AM', '03:00 PM', '06:30 PM'], rating: 4.6, patients: '2k+',
    description: 'Specialized in child healthcare, general medicine, and family wellness consultations',
    hospital: 'Manipal Hospital', isGeneral: true, isPediatric: true, homeConsultation: true, homeConsultFee: '1200',
    specializations: ['Child Care', 'General Medicine', 'Family Wellness'],
    priority: 'L3',
    keywords: ['child care', 'general physician', 'family wellness', 'healthcare']
  },
  {
    id: 'gen_6', name: 'Dr. Pooja Sharma', specialty: 'Pregnancy & Newborn Care Specialist', experience: '15 years',
    languages: 'English, Hindi, Gujarati', consultationFee: '1100', videoConsultFee: '750',
    availableSlots: ['09:00 AM', '12:00 PM', '03:00 PM', '06:00 PM'], rating: 4.9, patients: '3.2k+',
    description: 'Comprehensive care for expecting mothers and newborn babies including lactation support',
    hospital: 'Max Super Specialty Hospital', isGeneral: true, isPregnancy: true, isPediatric: true, homeConsultation: true, homeConsultFee: '1700',
    specializations: ['Pregnancy Care', 'Newborn Care', 'Lactation Support'],
    priority: 'L1',
    keywords: ['pregnancy', 'newborn', 'lactation', 'baby care']
  }
];

// Doctor Card Component
const DoctorCard = ({ 
  doctor, 
  getAppointmentDetails, 
  handleBookAppointmentClick, 
  handleBookHomeConsultationClick,
  handleBookVideoConsultationClick,
  handleStartVideoCallClick
}) => {
  // Get appointments for this doctor
  const clinicAppointment = getAppointmentDetails(doctor.id, 'clinic');
  const homeAppointment = getAppointmentDetails(doctor.id, 'home');
  const videoAppointment = getAppointmentDetails(doctor.id, 'video');
  
  const priorityConfig = {
    'L1': { color: '#DC2626', bg: '#FEE2E2', icon: '⚠️' },
    'L2': { color: '#D97706', bg: '#FEF3C7', icon: '⏰' },
    'L3': { color: '#059669', bg: '#D1FAE5', icon: '✅' }
  };

  const config = priorityConfig[doctor.priority] || priorityConfig['L2'];

  return (
    <div style={doctorCardStyle}>
      <div style={doctorCardHeaderStyle}>
        <div style={doctorAvatarStyle}>
          {doctor.name.charAt(0)}
        </div>
        <div style={doctorBasicInfoStyle}>
          <h4 style={{ color: '#7C2A62', margin: '0 0 0.25rem 0' }}>
            {doctor.name}
          </h4>
          <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
            {doctor.specialty} • {doctor.experience}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
            <span style={{ color: '#f59e0b', fontWeight: '600' }}>★ {doctor.rating}</span>
            <span style={{ color: '#666', fontSize: '0.85rem' }}>({doctor.patients})</span>
            <div style={{
              backgroundColor: config.bg,
              color: config.color,
              padding: '0.1rem 0.5rem',
              borderRadius: '10px',
              fontSize: '0.75rem',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.2rem',
              marginLeft: '0.5rem'
            }}>
              {config.icon} {doctor.priority}
            </div>
          </div>
        </div>
      </div>

      <div style={doctorDetailsStyle}>
        <p style={{ color: '#666', margin: '0 0 0.75rem 0', fontSize: '0.9rem' }}>
          {doctor.description}
        </p>
        <div style={doctorMetaStyle}>
          <div style={metaItemStyle}>
            <span style={metaLabelStyle}>🏥</span>
            <span style={metaValueStyle}>{doctor.hospital}</span>
          </div>
          <div style={metaItemStyle}>
            <span style={metaLabelStyle}>🗣️</span>
            <span style={metaValueStyle}>{doctor.languages}</span>
          </div>
          <div style={metaItemStyle}>
            <span style={metaLabelStyle}>💰</span>
            <span style={metaValueStyle}>Clinic: ₹{doctor.consultationFee}</span>
          </div>
          {doctor.videoConsultFee && (
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>🎥</span>
              <span style={metaValueStyle}>Video: ₹{doctor.videoConsultFee}</span>
            </div>
          )}
          {doctor.homeConsultation && (
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>🏠</span>
              <span style={metaValueStyle}>Home: ₹{doctor.homeConsultFee}</span>
            </div>
          )}
        </div>
      </div>

      <div style={doctorActionsStyle}>
        {/* Clinic Appointment Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleBookAppointmentClick(doctor, 'clinic');
          }}
          style={clinicAppointment ? bookedButtonStyle : bookButtonStyle}
          type="button"
        >
          {clinicAppointment ? '✓ Clinic Booked' : `Book Clinic (₹${doctor.consultationFee})`}
        </button>
        
        {/* Home Consultation Button */}
        {doctor.homeConsultation && (
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleBookHomeConsultationClick(doctor);
            }}
            style={homeAppointment ? bookedButtonStyle : homeConsultButtonStyle}
            type="button"
          >
            {homeAppointment ? '✓ Home Visit Booked' : `Book Home (₹${doctor.homeConsultFee})`}
          </button>
        )}
        
        {/* Video Consultation Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleBookVideoConsultationClick(doctor);
          }}
          style={videoAppointment ? bookedButtonStyle : videoButtonStyle}
          type="button"
        >
          {videoAppointment ? '✓ Video Booked' : `Book Video (₹${doctor.videoConsultFee})`}
        </button>
      </div>

      {/* Show appointment status and start buttons */}
      {(clinicAppointment || homeAppointment || videoAppointment) && (
        <div style={appointmentStatusContainerStyle}>
          {clinicAppointment && (
            <div style={appointmentBadgeStyle}>
              <span style={{ color: '#059669', fontWeight: '600', fontSize: '0.9rem' }}>
                ✓ Clinic: {clinicAppointment.date} at {clinicAppointment.time}
              </span>
            </div>
          )}
          
          {homeAppointment && (
            <div style={appointmentBadgeStyle}>
              <span style={{ color: '#059669', fontWeight: '600', fontSize: '0.9rem' }}>
                ✓ Home: {homeAppointment.date} at {homeAppointment.time}
              </span>
            </div>
          )}
          
          {videoAppointment && (
            <div style={appointmentBadgeStyle}>
              <span style={{ color: '#059669', fontWeight: '600', fontSize: '0.9rem' }}>
                ✓ Video: {videoAppointment.date} at {videoAppointment.time}
              </span>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleStartVideoCallClick(doctor);
                }}
                style={startVideoButtonStyle}
                type="button"
              >
                Start Video Call
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Priority Badge Component
const PriorityBadge = ({ priority }) => {
  const priorityConfig = {
    'L1': { label: 'High Priority', color: '#DC2626', bg: '#FEE2E2', icon: '⚠️' },
    'L2': { label: 'Medium Priority', color: '#D97706', bg: '#FEF3C7', icon: '⏰' },
    'L3': { label: 'Low Priority', color: '#059669', bg: '#D1FAE5', icon: '✅' }
  };

  const config = priorityConfig[priority] || priorityConfig['L2'];

  return (
    <div style={{
      backgroundColor: config.bg,
      color: config.color,
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.25rem',
      border: `1px solid ${config.color}20`,
      marginTop: '0.25rem'
    }}>
      <span>{config.icon}</span>
      {config.label}
    </div>
  );
};

const ConsultationView = ({
  doctorSearchQuery,
  setDoctorSearchQuery,
  setActiveView,
  handleBookAppointment,
  userAppointments,
  profile,
  addNotification
}) => {
  // State
  const [showTimeSlotsModal, setShowTimeSlotsModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedAppointmentTime, setSelectedAppointmentTime] = useState('');
  const [selectedAppointmentDate, setSelectedAppointmentDate] = useState('');
  const [videoCallStatus, setVideoCallStatus] = useState('idle');
  const [showVideoCallModal, setShowVideoCallModal] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordingPaused, setIsRecordingPaused] = useState(false);
  const [recordedTime, setRecordedTime] = useState(0);
  const [showRecordingControls, setShowRecordingControls] = useState(false);
  const [showAppointmentMessage, setShowAppointmentMessage] = useState(false);
  const [doctorForVideoConsult, setDoctorForVideoConsult] = useState(null);
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [appointmentType, setAppointmentType] = useState('clinic');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [paymentId, setPaymentId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [pendingAppointment, setPendingAppointment] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [ongoingVideoCall, setOngoingVideoCall] = useState(null);
  const [showPediatricDoctors, setShowPediatricDoctors] = useState(false);
  const [showPregnancyDoctors, setShowPregnancyDoctors] = useState(false);
  const [showGeneralDoctors, setShowGeneralDoctors] = useState(false);
  
  const searchInputRef = useRef(null);
  const timeSlotsModalRef = useRef(null);
  const timeSectionRef = useRef(null);
  const confirmSectionRef = useRef(null);
  const paymentModalRef = useRef(null);

  // Effects
  useEffect(() => {
    if (userAppointments) setBookedAppointments(userAppointments);
  }, [userAppointments]);

  // Initialize Razorpay
  useEffect(() => {
    const initializeRazorpay = async () => {
      const isLoaded = await loadRazorpayScript();
      setRazorpayLoaded(isLoaded);
      if (!isLoaded && addNotification) {
        addNotification('Payment Error', 'Payment service is not available. Please try again.', 'error');
      }
    };
    initializeRazorpay();
  }, [addNotification]);

  // Load Razorpay Script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Helper Functions
  const getAppointmentDetails = (doctorId, type) => {
    return bookedAppointments.find(appt => 
      appt.doctorId === doctorId && 
      appt.status === 'confirmed' && 
      appt.type === type &&
      new Date(appt.appointmentDateTime) > new Date() // Only future appointments
    );
  };

  const hasOngoingVideoCall = () => {
    return ongoingVideoCall && videoCallStatus === 'connected';
  };

  const handleBackToAppointments = () => {
    setTimeout(() => setActiveView('appointments'), 100);
  };

  const resetModalStates = () => {
    setSelectedAppointmentDate('');
    setSelectedAppointmentTime('');
    setSelectedPriority('');
    setShowCalendar(false);
    setShowTimePicker(false);
    setPendingAppointment(null);
    setPaymentAmount(0);
    setPaymentStatus('pending');
    setPaymentId('');
    setOrderDetails(null);
  };

  const handleBookAppointmentClick = (doctor, type = 'clinic') => {
    if (hasOngoingVideoCall()) {
      alert('Cannot book appointment during an ongoing video call. Please end the call first.');
      return;
    }
    
    setSelectedDoctor(doctor);
    resetModalStates();
    setAppointmentType(type);
    setShowTimeSlotsModal(true);
    
    setTimeout(() => {
      if (timeSlotsModalRef.current) {
        timeSlotsModalRef.current.scrollTop = 0;
      }
    }, 100);
  };

  const handleBookHomeConsultationClick = (doctor) => {
    if (hasOngoingVideoCall()) {
      alert('Cannot book appointment during an ongoing video call. Please end the call first.');
      return;
    }
    
    if (!doctor.homeConsultation) {
      alert(`Dr. ${doctor.name} does not offer home consultation services. Please book a clinic appointment.`);
      handleBookAppointmentClick(doctor, 'clinic');
      return;
    }
    handleBookAppointmentClick(doctor, 'home');
  };

  const handleBookVideoConsultationClick = (doctor) => {
    if (hasOngoingVideoCall()) {
      alert('Cannot book video consultation during an ongoing video call. Please end the call first.');
      return;
    }
    
    handleBookAppointmentClick(doctor, 'video');
  };

  const handleStartVideoCallClick = (doctor) => {
    if (hasOngoingVideoCall()) {
      alert('You already have an ongoing video call. Please end it before starting a new one.');
      return;
    }
    
    const videoAppointment = getAppointmentDetails(doctor.id, 'video');
    if (!videoAppointment) {
      alert('No confirmed video appointment found. Please book a video consultation first.');
      return;
    }
    
    const appointmentTime = new Date(videoAppointment.appointmentDateTime);
    const currentTime = new Date();
    const timeDifference = appointmentTime.getTime() - currentTime.getTime();
    const minutesDifference = timeDifference / (1000 * 60);
    
    // Allow joining 10 minutes before and up to 30 minutes after scheduled time
    if (minutesDifference < -30) {
      alert('This video appointment has expired. Please book a new one.');
      return;
    }
    
    if (minutesDifference > 10) {
      alert(`Video call can be started 10 minutes before the scheduled time. Your appointment is at ${videoAppointment.time}.`);
      return;
    }
    
    setDoctorForVideoConsult(doctor);
    setShowVideoCallModal(true);
    startVideoCallTimer();
  };

  // Modal overlay click handler
  const handleModalOverlayClick = (e) => {
    if (e.target.hasAttribute('data-modal-overlay')) {
      if (showTimeSlotsModal) {
        setShowTimeSlotsModal(false);
        setSelectedDoctor(null);
        resetModalStates();
      }
      if (showVideoCallModal) {
        setShowVideoCallModal(false);
        resetVideoCall();
      }
      if (showPaymentModal) {
        setShowPaymentModal(false);
        setPaymentStatus('pending');
        setPaymentLoading(false);
      }
      if (showCalendar) setShowCalendar(false);
      if (showTimePicker) setShowTimePicker(false);
    }
  };

  const resetVideoCall = () => {
    setVideoCallStatus('idle');
    setCallDuration(0);
    setIsMuted(false);
    setIsVideoOff(false);
    setIsRecording(false);
    setIsRecordingPaused(false);
    setRecordedTime(0);
    setShowRecordingControls(false);
    setDoctorForVideoConsult(null);
    setOngoingVideoCall(null);
  };

  const startVideoCallTimer = () => {
    setVideoCallStatus('connecting');
    
    // Simulate connection delay
    setTimeout(() => {
      setVideoCallStatus('connected');
      setOngoingVideoCall({
        doctorId: doctorForVideoConsult.id,
        startTime: new Date(),
        type: 'video'
      });
      
      // Start call duration timer
      const timer = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
      
      // Auto end after 30 minutes (1800 seconds)
      setTimeout(() => {
        if (videoCallStatus === 'connected') {
          alert('Video call has reached maximum duration (30 minutes).');
          setShowVideoCallModal(false);
          resetVideoCall();
        }
        clearInterval(timer);
      }, 1800000);
      
      return () => clearInterval(timer);
    }, 2000);
  };

  // Convert time to 24-hour format
  const convertTo24Hour = (time12h) => {
    if (!time12h) return '';
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    
    if (hours === '12') {
      hours = '00';
    }
    
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
  };

  // Check if time slot is available
  const isTimeSlotAvailable = (doctorId, date, time, type) => {
    const appointmentDateTime = new Date(date + 'T' + convertTo24Hour(time));
    
    // Check for existing appointments at the same time
    const existingAppointment = bookedAppointments.find(appt => 
      appt.doctorId === doctorId && 
      appt.type === type &&
      new Date(appt.appointmentDateTime).getTime() === appointmentDateTime.getTime() &&
      appt.status === 'confirmed'
    );
    
    return !existingAppointment;
  };

  // Payment Functions
  const initiatePayment = async (appointmentDetails) => {
    if (!razorpayLoaded) {
      alert('Payment system is loading, please try again in a moment.');
      return false;
    }

    setPaymentLoading(true);
    setPaymentStatus('processing');

    try {
      const options = {
        key: 'rzp_test_1DP5mmOlF5G5ag',
        amount: paymentAmount * 100,
        currency: 'INR',
        name: 'QuickMed Healthcare',
        description: `${appointmentType === 'video' ? 'Video' : appointmentType === 'home' ? 'Home' : 'Clinic'} Consultation with Dr. ${selectedDoctor.name}`,
        handler: (response) => handlePaymentSuccess(response, appointmentDetails),
        prefill: {
          name: profile?.fullName || 'Patient',
          email: profile?.email || 'patient@example.com',
          contact: profile?.phone || '9999999999'
        },
        theme: { color: '#7C2A62' },
        modal: {
          ondismiss: () => {
            setPaymentLoading(false);
            setPaymentStatus('failed');
            setTimeout(() => {
              alert('Payment was cancelled. Please try again.');
            }, 500);
          }
        },
        notes: {
          appointmentId: appointmentDetails.id,
          doctorName: appointmentDetails.doctorName,
          appointmentDate: appointmentDetails.date,
          appointmentTime: appointmentDetails.time,
          appointmentType: appointmentType
        }
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
      return true;
    } catch (error) {
      console.error('Error initiating payment:', error);
      setPaymentLoading(false);
      setPaymentStatus('failed');
      alert('Payment failed to initialize. Please try again.');
      return false;
    }
  };

  const handlePaymentSuccess = async (paymentResponse, appointmentDetails) => {
    try {
      setPaymentId(paymentResponse.razorpay_payment_id);
      setPaymentStatus('success');
      
      await verifyPayment(paymentResponse);
      
      setTimeout(() => {
        completeAppointmentBooking(appointmentDetails);
      }, 1500);
    } catch (error) {
      console.error('Payment verification failed:', error);
      setPaymentStatus('failed');
      alert('Payment verification failed. Please contact support.');
    }
  };

  const verifyPayment = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 2000);
    });
  };

  const completeAppointmentBooking = (appointmentDetails) => {
    const appointmentWithPayment = {
      ...appointmentDetails,
      status: 'confirmed',
      payment: {
        status: 'completed',
        amount: paymentAmount,
        paymentId: paymentId,
        orderId: orderDetails?.id || `order_${Date.now()}`,
        timestamp: new Date().toISOString(),
        method: 'Razorpay'
      },
      // Add all necessary fields for appointments view
      doctorSpecialty: selectedDoctor.specialty,
      doctorExperience: selectedDoctor.experience,
      hospital: selectedDoctor.hospital,
      category: selectedDoctor.isPediatric ? 'Pediatric' : 
                selectedDoctor.isPregnancy ? 'Pregnancy' : 
                selectedDoctor.isGeneral ? 'General' : 'General',
      // Make sure all required fields are present
      id: appointmentDetails.id || `appt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      date: selectedAppointmentDate,
      time: selectedAppointmentTime,
      doctorName: selectedDoctor.name,
      type: appointmentType,
      priority: selectedPriority || selectedDoctor.priority || 'L2',
      fee: paymentAmount,
      createdAt: new Date().toISOString(),
      appointmentDateTime: new Date(selectedAppointmentDate + 'T' + convertTo24Hour(selectedAppointmentTime)).toISOString()
    };

    // Handle booking through parent function
    handleBookAppointment(appointmentWithPayment);
    
    // Also update local state
    setBookedAppointments(prev => [...prev, appointmentWithPayment]);
    
    setShowPaymentModal(false);
    setShowTimeSlotsModal(false);
    setSelectedDoctor(null);
    resetModalStates();
    
    // Show confirmation
    setTimeout(() => {
      const appointmentTypeText = 
        appointmentType === 'home' ? 'Home Consultation' : 
        appointmentType === 'video' ? 'Video Consultation' : 'Clinic Appointment';
      
      const priorityText = selectedPriority ? `\nPriority: ${selectedPriority}` : '';
      
      const videoNote = appointmentType === 'video' ? 
        '\n\nYou can start the video call 10 minutes before your scheduled time.' : '';
      
      alert(`✅ Payment Successful!\n\n${appointmentTypeText} booked successfully with Dr. ${appointmentWithPayment.doctorName}!\n\nPayment Amount: ₹${paymentAmount}\nPayment ID: ${paymentId}${priorityText}\nDate: ${new Date(appointmentWithPayment.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\nTime: ${appointmentWithPayment.time}${videoNote}\n\nYour appointment has been confirmed and is now visible in the Appointments section.`);
      
      if (addNotification) {
        addNotification(
          'Appointment Confirmed',
          `Your ${appointmentType} appointment with Dr. ${appointmentWithPayment.doctorName} has been confirmed.`,
          'appointment'
        );
      }
    }, 100);
  };

  const handleConfirmAppointment = () => {
    if (!selectedDoctor || !selectedAppointmentDate || !selectedAppointmentTime) {
      alert('Please select date and time');
      return;
    }

    // Check if time slot is available
    if (!isTimeSlotAvailable(selectedDoctor.id, selectedAppointmentDate, selectedAppointmentTime, appointmentType)) {
      alert('This time slot is already booked. Please choose another time.');
      return;
    }

    const fee = appointmentType === 'home' 
      ? parseInt(selectedDoctor.homeConsultFee || selectedDoctor.consultationFee)
      : appointmentType === 'video'
      ? parseInt(selectedDoctor.videoConsultFee || selectedDoctor.consultationFee)
      : parseInt(selectedDoctor.consultationFee);

    const newAppointment = {
      doctorId: selectedDoctor.id,
      doctorName: selectedDoctor.name,
      doctorSpecialty: selectedDoctor.specialty,
      date: selectedAppointmentDate,
      time: selectedAppointmentTime,
      status: 'pending',
      priority: selectedPriority || selectedDoctor.priority || 'L2',
      type: appointmentType,
      fee: fee,
      id: `appt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      category: selectedDoctor.isPediatric ? 'Pediatric' : 
                selectedDoctor.isPregnancy ? 'Pregnancy' : 
                selectedDoctor.isGeneral ? 'General' : 'General',
      hospital: selectedDoctor.hospital,
      doctorExperience: selectedDoctor.experience,
      appointmentDateTime: new Date(selectedAppointmentDate + 'T' + convertTo24Hour(selectedAppointmentTime)).toISOString(),
      paymentRequired: true,
      createdAt: new Date().toISOString()
    };

    setPaymentAmount(fee);
    setPendingAppointment(newAppointment);
    setOrderDetails(null);
    setPaymentId('');
    setPaymentStatus('pending');
    setShowPaymentModal(true);
  };

  const processPayment = async (appointmentDetails) => {
    const paymentInitiated = await initiatePayment(appointmentDetails);
    if (!paymentInitiated && addNotification) {
      addNotification('Payment Error', 'Failed to initiate payment for appointment.', 'error');
    }
  };

  // Appointment Required Modal
  const AppointmentRequiredModal = () => {
    if (!showAppointmentMessage) return null;

    return (
      <div style={modalOverlayStyle} onClick={handleModalOverlayClick} data-modal-overlay>
        <div style={appointmentRequiredModalStyle}>
          <div style={appointmentRequiredHeaderStyle}>
            <h3 style={{ color: '#7C2A62', margin: 0 }}>Appointment Required</h3>
          </div>
          <div style={appointmentRequiredContentStyle}>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              You need to have a confirmed appointment to start a video consultation.
              Please book an appointment first.
            </p>
            <div style={appointmentRequiredButtonsStyle}>
              <button 
                onClick={() => setShowAppointmentMessage(false)}
                style={cancelButtonStyle}
                type="button"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  setShowAppointmentMessage(false);
                }}
                style={primaryButtonStyle}
                type="button"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Video Call Modal
  const VideoCallModal = () => {
    if (!showVideoCallModal || !doctorForVideoConsult) return null;

    const isConnected = videoCallStatus === 'connected';

    return (
      <div style={videoCallModalOverlayStyle} onClick={handleModalOverlayClick} data-modal-overlay>
        <div style={videoCallModalStyle}>
          <div style={videoCallHeaderStyle}>
            <div style={videoCallDoctorInfoStyle}>
              <h3 style={{ color: 'white', margin: 0, fontSize: '1.1rem' }}>
                Video Consultation with Dr. {doctorForVideoConsult.name}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0.25rem 0 0 0', fontSize: '0.9rem' }}>
                {doctorForVideoConsult.specialty}
              </p>
            </div>
            <div style={videoCallTimerStyle}>
              <span style={{ color: 'white', fontSize: '1rem', fontFamily: 'monospace' }}>
                {Math.floor(callDuration / 60).toString().padStart(2, '0')}:
                {(callDuration % 60).toString().padStart(2, '0')}
              </span>
            </div>
            <button 
              onClick={() => {
                setShowVideoCallModal(false);
                resetVideoCall();
              }}
              style={videoCallEndButtonStyle}
              type="button"
            >
              End Call
            </button>
          </div>

          <div style={videoContainersStyle}>
            <div style={doctorVideoContainerStyle}>
              <div style={videoPlaceholderStyle}>
                <div style={videoPlaceholderIconStyle}>👨‍⚕️</div>
                <p style={{ color: '#666', marginTop: '1rem' }}>
                  {isConnected ? 'Doctor is connected' : 'Connecting to doctor...'}
                </p>
              </div>
            </div>

            <div style={patientVideoContainerStyle}>
              <div style={videoPlaceholderStyle}>
                <div style={videoPlaceholderIconStyle}>👤</div>
                <p style={{ color: '#666', marginTop: '1rem' }}>
                  {isVideoOff ? 'Video off' : 'Your video'}
                </p>
              </div>
            </div>
          </div>

          <div style={callControlsStyle}>
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={callControlButtonStyle(isMuted)}
              type="button"
            >
              {isMuted ? '🔇' : '🎤'}
              <span style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
                {isMuted ? 'Unmute' : 'Mute'}
              </span>
            </button>

            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              style={callControlButtonStyle(isVideoOff)}
              type="button"
            >
              {isVideoOff ? '📵' : '📹'}
              <span style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
                {isVideoOff ? 'Video On' : 'Video Off'}
              </span>
            </button>

            {isConnected && (
              <>
                <button
                  onClick={() => {
                    if (!isRecording) {
                      setIsRecording(true);
                      setShowRecordingControls(true);
                    } else if (isRecordingPaused) {
                      setIsRecordingPaused(false);
                    } else {
                      setIsRecordingPaused(true);
                    }
                  }}
                  style={callControlButtonStyle(isRecording && !isRecordingPaused)}
                  type="button"
                >
                  {isRecording ? (isRecordingPaused ? '⏸️' : '⏺️') : '🎬'}
                  <span style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    {isRecording ? (isRecordingPaused ? 'Resume' : 'Pause') : 'Record'}
                  </span>
                </button>

                <button
                  onClick={() => {}}
                  style={callControlButtonStyle(false)}
                  type="button"
                >
                  💬
                  <span style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    Chat
                  </span>
                </button>
              </>
            )}

            <button
              onClick={() => {
                setShowVideoCallModal(false);
                resetVideoCall();
              }}
              style={endCallButtonStyle}
              type="button"
            >
              📞
              <span style={{ fontSize: '0.8rem', marginTop: '0.25rem', color: 'white' }}>
                End Call
              </span>
            </button>
          </div>

          {showRecordingControls && isRecording && (
            <div style={recordingControlsStyle}>
              <div style={recordingStatusStyle}>
                <span style={{ color: '#DC2626', fontWeight: '600' }}>
                  ⏺️ Recording {isRecordingPaused ? '(Paused)' : ''}
                </span>
                <span style={{ fontFamily: 'monospace', marginLeft: '1rem' }}>
                  {Math.floor(recordedTime / 60).toString().padStart(2, '0')}:
                  {(recordedTime % 60).toString().padStart(2, '0')}
                </span>
              </div>
              <div style={recordingButtonsStyle}>
                <button
                  onClick={() => {
                    setIsRecording(false);
                    setIsRecordingPaused(false);
                    setShowRecordingControls(false);
                    setRecordedTime(0);
                    alert('Recording saved successfully!');
                  }}
                  style={saveRecordingButtonStyle}
                  type="button"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsRecording(false);
                    setIsRecordingPaused(false);
                    setShowRecordingControls(false);
                    setRecordedTime(0);
                  }}
                  style={discardRecordingButtonStyle}
                  type="button"
                >
                  Discard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Time Slots Modal
  const TimeSlotsModal = () => {
    if (!showTimeSlotsModal || !selectedDoctor) return null;

    const fee = appointmentType === 'home' 
      ? selectedDoctor.homeConsultFee 
      : appointmentType === 'video'
      ? selectedDoctor.videoConsultFee
      : selectedDoctor.consultationFee;

    // Generate next 7 days
    const next7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return {
        date: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dateNum: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' })
      };
    });

    const handleDateSelect = (date) => {
      setSelectedAppointmentDate(date);
      setShowCalendar(false);
    };

    const handleTimeSelect = (time) => {
      setSelectedAppointmentTime(time);
      setShowTimePicker(false);
    };

    // Filter available time slots based on appointment type
    const getAvailableTimeSlots = () => {
      return selectedDoctor.availableSlots.filter(time => 
        isTimeSlotAvailable(selectedDoctor.id, selectedAppointmentDate, time, appointmentType)
      );
    };

    const availableTimeSlots = selectedAppointmentDate ? getAvailableTimeSlots() : [];

    return (
      <div style={modalOverlayStyle} onClick={handleModalOverlayClick} data-modal-overlay>
        <div style={timeSlotsModalStyle} data-modal-content ref={timeSlotsModalRef}>
          <div style={modalHeaderStyle}>
            <h3 style={{ color: '#7C2A62', margin: 0, fontSize: '1.3rem' }}>
              Book {appointmentType === 'home' ? 'Home Consultation' : 
                    appointmentType === 'video' ? 'Video Consultation' : 'Appointment'} with {selectedDoctor.name}
            </h3>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTimeSlotsModal(false);
                setSelectedDoctor(null);
                resetModalStates();
              }} 
              style={closeModalButtonStyle} 
              type="button">×</button>
          </div>

          <div style={modalContentStyle}>
            {/* Doctor Info */}
            <div style={doctorModalInfoStyle}>
              <div style={doctorModalHeaderStyle}>
                <h4 style={{ color: '#7C2A62', margin: '0 0 0.5rem 0' }}>
                  Dr. {selectedDoctor.name}
                </h4>
                <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
                  {selectedDoctor.specialty} • {selectedDoctor.experience} experience
                </p>
                <div style={{ marginTop: '0.5rem' }}>
                  <span style={consultationFeeStyle}>
                    Fee: ₹{fee}
                    {appointmentType === 'home' && ' (Home Consultation)'}
                    {appointmentType === 'video' && ' (Video Consultation)'}
                  </span>
                </div>
              </div>

              {/* Priority Selection */}
              <div style={prioritySelectionStyle}>
                <label style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>
                  Select Priority Level:
                </label>
                <div style={priorityButtonsStyle}>
                  {['L1', 'L2', 'L3'].map((priority) => (
                    <button
                      key={priority}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedPriority(priority);
                      }}
                      style={priorityButtonStyle(priority === selectedPriority)}
                      type="button"
                    >
                      <PriorityBadge priority={priority} />
                    </button>
                  ))}
                </div>
                <p style={{ color: '#666', fontSize: '0.8rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                  {selectedPriority === 'L1' && 'High priority for emergency/urgent cases'}
                  {selectedPriority === 'L2' && 'Medium priority for routine consultations'}
                  {selectedPriority === 'L3' && 'Low priority for regular checkups'}
                </p>
              </div>

              {/* Date Selection */}
              <div style={dateSelectionStyle}>
                <label style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>
                  Select Date:
                </label>
                <div style={dateButtonsStyle}>
                  {next7Days.map((day) => (
                    <button
                      key={day.date}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleDateSelect(day.date);
                      }}
                      style={dateButtonStyle(day.date === selectedAppointmentDate)}
                      type="button"
                    >
                      <div style={dateDayStyle}>{day.day}</div>
                      <div style={dateNumStyle}>{day.dateNum}</div>
                      <div style={dateMonthStyle}>{day.month}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedAppointmentDate && (
                <div style={timeSelectionStyle} ref={timeSectionRef}>
                  <label style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>
                    Select Time Slot:
                  </label>
                  {availableTimeSlots.length === 0 ? (
                    <div style={noSlotsStyle}>
                      <p style={{ color: '#DC2626', margin: 0 }}>
                        No available slots for {appointmentType} consultation on this date. Please select another date.
                      </p>
                    </div>
                  ) : (
                    <div style={timeSlotsGridStyle}>
                      {availableTimeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleTimeSelect(time);
                          }}
                          style={timeSlotButtonStyle(time === selectedAppointmentTime)}
                          type="button"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Selected Details */}
              {(selectedAppointmentDate || selectedAppointmentTime) && (
                <div style={selectedDetailsStyle}>
                  <h4 style={{ color: '#7C2A62', margin: '0 0 0.75rem 0', fontSize: '1.1rem' }}>
                    Appointment Details
                  </h4>
                  
                  {selectedAppointmentDate && (
                    <div style={detailRowStyle}>
                      <span style={detailLabelStyle}>Date:</span>
                      <span style={detailValueStyle}>
                        {new Date(selectedAppointmentDate).toLocaleDateString('en-US', { 
                          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                        })}
                      </span>
                    </div>
                  )}
                  
                  {selectedAppointmentTime && (
                    <div style={detailRowStyle}>
                      <span style={detailLabelStyle}>Time:</span>
                      <span style={detailValueStyle}>{selectedAppointmentTime}</span>
                    </div>
                  )}
                  
                  {selectedPriority && (
                    <div style={detailRowStyle}>
                      <span style={detailLabelStyle}>Priority:</span>
                      <span style={detailValueStyle}>
                        <PriorityBadge priority={selectedPriority} />
                      </span>
                    </div>
                  )}
                  
                  <div style={detailRowStyle}>
                    <span style={detailLabelStyle}>Type:</span>
                    <span style={detailValueStyle}>
                      {appointmentType === 'home' ? 'Home Consultation' : 
                       appointmentType === 'video' ? 'Video Consultation' : 'Clinic Visit'}
                    </span>
                  </div>
                  
                  <div style={detailRowStyle}>
                    <span style={detailLabelStyle}>Fee:</span>
                    <span style={feeAmountStyle}>₹{fee}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Confirmation Buttons Section */}
          <div style={modalButtonsStyle} ref={confirmSectionRef}>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTimeSlotsModal(false);
                setSelectedDoctor(null);
                resetModalStates();
              }} 
              style={cancelButtonStyle} 
              type="button">Cancel</button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleConfirmAppointment();
              }} 
              disabled={!selectedAppointmentDate || !selectedAppointmentTime || availableTimeSlots.length === 0}
              style={confirmAppointmentButtonStyle} 
              type="button"
            >
              {appointmentType === 'home' ? 'Book Home Consultation' : 
               appointmentType === 'video' ? 'Book Video Consultation' : 'Confirm Appointment'}
              <div style={{ fontSize: '0.9rem', marginTop: '0.25rem', fontWeight: 'normal' }}>
                Pay ₹{fee} to confirm
              </div>
              {selectedPriority && (
                <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', opacity: 0.9 }}>
                  ({selectedPriority} Priority)
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Payment Modal
  const PaymentModal = () => {
    if (!showPaymentModal || !selectedDoctor || !pendingAppointment) return null;

    return (
      <div style={modalOverlayStyle} onClick={handleModalOverlayClick} data-modal-overlay>
        <div style={paymentModalStyle} data-modal-content ref={paymentModalRef}>
          <div style={paymentModalHeaderStyle}>
            <h3 style={{ color: '#7C2A62', margin: 0, fontSize: '1.3rem' }}>
              Complete Payment
            </h3>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowPaymentModal(false);
                setPaymentStatus('pending');
                setPaymentLoading(false);
              }} 
              style={closeModalButtonStyle} 
              type="button"
            >
              ×
            </button>
          </div>

          <div style={paymentContentStyle}>
            {/* Payment Header */}
            <div style={paymentHeaderStyle}>
              <div style={paymentDoctorInfoStyle}>
                <h4 style={{ color: '#7C2A62', margin: '0 0 0.5rem 0' }}>
                  Dr. {selectedDoctor.name}
                </h4>
                <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>
                  {selectedDoctor.specialty}
                </p>
                <div style={appointmentDetailsStyle}>
                  <span style={{ color: '#7C2A62', fontWeight: '600' }}>
                    {new Date(selectedAppointmentDate).toLocaleDateString('en-US', { 
                      weekday: 'short', month: 'short', day: 'numeric' 
                    })}
                  </span>
                  <span style={{ color: '#666' }}> at </span>
                  <span style={{ color: '#7C2A62', fontWeight: '600' }}>
                    {selectedAppointmentTime}
                  </span>
                </div>
                <div style={{ marginTop: '0.25rem' }}>
                  <span style={{ 
                    backgroundColor: '#f8f0f5', 
                    color: '#7C2A62',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem'
                  }}>
                    {appointmentType === 'home' ? 'Home Consultation' : 
                     appointmentType === 'video' ? 'Video Consultation' : 'Clinic Appointment'}
                  </span>
                </div>
                {selectedPriority && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <PriorityBadge priority={selectedPriority} />
                  </div>
                )}
              </div>
              
              <div style={paymentAmountStyle}>
                <div style={amountLabelStyle}>Total Amount</div>
                <div style={amountValueStyle}>₹{paymentAmount}</div>
                <div style={amountSubTextStyle}>
                  {appointmentType === 'home' ? 'Home Consultation' : 
                   appointmentType === 'video' ? 'Video Consultation' : 'Clinic Appointment'}
                </div>
              </div>
            </div>

            {/* Payment Status */}
            {paymentStatus === 'processing' && (
              <div style={processingContainerStyle}>
                <div style={loadingSpinnerStyle}></div>
                <p style={{ color: '#7C2A62', margin: '1rem 0 0 0', fontWeight: '600' }}>
                  Processing payment...
                </p>
                <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  Please wait while we connect to the payment gateway
                </p>
              </div>
            )}

            {paymentStatus === 'success' && (
              <div style={successContainerStyle}>
                <div style={successIconStyle}>✓</div>
                <h4 style={{ color: '#059669', margin: '1rem 0 0.5rem 0', fontWeight: '600' }}>
                  Payment Successful!
                </h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  Your appointment has been confirmed and is being processed.
                </p>
                {appointmentType === 'video' && (
                  <div style={videoInstructionsStyle}>
                    <p style={{ color: '#7C2A62', fontWeight: '600', margin: '0.5rem 0' }}>
                      Video Call Instructions:
                    </p>
                    <ul style={{ color: '#666', fontSize: '0.85rem', paddingLeft: '1rem', margin: 0 }}>
                      <li>You can start the video call 10 minutes before your scheduled time</li>
                      <li>The call will automatically end after 30 minutes</li>
                      <li>Make sure you have a stable internet connection</li>
                    </ul>
                  </div>
                )}
                {paymentId && (
                  <div style={paymentIdStyle}>
                    Payment ID: <span style={{ fontFamily: 'monospace' }}>{paymentId.slice(0, 12)}...</span>
                  </div>
                )}
              </div>
            )}

            {paymentStatus === 'failed' && (
              <div style={failedContainerStyle}>
                <div style={failedIconStyle}>✕</div>
                <h4 style={{ color: '#DC2626', margin: '1rem 0 0.5rem 0', fontWeight: '600' }}>
                  Payment Failed
                </h4>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                  Please try again or use a different payment method.
                </p>
              </div>
            )}

            {/* Payment Options */}
            {paymentStatus === 'pending' && (
              <>
                <div style={paymentOptionsStyle}>
                  <h4 style={{ color: '#7C2A62', margin: '0 0 1rem 0', fontSize: '1.1rem' }}>
                    Choose Payment Method
                  </h4>
                  
                  <div style={paymentMethodGridStyle}>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        processPayment(pendingAppointment);
                      }}
                      disabled={paymentLoading}
                      style={razorpayButtonStyle(paymentLoading)}
                      type="button"
                    >
                      <div style={paymentMethodIconStyle}>💳</div>
                      <div>
                        <div style={paymentMethodNameStyle}>Credit/Debit Card</div>
                        <div style={paymentMethodDescStyle}>Visa, Mastercard, RuPay, Amex</div>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        processPayment(pendingAppointment);
                      }}
                      disabled={paymentLoading}
                      style={razorpayButtonStyle(paymentLoading)}
                      type="button"
                    >
                      <div style={paymentMethodIconStyle}>🏦</div>
                      <div>
                        <div style={paymentMethodNameStyle}>Net Banking</div>
                        <div style={paymentMethodDescStyle}>All major banks</div>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        processPayment(pendingAppointment);
                      }}
                      disabled={paymentLoading}
                      style={razorpayButtonStyle(paymentLoading)}
                      type="button"
                    >
                      <div style={paymentMethodIconStyle}>📱</div>
                      <div>
                        <div style={paymentMethodNameStyle}>UPI</div>
                        <div style={paymentMethodDescStyle}>Google Pay, PhonePe, Paytm</div>
                      </div>
                    </button>

                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        processPayment(pendingAppointment);
                      }}
                      disabled={paymentLoading}
                      style={razorpayButtonStyle(paymentLoading)}
                      type="button"
                    >
                      <div style={paymentMethodIconStyle}>💵</div>
                      <div>
                        <div style={paymentMethodNameStyle}>Wallet</div>
                        <div style={paymentMethodDescStyle}>Paytm, Amazon Pay, Mobikwik</div>
                      </div>
                    </button>
                  </div>
                </div>

                <div style={securityInfoStyle}>
                  <div style={secureBadgeStyle}>🔒</div>
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>
                    Secure payment powered by Razorpay
                  </span>
                </div>

                <div style={paymentNoteStyle}>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>
                    <strong>Note:</strong> Your appointment will be confirmed only after successful payment.
                    {appointmentType === 'video' && ' Video consultation requires payment confirmation before access.'}
                    The amount will be refunded if the doctor cancels the appointment.
                  </p>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div style={paymentButtonsStyle}>
              {paymentStatus === 'pending' && (
                <>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowPaymentModal(false);
                      setShowTimeSlotsModal(true);
                    }}
                    style={paymentCancelButtonStyle}
                    type="button"
                    disabled={paymentLoading}
                  >
                    Back
                  </button>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      processPayment(pendingAppointment);
                    }}
                    style={paymentConfirmButtonStyle(paymentLoading)}
                    type="button"
                    disabled={paymentLoading}
                  >
                    {paymentLoading ? 'Processing...' : `Pay ₹${paymentAmount}`}
                  </button>
                </>
              )}

              {paymentStatus === 'success' && (
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowPaymentModal(false);
                    setShowTimeSlotsModal(false);
                    setSelectedDoctor(null);
                    resetModalStates();
                  }}
                  style={paymentDoneButtonStyle}
                  type="button"
                >
                  Done
                </button>
              )}

              {paymentStatus === 'failed' && (
                <>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowPaymentModal(false);
                      setShowTimeSlotsModal(true);
                    }}
                    style={paymentCancelButtonStyle}
                    type="button"
                  >
                    Back
                  </button>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setPaymentStatus('pending');
                      processPayment(pendingAppointment);
                    }}
                    style={paymentRetryButtonStyle}
                    type="button"
                  >
                    Try Again
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main render
  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <div>
          <h2 style={{ color: '#7C2A62', margin: '0 0 0.5rem 0' }}>Book Consultation</h2>
          <p style={{ color: '#666', margin: 0 }}>
            Find and book appointments with specialized doctors
          </p>
        </div>
        <div style={headerButtonsStyle}>
          <button 
            onClick={handleBackToAppointments}
            style={backButtonStyle}
            type="button"
          >
            ← Back to Appointments
          </button>
        </div>
      </div>

      {/* Ongoing Call Alert */}
      {hasOngoingVideoCall() && (
        <div style={ongoingCallAlertStyle}>
          <span style={{ color: '#DC2626', fontWeight: '600' }}>
            ⚠️ You have an ongoing video call. You cannot book new appointments until the call ends.
          </span>
          <button 
            onClick={() => {
              setShowVideoCallModal(false);
              resetVideoCall();
            }}
            style={endCallAlertButtonStyle}
            type="button"
          >
            End Call
          </button>
        </div>
      )}

      {/* Search and Filter Section */}
      <div style={searchSectionStyle}>
        <div style={searchBoxContainerStyle}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search for doctors or medical conditions..."
            value={doctorSearchQuery}
            onChange={(e) => setDoctorSearchQuery(e.target.value)}
            style={searchInputStyle}
          />
        </div>
        
        <div style={filterButtonsStyle}>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowPediatricDoctors(!showPediatricDoctors);
              setShowPregnancyDoctors(false);
              setShowGeneralDoctors(false);
            }}
            style={filterButtonStyle(showPediatricDoctors)}
            type="button"
          >
            👶 Pediatric
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowPregnancyDoctors(!showPregnancyDoctors);
              setShowPediatricDoctors(false);
              setShowGeneralDoctors(false);
            }}
            style={filterButtonStyle(showPregnancyDoctors)}
            type="button"
          >
            🤰 Pregnancy
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowGeneralDoctors(!showGeneralDoctors);
              setShowPediatricDoctors(false);
              setShowPregnancyDoctors(false);
            }}
            style={filterButtonStyle(showGeneralDoctors)}
            type="button"
          >
            🏥 General
          </button>
        </div>
      </div>

      {/* Doctors List */}
      <div style={doctorsListStyle}>
        {/* Show doctors based on filters */}
        {!showPediatricDoctors && !showPregnancyDoctors && !showGeneralDoctors && (
          <div style={categorySectionStyle}>
            <h3 style={{ color: '#7C2A62', marginBottom: '1rem' }}>All Specialists</h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Please select a category above to view doctors
            </p>
          </div>
        )}

        {showPediatricDoctors && (
          <div style={categorySectionStyle}>
            <h3 style={{ color: '#7C2A62', marginBottom: '1rem' }}>👶 Pediatric Specialists</h3>
            {pediatricDoctors.map((doctor) => (
              <DoctorCard 
                key={doctor.id}
                doctor={doctor}
                getAppointmentDetails={getAppointmentDetails}
                handleBookAppointmentClick={handleBookAppointmentClick}
                handleBookHomeConsultationClick={handleBookHomeConsultationClick}
                handleBookVideoConsultationClick={handleBookVideoConsultationClick}
                handleStartVideoCallClick={handleStartVideoCallClick}
              />
            ))}
          </div>
        )}

        {showPregnancyDoctors && (
          <div style={categorySectionStyle}>
            <h3 style={{ color: '#7C2A62', marginBottom: '1rem' }}>🤰 Pregnancy Specialists</h3>
            {pregnancyDoctors.map((doctor) => (
              <DoctorCard 
                key={doctor.id}
                doctor={doctor}
                getAppointmentDetails={getAppointmentDetails}
                handleBookAppointmentClick={handleBookAppointmentClick}
                handleBookHomeConsultationClick={handleBookHomeConsultationClick}
                handleBookVideoConsultationClick={handleBookVideoConsultationClick}
                handleStartVideoCallClick={handleStartVideoCallClick}
              />
            ))}
          </div>
        )}

        {showGeneralDoctors && (
          <div style={categorySectionStyle}>
            <h3 style={{ color: '#7C2A62', marginBottom: '1rem' }}>🏥 General Doctors</h3>
            {generalDoctors.map((doctor) => (
              <DoctorCard 
                key={doctor.id}
                doctor={doctor}
                getAppointmentDetails={getAppointmentDetails}
                handleBookAppointmentClick={handleBookAppointmentClick}
                handleBookHomeConsultationClick={handleBookHomeConsultationClick}
                handleBookVideoConsultationClick={handleBookVideoConsultationClick}
                handleStartVideoCallClick={handleStartVideoCallClick}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <TimeSlotsModal />
      <AppointmentRequiredModal />
      <VideoCallModal />
      <PaymentModal />

      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        
        @keyframes loading {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Styles (All styles remain the same as in your original code)
// ... [All the style objects remain exactly the same as in your original code]
// I'm not copying them here to save space, but they should remain unchanged

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '1.5rem',
  backgroundColor: '#f8f9fa',
  minHeight: '100vh'
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
  marginTop: '125px',
  paddingBottom: '1rem',
  borderBottom: '1px solid #e2e8f0'
};

const headerButtonsStyle = {
  display: 'flex',
  gap: '1rem'
};

const backButtonStyle = {
  backgroundColor: '#7C2A62',
  color: 'white',
  padding: '0.75rem 1.5rem',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.95rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#5a1d4a',
    transform: 'translateY(-2px)'
  }
};

const ongoingCallAlertStyle = {
  backgroundColor: '#FEE2E2',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  marginBottom: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid #DC2626',
  animation: 'pulse 2s infinite'
};

const endCallAlertButtonStyle = {
  backgroundColor: '#DC2626',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#B91C1C'
  }
};

const searchSectionStyle = {
  marginBottom: '2rem'
};

const searchBoxContainerStyle = {
  position: 'relative',
  marginBottom: '1rem'
};

const searchInputStyle = {
  width: '100%',
  padding: '1rem 1.5rem',
  fontSize: '1rem',
  border: '2px solid #e2e8f0',
  borderRadius: '12px',
  outline: 'none',
  transition: 'border-color 0.3s ease',
  ':focus': {
    borderColor: '#7C2A62'
  }
};

const filterButtonsStyle = {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap'
};

const filterButtonStyle = (isActive) => ({
  backgroundColor: isActive ? '#7C2A62' : '#f1f5f9',
  color: isActive ? 'white' : '#666',
  padding: '0.75rem 1.5rem',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.95rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: isActive ? '#5a1d4a' : '#e2e8f0',
    transform: 'translateY(-2px)'
  }
});

const doctorsListStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
};

const categorySectionStyle = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
};

// Doctor Card Styles
const doctorCardStyle = {
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '1.5rem',
  marginBottom: '1rem',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  border: '1px solid #e2e8f0'
};

const doctorCardHeaderStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
  marginBottom: '1rem'
};

const doctorAvatarStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#7C2A62',
  color: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  fontWeight: '600'
};

const doctorBasicInfoStyle = {
  flex: 1
};

const doctorDetailsStyle = {
  marginBottom: '1rem'
};

const doctorMetaStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '0.75rem',
  marginTop: '1rem'
};

const metaItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
};

const metaLabelStyle = {
  color: '#7C2A62',
  fontSize: '1rem'
};

const metaValueStyle = {
  color: '#666',
  fontSize: '0.9rem'
};

const doctorActionsStyle = {
  display: 'flex',
  gap: '0.75rem',
  flexWrap: 'wrap'
};

const bookButtonStyle = {
  flex: 1,
  backgroundColor: '#7C2A62',
  color: 'white',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#5a1d4a'
  }
};

const homeConsultButtonStyle = {
  flex: 1,
  backgroundColor: '#059669',
  color: 'white',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#047857'
  }
};

const videoButtonStyle = {
  flex: 1,
  backgroundColor: '#3b82f6',
  color: 'white',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#2563eb'
  }
};

const bookedButtonStyle = {
  flex: 1,
  backgroundColor: '#d1d5db',
  color: '#4b5563',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'not-allowed',
  fontSize: '0.9rem',
  fontWeight: '600'
};

const appointmentStatusContainerStyle = {
  marginTop: '1rem'
};

const appointmentBadgeStyle = {
  backgroundColor: '#D1FAE5',
  padding: '0.75rem',
  borderRadius: '8px',
  marginBottom: '0.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const startVideoButtonStyle = {
  backgroundColor: '#3b82f6',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#2563eb'
  }
};

// Modal Styles
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10000,
  padding: '1rem',
  animation: 'fadeIn 0.3s ease'
};

const timeSlotsModalStyle = {
  backgroundColor: 'white',
  borderRadius: '20px',
  width: '100%',
  maxWidth: '500px',
  maxHeight: '90vh',
  overflowY: 'auto',
  animation: 'fadeIn 0.3s ease'
};

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.5rem',
  borderBottom: '1px solid #e2e8f0',
  backgroundColor: '#f8fafc',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px'
};

const closeModalButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '2rem',
  color: '#666',
  cursor: 'pointer',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  ':hover': {
    backgroundColor: '#f1f5f9',
    color: '#7C2A62'
  }
};

const modalContentStyle = {
  padding: '1.5rem'
};

const doctorModalInfoStyle = {
  marginBottom: '1.5rem'
};

const doctorModalHeaderStyle = {
  marginBottom: '1.5rem'
};

const consultationFeeStyle = {
  backgroundColor: '#f8f0f5',
  color: '#7C2A62',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  fontSize: '0.9rem',
  fontWeight: '600',
  display: 'inline-block'
};

const prioritySelectionStyle = {
  marginBottom: '1.5rem'
};

const priorityButtonsStyle = {
  display: 'flex',
  gap: '0.75rem',
  marginBottom: '0.5rem'
};

const priorityButtonStyle = (isSelected) => ({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  ':hover': {
    transform: 'translateY(-2px)'
  },
  opacity: isSelected ? 1 : 0.7
});

const dateSelectionStyle = {
  marginBottom: '1.5rem'
};

const dateButtonsStyle = {
  display: 'flex',
  gap: '0.5rem',
  overflowX: 'auto',
  padding: '0.5rem 0'
};

const dateButtonStyle = (isSelected) => ({
  backgroundColor: isSelected ? '#7C2A62' : '#f8fafc',
  color: isSelected ? 'white' : '#666',
  border: `1px solid ${isSelected ? '#7C2A62' : '#e2e8f0'}`,
  borderRadius: '10px',
  padding: '0.75rem',
  minWidth: '70px',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  ':hover': {
    borderColor: '#7C2A62',
    backgroundColor: isSelected ? '#5a1d4a' : '#f8f0f5'
  }
});

const dateDayStyle = {
  fontSize: '0.8rem',
  fontWeight: '600',
  marginBottom: '0.25rem'
};

const dateNumStyle = {
  fontSize: '1.25rem',
  fontWeight: '700',
  marginBottom: '0.25rem'
};

const dateMonthStyle = {
  fontSize: '0.8rem',
  opacity: 0.8
};

const timeSelectionStyle = {
  marginBottom: '1.5rem'
};

const timeSlotsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
  gap: '0.5rem'
};

const timeSlotButtonStyle = (isSelected) => ({
  backgroundColor: isSelected ? '#7C2A62' : '#f8fafc',
  color: isSelected ? 'white' : '#666',
  border: `1px solid ${isSelected ? '#7C2A62' : '#e2e8f0'}`,
  borderRadius: '8px',
  padding: '0.75rem',
  cursor: 'pointer',
  fontSize: '0.9rem',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  ':hover': {
    borderColor: '#7C2A62',
    backgroundColor: isSelected ? '#5a1d4a' : '#f8f0f5'
  }
});

const noSlotsStyle = {
  backgroundColor: '#FEE2E2',
  padding: '1rem',
  borderRadius: '8px',
  textAlign: 'center',
  border: '1px solid #FECACA'
};

const selectedDetailsStyle = {
  backgroundColor: '#f8fafc',
  padding: '1.25rem',
  borderRadius: '12px',
  marginTop: '1.5rem',
  border: '1px solid #e2e8f0'
};

const detailRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.75rem'
};

const detailLabelStyle = {
  color: '#666',
  fontSize: '0.9rem'
};

const detailValueStyle = {
  color: '#333',
  fontWeight: '600',
  fontSize: '0.9rem'
};

const feeAmountStyle = {
  color: '#7C2A62',
  fontSize: '1.1rem',
  fontWeight: '700'
};

const modalButtonsStyle = {
  padding: '1.5rem',
  display: 'flex',
  gap: '1rem',
  borderTop: '1px solid #e2e8f0',
  backgroundColor: '#f8fafc',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px'
};

const cancelButtonStyle = {
  flex: 1,
  backgroundColor: '#f1f5f9',
  color: '#666',
  padding: '0.875rem',
  borderRadius: '12px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#e2e8f0',
    color: '#333'
  }
};

const confirmAppointmentButtonStyle = {
  flex: 1,
  backgroundColor: '#059669',
  color: 'white',
  padding: '0.875rem',
  borderRadius: '12px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#047857',
    transform: 'translateY(-2px)'
  },
  ':disabled': {
    backgroundColor: '#94a3b8',
    cursor: 'not-allowed',
    transform: 'none'
  }
};

// Payment Modal Styles
const paymentModalStyle = {
  backgroundColor: 'white',
  borderRadius: '20px',
  width: '100%',
  maxWidth: '500px',
  maxHeight: '90vh',
  overflowY: 'auto',
  animation: 'fadeIn 0.3s ease'
};

const paymentModalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.5rem',
  borderBottom: '1px solid #e2e8f0',
  backgroundColor: '#f8fafc',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px'
};

const paymentContentStyle = {
  padding: '1.5rem'
};

const paymentHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '2rem',
  paddingBottom: '1rem',
  borderBottom: '1px solid #e2e8f0'
};

const paymentDoctorInfoStyle = {
  flex: 1
};

const appointmentDetailsStyle = {
  marginTop: '0.5rem',
  fontSize: '0.9rem',
  color: '#666'
};

const paymentAmountStyle = {
  textAlign: 'right'
};

const amountLabelStyle = {
  fontSize: '0.9rem',
  color: '#666',
  marginBottom: '0.25rem'
};

const amountValueStyle = {
  fontSize: '1.8rem',
  fontWeight: '700',
  color: '#7C2A62'
};

const amountSubTextStyle = {
  fontSize: '0.8rem',
  color: '#94a3b8',
  marginTop: '0.25rem'
};

const processingContainerStyle = {
  textAlign: 'center',
  padding: '2rem 0'
};

const loadingSpinnerStyle = {
  width: '50px',
  height: '50px',
  border: '4px solid #f3f3f3',
  borderTop: '4px solid #7C2A62',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  margin: '0 auto'
};

const successContainerStyle = {
  textAlign: 'center',
  padding: '2rem',
  backgroundColor: '#D1FAE5',
  borderRadius: '12px',
  margin: '1rem 0'
};

const successIconStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#059669',
  color: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  margin: '0 auto'
};

const failedContainerStyle = {
  textAlign: 'center',
  padding: '2rem',
  backgroundColor: '#FEE2E2',
  borderRadius: '12px',
  margin: '1rem 0'
};

const failedIconStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#DC2626',
  color: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  margin: '0 auto'
};

const paymentIdStyle = {
  fontSize: '0.85rem',
  color: '#666',
  marginTop: '0.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  padding: '0.5rem',
  borderRadius: '6px',
  fontFamily: 'monospace'
};

const videoInstructionsStyle = {
  backgroundColor: 'rgba(124, 42, 98, 0.1)',
  padding: '0.75rem',
  borderRadius: '8px',
  marginTop: '1rem',
  textAlign: 'left'
};

const paymentOptionsStyle = {
  marginBottom: '1.5rem'
};

const paymentMethodGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.75rem'
};

const razorpayButtonStyle = (isDisabled) => ({
  backgroundColor: isDisabled ? '#f1f5f9' : '#f8fafc',
  border: `2px solid ${isDisabled ? '#ccc' : '#e2e8f0'}`,
  borderRadius: '12px',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  cursor: isDisabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.3s ease',
  textAlign: 'left',
  width: '100%',
  opacity: isDisabled ? 0.6 : 1,
  ':hover': !isDisabled ? {
    borderColor: '#7C2A62',
    backgroundColor: '#f8f0f5'
  } : {}
});

const paymentMethodIconStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const paymentMethodNameStyle = {
  fontSize: '0.95rem',
  fontWeight: '600',
  color: '#333'
};

const paymentMethodDescStyle = {
  fontSize: '0.8rem',
  color: '#666',
  marginTop: '0.25rem'
};

const securityInfoStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '1rem',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  marginBottom: '1rem'
};

const secureBadgeStyle = {
  fontSize: '1rem'
};

const paymentNoteStyle = {
  padding: '1rem',
  backgroundColor: '#FEF3C7',
  borderRadius: '8px',
  border: '1px solid #FCD34D',
  marginBottom: '1.5rem'
};

const paymentButtonsStyle = {
  display: 'flex',
  gap: '1rem'
};

const paymentCancelButtonStyle = {
  flex: 1,
  backgroundColor: '#f1f5f9',
  color: '#666',
  padding: '0.875rem',
  borderRadius: '12px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#e2e8f0',
    color: '#333'
  }
};

const paymentConfirmButtonStyle = (isDisabled) => ({
  flex: 1,
  backgroundColor: isDisabled ? '#ccc' : '#7C2A62',
  color: 'white',
  padding: '0.875rem',
  borderRadius: '12px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: isDisabled ? 'not-allowed' : 'pointer',
  transition: 'all 0.3s ease',
  opacity: isDisabled ? 0.7 : 1,
  ':hover': !isDisabled ? {
    backgroundColor: '#5a1d4a',
    transform: 'translateY(-2px)'
  } : {}
});

const paymentDoneButtonStyle = {
  flex: 1,
  backgroundColor: '#059669',
  color: 'white',
  padding: '0.875rem',
  borderRadius: '12px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#047857',
    transform: 'translateY(-2px)'
  }
};

const paymentRetryButtonStyle = {
  flex: 1,
  backgroundColor: '#DC2626',
  color: 'white',
  padding: '0.875rem',
  borderRadius: '12px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#B91C1C',
    transform: 'translateY(-2px)'
  }
};

// Video Call Modal Styles
const videoCallModalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10000,
  padding: '1rem'
};

const videoCallModalStyle = {
  backgroundColor: '#1a1a1a',
  borderRadius: '16px',
  width: '100%',
  maxWidth: '800px',
  height: '600px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden'
};

const videoCallHeaderStyle = {
  backgroundColor: '#2d2d2d',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #404040'
};

const videoCallDoctorInfoStyle = {
  flex: 1
};

const videoCallTimerStyle = {
  backgroundColor: '#404040',
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  margin: '0 1rem'
};

const videoCallEndButtonStyle = {
  backgroundColor: '#DC2626',
  color: 'white',
  padding: '0.5rem 1.5rem',
  borderRadius: '20px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#B91C1C'
  }
};

const videoContainersStyle = {
  flex: 1,
  display: 'flex',
  padding: '1rem',
  gap: '1rem',
  position: 'relative'
};

const doctorVideoContainerStyle = {
  flex: 3,
  backgroundColor: '#2d2d2d',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const patientVideoContainerStyle = {
  flex: 1,
  backgroundColor: '#2d2d2d',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #404040'
};

const videoPlaceholderStyle = {
  textAlign: 'center',
  color: '#666'
};

const videoPlaceholderIconStyle = {
  fontSize: '4rem',
  opacity: 0.5
};

const callControlsStyle = {
  backgroundColor: '#2d2d2d',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  borderTop: '1px solid #404040'
};

const callControlButtonStyle = (isActive) => ({
  backgroundColor: isActive ? '#7C2A62' : '#f1f5f9',
  color: isActive ? 'white' : '#666',
  border: 'none',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '1.5rem',
  transition: 'all 0.3s ease'
});

const endCallButtonStyle = {
  backgroundColor: '#DC2626',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '1.5rem',
  transition: 'all 0.3s ease'
};

const recordingControlsStyle = {
  backgroundColor: '#2d2d2d',
  padding: '0.75rem 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid #404040'
};

const recordingStatusStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
};

const recordingButtonsStyle = {
  display: 'flex',
  gap: '0.5rem'
};

const saveRecordingButtonStyle = {
  backgroundColor: '#059669',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#047857'
  }
};

const discardRecordingButtonStyle = {
  backgroundColor: '#DC2626',
  color: 'white',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#B91C1C'
  }
};

// Appointment Required Modal Styles
const appointmentRequiredModalStyle = {
  backgroundColor: 'white',
  borderRadius: '20px',
  width: '100%',
  maxWidth: '400px',
  animation: 'fadeIn 0.3s ease'
};

const appointmentRequiredHeaderStyle = {
  padding: '1.5rem',
  borderBottom: '1px solid #e2e8f0',
  backgroundColor: '#f8fafc',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px'
};

const appointmentRequiredContentStyle = {
  padding: '1.5rem'
};

const appointmentRequiredButtonsStyle = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1.5rem'
};

const primaryButtonStyle = {
  flex: 1,
  backgroundColor: '#7C2A62',
  color: 'white',
  padding: '0.875rem',
  borderRadius: '12px',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#5a1d4a',
    transform: 'translateY(-2px)'
  }
};

export default ConsultationView;