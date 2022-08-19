let darkMode = "yes";

/**
 * Returns "yes" if dark theme should be used, else "no".
 * @returns "yes" or "no"
 */
function detectDarkMode() {
    if (localStorage) {
      if (localStorage.getItem("dark-mode") == null)
        if (window.matchMedia) {
          localStorage.setItem("dark-mode", window.matchMedia('(prefers-color-scheme: dark)').matches ? "yes" : "no");
        } else {
          localStorage.setItem("dark-mode", "yes");
        }
      
      return localStorage.getItem("dark-mode");
    } else if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? "yes" : "no";
    } else {
      return "yes";
    }
}

/**
 * Makes necessary DOM changes so the theme is reflected.
 * @param {string} value "yes" or "no"
 */
function setDarkMode(value) {
    if (value == "yes") document.documentElement.classList.add("dark-mode");
    else document.documentElement.classList.remove("dark-mode");

    localStorage.setItem("dark-mode", value);
}

addEventListener("load", () => {
    darkMode = detectDarkMode();

    document.getElementById("dark-mode-toggle").checked = darkMode == "yes";

    setDarkMode(darkMode);

    document.getElementById("dark-mode-toggle").addEventListener("input", e => {
        setDarkMode(e.target.checked ? "yes" : "no");
    });
});

if (detectDarkMode() == "no") document.documentElement.classList.remove("dark-mode");