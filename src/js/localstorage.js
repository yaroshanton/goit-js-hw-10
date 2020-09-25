const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const switchToggle = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector("body");

let checkTheme = getTheme();

if (checkTheme == null) {
  bodyRef.classList = Theme.LIGHT;
  localStorage.setItem("Theme", JSON.stringify(Theme.LIGHT));
} else {
  bodyRef.classList = checkTheme;

}

function getTheme() {
  const getedTheme = localStorage.getItem("Theme");
  if (getedTheme == null) {
    return getedTheme;
  } else {
    const parsedTheme = JSON.parse(getedTheme);
    return parsedTheme;
  }
}


switchToggle.addEventListener("change", onSwitchToggle);

function onSwitchToggle() {
  let checkTheme = getTheme();
  if (checkTheme == Theme.LIGHT) {
    localStorage.removeItem('Theme');
    localStorage.setItem("Theme", JSON.stringify(Theme.DARK));
    bodyRef.classList = Theme.DARK;
  } else {
    localStorage.removeItem('Theme');
    localStorage.setItem("Theme", JSON.stringify(Theme.LIGHT));
    bodyRef.classList = Theme.LIGHT;
  }
}





