document.querySelectorAll(".counter").forEach(counter => {
  let target = +counter.dataset.target;
  let count = 0;
  let step = target / 40;

  let interval = setInterval(() => {
    count += step;
    counter.innerText = Math.ceil(count);
    if (count >= target) clearInterval(interval);
  }, 25);
});
