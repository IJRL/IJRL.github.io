const btn = document.querySelector(".btn-toggle");
const icon = document.querySelector(".theme-icon");
const linkedin = document.getElementById("linkedinicon");
const instagram = document.getElementById("instaicon");
const github = document.getElementById("githubicon");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  icon.src = "/assets/moon.svg";
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  icon.src = "/assets/sun.svg";
}
else{
  if (!prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
  if (theme == "dark"){
    icon.src = "/assets/moon.svg";
  }
  else{
    icon.src = "/assets/sun.svg";
  }
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
  if (theme == "dark"){
    icon.src = "/assets/moon.svg";
  }
  else{
    icon.src = "/assets/sun.svg";
  }
});

