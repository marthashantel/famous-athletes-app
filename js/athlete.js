document.addEventListener("DOMContentLoaded", () => {
    const detailsSection = document.getElementById("athlete-details");
  
    const urlParams = new URLSearchParams(window.location.search);
    const athleteId = urlParams.get("id");
  
    if (!athleteId) {
      detailsSection.innerHTML = "<p>No athlete ID found in URL.</p>";
      return;
    }
    const athletes = JSON.parse(localStorage.getItem("athletes")) || [];

    const athlete = athletes.find(a => a.id == athleteId);
  
    if (athlete) {
      detailsSection.innerHTML = `
        <h2>${athlete.name}</h2>
        <img src="${athlete.image}" alt="${athlete.name}" />
        <p><strong>Sport:</strong> ${athlete.sport}</p>
        <p><strong>Nationality:</strong> ${athlete.nationality}</p>
        <p><strong>Awards:</strong> ${athlete.awards}</p>
        <p><strong>Fun Fact:</strong> ${athlete.funFact}</p>
      `;
    } else {
      detailsSection.innerHTML = "<p>Athlete not found.</p>";
    }
  });
  