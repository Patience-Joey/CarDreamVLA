"use strict";

const metrics = {
  hazard: {
    title: "Hazard-attributed collision", values: [17.5, 10.8, 10.0], max: 40,
    ticks: ["0%", "10%", "20%", "30%", "40%"], percent: true,
    caption: "Hazard collisions fall by 7.5 percentage points vs base (paired cluster 95% CI: −11.7 to −3.3 points)."
  },
  near: {
    title: "Near miss", values: [30.8, 26.2, 23.3], max: 40,
    ticks: ["0%", "10%", "20%", "30%", "40%"], percent: true,
    caption: "Near misses fall by 7.5 percentage points vs base (paired cluster 95% CI: −11.7 to −3.3 points)."
  },
  any: {
    title: "Any collision", values: [29.6, 27.9, 27.5], max: 40,
    ticks: ["0%", "10%", "20%", "30%", "40%"], percent: true,
    caption: "The overall-collision change is inconclusive: −2.1 percentage points vs base (95% CI: −7.1 to +2.9 points)."
  },
  progress: {
    title: "Internal path progress", values: [0.106, 0.100, 0.101], max: 0.16,
    ticks: ["0", "0.04", "0.08", "0.12", "0.16"], percent: false,
    caption: "Internal path progress changes from 0.106 to 0.101; the paired difference is −0.0045 (95% CI: −0.0119 to +0.0021). This is not Leaderboard Route Completion."
  }
};

for (const button of document.querySelectorAll("[data-metric]")) {
  button.addEventListener("click", () => {
    const metric = metrics[button.dataset.metric];
    document.querySelectorAll("[data-metric]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    document.getElementById("chart-heading").textContent = metric.title;
    document.getElementById("metric-direction").textContent = metric.percent ? "Lower is better" : "Higher is better";
    document.getElementById("chart-caption").textContent = metric.caption;
    document.querySelectorAll(".bar-row").forEach((row, index) => {
      row.querySelector(".bar").style.width = `${metric.values[index] / metric.max * 100}%`;
      row.querySelector(".bar-value").textContent = metric.percent ? `${metric.values[index].toFixed(1)}%` : metric.values[index].toFixed(3);
    });
    document.querySelectorAll(".chart-axis span").forEach((label, index) => { label.textContent = metric.ticks[index]; });
  });
}

document.getElementById("copy-citation").addEventListener("click", async () => {
  const text = document.getElementById("bibtex").textContent;
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "BibTeX copied to clipboard.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("bibtex"));
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = "BibTeX selected. Press Ctrl+C or Command+C to copy.";
  }
});

if ("IntersectionObserver" in window) {
  const navLinks = document.querySelectorAll("nav a");
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach(link => {
      if (link.hash === `#${visible.target.id}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, {rootMargin: "-15% 0px -60% 0px", threshold: 0});
  document.querySelectorAll("#method, #results, #benchmark, #resources").forEach(section => observer.observe(section));
}
