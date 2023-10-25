const colleagues = ['Melissa', 'Milhan', 'Théo', 'Antoine'];
const colors = ['red', 'green', 'blue', 'orange', 'blue', 'yellow','white'];

colleagues.forEach((colleague, index) => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(`Colleague ${index + 1}: \x1b[38;2;${randomColor}m${colleague}\x1b[0m`);
});