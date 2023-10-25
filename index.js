const chalk = require('chalk');

const colleagues = ['Melissa', 'Milhan', 'Théo', 'Antoine'];

colleagues.forEach((colleague, index) => {
  const coloredName = chalk.keyword(getRandomColor())(colleague);
  console.log(`Colleague ${index + 1}: ${coloredName}`);
});

function getRandomColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'white'];
  return colors[Math.floor(Math.random() * colors.length)];
}