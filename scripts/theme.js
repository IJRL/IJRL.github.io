const btn = document.querySelector(".btn-toggle");
const btn2 = document.querySelector(".btn-toggle2");
const icon = document.querySelector(".theme-icon");
const icon2 = document.querySelector(".theme-icon2");
const discord = document.getElementById("discordicon");
const twitch = document.getElementById("twitchicon");
const youtube = document.getElementById("youtubeicon");
const tiktok = document.getElementById("tiktokicon");
const twitter = document.getElementById("twittericon");
const menu = document.querySelector(".menu-icon");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
  setDark();
} else if (currentTheme == "light") {
  setLight();
}
else{
  if (!prefersDarkScheme.matches) {
    var theme = "light";
    setLight();
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = "dark";
    setDark();
  }
  localStorage.setItem("theme", theme);
}

btn.addEventListener("click", function () {
  changeTheme();
});

btn2.addEventListener("click", function () {
  changeTheme();
});

function changeTheme(){
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "dark") {
    var theme = "light";
    setLight();
  } else {
    var theme = "dark";
    setDark();
  }
  localStorage.setItem("theme", theme);
}

function setDark(){
  icon.src = "/assets/moon.svg";
  icon2.src = "/assets/moon.svg";
  discord.src = "/assets/discorddark.svg";
  twitch.src = "/assets/twitchdark.svg";
  youtube.src = "/assets/youtubedark.svg";
  tiktok.src = "/assets/tiktokdark.svg";
  twitter.src = "/assets/twitterdark.svg";
  menu.src = "/assets/menudark.svg";
}

function setLight(){
  icon.src = "/assets/sun.svg";
  icon2.src = "/assets/sun.svg";
  discord.src = "/assets/discord.svg";
  twitch.src = "/assets/twitch.svg";
  youtube.src = "/assets/youtube.svg";
  tiktok.src = "/assets/tiktok.svg";
  twitter.src = "/assets/twitter.svg";
  menu.src = "/assets/menu.svg";
}