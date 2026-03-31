(function () {
  "use strict";

  var LANG_NAMES = {
    js: "JavaScript",
    ts: "TypeScript",
    py: "Python",
    rb: "Ruby",
    sh: "Shell",
    bash: "Bash",
    zsh: "Zsh",
    yml: "YAML",
    yaml: "YAML",
    json: "JSON",
    toml: "TOML",
    xml: "XML",
    html: "HTML",
    css: "CSS",
    scss: "SCSS",
    sql: "SQL",
    go: "Go",
    rs: "Rust",
    java: "Java",
    kt: "Kotlin",
    cs: "C#",
    cpp: "C++",
    c: "C",
    php: "PHP",
    swift: "Swift",
    tf: "Terraform",
    hcl: "HCL",
    dockerfile: "Dockerfile",
    makefile: "Makefile",
    md: "Markdown",
    plaintext: "Text",
    text: "Text",
    txt: "Text",
  };

  function getLanguage(highlightDiv) {
    var codeEl = highlightDiv.querySelector("code[data-lang]");
    if (codeEl) {
      return codeEl.getAttribute("data-lang");
    }
    var fallbackCode = highlightDiv.querySelector("code");
    var classes = (fallbackCode && fallbackCode.className) || "";
    var match = classes.match(/language-([A-Za-z0-9_-]+)/);
    return match ? match[1] : "";
  }

  function displayName(lang) {
    if (!lang) return "";
    var lower = lang.toLowerCase();
    return LANG_NAMES[lower] || lang.charAt(0).toUpperCase() + lang.slice(1);
  }

  function showButtonState(button, text, className, duration) {
    if (button._copyStateTimeoutId) {
      clearTimeout(button._copyStateTimeoutId);
    }
    button.textContent = text;
    if (className) button.classList.add(className);
    button._copyStateTimeoutId = setTimeout(function () {
      button.textContent = "Copy";
      if (className) button.classList.remove(className);
      button._copyStateTimeoutId = null;
    }, duration || 2000);
  }

  function copyToClipboard(text, button) {
    if (!navigator.clipboard) {
      fallbackCopy(text, button);
      return;
    }
    navigator.clipboard.writeText(text).then(
      function () {
        showButtonState(button, "Copied!", "copied", 2000);
      },
      function () {
        fallbackCopy(text, button);
      }
    );
  }

  function fallbackCopy(text, button) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      showButtonState(button, "Copied!", "copied", 2000);
    } catch (e) {
      showButtonState(button, "Failed", "copy-failed", 2000);
    }
    document.body.removeChild(textarea);
  }

  function init() {
    var highlights = document.querySelectorAll(".highlight");

    highlights.forEach(function (highlightDiv) {
      if (highlightDiv.querySelector(".code-header")) return;

      var lang = getLanguage(highlightDiv);
      var label = displayName(lang);

      var header = document.createElement("div");
      header.className = "code-header";

      if (label) {
        var langSpan = document.createElement("span");
        langSpan.className = "code-lang";
        langSpan.textContent = label;
        header.appendChild(langSpan);
      }

      var copyBtn = document.createElement("button");
      copyBtn.className = "copy-btn";
      copyBtn.textContent = "Copy";
      copyBtn.setAttribute("type", "button");
      copyBtn.setAttribute("aria-label", "Copy code to clipboard");
      copyBtn.addEventListener("click", function () {
        var codeEl =
          highlightDiv.querySelector("td:last-child code") ||
          highlightDiv.querySelector("code");
        if (codeEl) {
          var clone = codeEl.cloneNode(true);
          var lineNums = clone.querySelectorAll(".ln, .lnt");
          for (var i = 0; i < lineNums.length; i++) {
            lineNums[i].remove();
          }
          copyToClipboard(clone.textContent, copyBtn);
        }
      });
      header.appendChild(copyBtn);

      highlightDiv.insertBefore(header, highlightDiv.firstChild);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
