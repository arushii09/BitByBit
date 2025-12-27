/* ======================================================
   GEARGUARD SPA CONTROLLER – FINAL VERSION
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".top-nav span");

  if (!navItems.length) {
    console.error("❌ Navigation items not found");
    return;
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      // Active state
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");

      const page = item.dataset.page;
      navigate(page);
    });
  });

  // Load default page
  navigate("dashboard");
});

/* ======================================================
   ROUTER FUNCTION
====================================================== */
function navigate(page) {
  console.log("➡️ Navigating to:", page);

  switch (page) {
    case "dashboard":
      if (typeof loadDashboard === "function") {
        loadDashboard();
      } else {
        console.error("❌ loadDashboard() not found");
      }
      break;

    case "calendar":
      if (typeof loadCalendar === "function") {
        loadCalendar();
      } else {
        console.error("❌ loadCalendar() not found");
      }
      break;

    case "equipment":
      if (typeof loadEquipment === "function") {
        loadEquipment();
      } else {
        console.error("❌ loadEquipment() not found");
      }
      break;

    case "reporting":
      if (typeof loadReporting === "function") {
        loadReporting();
      } else {
        console.error("❌ loadReporting() not found");
      }
      break;

    case "teams":
      if (typeof loadTeams === "function") {
        loadTeams();
      } else {
        console.error("❌ loadTeams() not found");
      }
      break;

    default:
      console.warn("⚠️ Unknown page:", page);
  }
}
