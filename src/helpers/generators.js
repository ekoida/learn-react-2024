const randInt = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const randColor = ({ redish = 1, greeenish = 1, blueish = 1 } = {}) => {
  const red = randInt(0, 255 * redish);
  const green = randInt(0, 255 * greeenish);
  const blue = randInt(0, 255 * blueish);

  return `rgb(${red}, ${green}, ${blue})`;
};

export { randInt, randColor };
