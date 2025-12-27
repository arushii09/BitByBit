function loadEquipment() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <h2 style="margin-bottom:20px;">Equipment</h2>

    <table class="odoo-table">
      <thead>
        <tr>
          <th>Equipment</th>
          <th>Serial</th>
          <th>Department</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>CNC Machine</td>
          <td>CNC-89321</td>
          <td>Production</td>
          <td style="color:#22c55e;">Active</td>
        </tr>

        <tr>
          <td>Office Printer</td>
          <td>PR-2211</td>
          <td>Admin</td>
          <td style="color:#facc15;">Under Maintenance</td>
        </tr>

        <tr>
          <td>Acer Laptop</td>
          <td>LP-203-1928</td>
          <td>IT</td>
          <td style="color:#ef4444;">Needs Repair</td>
        </tr>
      </tbody>
    </table>
  `;
}
