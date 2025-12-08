// import React, { useState, useEffect } from 'react';

// const TimeSlotsContent = ({ state, actions }) => {
//   const { timeslots } = state;
//   const { 
//     setTimeslots, 
//     addTimeslot, 
//     updateTimeslot, 
//     deleteTimeslot,
//     toggleTimeslotAvailability 
//   } = actions;

//   const isMobile = window.innerWidth <= 768;
//   const isTablet = window.innerWidth <= 1024;

//   const [newSlot, setNewSlot] = useState({
//     date: '',
//     startTime: '09:00',
//     endTime: '17:00',
//     duration: 30
//   });

//   const [editingSlot, setEditingSlot] = useState(null);
//   const [availabilityStatus, setAvailabilityStatus] = useState({});
//   const [showAvailabilityToggle, setShowAvailabilityToggle] = useState(false);

//   // Initialize availability status
//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0];
//     const status = {};
//     const dates = [...new Set(timeslots.map(slot => slot.date))];
//     dates.forEach(date => {
//       status[date] = date === today ? true : Math.random() > 0.3;
//     });
//     setAvailabilityStatus(status);
//   }, [timeslots]);

//   // Generate time slots for the next 7 days
//   const generateDefaultSlots = () => {
//     const slots = [];
//     const today = new Date();
    
//     for (let i = 0; i < 7; i++) {
//       const date = new Date(today);
//       date.setDate(today.getDate() + i);
//       const dateString = date.toISOString().split('T')[0];
      
//       // Generate slots from 9 AM to 5 PM with 30-minute intervals
//       for (let hour = 9; hour < 17; hour++) {
//         for (let minute = 0; minute < 60; minute += 30) {
//           const startTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
//           const endHour = minute === 30 ? hour + 1 : hour;
//           const endMinute = minute === 30 ? 0 : 30;
//           const endTime = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
          
//           slots.push({
//             id: `${dateString}-${startTime}`,
//             date: dateString,
//             startTime,
//             endTime,
//             duration: 30,
//             isAvailable: true,
//             isBooked: Math.random() > 0.7 // Randomly mark some as booked for demo
//           });
//         }
//       }
//     }
    
//     return slots;
//   };

//   useEffect(() => {
//     if (timeslots.length === 0) {
//       setTimeslots(generateDefaultSlots());
//     }
//   }, []);

//   const handleAddSlot = () => {
//     if (newSlot.date && newSlot.startTime && newSlot.endTime) {
//       const slot = {
//         id: `${newSlot.date}-${newSlot.startTime}`,
//         ...newSlot,
//         isAvailable: true,
//         isBooked: false
//       };
//       addTimeslot(slot);
//       setNewSlot({
//         date: '',
//         startTime: '09:00',
//         endTime: '17:00',
//         duration: 30
//       });
//     }
//   };

//   const handleEditSlot = (slot) => {
//     setEditingSlot({ ...slot });
//   };

//   const handleUpdateSlot = () => {
//     if (editingSlot) {
//       updateTimeslot(editingSlot);
//       setEditingSlot(null);
//     }
//   };

//   const toggleDateAvailability = (date) => {
//     setAvailabilityStatus(prev => ({
//       ...prev,
//       [date]: !prev[date]
//     }));
//   };

//   const getSlotsByDate = () => {
//     const slotsByDate = {};
//     timeslots.forEach(slot => {
//       if (!slotsByDate[slot.date]) {
//         slotsByDate[slot.date] = [];
//       }
//       slotsByDate[slot.date].push(slot);
//     });
//     return slotsByDate;
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const today = new Date().toISOString().split('T')[0];
//     const isToday = dateString === today;
    
//     return {
//       full: date.toLocaleDateString('en-US', { 
//         weekday: 'short', 
//         year: 'numeric', 
//         month: 'short', 
//         day: 'numeric' 
//       }),
//       isToday,
//       dayName: date.toLocaleDateString('en-US', { weekday: 'long' })
//     };
//   };

//   const getStatusColor = (slot) => {
//     if (slot.isBooked) return '#EF4444'; // Red for booked
//     if (!slot.isAvailable) return '#9CA3AF'; // Gray for unavailable
//     return '#10B981'; // Green for available
//   };

//   const getStatusText = (slot) => {
//     if (slot.isBooked) return 'Booked';
//     if (!slot.isAvailable) return 'Unavailable';
//     return 'Available';
//   };

