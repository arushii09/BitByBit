function loadReporting() {
  app.innerHTML = `
    <canvas id="reportChart" height="120"></canvas>
  `;

  new Chart(document.getElementById("reportChart"), {
    type: "bar",
    data: {
      labels: ["Mechanical", "IT", "Electrical"],
      datasets: [{
        label: "Requests",
        data: [8, 5, 3],
        backgroundColor: ["#ef4444", "#3b82f6", "#22c55e"]
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}
