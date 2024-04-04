export const getFirstTwoDigits = (temperature) => {
  return temperature.toString().slice(0, 2);
};
export const getFirstDigits = (temperature) => {
  return temperature.toString().slice(0, 1);
};

export const capitalizeFirstLetter = (description) => {
  return (
    description.charAt(0).toUpperCase() + description.slice(1).toLowerCase()
  );
};

export const iconIdToImage = (iconId) => {
  const iconUrl = `http://openweathermap.org/img/wn/${iconId}@4x.png`;
  return iconUrl;
};
