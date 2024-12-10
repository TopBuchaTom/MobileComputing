export class ColorschemeService {
  getColorscheme() {
    return document.body.classList.contains("dark") ? "darkMode" : "lightMode";
  }

  applyColorscheme(colorscheme = "") {
    let darkMode = false;

    if (colorscheme == "")
      darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    else
      darkMode = colorscheme == "darkMode";

    document.body.classList.toggle("dark", darkMode);
  }

  getColorschemes() {
    return [
      { name: "Light Mode", code: "lightMode" },
      { name: "Dark Mode", code: "darkMode" }
    ]
  }

  setOnSystemColorschemeChangeCallback(callback) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => callback(e));
  }
}


