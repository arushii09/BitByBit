/* ======================================================
   APP INITIALIZATION
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".top-nav span");

  if (!navItems.length) {
    console.error("❌ Navigation items not found");
    return;
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove active from all
      navItems.forEach(n => n.classList.remove("active"));

      // Add active to clicked
      item.classList.add("active");

      const page = item.dataset.page;
      navigate(page);
    });
  });

  // Load default page
  setActiveTab("dashboard");
  navigate("dashboard");
});

/* ======================================================
   SET ACTIVE TAB (UTILITY)
====================================================== */
function setActiveTab(page) {
  document.querySelectorAll(".top-nav span").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.page === page);
  });
}

/* ======================================================
   ROUTER FUNCTION
====================================================== */
function navigate(page) {
  console.log("➡️ Navigating to:", page);

  const app = document.getElementById("app");

  if (!app) {
    console.error("❌ #app container not found");
    return;
  }

  // Clear previous content (important for SPA)
  app.innerHTML = "";

  switch (page) {
    case "dashboard":
      if (typeof loadDashboard === "function") {
        loadDashboard();
      } else {
        showError("Dashboard module not loaded");
      }
      break;

    case "calendar":
      if (typeof loadCalendar === "function") {
        loadCalendar();
      } else {
        showError("Calendar module not loaded");
      }
      break;

    case "equipment":
      if (typeof loadEquipment === "function") {
        loadEquipment();
      } else {
        showError("Equipment module not loaded");
      }
      break;

    case "reporting":
      if (typeof loadReporting === "function") {
        loadReporting();
      } else {
        showError("Reporting module not loaded");
      }
      break;

    case "teams":
      if (typeof loadTeams === "function") {
        loadTeams();
      } else {
        showError("Teams module not loaded");
      }
      break;

    default:
      console.warn("⚠️ Unknown page:", page);
      showError("Page not found");
  }
}

/* ======================================================
   FALLBACK UI (ERROR HANDLER)
====================================================== */
function showError(message) {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div style="padding:40px; opacity:0.7;">
      <h3>⚠️ ${message}</h3>
      <p>Please check module loading order.</p>
    </div>
  `;
}
