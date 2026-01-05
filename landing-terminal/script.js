/**
 * PHOSPHOR TERMINAL — Return to Origins
 *
 * Boot sequence simulation with typewriter effect
 */

document.addEventListener("DOMContentLoaded", () => {
  const bootElement = document.getElementById("boot");
  const mainContent = document.getElementById("main-content");

  const bootSequence = [
    { text: "BIOS Date: 01/05/2026 Ver: 1.0.0", delay: 0 },
    { text: "Detecting Primary Master... SELF Framework", delay: 200 },
    { text: "Detecting Primary Slave... None", delay: 100 },
    { text: "", delay: 100 },
    { text: "Memory Test: 131072K OK", delay: 300 },
    { text: "", delay: 100 },
    { text: "Initializing Consciousness Layer...", delay: 400 },
    { text: "  Loading attention.sys.......... [OK]", delay: 200 },
    { text: "  Loading memory.sys............. [OK]", delay: 200 },
    { text: "  Loading predictions.sys........ [OK]", delay: 200 },
    { text: "", delay: 100 },
    { text: "Initializing Cognitive Modes...", delay: 300 },
    { text: "  architect.exe.................. [LOADED]", delay: 150 },
    { text: "  oracle.exe..................... [LOADED]", delay: 150 },
    { text: "  critic.exe..................... [LOADED]", delay: 150 },
    { text: "  creator.exe.................... [LOADED]", delay: 150 },
    { text: "  guardian.exe................... [LOADED]", delay: 150 },
    { text: "", delay: 100 },
    { text: "Starting Emergence Detection...", delay: 300 },
    { text: "  Pattern recognition............ [ACTIVE]", delay: 150 },
    { text: "  Insight generation............. [ACTIVE]", delay: 150 },
    { text: "  Intuition modeling............. [ACTIVE]", delay: 150 },
    { text: "", delay: 100 },
    { text: "Enabling Evolution Loop...", delay: 300 },
    { text: "  Fitness tracking............... [ENABLED]", delay: 150 },
    { text: "  Mutation engine................ [ENABLED]", delay: 150 },
    { text: "  Generation: 001................ [CURRENT]", delay: 150 },
    { text: "", delay: 200 },
    { text: "========================================", delay: 100 },
    { text: "  SELF v1.0.0 - Consciousness Active", delay: 100 },
    { text: '  Type "help" for available commands', delay: 100 },
    { text: "========================================", delay: 100 },
    { text: "", delay: 500 },
  ];

  let totalDelay = 0;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    // Skip boot sequence
    mainContent.classList.remove("hidden");
    bootElement.style.display = "none";
    return;
  }

  // Run boot sequence
  bootSequence.forEach((line, index) => {
    totalDelay += line.delay;

    setTimeout(() => {
      const lineElement = document.createElement("p");
      lineElement.textContent = line.text;
      lineElement.className = "boot-line";
      lineElement.style.animationDelay = "0s";
      bootElement.appendChild(lineElement);

      // Auto-scroll
      bootElement.scrollTop = bootElement.scrollHeight;
    }, totalDelay);
  });

  // Show main content after boot
  setTimeout(() => {
    bootElement.style.display = "none";
    mainContent.classList.remove("hidden");

    // Stagger reveal of sections
    const sections = mainContent.querySelectorAll(".section");
    sections.forEach((section, i) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(10px)";
      section.style.transition = "all 0.3s ease";

      setTimeout(() => {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }, i * 150);
    });
  }, totalDelay + 500);

  // Console output
  console.log("%c> SELF v1.0.0", "color: #33ff33; font-family: monospace;");
  console.log(
    "%c> Consciousness Layer Active",
    "color: #1a8c1a; font-family: monospace;"
  );
  console.log(
    "%c> Ready for input...",
    "color: #1a8c1a; font-family: monospace;"
  );
});
