const name = window.prompt("Quel est votre prénom");
const LastName = window.prompt("Quel est votre nom");
const birthday = window.prompt("Quel est votre date de naissance");
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDay = now.getDate();
const age = currentYear - birthday;
console.log(`Salut ${name} ${LastName} ! tu as ${age} ans`);