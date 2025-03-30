const primaryColorScheme = ""; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

function getPreferTheme() {
  if (currentTheme) return currentTheme;

  // return theme value in local storage if it is set

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return getSystemTheme();
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem("theme", themeValue);
  reflectPreference();
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getThemeMode() {
  return themeValue === "auto" ? getSystemTheme() : themeValue;
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", getThemeMode());

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    // Get the computed styles for the body element
    const computedStyles = window.getComputedStyle(body);

    // Get the background color property
    const bgColor = computedStyles.backgroundColor;

    // Set the background color in <meta theme-color ... />
    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", bgColor);

    changeGiscusTheme();
  }
}

// 根据 name 属性更新图标显示
function updateIcons() {
  const themeBtn = document.getElementById('theme-btn');
  const icons = {
      moon: themeBtn.querySelector('#icon-moon'),
      sun: themeBtn.querySelector('#icon-sun'),
      system: themeBtn.querySelector('#icon-system'),
  };

  console.log(themeBtn, icons.moon, icons.sun, icons.system);

  if (!themeBtn
      || !icons.moon
      || !icons.sun
      || !icons.system) {
      return;
  }
  // 重置所有图标状态
  Object.values(icons).forEach((icon) => {
      icon.classList.remove('scale-100');
      icon.classList.add('scale-0');
  });

  // 根据 name 显示对应图标
  if (themeValue === 'dark') {
      icons.moon.classList.remove('scale-0');
      icons.moon.classList.add('scale-100');
  } else if (themeValue === 'light') {
      icons.sun.classList.remove('scale-0');
      icons.sun.classList.add('scale-100');
  } else if (themeValue === 'auto') {
      icons.system.classList.remove('scale-0');
      icons.system.classList.add('scale-100');
  }
}

function changeGiscusTheme() {
  function sendMessage(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
  }

  sendMessage({
    setConfig: {
      theme: getThemeMode(),
    }
  });
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  function setThemeFeature() {
    // set on load so screen readers can get the latest value on the button
    reflectPreference();

    // now this script can find and listen for clicks on the control
    document.querySelector("#theme-btn")?.addEventListener("click", () => {
      themeValue = themeValue === "light" ? "dark" : themeValue === "dark" ? "auto" : "light";
      setPreference();
      updateIcons();
    });

    updateIcons();
  }

  setThemeFeature();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setThemeFeature);
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = themeValue === "auto" ? "auto" : isDark ? "dark" : "light";
    setPreference();
    updateIcons();
  });
