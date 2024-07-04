export const formatDateString = dateString => {
  return dateString.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
};
