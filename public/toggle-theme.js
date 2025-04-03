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

function displayEmail() {
  const mailLinks = document.getElementsByName("mail");
  if (!mailLinks) return;
  const user = "zhuo0107"; // 邮箱用户名部分
  const domain = "foxmail.com"; // 域名部分
  mailLinks.forEach(mailLink => {
    mailLink.setAttribute("href", `mailto:${user}@${domain}`);
  });
}

function loadGiscus() {
  const container = document.getElementById("giscus-comments");

  if (!container) return;

  // 获取当前主题
  const theme = getThemeMode();

  // 创建 script 元素
  const script = document.createElement("script");
  script.src = "https://giscus.app/client.js";
  script.dataset.repo = "Ouzr0107/blog";
  script.dataset.repoId = "R_kgDOOJWcnQ";
  script.dataset.category = "Announcements";
  script.dataset.categoryId = "DIC_kwDOOJWcnc4Codjf";
  script.dataset.mapping = "title";
  script.dataset.strict = "0";
  script.dataset.reactionsEnabled = "1";
  script.dataset.emitMetadata = "0";
  script.dataset.inputPosition = "top";
  script.dataset.theme = theme; // 动态设置主题
  script.dataset.lang = "zh-CN";
  script.dataset.loading = "lazy";
  script.crossOrigin = "anonymous";
  script.async = true;

  // 清空容器并插入新脚本
  container.innerHTML = "";
  container.appendChild(script);
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
    });
  }

  setThemeFeature();

  // Runs on view transitions navigation
  document.addEventListener("astro:after-swap", setThemeFeature);

  loadGiscus();

  // 页面加载时加载评论
  document.addEventListener("astro:after-swap", loadGiscus);

  displayEmail();

  // 页面加载时调用
  document.addEventListener("astro:after-swap", displayEmail);
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    themeValue = themeValue === "auto" ? "auto" : isDark ? "dark" : "light";
    setPreference();
  });
