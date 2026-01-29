fetch("http://localhost:5000/api/events")
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(e => {
      html += `
        <div class="card">
          <h3>${e.title}</h3>
          <p>${e.description}</p>
          <p>${e.date} | ${e.venue}</p>
        </div>
      `;
    });
    document.getElementById("events").innerHTML = html;
  })
  .catch(() => {
    document.getElementById("events").innerHTML =
      "<p>Error loading events</p>";
  });
