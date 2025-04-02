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

loadGiscus();

// 页面加载时加载评论
document.addEventListener("astro:after-swap", loadGiscus);

function displayEmail() {
    const mailLinks = document.getElementsByName("mail");
    if (!mailLinks) return;
    const user = "zhuo0107"; // 邮箱用户名部分
    const domain = "foxmail.com"; // 域名部分
    mailLinks.forEach(mailLink => {
        mailLink.setAttribute("href", `mailto:${user}@${domain}`);
    });
}

displayEmail();

// 页面加载时调用
document.addEventListener("astro:after-swap", displayEmail);
