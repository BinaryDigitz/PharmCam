// Utility function to check if pharmacy is currently open
const isPharmacyOpen = (operatingHours) => {
   const now = new Date();
  const currentDay = now.toLocaleDateString('en-GB', { weekday: 'lowercase' });
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert to minutes
  
  const daySchedule = operatingHours[currentDay];
  if (!daySchedule || !daySchedule.isOpen) return false;
  
  const [openHour, openMin] = daySchedule.open.split(':').map(Number);
  const [closeHour, closeMin] = daySchedule.close.split(':').map(Number);
  
  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;
  
  return currentTime >= openTime && currentTime <= closeTime;
};

// Check if pharmacy is on call today
const isPharmacyOnCall = (onCallDays) => {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'lowercase' });
  return onCallDays.includes(currentDay);
};
