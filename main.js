const themeStorageKey = "dashboard-theme";
const themeToggle = document.getElementById("themeToggle");
const themeToggleLabel = document.getElementById("themeToggleLabel");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarNav = document.getElementById("sidebarNav");
const rangeButtons = document.querySelectorAll(".range-btn");
const chartBars = document.getElementById("chartBars");
const taskCheckboxes = document.querySelectorAll(".task-checkbox");

const chartData = {
  "7d": [42, 68, 56, 74, 80, 62, 88],
  "30d": [32, 48, 60, 72, 66, 78, 94],
  "90d": [24, 40, 54, 66, 72, 84, 96],
};

function setTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem(themeStorageKey, nextTheme);
  if (themeToggleLabel) {
    themeToggleLabel.textContent = nextTheme === "dark" ? "Light Mode" : "Dark Mode";
  }
}

function setupTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey);
  setTheme(savedTheme || "dark");

  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

function renderChart(range) {
  if (!chartBars) return;
  const values = chartData[range];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  chartBars.innerHTML = values
    .map(
      (value, index) => `
        <div class="flex h-full flex-col justify-end gap-3">
          <div class="chart-bar rounded-t-[1.25rem] bg-gradient-to-t from-cyan-500 to-sky-300 transition-all duration-500" style="height: ${value}%"></div>
          <span class="text-center text-xs text-subtle text-textMuted">${labels[index]}</span>
        </div>
      `
    )
    .join("");
}

function setupRanges() {
  if (!rangeButtons.length || !chartBars) return;
  renderChart("7d");

  rangeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const range = button.dataset.range;
      renderChart(range);

      rangeButtons.forEach((item) => {
        item.classList.remove("btn-primary", "bg-white", "text-slateNight");
        item.classList.add("border-soft", "border", "bg-soft", "bg-white/5", "text-invert", "text-white");
      });

      button.classList.add("btn-primary", "bg-white", "text-slateNight");
      button.classList.remove("border-soft", "border", "bg-soft", "bg-white/5", "text-invert", "text-white");
    });
  });
}

function setupSidebar() {
  if (!sidebarToggle || !sidebarNav) return;
  sidebarToggle.addEventListener("click", () => {
    sidebarNav.classList.toggle("hidden");
  });
}

function setupTasks() {
  taskCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const label = checkbox.closest(".task-item");
      if (!label) return;

      label.classList.toggle("opacity-60", checkbox.checked);
      label.classList.toggle("line-through", checkbox.checked);
    });
  });
}

setupTheme();
setupRanges();
setupSidebar();
setupTasks();
