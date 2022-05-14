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
  icon.src = "/assets/moon.svg";
  discord.src = "/assets/discorddark.svg";
  twitch.src = "/assets/twitchdark.svg";
  youtube.src = "/assets/youtubedark.svg";
  tiktok.src = "/assets/tiktokdark.svg";
  twitter.src = "/assets/twitterdark.svg";
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
  icon.src = "/assets/sun.svg";
  discord.src = "/assets/discord.svg";
  twitch.src = "/assets/twitch.svg";
  youtube.src = "/assets/youtube.svg";
  tiktok.src = "/assets/tiktok.svg";
  twitter.src = "/assets/twitter.svg";
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
    discord.src = "/assets/discorddark.svg";
    twitch.src = "/assets/twitchdark.svg";
    youtube.src = "/assets/youtubedark.svg";
    tiktok.src = "/assets/tiktokdark.svg";
    twitter.src = "/assets/twitterdark.svg";
  }
  else{
    icon.src = "/assets/sun.svg";
    discord.src = "/assets/discord.svg";
    twitch.src = "/assets/twitch.svg";
    youtube.src = "/assets/youtube.svg";
    tiktok.src = "/assets/tiktok.svg";
    twitter.src = "/assets/twitter.svg";
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
    discord.src = "/assets/discorddark.svg";
    twitch.src = "/assets/twitchdark.svg";
    youtube.src = "/assets/youtubedark.svg";
    tiktok.src = "/assets/tiktokdark.svg";
    twitter.src = "/assets/twitterdark.svg";
  }
  else{
    icon.src = "/assets/sun.svg";
    discord.src = "/assets/discord.svg";
    twitch.src = "/assets/twitch.svg";
    youtube.src = "/assets/youtube.svg";
    tiktok.src = "/assets/tiktok.svg";
    twitter.src = "/assets/twitter.svg";
  }
});