//   const TimeSlotCard = ({ slot }) => (
//     <div style={{
//       ...styles.timeSlotCard,
//       borderLeft: `4px solid ${getStatusColor(slot)}`,
//       opacity: !availabilityStatus[slot.date] ? 0.5 : 1
//     }}>
//       <div style={styles.slotTime}>
//         <strong>{slot.startTime} - {slot.endTime}</strong>
//         <span style={styles.slotDuration}>{slot.duration} mins</span>
//       </div>
//       <div style={styles.slotStatus}>
//         <span style={{
//           ...styles.statusBadge,
//           backgroundColor: getStatusColor(slot)
//         }}>
//           {getStatusText(slot)}
//         </span>
//       </div>
//       <div style={styles.slotActions}>
//         <button 
//           style={styles.smallButton}
//           onClick={() => toggleTimeslotAvailability(slot.id)}
//           disabled={slot.isBooked || !availabilityStatus[slot.date]}
//         >
//           {slot.isAvailable ? 'Mark Busy' : 'Mark Free'}
//         </button>
//         <button 
//           style={styles.editButton}
//           onClick={() => handleEditSlot(slot)}
//           disabled={!availabilityStatus[slot.date]}
//         >
//           Edit
//         </button>
//         <button 
//           style={styles.deleteButton}
//           onClick={() => deleteTimeslot(slot.id)}
//           disabled={slot.isBooked}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );

//   const DateSection = ({ date, slots }) => {
//     const formattedDate = formatDate(date);
//     const isAvailable = availabilityStatus[date];
    
//     return (
//       <div style={styles.dateSection}>
//         <div style={styles.dateHeader}>
//           <div style={styles.dateInfo}>
//             <h3 style={styles.dateTitle}>
//               {formattedDate.full}
//               {formattedDate.isToday && <span style={styles.todayBadge}>Today</span>}
//             </h3>
//             <span style={styles.slotCount}>{slots.length} slots</span>
//           </div>
//           <div style={styles.availabilityControl}>
//             <button
//               style={{
//                 ...styles.availabilityButton,
//                 ...(isAvailable ? styles.availableButton : styles.unavailableButton)
//               }}
//               onClick={() => toggleDateAvailability(date)}
//             >
//               {isAvailable ? '✅ Available' : '❌ Unavailable'}
//             </button>
//           </div>
//         </div>
        
//         {!isAvailable && (
//           <div style={styles.unavailableNotice}>
//             <span style={styles.unavailableIcon}>🚫</span>
//             <span>Not available for appointments on this day</span>
//           </div>
//         )}
        
//         <div style={{
//           ...styles.slotsGrid,
//           gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
//           opacity: isAvailable ? 1 : 0.6
//         }}>
//           {slots.map(slot => (
//             <TimeSlotCard key={slot.id} slot={slot} />
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={styles.mainContent}>
//       <div style={styles.header}>
//         <div style={styles.headerLeft}>
//           <h1 style={styles.greeting}>Time Slots Management</h1>
//           <p style={styles.subtitle}>Manage your availability and appointment slots</p>
//         </div>
        
//         <button
//           style={styles.availabilityToggleButton}
//           onClick={() => setShowAvailabilityToggle(!showAvailabilityToggle)}
//         >
//           {showAvailabilityToggle ? '📅 Hide Availability' : '📅 Quick Availability'}
//         </button>
//       </div>

//       {/* Quick Availability Toggle */}
//       {showAvailabilityToggle && (
//         <div style={styles.quickAvailability}>
//           <h3 style={styles.sectionTitle}>Quick Availability Settings</h3>
//           <div style={styles.availabilityGrid}>
//             {Object.entries(getSlotsByDate()).slice(0, 7).map(([date, slots]) => {
//               const formattedDate = formatDate(date);
//               const isAvailable = availabilityStatus[date];
              
