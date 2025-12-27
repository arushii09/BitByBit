/* ======================================================
   MONTHLY MAINTENANCE CALENDAR (ODOO-STYLE)
====================================================== */

function loadCalendar() {
  const app = document.getElementById("app");
  if (!app) return;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let daysHTML = "";

  // Empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    daysHTML += `<div class="calendar-cell empty"></div>`;
  }

  // Days
  for (let day = 1; day <= daysInMonth; day++) {
    daysHTML += `
      <div class="calendar-cell" onclick="openRequestModal(${day})">
        <span class="date">${day}</span>
        <div class="task" draggable="true"
             ondragstart="dragTask(event)">
          Preventive Check
        </div>
      </div>
    `;
  }

  app.innerHTML = `
    <section>
      <h2 style="margin-bottom:18px;">Maintenance Calendar</h2>
      <p style="opacity:.7;margin-bottom:20px;">
        ${today.toLocaleString("default",{month:"long"})} ${year}
      </p>

      <div class="calendar-month">
        <div class="calendar-header">Sun</div>
        <div class="calendar-header">Mon</div>
        <div class="calendar-header">Tue</div>
        <div class="calendar-header">Wed</div>
        <div class="calendar-header">Thu</div>
        <div class="calendar-header">Fri</div>
        <div class="calendar-header">Sat</div>

        ${daysHTML}
      </div>
    </section>

    ${requestModalHTML()}
  `;
}

/* ======================================================
   DRAG & DROP TASKS
====================================================== */

function dragTask(event) {
  event.dataTransfer.setData("text/plain", event.target.innerText);
}

document.addEventListener("dragover", e => e.preventDefault());

document.addEventListener("drop", e => {
  if (e.target.classList.contains("calendar-cell")) {
    const text = e.dataTransfer.getData("text/plain");
    e.target.innerHTML += `<div class="task">${text}</div>`;
  }
});

/* ======================================================
   REQUEST MODAL
====================================================== */

function openRequestModal(day) {
  document.getElementById("req-day").innerText = day;
  document.getElementById("request-modal").style.display = "flex";
}

function closeRequestModal() {
  document.getElementById("request-modal").style.display = "none";
}

/* ======================================================
   MODAL HTML
====================================================== */

function requestModalHTML() {
  return `
    <div id="request-modal" class="modal">
      <div class="modal-box">
        <h3>Create Maintenance Request</h3>
        <p>Scheduled Date: <strong>${new Date().toLocaleDateString()}</strong></p>
        <p>Day: <strong id="req-day"></strong></p>

        <input placeholder="Issue / Task" />
        <select>
          <option>Preventive</option>
          <option>Corrective</option>
        </select>

        <div class="modal-actions">
          <button onclick="closeRequestModal()">Cancel</button>
          <button class="primary">Create</button>
        </div>
      </div>
    </div>
  `;
}
