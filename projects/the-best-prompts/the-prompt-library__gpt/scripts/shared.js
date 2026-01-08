(() => {
  const toastEl = document.getElementById("toast");
  const toastTextEl = document.getElementById("toastText");
  let toastTimer = null;

  function showToast(text) {
    if (!toastEl) return;
    if (toastTextEl) toastTextEl.textContent = text;
    toastEl.classList.add("show");
    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toastEl.classList.remove("show"), 1400);
  }

  async function copyText(text) {
    const value = String(text ?? "");
    try {
      await navigator.clipboard.writeText(value);
      showToast("Copied");
      return true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = value;
        ta.setAttribute("readonly", "true");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        showToast("Copied");
        return true;
      } catch {
        showToast("Copy failed");
        return false;
      }
    }
  }

  function saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function downloadBlob(filename, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function canvasToBlob(canvas, type = "image/png", quality) {
    return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
  }

  window.PromptLib = {
    showToast,
    copyText,
    saveJSON,
    loadJSON,
    clamp,
    downloadBlob,
    canvasToBlob,
  };
})();


