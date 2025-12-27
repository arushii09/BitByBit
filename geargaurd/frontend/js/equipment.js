/* ======================================================
   EQUIPMENT LIST PAGE (SPA VIEW)
====================================================== */

function loadEquipment() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <section>
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
          <tr onclick="openEquipment('cnc-machine')">
            <td>CNC Machine</td>
            <td>CNC-89321</td>
            <td>Production</td>
            <td class="success">Active</td>
          </tr>

          <tr onclick="openEquipment('office-printer')">
            <td>Office Printer</td>
            <td>PR-2211</td>
            <td>Admin</td>
            <td class="progress">Under Maintenance</td>
          </tr>

          <tr onclick="openEquipment('acer-laptop')">
            <td>Acer Laptop</td>
            <td>LP-203-1928</td>
            <td>IT</td>
            <td class="danger">Needs Repair</td>
          </tr>

          <tr onclick="openEquipment('samsung-monitor')">
            <td>Samsung Monitor 15"</td>
            <td>SM-1550</td>
            <td>IT</td>
            <td class="success">Active</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

/* ======================================================
   OPEN EQUIPMENT DETAIL (STEP-4 SPA CONNECT)
====================================================== */

function openEquipment(id) {
  const equipmentData = {
    "cnc-machine": {
      name: "CNC Machine",
      category: "Machinery",
      company: "My Company (San Francisco)",
      usedBy: "Department",
      team: "Mechanical Team",
      assignedDate: "11/10/2025",
      technician: "Aka Foster",
      employee: "Production Dept",
      location: "Factory Floor",
      workCenter: "CNC Zone"
    },

    "office-printer": {
      name: "Office Printer",
      category: "Printers",
      company: "My Company (San Francisco)",
      usedBy: "Employee",
      team: "IT Support",
      assignedDate: "12/01/2025",
      technician: "John Miller",
      employee: "Admin Team",
      location: "Admin Office",
      workCenter: "Desk-09"
    },

    "acer-laptop": {
      name: "Acer Laptop",
      category: "Computers",
      company: "My Company (San Francisco)",
      usedBy: "Employee",
      team: "IT Support",
      assignedDate: "12/18/2025",
      technician: "Aka Foster",
      employee: "Mitchell Admin",
      location: "IT Office",
      workCenter: "Desk-21"
    },

    "samsung-monitor": {
      name: 'Samsung Monitor 15"',
      category: "Monitors",
      company: "My Company (San Francisco)",
      usedBy: "Employee",
      team: "Internal Maintenance",
      assignedDate: "12/24/2025",
      technician: "Mitchell Admin",
      employee: "Abigail Peterson",
      location: "Design Desk",
      workCenter: "Desk-14"
    }
  };

  if (!equipmentData[id]) {
    alert("Equipment data not found");
    return;
  }

  loadEquipmentDetail(equipmentData[id]);
}
