const generateNumber = (min = 1, max = 100) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

export default generateNumber;
