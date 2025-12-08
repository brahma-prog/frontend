import React, { useState, useCallback, useEffect } from 'react';

const PatientsContent = ({ dashboardData, state, actions }) => {
  const { patientSearch } = state;
  const { setPatientSearch, handleViewFullHistory } = actions;

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;

  // State for modals and filters
  const [patientTypeFilter, setPatientTypeFilter] = useState('all');
  const [selectedPatientHistory, setSelectedPatientHistory] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  
  // State for add notes modal
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [notesPatientName, setNotesPatientName] = useState('');
  const [notesText, setNotesText] = useState('');
  const [notesLoading, setNotesLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  
  // State for patient notes storage
  const [patientNotes, setPatientNotes] = useState({});

  // Initialize patient notes from dashboard data
  useEffect(() => {
    const initialNotes = {};
    dashboardData.patients.forEach(patient => {
      initialNotes[patient.name] = patient.notes || [];
    });
    setPatientNotes(initialNotes);
  }, [dashboardData.patients]);

  // Filter patients based on search and type
  const filteredPatients = dashboardData.patients.filter(patient => {
    const matchesSearch = 
      patient.name.toLowerCase().includes(patientSearch.toLowerCase()) ||
      patient.conditions.some(condition => 
        condition.toLowerCase().includes(patientSearch.toLowerCase())
      ) ||
      (patient.patientType === 'pregnancy' && 
       patient.pregnancyDetails && 
       patient.pregnancyDetails.package.toLowerCase().includes(patientSearch.toLowerCase()));
    
    const matchesType = 
      patientTypeFilter === 'all' || 
      (patientTypeFilter === 'pregnancy' && patient.patientType === 'pregnancy') ||
      (patientTypeFilter === 'general' && (!patient.patientType || patient.patientType === 'general'));
    
    return matchesSearch && matchesType;
  });

  // Count patients by type
  const pregnancyCount = dashboardData.patients.filter(p => p.patientType === 'pregnancy').length;
  const generalCount = dashboardData.patients.filter(p => !p.patientType || p.patientType === 'general').length;

  // Notification system
  const showNotification = useCallback((type, message) => {
    setNotification({ type, message, id: Date.now() });
    
    const timer = setTimeout(() => {
      setNotification(null);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Enhanced patient history data with added notes
  const getEnhancedPatientHistory = (patientName) => {
    const historyData = {
      'Priya Sharma': [
        { 
          date: '2024-01-15', 
          diagnosis: 'First Pregnancy Consultation', 
          status: 'Completed', 
          prescription: 'Folic Acid 5mg, Prenatal Vitamins',
          symptoms: 'Normal pregnancy symptoms - nausea, fatigue',
          tests: 'Blood Test, Ultrasound - Normal',
          notes: 'First consultation free. Explained 9-month plan. Selected Basic Pregnancy Care package.',
          type: 'pregnancy',
          consultationMode: 'offline'
        }
      ],
      'Meera Nair': [
        { 
          date: '2023-12-20', 
          diagnosis: 'Pregnancy Follow-up - Gestational Diabetes', 
          status: 'Completed', 
          prescription: 'Diet control, Regular glucose monitoring',
          symptoms: 'Elevated blood sugar levels',
          tests: 'Glucose Tolerance Test - Positive',
          notes: 'Gestational diabetes detected. Home visit scheduled for detailed reports.',
          type: 'pregnancy',
          consultationMode: 'online'
        },
        { 
          date: '2023-11-15', 
          diagnosis: 'First Pregnancy Consultation', 
          status: 'Completed', 
          prescription: 'Prenatal Vitamins, Iron supplements',
          symptoms: 'Normal pregnancy confirmation',
          tests: 'Blood Test, Ultrasound - Normal',
          notes: 'Selected Premium Pregnancy Care package. Explained complete care plan.',
          type: 'pregnancy',
          consultationMode: 'offline'
        }
      ],
      'Swati Menon': [
        { 
          date: '2024-01-10', 
          diagnosis: 'Regular Pregnancy Checkup - 3rd Trimester', 
          status: 'Completed', 
          prescription: 'Iron supplements, Calcium tablets',
          symptoms: 'Normal growth, slight back pain',
          tests: 'Ultrasound - Twins growing normally',
          notes: 'Home visit conducted. Uploaded ultrasound reports to File Locker.',
          type: 'pregnancy',
          consultationMode: 'home_visit'
        },
        { 
          date: '2023-12-15', 
          diagnosis: 'Pregnancy Follow-up', 
          status: 'Completed', 
          prescription: 'Continue supplements',
          symptoms: 'Normal development',
          tests: 'Blood pressure - Normal',
          notes: 'Selected Comprehensive Pregnancy Care package.',
          type: 'pregnancy',
          consultationMode: 'online'
        }
      ],
      'Sarah Johnson': [
        { 
          date: '2024-01-15', 
          diagnosis: 'Regular checkup and prescription renewal', 
          status: 'Completed', 
          prescription: 'Medication A, Medication B',
          symptoms: 'Hypertension under control',
          tests: 'Blood Pressure - 130/80, Blood Sugar - Normal',
          notes: 'Patient responding well to treatment',
          type: 'general'
        },
        { 
          date: '2023-12-10', 
          diagnosis: 'Diabetes follow-up', 
          status: 'Completed', 
          prescription: 'Insulin adjustment',
          symptoms: 'Blood sugar fluctuations',
          tests: 'HbA1c - 6.8%',
          notes: 'Good progress with medication adherence',
          type: 'general'
        }
      ]
    };
    
    // Combine with saved notes
    const savedNotes = patientNotes[patientName] || [];
    const medicalHistory = historyData[patientName] || [];
    
    // Combine and sort by date (newest first)
    const allRecords = [...medicalHistory, ...savedNotes].sort((a, b) => {
      return new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt);
    });
    
    return allRecords;
  };

  const handleViewHistory = (patient) => {
    const history = getEnhancedPatientHistory(patient.name);
    setSelectedPatientHistory({ patient, history });
    setShowHistoryModal(true);
  };

  const handleAddNotesClick = (patientName) => {
    setNotesPatientName(patientName);
    setNotesText('');
    setShowNotesModal(true);
  };

  const handleSaveNotes = () => {
    if (!notesText.trim()) {
      showNotification('error', 'Please enter notes before saving');
      return;
    }

    setNotesLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newNote = {
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        time: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        }),
        text: notesText,
        doctor: 'Dr. You',
        type: 'clinical_notes',
        createdAt: new Date().toISOString().split('T')[0]
      };
      
      // Update patient notes in state
      setPatientNotes(prev => ({
        ...prev,
        [notesPatientName]: [...(prev[notesPatientName] || []), newNote]
      }));
      
      showNotification('success', `Notes saved for ${notesPatientName}`);
      setNotesLoading(false);
      setShowNotesModal(false);
      setNotesText('');
      setNotesPatientName('');
      
      // Update the history modal if it's open for the same patient
      if (selectedPatientHistory && selectedPatientHistory.patient.name === notesPatientName) {
        const updatedHistory = getEnhancedPatientHistory(notesPatientName);
        setSelectedPatientHistory(prev => ({ ...prev, history: updatedHistory }));
      }
    }, 1000);
  };

  // Notification Component
  const Notification = () => {
    if (!notification) return null;
    
    const bgColor = notification.type === 'success' ? '#10B981' :
                    notification.type === 'error' ? '#EF4444' :
                    notification.type === 'warning' ? '#F59E0B' : '#3B82F6';
    
    const icon = notification.type === 'success' ? '✅' :
                 notification.type === 'error' ? '❌' :
                 notification.type === 'warning' ? '⚠️' : 'ℹ️';
    
    return (
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 10001,
        animation: 'slideIn 0.3s ease'
      }}>
        <div style={{
          padding: '15px 20px',
          borderRadius: '8px',
          backgroundColor: bgColor,
          color: 'white',
          fontWeight: '600',
          minWidth: '300px',
          maxWidth: '400px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
        }}>
          {icon} {notification.message}
        </div>
      </div>
    );
  };

  // Add Notes Modal Component with cursor fix
  const AddNotesModal = () => {
    if (!showNotesModal) return null;

    // Handle textarea keydown to fix cursor behavior
    const handleTextareaKeyDown = (e) => {
      // Allow normal cursor movement
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || 
          e.key === 'ArrowUp' || e.key === 'ArrowDown' ||
          e.key === 'Home' || e.key === 'End') {
        return; // Allow default behavior
      }
      
      // Handle backspace and delete
      if (e.key === 'Backspace' || e.key === 'Delete') {
        const cursorPosition = e.target.selectionStart;
        if (e.key === 'Backspace' && cursorPosition > 0) {
          const newText = notesText.slice(0, cursorPosition - 1) + notesText.slice(cursorPosition);
          setNotesText(newText);
          // Set cursor position after update
          setTimeout(() => {
            e.target.selectionStart = cursorPosition - 1;
            e.target.selectionEnd = cursorPosition - 1;
          }, 0);
          e.preventDefault();
        } else if (e.key === 'Delete' && cursorPosition < notesText.length) {
          const newText = notesText.slice(0, cursorPosition) + notesText.slice(cursorPosition + 1);
          setNotesText(newText);
          // Keep cursor at same position
          setTimeout(() => {
            e.target.selectionStart = cursorPosition;
            e.target.selectionEnd = cursorPosition;
          }, 0);
          e.preventDefault();
        }
      }
    };

    const handleTextareaChange = (e) => {
      setNotesText(e.target.value);
    };

    // Handle textarea click to ensure cursor works
    const handleTextareaClick = (e) => {
      e.target.focus();
    };

    // Get cursor position to maintain it
    const handleTextareaMouseUp = (e) => {
      // Store cursor position
      const cursorPos = e.target.selectionStart;
      // Force focus and set cursor position
      e.target.focus();
      e.target.selectionStart = cursorPos;
      e.target.selectionEnd = cursorPos;
    };

    return (
      <div style={styles.modalOverlay}>
        <div style={styles.modal}>
          <div style={styles.modalHeader}>
            <h3 style={styles.modalTitle}>Add Notes for {notesPatientName}</h3>
            <button 
              style={styles.closeButton}
              onClick={() => {
                setShowNotesModal(false);
                setNotesText('');
                setNotesPatientName('');
              }}
            >
              ✕
            </button>
          </div>
          
          <div style={styles.modalContent}>
            <div style={styles.notesForm}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Patient Name</label>
                <input
                  type="text"
                  value={notesPatientName}
                  readOnly
                  style={styles.readOnlyInput}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Notes <span style={styles.required}>*</span></label>
                <div style={styles.textareaContainer}>
                  <textarea
                    value={notesText}
                    onChange={handleTextareaChange}
                    onKeyDown={handleTextareaKeyDown}
                    onClick={handleTextareaClick}
                    onMouseUp={handleTextareaMouseUp}
                    placeholder="Enter your notes here... (e.g., Symptoms, Diagnosis, Treatment plan, Follow-up instructions)"
                    style={styles.notesTextarea}
                    rows={8}
                    autoFocus
                    ref={(textarea) => {
                      if (textarea) {
                        // Ensure cursor is visible and at end
                        setTimeout(() => {
                          textarea.focus();
                          textarea.selectionStart = textarea.value.length;
                          textarea.selectionEnd = textarea.value.length;
                        }, 10);
                      }
                    }}
                  />
                  <div style={styles.charCount}>
                    {notesText.length}/1000 characters
                  </div>
                </div>
              </div>
              
              <div style={styles.notesTips}>
                <h4 style={styles.tipsTitle}>Tips for effective notes:</h4>
                <ul style={styles.tipsList}>
                  <li>Include symptoms and observations</li>
                  <li>Note diagnosis and prescribed medications</li>
                  <li>Record follow-up requirements</li>
                  <li>Add any special instructions for the patient</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style={styles.modalFooter}>
            <button
              style={styles.cancelButton}
              onClick={() => {
                setShowNotesModal(false);
                setNotesText('');
                setNotesPatientName('');
              }}
              disabled={notesLoading}
            >
              Cancel
            </button>
            <button
              style={styles.saveButton}
              onClick={handleSaveNotes}
              disabled={notesLoading}
            >
              {notesLoading ? 'Saving...' : 'Save Notes'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const PatientHistoryModal = () => {
    if (!showHistoryModal || !selectedPatientHistory) return null;

    const { patient, history } = selectedPatientHistory;
    
    // Separate clinical notes from medical history
    const clinicalNotes = history.filter(record => record.type === 'clinical_notes');
    const medicalHistory = history.filter(record => record.type !== 'clinical_notes');

    return (
      <div style={styles.modalOverlay}>
        <div style={{
          ...styles.viewDetailsModal,
          width: isMobile ? '95%' : '90%',
          maxWidth: '800px',
          maxHeight: '90vh'
        }}>
          <div style={styles.modalHeader}>
            <div style={{ flex: 1 }}>
              <h3 style={styles.modalTitle}>
                Medical History - {patient.name}
                {patient.patientType === 'pregnancy' && (
                  <span style={styles.modalPregnancyTag}>🤰 Pregnancy Care</span>
                )}
              </h3>
            </div>
            <button 
              style={styles.closeButton}
              onClick={() => setShowHistoryModal(false)}
            >
              ✕
            </button>
          </div>

          <div style={styles.modalContent}>
            <div style={styles.patientOverview}>
              <div style={{
                ...styles.profileIconLarge,
                backgroundColor: patient.patientType === 'pregnancy' ? '#F7D9EB' : '#f3f4f6'
              }}>
                {patient.patientType === 'pregnancy' ? '🤰' : '👤'}
              </div>
              <div style={styles.patientBasicInfo}>
                <h4 style={styles.patientNameLarge}>{patient.name}</h4>
                <div style={styles.patientDetailsGrid}>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Age:</span>
                    <span style={styles.detailValue}>{patient.age}</span>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Blood Group:</span>
                    <span style={styles.detailValue}>{patient.bloodGroup}</span>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Last Visit:</span>
                    <span style={styles.detailValue}>{patient.lastVisit}</span>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>Total Visits:</span>
                    <span style={styles.detailValue}>{patient.totalVisits}</span>
                  </div>
                  {patient.patientType === 'pregnancy' && patient.pregnancyDetails && (
                    <>
                      <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>Trimester:</span>
                        <span style={styles.detailValue}>
                          {patient.pregnancyDetails.trimester} ({patient.pregnancyDetails.weeks} weeks)
                        </span>
                      </div>
                      <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>EDD:</span>
                        <span style={styles.detailValue}>{patient.pregnancyDetails.edd}</span>
                      </div>
                      <div style={styles.detailItem}>
                        <span style={styles.detailLabel}>Package:</span>
                        <span style={styles.detailValue}>{patient.pregnancyDetails.package}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div style={styles.medicalConditions}>
              <h4 style={styles.sectionTitle}>Medical Conditions</h4>
              <div style={styles.conditionsList}>
                {patient.conditions.map((condition, index) => (
                  <span key={index} style={styles.conditionTag}>
                    {condition}
                  </span>
                ))}
              </div>
            </div>

            {/* Clinical Notes Section */}
            <div style={styles.notesSection}>
              <div style={styles.sectionHeaderRow}>
                <h4 style={styles.sectionTitle}>
                  Clinical Notes ({clinicalNotes.length})
                </h4>
                <button 
                  style={styles.addNotesButton}
                  onClick={() => {
                    setShowHistoryModal(false);
                    handleAddNotesClick(patient.name);
                  }}
                >
                  + Add New Notes
                </button>
              </div>
              
              {clinicalNotes.length > 0 ? (
                <div style={styles.notesList}>
                  {clinicalNotes.map((note, index) => (
                    <div key={note.id || index} style={styles.noteItem}>
                      <div style={styles.noteHeader}>
                        <span style={styles.noteDate}>{note.date || note.createdAt}</span>
                        <span style={styles.noteTime}>{note.time || ''}</span>
                        <span style={styles.noteDoctor}>By: {note.doctor || 'Dr. You'}</span>
                        <span style={styles.noteType}>Note</span>
                      </div>
                      <p style={styles.noteText}>{note.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={styles.noNotes}>
                  <p>No clinical notes recorded yet.</p>
                  <button 
                    style={styles.secondaryButton}
                    onClick={() => {
                      setShowHistoryModal(false);
                      handleAddNotesClick(patient.name);
                    }}
                  >
                    Add First Note
                  </button>
                </div>
              )}
            </div>

            {/* Medical History Section */}
            <div style={styles.medicalHistorySection}>
              <h4 style={styles.sectionTitle}>
                Consultation History ({medicalHistory.length} records)
                {patient.patientType === 'pregnancy' && (
                  <span style={styles.pregnancyHistoryNote}>🤰 Pregnancy Care Records</span>
                )}
              </h4>
              
              {medicalHistory.length > 0 ? (
                <div style={styles.historyList}>
                  {medicalHistory.map((record, index) => (
                    <div key={index} style={styles.historyItem}>
                      <div style={styles.historyHeader}>
                        <div style={styles.historyDateRow}>
                          <span style={styles.historyDate}>{record.date}</span>
                          {record.type === 'pregnancy' && (
                            <span style={{
                              ...styles.consultationMode,
                              backgroundColor: record.consultationMode === 'offline' ? '#F7D9EB' : 
                                            record.consultationMode === 'home_visit' ? '#D1FAE5' : '#E8F4FD',
                              color: record.consultationMode === 'offline' ? '#7C2A62' : 
                                     record.consultationMode === 'home_visit' ? '#065F46' : '#1E40AF'
                            }}>
                              {record.consultationMode === 'offline' ? '🏥 Hospital' : 
                               record.consultationMode === 'home_visit' ? '🏠 Home Visit' : '💻 Online'}
                            </span>
                          )}
                        </div>
                        <span style={styles.historyStatus}>{record.status || 'Completed'}</span>
                      </div>
                      <div style={styles.historyDetails}>
                        <p style={styles.historyDiagnosis}>
                          <strong>Diagnosis:</strong> {record.diagnosis}
                        </p>
                        <p style={styles.historySymptoms}>
                          <strong>Symptoms:</strong> {record.symptoms}
                        </p>
                        <p style={styles.historyTests}>
                          <strong>Tests:</strong> {record.tests}
                        </p>
                        <p style={styles.historyPrescription}>
                          <strong>Prescription:</strong> {record.prescription}
                        </p>
                        <p style={styles.historyNotes}>
                          <strong>Doctor Notes:</strong> {record.notes}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={styles.noHistory}>
                  <p>No medical consultation history records found.</p>
                </div>
              )}
            </div>
          </div>

          <div style={styles.modalFooter}>
            <button
              style={styles.secondaryButton}
              onClick={() => setShowHistoryModal(false)}
            >
              Close
            </button>
            <button
              style={styles.primaryButton}
              onClick={() => {
                handleAddNotesClick(patient.name);
                setShowHistoryModal(false);
              }}
            >
              Add New Notes
            </button>
          </div>
        </div>
      </div>
    );
  };

  const PatientCard = ({ patient }) => (
    <div style={styles.patientCard}>
      <div style={styles.patientHeader}>
        <div style={{
          ...styles.profileIconLarge,
          backgroundColor: patient.patientType === 'pregnancy' ? '#F7D9EB' : '#f3f4f6'
        }}>
          {patient.patientType === 'pregnancy' ? '🤰' : '👤'}
        </div>
        <div style={styles.patientBasicInfo}>
          <h3 style={styles.patientName}>
            {patient.name}
            {patient.patientType === 'pregnancy' && (
              <span style={styles.pregnancyTag}>Pregnancy Care</span>
            )}
          </h3>
          <p style={styles.patientContact}>{patient.phone}</p>
          <p style={styles.patientEmail}>{patient.email}</p>
          {patient.patientType === 'pregnancy' && patient.pregnancyDetails && (
            <div style={styles.pregnancyQuickInfo}>
              <span style={styles.pregnancyWeeks}>
                {patient.pregnancyDetails.weeks} weeks • {patient.pregnancyDetails.trimester} Trimester
              </span>
              <span style={styles.pregnancyPackage}>
                {patient.pregnancyDetails.package}
              </span>
            </div>
          )}
        </div>
      </div>

      <div style={styles.patientDetails}>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Last Visit:</span>
          <span style={styles.detailValue}>{patient.lastVisit}</span>
        </div>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Total Visits:</span>
          <span style={styles.detailValue}>{patient.totalVisits}</span>
        </div>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Blood Group:</span>
          <span style={styles.detailValue}>{patient.bloodGroup}</span>
        </div>
        {patient.patientType === 'pregnancy' && patient.pregnancyDetails && (
          <>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>EDD:</span>
              <span style={styles.detailValue}>{patient.pregnancyDetails.edd}</span>
            </div>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Doctor Visits:</span>
              <span style={styles.detailValue}>{patient.pregnancyDetails.doctorVisits}</span>
            </div>
          </>
        )}
      </div>

      <div style={styles.conditionsSection}>
        <strong style={styles.conditionsLabel}>Medical Conditions:</strong>
        <div style={styles.conditionsList}>
          {patient.conditions.map((condition, index) => (
            <span key={index} style={styles.conditionTag}>
              {condition}
            </span>
          ))}
        </div>
      </div>

      {patient.patientType === 'pregnancy' && patient.pregnancyDetails && (
        <div style={styles.reportsSection}>
          <strong style={styles.reportsLabel}>Reports in File Locker:</strong>
          <div style={styles.reportsList}>
            {patient.pregnancyDetails.reports && patient.pregnancyDetails.reports.length > 0 ? (
              <>
                {patient.pregnancyDetails.reports.slice(0, 3).map((report, index) => (
                  <span key={index} style={styles.reportTag}>
                    {report.replace(/_/g, ' ')}
                  </span>
                ))}
                {patient.pregnancyDetails.reports.length > 3 && (
                  <span style={styles.moreReports}>
                    +{patient.pregnancyDetails.reports.length - 3} more
                  </span>
                )}
              </>
            ) : (
              <span style={styles.noReports}>No reports uploaded yet</span>
            )}
          </div>
        </div>
      )}

      <div style={styles.patientActions}>
        <button 
          style={styles.viewHistoryButton}
          onClick={() => handleViewHistory(patient)}
        >
          View History
        </button>
        <button 
          style={styles.addNotesButton}
          onClick={() => handleAddNotesClick(patient.name)}
        >
          Add Notes
        </button>
      </div>
    </div>
  );

  // Create responsive styles based on screen size
  const getStyles = () => ({
    mainContent: {
      padding: 'clamp(15px, 3vw, 30px)',
      textAlign: 'left'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '30px',
      textAlign: 'left',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
      gap: '20px'
    },
    headerLeft: {
      textAlign: 'left',
      flex: '1 1 auto',
      minWidth: '200px'
    },
    greeting: {
      fontSize: 'clamp(20px, 4vw, 28px)',
      fontWeight: '700',
      color: '#1f2937',
      margin: '0 0 8px 0',
      textAlign: 'left',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: 'clamp(14px, 2vw, 16px)',
      color: '#6b7280',
      margin: 0,
      textAlign: 'left',
      lineHeight: '1.4'
    },
    searchBox: {
      flex: isMobile ? '1 0 100%' : '0 0 auto',
      alignSelf: 'flex-start',
      marginBottom: isMobile ? '15px' : '0',
      width: isMobile ? '100%' : 'auto'
    },
    searchInput: {
      padding: '12px 16px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '14px',
      width: '100%',
      outline: 'none',
      boxSizing: 'border-box'
    },
    filterTabs: {
      display: 'flex',
      gap: '8px',
      backgroundColor: 'white',
      padding: '4px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      marginBottom: '20px',
      flexWrap: 'wrap'
    },
    filterTab: {
      padding: '8px 16px',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      whiteSpace: 'nowrap'
    },
    filterTabActive: {
      backgroundColor: '#7C2A62',
      color: 'white'
    },
    patientStats: {
      display: 'flex',
      gap: '16px',
      marginBottom: '24px',
      flexWrap: 'wrap'
    },
    statItem: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center',
      flex: 1,
      minWidth: '120px'
    },
    statNumber: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#7C2A62',
      marginBottom: '4px'
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280'
    },
    patientsGrid: {
      display: 'grid',
      gap: '20px',
      textAlign: 'left',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(auto-fill, minmax(350px, 1fr))'
    },
    noResults: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      padding: '60px 20px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    },
    noResultsIcon: {
      fontSize: '48px',
      marginBottom: '16px',
      opacity: 0.5
    },
    patientCard: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
      textAlign: 'left'
    },
    patientHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px',
      textAlign: 'left'
    },
    profileIconLarge: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      flexShrink: 0
    },
    patientBasicInfo: {
      flex: 1,
      textAlign: 'left'
    },
    patientName: {
      fontSize: 'clamp(16px, 2.5vw, 18px)',
      fontWeight: '600',
      color: '#1f2937',
      margin: '0 0 8px 0',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    },
    pregnancyTag: {
      backgroundColor: '#F7D9EB',
      color: '#7C2A62',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: '500'
    },
    patientContact: {
      fontSize: '14px',
      color: '#6b7280',
      margin: '4px 0',
      textAlign: 'left'
    },
    patientEmail: {
      fontSize: '12px',
      color: '#9CA3AF',
      margin: 0,
      textAlign: 'left'
    },
    pregnancyQuickInfo: {
      display: 'flex',
      gap: '8px',
      marginTop: '8px',
      flexWrap: 'wrap'
    },
    pregnancyWeeks: {
      fontSize: '12px',
      color: '#7C2A62',
      backgroundColor: '#F7D9EB',
      padding: '2px 8px',
      borderRadius: '8px'
    },
    pregnancyPackage: {
      fontSize: '12px',
      color: '#1E40AF',
      backgroundColor: '#E8F4FD',
      padding: '2px 8px',
      borderRadius: '8px'
    },
    patientDetails: {
      marginBottom: '16px',
      textAlign: 'left'
    },
    detailRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
      textAlign: 'left'
    },
    detailLabel: {
      fontSize: '14px',
      color: '#6b7280',
      fontWeight: '500',
      textAlign: 'left'
    },
    detailValue: {
      fontSize: '14px',
      color: '#1f2937',
      fontWeight: '600',
      textAlign: 'right'
    },
    conditionsSection: {
      marginBottom: '16px',
      textAlign: 'left'
    },
    conditionsLabel: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '8px',
      display: 'block',
      textAlign: 'left'
    },
    conditionsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      textAlign: 'left'
    },
    conditionTag: {
      backgroundColor: '#f3f4f6',
      color: '#6b7280',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '500'
    },
    reportsSection: {
      marginBottom: '16px',
      textAlign: 'left'
    },
    reportsLabel: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '8px',
      display: 'block',
      textAlign: 'left'
    },
    reportsList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      textAlign: 'left'
    },
    reportTag: {
      backgroundColor: '#E8F4FD',
      color: '#1E40AF',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: '500'
    },
    noReports: {
      fontSize: '12px',
      color: '#9CA3AF',
      fontStyle: 'italic'
    },
    moreReports: {
      fontSize: '11px',
      color: '#6b7280',
      backgroundColor: '#f3f4f6',
      padding: '2px 6px',
      borderRadius: '8px'
    },
    patientActions: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      textAlign: 'left'
    },
    viewHistoryButton: {
      backgroundColor: '#7C2A62',
      color: 'white',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '8px',
      fontSize: '13px',
      fontWeight: '600',
      cursor: 'pointer',
      flex: 1,
      minWidth: '100px'
    },
    addNotesButton: {
      backgroundColor: 'transparent',
      color: '#7C2A62',
      border: '2px solid #7C2A62',
      padding: '8px 12px',
      borderRadius: '8px',
      fontSize: '13px',
      fontWeight: '600',
      cursor: 'pointer',
      flex: 1,
      minWidth: '80px'
    },
    primaryButton: {
      backgroundColor: '#7C2A62',
      color: 'white',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      minWidth: '140px'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#7C2A62',
      border: '2px solid #7C2A62',
      padding: '10px 16px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      minWidth: '90px'
    },
    // Modal Styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 10002,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    modal: {
      backgroundColor: 'white',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '500px',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
    },
    viewDetailsModal: {
      backgroundColor: 'white',
      borderRadius: '12px',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
    },
    modalHeader: {
      padding: '20px',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '15px'
    },
    modalTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1f2937',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    },
    modalPregnancyTag: {
      backgroundColor: '#F7D9EB',
      color: '#7C2A62',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '500'
    },
    closeButton: {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: '#6b7280',
      padding: '0',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px',
      flexShrink: 0
    },
    modalContent: {
      padding: '20px',
      flex: 1,
      overflow: 'auto'
    },
    patientOverview: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      marginBottom: '24px',
      padding: '20px',
      backgroundColor: '#f8fafc',
      borderRadius: '8px'
    },
    patientNameLarge: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1f2937',
      margin: '0 0 12px 0'
    },
    patientDetailsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '12px'
    },
    detailItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    detailLabel: {
      fontSize: '12px',
      color: '#6b7280',
      fontWeight: '500'
    },
    detailValue: {
      fontSize: '14px',
      color: '#1f2937',
      fontWeight: '600'
    },
    medicalConditions: {
      marginBottom: '24px',
      padding: '0 20px'
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#1f2937',
      margin: '0 0 12px 0',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      flexWrap: 'wrap'
    },
    pregnancyHistoryNote: {
      fontSize: '12px',
      color: '#7C2A62',
      backgroundColor: '#F7D9EB',
      padding: '2px 8px',
      borderRadius: '12px'
    },
    medicalHistorySection: {
      marginBottom: '24px',
      padding: '0 20px'
    },
    sectionHeaderRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      flexWrap: 'wrap',
      gap: '10px'
    },
    historyList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    historyItem: {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: 'white'
    },
    historyHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
      flexWrap: 'wrap',
      gap: '10px'
    },
    historyDateRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexWrap: 'wrap'
    },
    historyDate: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#1f2937'
    },
    historyStatus: {
      backgroundColor: '#10B981',
      color: 'white',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '500',
      flexShrink: 0
    },
    consultationMode: {
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: '500'
    },
    historyDetails: {
      fontSize: '14px',
      color: '#6b7280',
      lineHeight: '1.6'
    },
    historyDiagnosis: {
      margin: '0 0 8px 0'
    },
    historySymptoms: {
      margin: '0 0 8px 0'
    },
    historyTests: {
      margin: '0 0 8px 0'
    },
    historyPrescription: {
      margin: '0 0 8px 0'
    },
    historyNotes: {
      margin: 0,
      fontStyle: 'italic',
      color: '#7C2A62',
      backgroundColor: '#F7D9EB',
      padding: '8px',
      borderRadius: '6px'
    },
    noHistory: {
      textAlign: 'center',
      padding: '40px 20px',
      color: '#6b7280'
    },
    modalFooter: {
      padding: '20px',
      borderTop: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px'
    },
    // Clinical Notes Section Styles
    notesSection: {
      marginBottom: '24px',
      padding: '0 20px'
    },
    notesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    noteItem: {
      padding: '16px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: 'white'
    },
    noteHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
      fontSize: '12px',
      color: '#6b7280',
      flexWrap: 'wrap',
      gap: '8px'
    },
    noteDate: {
      fontWeight: '600'
    },
    noteTime: {
      fontStyle: 'italic'
    },
    noteDoctor: {
      color: '#7C2A62'
    },
    noteType: {
      backgroundColor: '#F7D9EB',
      color: '#7C2A62',
      padding: '2px 8px',
      borderRadius: '12px',
      fontSize: '11px',
      fontWeight: '500'
    },
    noteText: {
      fontSize: '14px',
      color: '#374151',
      lineHeight: '1.5',
      margin: 0
    },
    noNotes: {
      textAlign: 'center',
      padding: '40px 20px',
      color: '#6b7280'
    },
    // Add Notes Modal Styles
    notesForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151'
    },
    required: {
      color: '#EF4444'
    },
    readOnlyInput: {
      padding: '10px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      backgroundColor: '#f9fafb',
      color: '#6b7280',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box'
    },
    textareaContainer: {
      position: 'relative'
    },
    notesTextarea: {
      padding: '12px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: 'inherit',
      resize: 'vertical',
      minHeight: '120px',
      outline: 'none',
      boxSizing: 'border-box',
      width: '100%',
      lineHeight: '1.5',
      cursor: 'text',
      WebkitUserSelect: 'text',
      MozUserSelect: 'text',
      msUserSelect: 'text',
      userSelect: 'text'
    },
    charCount: {
      fontSize: '12px',
      color: '#6b7280',
      textAlign: 'right',
      marginTop: '4px'
    },
    notesTips: {
      padding: '12px',
      backgroundColor: '#F7D9EB',
      borderRadius: '8px'
    },
    tipsTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#7C2A62',
      margin: '0 0 8px 0'
    },
    tipsList: {
      margin: 0,
      paddingLeft: '20px',
      fontSize: '13px',
      color: '#7C2A62'
    },
    cancelButton: {
      backgroundColor: 'transparent',
      color: '#6b7280',
      border: '2px solid #d1d5db',
      padding: '10px 20px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      minWidth: '100px',
      transition: 'all 0.3s ease'
    },
    saveButton: {
      backgroundColor: '#7C2A62',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      minWidth: '120px',
      transition: 'all 0.3s ease'
    }
  });

  const styles = getStyles();

  return (
    <div style={styles.mainContent}>
      <Notification />
      <AddNotesModal />
      <PatientHistoryModal />
      
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.greeting}>Patients</h1>
          <p style={styles.subtitle}>Access patient history and medical records</p>
        </div>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Search..."
            value={patientSearch}
            onChange={(e) => setPatientSearch(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </div>

      {/* Patient Type Filter */}
      <div style={styles.filterTabs}>
        <button
          style={{
            ...styles.filterTab,
            ...(patientTypeFilter === 'all' && styles.filterTabActive)
          }}
          onClick={() => setPatientTypeFilter('all')}
        >
          All Patients ({dashboardData.patients.length})
        </button>
        <button
          style={{
            ...styles.filterTab,
            ...(patientTypeFilter === 'pregnancy' && styles.filterTabActive)
          }}
          onClick={() => setPatientTypeFilter('pregnancy')}
        >
          🤰 Pregnancy Care ({pregnancyCount})
        </button>
        <button
          style={{
            ...styles.filterTab,
            ...(patientTypeFilter === 'general' && styles.filterTabActive)
          }}
          onClick={() => setPatientTypeFilter('general')}
        >
          👥 General Patients ({generalCount})
        </button>
      </div>

      {/* Patient Stats */}
      <div style={styles.patientStats}>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>{dashboardData.patients.length}</div>
          <div style={styles.statLabel}>Total Patients</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>{pregnancyCount}</div>
          <div style={styles.statLabel}>Pregnancy Patients</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>{generalCount}</div>
          <div style={styles.statLabel}>General Patients</div>
        </div>
      </div>

      <div style={styles.patientsGrid}>
        {filteredPatients.length > 0 ? (
          filteredPatients.map(patient => (
            <PatientCard key={patient.id} patient={patient} />
          ))
        ) : (
          <div style={styles.noResults}>
            <div style={styles.noResultsIcon}>👥</div>
            <h4>No patients found</h4>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientsContent;