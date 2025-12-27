/* ======================================================
   EQUIPMENT LIST PAGE (SPA VIEW)
====================================================== */

function loadEquipment() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <section>
      <h2 style="margin-bottom: 20px; font-size: 20px; opacity: 0.9;">Equipment</h2>

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
          <tr class="clickable" onclick="openEquipment('cnc-machine')">
            <td>CNC Machine</td>
            <td>CNC-89321</td>
            <td>Production</td>
            <td><span class="status-badge success">Active</span></td>
          </tr>

          <tr class="clickable" onclick="openEquipment('office-printer')">
            <td>Office Printer</td>
            <td>PR-2211</td>
            <td>Admin</td>
            <td><span class="status-badge progress">Under Maintenance</span></td>
          </tr>

          <tr class="clickable" onclick="openEquipment('acer-laptop')">
            <td>Acer Laptop</td>
            <td>LP-203-1928</td>
            <td>IT</td>
            <td><span class="status-badge danger">Needs Repair</span></td>
          </tr>

          <tr class="clickable" onclick="openEquipment('samsung-monitor')">
            <td>Samsung Monitor 15"</td>
            <td>SM-1550</td>
            <td>IT</td>
            <td><span class="status-badge success">Active</span></td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}