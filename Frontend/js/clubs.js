fetch("http://localhost:5000/api/clubs")
  .then(res => res.json())
  .then(data => {
    let html = "";
    data.forEach(club => {
      html += `
        <div class="card">
          <h3>${club.name}</h3>
          <p>${club.description}</p>
          <p><b>Members:</b> ${club.members}</p>
          <p><b>Meeting:</b> ${club.meeting}</p>
        </div>
      `;
    });
    document.getElementById("clubs").innerHTML = html;
  })
  .catch(() => {
    document.getElementById("clubs").innerHTML = "<p>Error loading clubs</p>";
  });
