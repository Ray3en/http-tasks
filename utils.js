const randomError = (chance = 0.1) => {
  // Случайно выбираем, должна ли произойти ошибка (10% вероятность)
  return Math.random() < chance;
};

module.exports = {randomError}
