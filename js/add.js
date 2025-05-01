document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("athlete-form");
    const message = document.getElementById("message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const sport = document.getElementById("sport").value.trim();
      const nationality = document.getElementById("nationality").value.trim();
      const awards = document.getElementById("awards").value.trim();
      const funFact = document.getElementById("funFact").value.trim();
      const image = document.getElementById("image").value.trim();
  
      if (!name || !sport || !nationality || !awards || !funFact || !image) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
      }
  
      const newAthlete = {
        id: Date.now(),
        name,
        sport,
        nationality,
        awards,
        funFact,
        image
      };
  
      const existing = JSON.parse(localStorage.getItem("athletes")) || [];
  
      existing.push(newAthlete);
      localStorage.setItem("athletes", JSON.stringify(existing));

      message.textContent = "Athlete added successfully!";
      message.style.color = "green";

      form.reset();
    });
  });
  