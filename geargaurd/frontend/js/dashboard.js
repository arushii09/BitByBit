function loadDashboard() {
  app.innerHTML = `
    <section class="kpi-row">
      <div class="kpi danger"><h4>Critical Equipment</h4><p>5</p></div>
      <div class="kpi info"><h4>Technician Load</h4><p>82%</p></div>
      <div class="kpi success"><h4>Open Requests</h4><p>14</p></div>
    </section>

    <table class="odoo-table">
      <thead>
        <tr>
          <th>Subject</th><th>Technician</th><th>Category</th><th>Stage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Oil Leakage</td>
          <td>Aka Foster</td>
          <td>Mechanical</td>
          <td class="stage new">New</td>
        </tr>
        <tr>
          <td>Printer Issue</td>
          <td>John Miller</td>
          <td>IT</td>
          <td class="stage progress">In Progress</td>
        </tr>
      </tbody>
    </table>
  `;
}