//               return (
//                 <div key={date} style={styles.availabilityItem}>
//                   <span style={styles.availabilityDate}>
//                     {formattedDate.dayName}
//                     <br />
//                     <small>{date}</small>
//                   </span>
//                   <button
//                     style={{
//                       ...styles.quickToggleButton,
//                       ...(isAvailable ? styles.quickAvailable : styles.quickUnavailable)
//                     }}
//                     onClick={() => toggleDateAvailability(date)}
//                   >
//                     {isAvailable ? 'Available' : 'Unavailable'}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* Add New Slot Form */}
//       <div style={styles.addSlotSection}>
//         <h3 style={styles.sectionTitle}>Add New Time Slot</h3>
//         <div style={{
//           ...styles.addSlotForm,
//           flexDirection: isMobile ? 'column' : 'row'
//         }}>
//           <input
//             type="date"
//             value={newSlot.date}
//             onChange={(e) => setNewSlot({...newSlot, date: e.target.value})}
//             style={styles.input}
//             min={new Date().toISOString().split('T')[0]}
//           />
//           <input
//             type="time"
//             value={newSlot.startTime}
//             onChange={(e) => setNewSlot({...newSlot, startTime: e.target.value})}
//             style={styles.input}
//           />
//           <input
//             type="time"
//             value={newSlot.endTime}
//             onChange={(e) => setNewSlot({...newSlot, endTime: e.target.value})}
//             style={styles.input}
//           />
//           <select
//             value={newSlot.duration}
//             onChange={(e) => setNewSlot({...newSlot, duration: parseInt(e.target.value)})}
//             style={styles.select}
//           >
//             <option value={15}>15 minutes</option>
//             <option value={30}>30 minutes</option>
//             <option value={45}>45 minutes</option>
//             <option value={60}>60 minutes</option>
//           </select>
//           <button 
//             style={styles.primaryButton}
//             onClick={handleAddSlot}
//             disabled={!newSlot.date}
//           >
//             Add Slot
//           </button>
//         </div>
//       </div>

//       {/* Edit Slot Modal */}
//       {editingSlot && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modal}>
//             <h3 style={styles.modalTitle}>Edit Time Slot</h3>
//             <div style={styles.modalForm}>
//               <div style={styles.formRow}>
//                 <label style={styles.label}>Date:</label>
//                 <input
//                   type="date"
//                   value={editingSlot.date}
//                   onChange={(e) => setEditingSlot({...editingSlot, date: e.target.value})}
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.formRow}>
//                 <label style={styles.label}>Start Time:</label>
//                 <input
//                   type="time"
//                   value={editingSlot.startTime}
//                   onChange={(e) => setEditingSlot({...editingSlot, startTime: e.target.value})}
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.formRow}>
//                 <label style={styles.label}>End Time:</label>
//                 <input
//                   type="time"
//                   value={editingSlot.endTime}
//                   onChange={(e) => setEditingSlot({...editingSlot, endTime: e.target.value})}
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.formRow}>
//                 <label style={styles.label}>Duration (minutes):</label>
//                 <select
//                   value={editingSlot.duration}
//                   onChange={(e) => setEditingSlot({...editingSlot, duration: parseInt(e.target.value)})}
//                   style={styles.select}
//                 >
//                   <option value={15}>15</option>
//                   <option value={30}>30</option>
//                   <option value={45}>45</option>
//                   <option value={60}>60</option>
//                 </select>
//               </div>
//             </div>
//             <div style={styles.modalActions}>
//               <button 
//                 style={styles.secondaryButton}
//                 onClick={() => setEditingSlot(null)}
//               >
//                 Cancel
//               </button>
//               <button 
//                 style={styles.primaryButton}
//                 onClick={handleUpdateSlot}
//               >
//                 Update Slot
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Time Slots Overview */}
//       <div style={styles.slotsOverview}>
//         <div style={styles.statsGrid}>
//           <div style={styles.statCard}>
//             <h3 style={styles.statNumber}>
//               {timeslots.filter(slot => slot.isAvailable && !slot.isBooked && availabilityStatus[slot.date]).length}
//             </h3>
//             <p style={styles.statLabel}>Available Slots</p>
//           </div>
//           <div style={styles.statCard}>
//             <h3 style={styles.statNumber}>
//               {timeslots.filter(slot => slot.isBooked).length}
//             </h3>
//             <p style={styles.statLabel}>Booked Slots</p>
//           </div>
//           <div style={styles.statCard}>
//             <h3 style={styles.statNumber}>
//               {timeslots.filter(slot => !slot.isAvailable).length}
//             </h3>
//             <p style={styles.statLabel}>Busy Slots</p>
//           </div>
//           <div style={styles.statCard}>
//             <h3 style={styles.statNumber}>
//               {Object.keys(getSlotsByDate()).filter(date => availabilityStatus[date]).length}
//             </h3>
//             <p style={styles.statLabel}>Available Days</p>
//           </div>
//         </div>

