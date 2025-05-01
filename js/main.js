const sampleAthletes = [
  {
    id: 1,
    name: "Michael Phelps",
    sport: "Swimming",
    nationality: "USA",
    awards: "23 Olympic Gold Medals",
    funFact: "He is the most decorated Olympian of all time.",
    image: "images/phelps.jpg"
  },
  {
    id: 2,
    name: "Usain Bolt",
    sport: "Track & Field",
    nationality: "Jamaica",
    awards: "8 Olympic Gold Medals",
    funFact: "He holds the world record in the 100m and 200m.",
    image: "images/bolt.jpg"
  }
];

function getAthletes() {
  const stored = localStorage.getItem("athletes");
  return stored ? JSON.parse(stored) : sampleAthletes;
}

function displayAthletes(athletes) {
  const grid = document.querySelector(".athlete-grid");
  grid.innerHTML = ""; 

  athletes.forEach((athlete) => {
    const card = document.createElement("div");
    card.classList.add("athlete-card");
    card.innerHTML = `
      <img src="${athlete.image}" alt="${athlete.name}" />
      <h3>${athlete.name}</h3>
      <p><strong>Sport:</strong> ${athlete.sport}</p>
      <p><strong>Nationality:</strong> ${athlete.nationality}</p>
      <a href="athlete.html?id=${athlete.id}">View Details</a>
    `;
    grid.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const athletes = getAthletes();
  displayAthletes(athletes);
});
