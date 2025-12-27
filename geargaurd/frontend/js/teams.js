function loadTeams() {
  app.innerHTML = `
    <table class="odoo-table">
      <thead>
        <tr><th>Technician</th><th>Team</th><th>Active Jobs</th></tr>
      </thead>
      <tbody>
        <tr><td>Aka Foster</td><td>Mechanical</td><td>4</td></tr>
        <tr><td>John Miller</td><td>IT</td><td>3</td></tr>
        <tr><td>Rahul Verma</td><td>Electrical</td><td>2</td></tr>
      </tbody>
    </table>
  `;
}
