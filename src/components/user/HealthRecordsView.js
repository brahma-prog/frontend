import React, { useState } from 'react';

const HealthRecordsView = ({ healthRecords, addHealthRecord, setActiveView }) => {
  const [activeTab, setActiveTab] = useState('conditions');

  const BackButton = ({ onClick, text = 'Back' }) => (
    <button 
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'transparent',
        color: '#7C2A62',
        border: '1px solid #7C2A62',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.9rem'
      }}
      onClick={onClick}
      type="button"
    >
      ← {text}
    </button>
  );

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      marginTop: '130px',
      minHeight: 'calc(100vh - 120px)',
      width: '100%',
      boxSizing: 'border-box'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      flexWrap: 'wrap',
      gap: '1rem'
    },
    title: {
      color: '#7C2A62',
      fontSize: '2rem',
      margin: '0 0 0.5rem 0',
      fontWeight: '700',
      textAlign: 'center',
      flex: 1
    },
    subtitle: {
      color: '#666',
      margin: 0,
      fontSize: '1rem',
      textAlign: 'center'
    },
    tabs: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap'
    },
    tab: {
      padding: '0.75rem 1.5rem',
      backgroundColor: 'white',
      color: '#7C2A62',
      border: '1px solid #E5E7EB',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      textTransform: 'capitalize'
    },
    activeTab: {
      backgroundColor: '#7C2A62',
      color: 'white',
      borderColor: '#7C2A62'
    },
    contentSection: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 2px 15px rgba(0,0,0,0.08)',
      border: '1px solid #E5E7EB',
      minHeight: '400px'
    },
    sectionTitle: {
      color: '#7C2A62',
      marginBottom: '1.5rem',
      fontSize: '1.3rem',
      fontWeight: '600'
    },
    recordCard: {
      padding: '1rem',
      border: '1px solid #E5E7EB',
      borderRadius: '8px',
      marginBottom: '1rem',
      backgroundColor: '#f8f9fa'
    },
    recordTitle: {
      margin: '0 0 0.5rem 0',
      color: '#333',
      fontSize: '1.1rem',
      fontWeight: '600'
    },
    recordText: {
      margin: '0 0 0.5rem 0',
      color: '#666',
      fontSize: '0.9rem'
    },
    statusBadge: {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      borderRadius: '15px',
      fontSize: '0.8rem',
      fontWeight: '500',
      marginLeft: '0.5rem'
    },
    normalStatus: {
      backgroundColor: '#d1fae5',
      color: '#065f46'
    },
    severeStatus: {
      backgroundColor: '#fee2e2',
      color: '#991b1b'
    },
    mildStatus: {
      backgroundColor: '#fef3c7',
      color: '#92400e'
    },
    emptyState: {
      textAlign: 'center',
      padding: '3rem 1rem',
      color: '#666'
    },
    emptyIcon: {
      fontSize: '3rem',
      marginBottom: '1rem',
      opacity: 0.5
    },
    addButton: {
      backgroundColor: '#7C2A62',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '500',
      marginTop: '1rem'
    }
  };

  const renderContent = () => {
    const records = healthRecords[activeTab] || [];
    
    if (records.length === 0) {
      return (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>
            {activeTab === 'conditions' && '🏥'}
            {activeTab === 'labResults' && '🧪'}
            {activeTab === 'vitals' && '📊'}
            {activeTab === 'allergies' && '⚠️'}
            {activeTab === 'surgical' && '🔪'}
          </div>
          <h3>No {activeTab === 'conditions' ? 'medical conditions' : 
                     activeTab === 'labResults' ? 'lab results' :
                     activeTab === 'vitals' ? 'vital signs' :
                     activeTab === 'allergies' ? 'allergies' : 'surgical history'} found</h3>
          <p>Add your first record to start tracking your health history</p>
          <button 
            style={styles.addButton}
            onClick={() => {
              const sampleRecord = {
                id: Date.now(),
                ...(activeTab === 'conditions' && {
                  condition: 'Sample Condition',
                  diagnosedDate: new Date().toISOString().split('T')[0],
                  status: 'Active',
                  severity: 'Mild',
                  treatment: 'Sample treatment'
                }),
                ...(activeTab === 'labResults' && {
                  test: 'Sample Test',
                  result: 'Normal',
                  date: new Date().toISOString().split('T')[0],
                  status: 'Normal',
                  lab: 'Sample Lab'
                }),
                ...(activeTab === 'vitals' && {
                  type: 'Sample Vital',
                  value: 'Normal',
                  date: new Date().toISOString().split('T')[0],
                  status: 'Normal'
                }),
                ...(activeTab === 'allergies' && {
                  allergen: 'Sample Allergen',
                  severity: 'Mild',
                  reaction: 'Sample reaction',
                  diagnosed: new Date().toISOString().split('T')[0]
                }),
                ...(activeTab === 'surgical' && {
                  procedure: 'Sample Procedure',
                  date: new Date().toISOString().split('T')[0],
                  hospital: 'Sample Hospital',
                  surgeon: 'Dr. Sample'
                })
              };
              addHealthRecord(activeTab, sampleRecord);
            }}
          >
            + Add Sample Record
          </button>
        </div>
      );
    }

    return (
      <div>
        <h3 style={styles.sectionTitle}>
          {activeTab === 'conditions' ? 'Medical Conditions' :
           activeTab === 'labResults' ? 'Lab Results' :
           activeTab === 'vitals' ? 'Vital Signs' :
           activeTab === 'allergies' ? 'Allergies' : 'Surgical History'}
          <span style={{ fontSize: '0.9rem', color: '#666', marginLeft: '0.5rem' }}>
            ({records.length} records)
          </span>
        </h3>
        
        {records.map(record => (
          <div key={record.id} style={styles.recordCard}>
            {activeTab === 'conditions' && (
              <>
                <h4 style={styles.recordTitle}>{record.condition}</h4>
                <p style={styles.recordText}>Diagnosed: {record.diagnosedDate}</p>
                <p style={styles.recordText}>
                  Status: {record.status}
                  <span style={{
                    ...styles.statusBadge,
                    ...(record.severity === 'Severe' ? styles.severeStatus : 
                        record.severity === 'Mild' ? styles.mildStatus : styles.normalStatus)
                  }}>
                    {record.severity}
                  </span>
                </p>
                <p style={styles.recordText}>Treatment: {record.treatment}</p>
              </>
            )}
            
            {activeTab === 'labResults' && (
              <>
                <h4 style={styles.recordTitle}>{record.test}</h4>
                <p style={styles.recordText}>Result: {record.result}</p>
                <p style={styles.recordText}>
                  Status: 
                  <span style={{
                    ...styles.statusBadge,
                    ...styles.normalStatus
                  }}>
                    {record.status}
                  </span>
                </p>
                <p style={styles.recordText}>Lab: {record.lab}</p>
                <p style={styles.recordText}>Date: {record.date}</p>
              </>
            )}
            
            {activeTab === 'vitals' && (
              <>
                <h4 style={styles.recordTitle}>{record.type}</h4>
                <p style={styles.recordText}>Value: {record.value}</p>
                <p style={styles.recordText}>
                  Status: 
                  <span style={{
                    ...styles.statusBadge,
                    ...styles.normalStatus
                  }}>
                    {record.status}
                  </span>
                </p>
                <p style={styles.recordText}>Date: {record.date}</p>
              </>
            )}
            
            {activeTab === 'allergies' && (
              <>
                <h4 style={styles.recordTitle}>{record.allergen}</h4>
                <p style={styles.recordText}>
                  Severity: 
                  <span style={{
                    ...styles.statusBadge,
                    ...(record.severity === 'Severe' ? styles.severeStatus : styles.mildStatus)
                  }}>
                    {record.severity}
                  </span>
                </p>
                <p style={styles.recordText}>Reaction: {record.reaction}</p>
                <p style={styles.recordText}>Diagnosed: {record.diagnosed}</p>
              </>
            )}
            
            {activeTab === 'surgical' && (
              <>
                <h4 style={styles.recordTitle}>{record.procedure}</h4>
                <p style={styles.recordText}>Date: {record.date}</p>
                <p style={styles.recordText}>Hospital: {record.hospital}</p>
                <p style={styles.recordText}>Surgeon: {record.surgeon}</p>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <BackButton onClick={() => setActiveView('dashboard')} text="Dashboard" />
        
        <div style={{ textAlign: 'center', flex: 1 }}>
          <h1 style={styles.title}>Health Records</h1>
          <p style={styles.subtitle}>Complete medical history and health documents</p>
        </div>

        <div style={{ width: '140px' }}>
          <button 
            style={{
              ...styles.addButton,
              padding: '0.5rem 1rem',
              fontSize: '0.8rem'
            }}
            onClick={() => {
              // Add functionality for adding new records
              alert('Add new record functionality would open a form here');
            }}
          >
            + Add Record
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        {['conditions', 'labResults', 'vitals', 'allergies', 'surgical'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            type="button"
          >
            {tab === 'conditions' ? 'Medical Conditions' :
             tab === 'labResults' ? 'Lab Results' :
             tab === 'vitals' ? 'Vital Signs' :
             tab === 'allergies' ? 'Allergies' : 'Surgical History'}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={styles.contentSection}>
        {renderContent()}
      </div>
    </div>
  );
};

export default HealthRecordsView;