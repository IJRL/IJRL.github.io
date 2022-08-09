const btn = document.querySelector(".btn-toggle");
const icon = document.querySelector(".theme-icon");
const discord = document.getElementById("discordicon");
const twitch = document.getElementById("twitchicon");
const youtube = document.getElementById("youtubeicon");
const tiktok = document.getElementById("tiktokicon");
const twitter = document.getElementById("twittericon");
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
  discord.src = "/assets/discorddark.svg";
  twitch.src = "/assets/twitchdark.svg";
  youtube.src = "/assets/youtubedark.svg";
  tiktok.src = "/assets/tiktokdark.svg";
  twitter.src = "/assets/twitterdark.svg";
}

function setLight(){
  icon.src = "/assets/sun.svg";
  discord.src = "/assets/discord.svg";
  twitch.src = "/assets/twitch.svg";
  youtube.src = "/assets/youtube.svg";
  tiktok.src = "/assets/tiktok.svg";
  twitter.src = "/assets/twitter.svg";
}