//         {/* Slots by Date */}
//         <div style={styles.slotsByDate}>
//           <h3 style={styles.sectionTitle}>Your Time Slots</h3>
//           {Object.entries(getSlotsByDate())
//             .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
//             .map(([date, slots]) => (
//               <DateSection key={date} date={date} slots={slots} />
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   mainContent: {
//     padding: 'clamp(15px, 3vw, 30px)',
//     textAlign: 'left'
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: '30px',
//     textAlign: 'left',
//     flexWrap: 'wrap',
//     gap: '20px'
//   },
//   headerLeft: {
//     textAlign: 'left',
//     flex: 1
//   },
//   greeting: {
//     fontSize: 'clamp(20px, 4vw, 28px)',
//     fontWeight: '700',
//     color: '#1f2937',
//     margin: '0 0 8px 0',
//     textAlign: 'left'
//   },
//   subtitle: {
//     fontSize: 'clamp(14px, 2vw, 16px)',
//     color: '#6b7280',
//     margin: 0,
//     textAlign: 'left'
//   },
//   availabilityToggleButton: {
//     backgroundColor: '#7C2A62',
//     color: 'white',
//     border: 'none',
//     padding: '10px 16px',
//     borderRadius: '8px',
//     fontSize: '14px',
//     fontWeight: '600',
//     cursor: 'pointer',
//     flexShrink: 0
//   },
//   quickAvailability: {
//     backgroundColor: 'white',
//     padding: '24px',
//     borderRadius: '12px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     marginBottom: '24px',
//     textAlign: 'left'
//   },
//   availabilityGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//     gap: '12px'
//   },
//   availabilityItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '12px',
//     border: '1px solid #e5e7eb',
//     borderRadius: '8px'
//   },
//   availabilityDate: {
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#1f2937'
//   },
//   quickToggleButton: {
//     padding: '6px 12px',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '12px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     minWidth: '80px'
//   },
//   quickAvailable: {
//     backgroundColor: '#10B981',
//     color: 'white'
//   },
//   quickUnavailable: {
//     backgroundColor: '#EF4444',
//     color: 'white'
//   },
//   addSlotSection: {
//     backgroundColor: 'white',
//     padding: '24px',
//     borderRadius: '12px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     marginBottom: '24px',
//     textAlign: 'left'
//   },
//   sectionTitle: {
//     fontSize: 'clamp(16px, 2.5vw, 18px)',
//     fontWeight: '600',
//     color: '#1f2937',
//     margin: '0 0 16px 0',
//     textAlign: 'left'
//   },
//   addSlotForm: {
//     display: 'flex',
//     gap: '12px',
//     alignItems: 'flex-end',
//     flexWrap: 'wrap'
//   },
//   input: {
//     padding: '10px 12px',
//     border: '1px solid #e5e7eb',
//     borderRadius: '6px',
//     fontSize: '14px',
//     flex: 1,
//     minWidth: '120px'
//   },
//   select: {
//     padding: '10px 12px',
//     border: '1px solid #e5e7eb',
//     borderRadius: '6px',
//     fontSize: '14px',
//     flex: 1,
//     minWidth: '120px'
//   },
//   primaryButton: {
//     backgroundColor: '#7C2A62',
//     color: 'white',
//     border: 'none',
//     padding: '10px 16px',
//     borderRadius: '6px',
//     fontSize: '14px',
//     fontWeight: '600',
//     cursor: 'pointer',
//     flexShrink: 0
//   },
//   secondaryButton: {
//     backgroundColor: 'transparent',
//     color: '#6b7280',
//     border: '2px solid #e5e7eb',
//     padding: '10px 16px',
//     borderRadius: '6px',
//     fontSize: '14px',
//     fontWeight: '600',
//     cursor: 'pointer',
//     flexShrink: 0
//   },
//   slotsOverview: {
//     textAlign: 'left'
//   },
//   statsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//     gap: '16px',
//     marginBottom: '24px'
//   },
//   statCard: {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '12px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     textAlign: 'center'
//   },
//   statNumber: {
//     fontSize: '24px',
//     fontWeight: '700',
//     color: '#7C2A62',
//     margin: '0 0 8px 0'
//   },
//   statLabel: {
//     fontSize: '14px',
//     color: '#6b7280',
//     margin: 0
//   },
//   slotsByDate: {
//     textAlign: 'left'
//   },
//   dateSection: {
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '12px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     marginBottom: '20px'
//   },
//   dateHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: '16px',
//     flexWrap: 'wrap',
//     gap: '10px'
//   },
//   dateInfo: {
//     flex: 1
//   },
//   dateTitle: {
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#1f2937',
//     margin: '0 0 4px 0',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     flexWrap: 'wrap'
//   },
//   todayBadge: {
//     backgroundColor: '#7C2A62',
//     color: 'white',
//     padding: '2px 8px',
//     borderRadius: '12px',
//     fontSize: '11px',
//     fontWeight: '500'
//   },
//   slotCount: {
//     fontSize: '14px',
//     color: '#6b7280',
//     backgroundColor: '#f3f4f6',
//     padding: '4px 8px',
//     borderRadius: '12px'
//   },
//   availabilityControl: {
//     flexShrink: 0
//   },
//   availabilityButton: {
//     padding: '8px 12px',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '12px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     minWidth: '120px'
//   },
//   availableButton: {
//     backgroundColor: '#10B981',
//     color: 'white'
//   },
//   unavailableButton: {
//     backgroundColor: '#EF4444',
//     color: 'white'
//   },
//   unavailableNotice: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     padding: '12px',
//     backgroundColor: '#FEF2F2',
//     border: '1px solid #FECACA',
//     borderRadius: '6px',
//     marginBottom: '16px',
//     color: '#DC2626',
//     fontSize: '14px'
//   },
//   unavailableIcon: {
//     fontSize: '16px'
//   },
//   slotsGrid: {
//     display: 'grid',
//     gap: '12px',
//     transition: 'opacity 0.3s ease'
//   },
//   timeSlotCard: {
//     backgroundColor: '#f8fafc',
//     padding: '16px',
//     borderRadius: '8px',
//     border: '1px solid #e5e7eb',
//     transition: 'all 0.3s ease'
//   },
//   slotTime: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '8px',
//     flexWrap: 'wrap',
//     gap: '8px'
//   },
//   slotDuration: {
//     fontSize: '12px',
//     color: '#6b7280',
//     backgroundColor: '#e5e7eb',
//     padding: '2px 6px',
//     borderRadius: '8px'
//   },
//   slotStatus: {
//     marginBottom: '12px'
//   },
//   statusBadge: {
//     color: 'white',
//     padding: '4px 8px',
//     borderRadius: '12px',
//     fontSize: '12px',
//     fontWeight: '500'
//   },
//   slotActions: {
//     display: 'flex',
//     gap: '8px',
//     flexWrap: 'wrap'
//   },
//   smallButton: {
//     backgroundColor: 'transparent',
//     color: '#7C2A62',
//     border: '1px solid #7C2A62',
//     padding: '6px 10px',
//     borderRadius: '6px',
//     fontSize: '12px',
//     cursor: 'pointer',
//     flex: 1
//   },
//   editButton: {
//     backgroundColor: 'transparent',
//     color: '#F59E0B',
//     border: '1px solid #F59E0B',
//     padding: '6px 10px',
//     borderRadius: '6px',
//     fontSize: '12px',
//     cursor: 'pointer',
//     flex: 1
//   },
//   deleteButton: {
//     backgroundColor: 'transparent',
//     color: '#EF4444',
//     border: '1px solid #EF4444',
//     padding: '6px 10px',
//     borderRadius: '6px',
//     fontSize: '12px',
//     cursor: 'pointer',
//     flex: 1
//   },
//   modalOverlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 1000,
//     padding: '20px'
//   },
//   modal: {
//     backgroundColor: 'white',
//     padding: '24px',
//     borderRadius: '12px',
//     boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)',
//     width: '100%',
//     maxWidth: '500px',
//     maxHeight: '90vh',
//     overflow: 'auto'
//   },
//   modalTitle: {
//     fontSize: '18px',
//     fontWeight: '600',
//     color: '#1f2937',
//     margin: '0 0 20px 0'
//   },
//   modalForm: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//     marginBottom: '20px'
//   },
//   formRow: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '8px'
//   },
//   label: {
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#374151'
//   },
//   modalActions: {
//     display: 'flex',
//     gap: '12px',
//     justifyContent: 'flex-end'
//   }
// };

// export default TimeSlotsContent;
import React, { useState, useEffect } from 'react';

const TimeSlotsContent = ({ state, actions }) => {
  const { timeslots } = state;
  const { 
    setTimeslots, 
    addTimeslot, 
    updateTimeslot, 
    deleteTimeslot,
    toggleTimeslotAvailability 
  } = actions;

  // Simple responsive check
  const isMobile = window.innerWidth <= 768;

  // Simplified state
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [slotDuration, setSlotDuration] = useState(30);
  const [viewMode, setViewMode] = useState('calendar'); // 'calendar' or 'list'
  const [quickActions, setQuickActions] = useState({
    markDay: false,
    selectedDay: ''
  });

  // Initialize with default slots for next 7 days
  useEffect(() => {
    if (timeslots.length === 0) {
      const defaultSlots = generateDefaultSlots();
      setTimeslots(defaultSlots);
    }
  }, []);

  // Generate default slots for next 7 days
  const generateDefaultSlots = () => {
    const slots = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      
      // Create working hours: 9 AM to 5 PM
      for (let hour = 9; hour < 17; hour++) {
        const startTime = `${hour.toString().padStart(2, '0')}:00`;
        const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;
        
        slots.push({
          id: `${dateString}-${startTime}`,
          date: dateString,
          startTime,
          endTime,
          duration: 60,
          isAvailable: true,
          isBooked: false
        });
      }
    }
    
    return slots;
  };

  // Get unique dates from timeslots
  const getAvailableDates = () => {
    const dates = [...new Set(timeslots.map(slot => slot.date))];
    return dates.sort((a, b) => new Date(a) - new Date(b));
  };

  // Get slots for a specific date
  const getSlotsForDate = (date) => {
    return timeslots
      .filter(slot => slot.date === date)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

  // Add a new time slot
  const handleAddSlot = () => {
    if (!selectedDate) {
      alert('Please select a date');
      return;
    }

    // Calculate end time based on duration
    const startTime = selectedTime;
    const [hours, minutes] = startTime.split(':').map(Number);
    const endTime = new Date(0, 0, 0, hours, minutes + slotDuration);
    const endTimeString = `${endTime.getHours().toString().padStart(2, '0')}:${endTime.getMinutes().toString().padStart(2, '0')}`;

    const newSlot = {
      id: `${selectedDate}-${startTime}`,
      date: selectedDate,
      startTime: startTime,
      endTime: endTimeString,
      duration: slotDuration,
      isAvailable: true,
      isBooked: false
    };

    addTimeslot(newSlot);
    
    // Reset form
    setSelectedTime('09:00');
    setSlotDuration(30);
  };

  // Quick action: Mark entire day as available/unavailable
  const handleMarkDay = (date, makeAvailable) => {
    const updatedSlots = timeslots.map(slot => {
      if (slot.date === date) {
        return { ...slot, isAvailable: makeAvailable };
      }
      return slot;
    });
    setTimeslots(updatedSlots);
  };

  // Quick action: Clear all slots for a day
  const handleClearDay = (date) => {
    const filteredSlots = timeslots.filter(slot => slot.date !== date);
    setTimeslots(filteredSlots);
  };

  // Format date for display
  const formatDateDisplay = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const dateObj = new Date(date);
    dateObj.setHours(0, 0, 0, 0);
    
    if (dateObj.getTime() === today.getTime()) {
      return 'Today';
    }
    
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    if (dateObj.getTime() === tomorrow.getTime()) {
      return 'Tomorrow';
    }
    
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Time Slot Component
  const TimeSlotItem = ({ slot }) => {
    const isDisabled = slot.isBooked;
    
    return (
      <div style={{
        ...styles.timeSlotItem,
        backgroundColor: isDisabled ? '#f3f4f6' : 
                        slot.isAvailable ? '#f0fdf4' : '#fef2f2',
        borderColor: isDisabled ? '#d1d5db' : 
                     slot.isAvailable ? '#bbf7d0' : '#fecaca'
      }}>
        <div style={styles.slotInfo}>
          <div style={styles.slotTime}>
            <strong>{slot.startTime} - {slot.endTime}</strong>
            <span style={styles.duration}>({slot.duration} min)</span>
          </div>
          <div style={styles.slotStatus}>
            <span style={{
              ...styles.statusBadge,
              backgroundColor: slot.isBooked ? '#dc2626' : 
                              slot.isAvailable ? '#16a34a' : '#d97706'
            }}>
              {slot.isBooked ? 'Booked' : slot.isAvailable ? 'Available' : 'Busy'}
            </span>
          </div>
        </div>
        
        <div style={styles.slotActions}>
          {!isDisabled && (
            <>
              <button
                style={slot.isAvailable ? styles.busyButton : styles.availableButton}
                onClick={() => toggleTimeslotAvailability(slot.id)}
              >
                {slot.isAvailable ? 'Mark Busy' : 'Mark Free'}
              </button>
              <button
                style={styles.deleteButton}
                onClick={() => deleteTimeslot(slot.id)}
              >
                Remove
              </button>
            </>
          )}
          {isDisabled && (
            <span style={styles.bookedText}>Cannot modify booked slot</span>
          )}
        </div>
      </div>
    );
  };

  // Day Card Component
  const DayCard = ({ date }) => {
    const slots = getSlotsForDate(date);
    const availableSlots = slots.filter(s => s.isAvailable && !s.isBooked).length;
    const bookedSlots = slots.filter(s => s.isBooked).length;
    
    return (
      <div style={styles.dayCard}>
        <div style={styles.dayHeader}>
          <div style={styles.dayInfo}>
            <h3 style={styles.dayTitle}>{formatDateDisplay(date)}</h3>
            <p style={styles.dayDate}>{date}</p>
          </div>
          
          <div style={styles.dayStats}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>{availableSlots}</span>
              <span style={styles.statLabel}>Free</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>{bookedSlots}</span>
              <span style={styles.statLabel}>Booked</span>
            </div>
          </div>
        </div>
        
        <div style={styles.quickActions}>
          <button
            style={styles.smallButton}
            onClick={() => handleMarkDay(date, true)}
          >
            Mark All Free
          </button>
          <button
            style={styles.smallButton}
            onClick={() => handleMarkDay(date, false)}
          >
            Mark All Busy
          </button>
          <button
            style={styles.clearButton}
            onClick={() => handleClearDay(date)}
          >
            Clear Day
          </button>
        </div>
        
        <div style={styles.slotsList}>
          {slots.map(slot => (
            <TimeSlotItem key={slot.id} slot={slot} />
          ))}
        </div>
      </div>
    );
  };

  // Main render
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Schedule Management</h1>
          <p style={styles.subtitle}>Manage your availability and appointments</p>
        </div>
        
        <div style={styles.viewToggle}>
          <button
            style={{
              ...styles.viewButton,
              ...(viewMode === 'calendar' ? styles.activeViewButton : {})
            }}
            onClick={() => setViewMode('calendar')}
          >
            📅 Calendar View
          </button>
          <button
            style={{
              ...styles.viewButton,
              ...(viewMode === 'list' ? styles.activeViewButton : {})
            }}
            onClick={() => setViewMode('list')}
          >
            📋 List View
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={styles.statsBar}>
        <div style={styles.statCard}>
          <span style={styles.statValue}>
            {timeslots.filter(s => s.isAvailable && !s.isBooked).length}
          </span>
          <span style={styles.statText}>Available Slots</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statValue}>
            {timeslots.filter(s => s.isBooked).length}
          </span>
          <span style={styles.statText}>Booked Appointments</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statValue}>
            {getAvailableDates().length}
          </span>
          <span style={styles.statText}>Days Scheduled</span>
        </div>
      </div>

      {/* Add Slot Form */}
      <div style={styles.addSlotCard}>
        <h3 style={styles.sectionTitle}>Add Time Slot</h3>
        <div style={{
          ...styles.addForm,
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              style={styles.input}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Start Time</label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              style={styles.input}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Duration</label>
            <select
              value={slotDuration}
              onChange={(e) => setSlotDuration(parseInt(e.target.value))}
              style={styles.select}
            >
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={45}>45 minutes</option>
              <option value={60}>60 minutes</option>
            </select>
          </div>
          
          <button
            style={styles.addButton}
            onClick={handleAddSlot}
            disabled={!selectedDate}
          >
            + Add Slot
          </button>
        </div>
      </div>

      {/* Calendar View */}
      {viewMode === 'calendar' ? (
        <div style={styles.calendarView}>
          <h3 style={styles.sectionTitle}>Your Schedule</h3>
          <div style={styles.daysGrid}>
            {getAvailableDates().map(date => (
              <DayCard key={date} date={date} />
            ))}
          </div>
        </div>
      ) : (
        /* List View */
        <div style={styles.listView}>
          <h3 style={styles.sectionTitle}>All Time Slots</h3>
          <div style={styles.slotsContainer}>
            {getAvailableDates().map(date => (
              <div key={date} style={styles.dateSection}>
                <h4 style={styles.dateHeader}>{formatDateDisplay(date)} - {date}</h4>
                <div style={styles.dateSlots}>
                  {getSlotsForDate(date).map(slot => (
                    <TimeSlotItem key={slot.id} slot={slot} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Tips */}
      <div style={styles.tipsCard}>
        <h4 style={styles.tipsTitle}>💡 Quick Tips</h4>
        <ul style={styles.tipsList}>
          <li>Use "Mark All Free/Busy" to quickly set your availability for an entire day</li>
          <li>Click on individual slots to toggle between Available and Busy</li>
          <li>Booked slots cannot be modified or deleted</li>
          <li>Use Calendar View for day-by-day management, List View to see all slots</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '20px'
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1f2937',
    margin: '0 0 8px 0'
  },
  subtitle: {
    fontSize: '16px',
    color: '#6b7280',
    margin: 0
  },
  viewToggle: {
    display: 'flex',
    gap: '10px',
    backgroundColor: '#f3f4f6',
    padding: '4px',
    borderRadius: '8px'
  },
  viewButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: 'transparent',
    color: '#6b7280',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '14px'
  },
  activeViewButton: {
    backgroundColor: '#7C2A62',
    color: 'white'
  },
  statsBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    marginBottom: '30px'
  },
  statCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  statValue: {
    display: 'block',
    fontSize: '32px',
    fontWeight: '700',
    color: '#7C2A62',
    marginBottom: '5px'
  },
  statText: {
    fontSize: '14px',
    color: '#6b7280'
  },
  addSlotCard: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    marginBottom: '30px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 20px 0'
  },
  addForm: {
    display: 'flex',
    gap: '15px',
    alignItems: 'flex-end',
    flexWrap: 'wrap'
  },
  formGroup: {
    flex: 1,
    minWidth: '150px'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px'
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px'
  },
  select: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: 'white'
  },
  addButton: {
    backgroundColor: '#7C2A62',
    color: 'white',
    border: 'none',
    padding: '10px 24px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    height: '42px',
    minWidth: '120px'
  },
  calendarView: {
    marginBottom: '30px'
  },
  daysGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '20px'
  },
  dayCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  dayHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '15px',
    flexWrap: 'wrap',
    gap: '10px'
  },
  dayInfo: {
    flex: 1
  },
  dayTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 4px 0'
  },
  dayDate: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0
  },
  dayStats: {
    display: 'flex',
    gap: '15px'
  },
  statItem: {
    textAlign: 'center'
  },
  statNumber: {
    display: 'block',
    fontSize: '20px',
    fontWeight: '600',
    color: '#7C2A62'
  },
  statLabel: {
    fontSize: '12px',
    color: '#6b7280'
  },
  quickActions: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  smallButton: {
    backgroundColor: '#f3f4f6',
    color: '#374151',
    border: '1px solid #d1d5db',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    cursor: 'pointer'
  },
  clearButton: {
    backgroundColor: '#fef2f2',
    color: '#dc2626',
    border: '1px solid #fecaca',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    cursor: 'pointer'
  },
  slotsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  timeSlotItem: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid',
    transition: 'all 0.2s ease'
  },
  slotInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    flexWrap: 'wrap',
    gap: '10px'
  },
  slotTime: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#1f2937'
  },
  duration: {
    fontSize: '12px',
    color: '#6b7280',
    marginLeft: '8px'
  },
  slotStatus: {
    fontSize: '12px'
  },
  statusBadge: {
    color: 'white',
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '500'
  },
  slotActions: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  },
  busyButton: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
    border: '1px solid #fbbf24',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    cursor: 'pointer'
  },
  availableButton: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
    border: '1px solid #10b981',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    cursor: 'pointer'
  },
  deleteButton: {
    backgroundColor: 'transparent',
    color: '#dc2626',
    border: '1px solid #fca5a5',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    cursor: 'pointer'
  },
  bookedText: {
    fontSize: '12px',
    color: '#9ca3af',
    fontStyle: 'italic'
  },
  listView: {
    marginBottom: '30px'
  },
  slotsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  dateSection: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  dateHeader: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 15px 0',
    paddingBottom: '10px',
    borderBottom: '2px solid #f3f4f6'
  },
  dateSlots: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '10px'
  },
  tipsCard: {
    backgroundColor: '#f0f9ff',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #bae6fd'
  },
  tipsTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0369a1',
    margin: '0 0 10px 0'
  },
  tipsList: {
    margin: 0,
    paddingLeft: '20px',
    fontSize: '14px',
    color: '#0c4a6e',
    lineHeight: '1.6'
  }
};

export default TimeSlotsContent;