// ================================
// Maintenance Calendar (SPA Ready)
// ================================

function loadCalendar() {
  const app = document.getElementById("app");

  let selectedDate = "";
  let calendarData = JSON.parse(localStorage.getItem("calendarData")) || {};

  // ---------- UI ----------
  app.innerHTML = `
    <div class="header">
      <h2>Maintenance Calendar</h2>
      <div class="controls">
        <select id="year"></select>
        <select id="month"></select>
      </div>
    </div>

    <div id="calendar" class="calendar"></div>

    <div id="modal" class="modal">
      <div class="modal-box">
        <h3>Create Maintenance Request</h3>
        <p id="modalDate"></p>

        <input id="taskInput" placeholder="Issue / Task">
        <select id="typeInput">
          <option value="Preventive">Preventive</option>
          <option value="Corrective">Corrective</option>
        </select>

        <div class="modal-actions">
          <button id="saveBtn">Save</button>
          <button id="cancelBtn">Cancel</button>
        </div>
      </div>
    </div>
  `;

  const yearSelect = document.getElementById("year");
  const monthSelect = document.getElementById("month");
  const calendar = document.getElementById("calendar");
  const modal = document.getElementById("modal");
  const modalDate = document.getElementById("modalDate");
  const taskInput = document.getElementById("taskInput");
  const typeInput = document.getElementById("typeInput");

  const now = new Date();

  for (let y = now.getFullYear() - 2; y <= now.getFullYear() + 5; y++) {
    yearSelect.innerHTML += `<option value="${y}">${y}</option>`;
  }

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  months.forEach((m, i) => {
    monthSelect.innerHTML += `<option value="${i}">${m}</option>`;
  });

  yearSelect.value = now.getFullYear();
  monthSelect.value = now.getMonth();

  function renderCalendar() {
    calendar.innerHTML = "";

    const year = +yearSelect.value;
    const month = +monthSelect.value;
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let d = 1; d <= totalDays; d++) {
      const key = `${year}-${month}-${d}`;
      const tasks = calendarData[key] || [];
      const dayOfWeek = new Date(year, month, d).getDay();
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const dayName = dayNames[dayOfWeek];

      calendar.innerHTML += `
        <div class="day" data-key="${key}">
          <div class="date">${d}</div>
          <div class="weekday-name">${dayName}</div>
          ${tasks.map(t =>
            `<div class="task ${t.type.toLowerCase()}">${t.task}</div>`
          ).join("")}
        </div>
      `;
    }

    document.querySelectorAll(".day").forEach(day => {
      day.onclick = () => {
        selectedDate = day.dataset.key;
        modalDate.innerText = "Scheduled Date: " + selectedDate;
        taskInput.value = "";
        modal.style.display = "flex";
      };
    });
  }

  document.getElementById("saveBtn").onclick = () => {
    if (!taskInput.value) return;

    if (!calendarData[selectedDate]) {
      calendarData[selectedDate] = [];
    }

    calendarData[selectedDate].push({
      task: taskInput.value,
      type: typeInput.value
    });

    localStorage.setItem("calendarData", JSON.stringify(calendarData));
    modal.style.display = "none";
    renderCalendar();
  };

  document.getElementById("cancelBtn").onclick = () => {
    modal.style.display = "none";
  };

  yearSelect.onchange = monthSelect.onchange = renderCalendar;

  renderCalendar();
}