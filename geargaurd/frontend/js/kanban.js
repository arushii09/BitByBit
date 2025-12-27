const cards = document.querySelectorAll(".card");
const columns = document.querySelectorAll(".column");

cards.forEach(card => {
  card.addEventListener("dragstart", () => card.classList.add("dragging"));
  card.addEventListener("dragend", () => card.classList.remove("dragging"));
});

columns.forEach(col => {
  col.addEventListener("dragover", e => {
    e.preventDefault();
    const card = document.querySelector(".dragging");
    col.appendChild(card);
  });
});
