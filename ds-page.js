/* Design System page — card fitting, scroll-spy, and the live token editor.
   Every card is an iframe linking the real styles.css, so overrides are
   injected into each frame and the page alike. */
(function () {
  var TOKENS = [
    { g: "Surfaces", items: [
      ["--losai-paper", "#faf9f5", "Page"],
      ["--losai-tint", "#f4f2ec", "Active row"],
      ["--losai-image-bg", "#ece9e0", "Image ground"],
      ["--losai-desk", "#e6e5e1", "Desk"],
      ["--losai-cp-paper", "#f4f1ea", "Client surfaces"]
    ] },
    { g: "Text", items: [
      ["--losai-ink", "#1c1a17", "Ink"],
      ["--losai-prose", "#3a352e", "Prose"],
      ["--losai-label", "#8a8375", "Label"],
      ["--losai-faint", "#a8a297", "Faint"],
      ["--losai-disabled", "#c8c4b8", "Disabled"]
    ] },
    { g: "Rules", items: [
      ["--losai-rule-strong", "#c8c4b8", "Structural"],
      ["--losai-rule", "#e2dfd6", "Internal"],
      ["--losai-rule-light", "#ece9e0", "Light"]
    ] },
    { g: "Accent", items: [
      ["--losai-gold", "#a5824e", "Gold — once per view"],
      ["--losai-alert", "#9c3f2c", "Alert — errors only"],
      ["--losai-tagline", "#4c586e", "Tagline"],
      ["--losai-cp-uncertain", "#dab050", "Uncertain"],
      ["--losai-cp-accent", "#cd9181", "Rose-tan"]
    ] },
    { g: "Mediterranean", items: [
      ["--losai-med-blue", "#4c586e", "Blue"],
      ["--losai-med-red", "#823930", "Red"],
      ["--losai-med-orange", "#b96e4f", "Orange"],
      ["--losai-med-beige", "#bc9381", "Beige"]
    ] }
  ];
  var FONTS = [
    ["--losai-font-voice", '"Cormorant Garamond","Cormorant",Georgia,serif', "Voice"],
    ["--losai-font-info", '"JetBrains Mono",ui-monospace,Menlo,monospace', "Information"]
  ];
  var VOICE_OPTIONS = [
    ['"Cormorant Garamond","Cormorant",Georgia,serif', "Cormorant Garamond"],
    ['"EB Garamond",Georgia,serif', "EB Garamond"],
    ['"Libre Baskerville",Georgia,serif', "Libre Baskerville"],
    ['Georgia,"Times New Roman",serif', "Georgia"]
  ];
  var INFO_OPTIONS = [
    ['"JetBrains Mono",ui-monospace,Menlo,monospace', "JetBrains Mono"],
    ['"IBM Plex Mono",ui-monospace,Menlo,monospace', "IBM Plex Mono"],
    ['"Space Mono",ui-monospace,Menlo,monospace', "Space Mono"],
    ['ui-monospace,Menlo,monospace', "System mono"]
  ];

  var KEY = "losai-ds-tweaks-v1";
  var FONTCSS = null;
  var FONT_IMPORT = '@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap");';

  /* Collect the parent's @font-face rules once, so fontless card copies can
     inherit them. When the sheet is remote (project preview) cssRules is
     blocked and we fall back to the import URL. */
  function fontCss() {
    if (FONTCSS !== null) return FONTCSS;
    var out = "";
    function scan(sheet) {
      var rules;
      try { rules = sheet.cssRules; } catch (e) { return; }
      if (!rules) return;
      for (var i = 0; i < rules.length; i++) {
        var r = rules[i];
        if (r.type === 5) out += r.cssText + "\n";
        else if (r.type === 3 && r.styleSheet) scan(r.styleSheet);
      }
    }
    for (var i = 0; i < document.styleSheets.length; i++) scan(document.styleSheets[i]);
    FONTCSS = out || FONT_IMPORT;
    return FONTCSS;
  }
  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { state = {}; }

  function css() {
    var out = "";
    for (var k in state) if (state[k]) out += k + ":" + state[k] + ";";
    return out;
  }

  function paint() {
    var rule = ":root{" + css() + "}";
    var own = document.getElementById("__tweaks");
    if (!own) { own = document.createElement("style"); own.id = "__tweaks"; document.head.appendChild(own); }
    own.textContent = rule;
    var fonts = fontCss();
    document.querySelectorAll(".stage iframe").forEach(function (f) {
      try {
        var d = f.contentDocument;
        if (!d || !d.head) return;
        /* A real <link> is the only loader with no ordering rules — an
           @import lower in a sheet is silently dropped, which is what left
           frames rendering Georgia. Keep the collected @font-face text as
           the offline path. */
        if (!d.getElementById("__fontlink")) {
          var fl = d.createElement("link");
          fl.id = "__fontlink"; fl.rel = "stylesheet";
          fl.href = FONT_IMPORT.replace(/^@import url\("|"\);$/g, "");
          d.head.insertBefore(fl, d.head.firstChild);
        }
        var fs = d.getElementById("__fonts");
        if (!fs) { fs = d.createElement("style"); fs.id = "__fonts"; d.head.insertBefore(fs, d.head.firstChild); }
        if (fs.textContent !== fonts) fs.textContent = fonts;
        var s = d.getElementById("__tweaks");
        if (!s) { s = d.createElement("style"); s.id = "__tweaks"; d.head.appendChild(s); }
        s.textContent = rule;
      } catch (e) {}
    });
    var n = Object.keys(state).filter(function (k) { return state[k]; }).length;
    var badge = document.getElementById("tw-count");
    if (badge) badge.textContent = n ? n + " changed" : "Default";
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  function set(k, v, def) {
    if (!v || v.toLowerCase() === String(def).toLowerCase()) delete state[k]; else state[k] = v;
    paint();
  }

  function buildPanel() {
    var host = document.getElementById("tweaks");
    if (!host) return;
    var html = "";
    TOKENS.forEach(function (grp) {
      html += '<div class="tw-g"><div class="tw-gh">' + grp.g + "</div>";
      grp.items.forEach(function (it) {
        var k = it[0], def = it[1], label = it[2];
        var cur = state[k] || def;
        html += '<label class="tw-r">' +
          '<input type="color" data-k="' + k + '" data-def="' + def + '" value="' + cur + '">' +
          '<span class="tw-n">' + label + "</span>" +
          '<span class="tw-v" data-v="' + k + '">' + cur + "</span>" +
          "</label>";
      });
      html += "</div>";
    });
    html += '<div class="tw-g"><div class="tw-gh">Typefaces</div>';
    [[FONTS[0], VOICE_OPTIONS], [FONTS[1], INFO_OPTIONS]].forEach(function (pair) {
      var f = pair[0], opts = pair[1];
      var cur = state[f[0]] || f[1];
      html += '<label class="tw-r tw-sel"><span class="tw-n">' + f[2] + "</span><select data-k=\"" + f[0] + '" data-def=\'' + f[1] + "'>" +
        opts.map(function (o) { return '<option value=\'' + o[0] + "' " + (o[0] === cur ? "selected" : "") + ">" + o[1] + "</option>"; }).join("") +
        "</select></label>";
    });
    html += "</div>";
    host.innerHTML = html;

    host.addEventListener("input", function (e) {
      var el = e.target;
      var k = el.getAttribute("data-k");
      if (!k) return;
      set(k, el.value, el.getAttribute("data-def"));
      var v = host.querySelector('[data-v="' + k + '"]');
      if (v) v.textContent = el.value;
    });
  }

  function exportCss() {
    var keys = Object.keys(state).filter(function (k) { return state[k]; });
    if (!keys.length) return "/* No changes — this version matches the system defaults. */";
    return "/* LOSAI studio — token overrides\n   Paste into tokens/colors.css or a version-specific stylesheet. */\n:root{\n" +
      keys.map(function (k) { return "  " + k + ": " + state[k] + ";"; }).join("\n") + "\n}\n";
  }

  function fit() {
    document.querySelectorAll(".stage").forEach(function (s) {
      var f = s.querySelector("iframe");
      if (!f) return;
      var w = +s.dataset.w, h = +s.dataset.h;
      /* Measure the frame's real content height ONCE. Re-measuring after the
         height attribute grows would feed back on any card whose body uses
         min-height:100vh, and the stage would climb without end. */
      if (!s.dataset.measured) {
        try {
          var d = f.contentDocument;
          if (d && d.body && d.body.children.length) {
            var real = Math.max(d.body.scrollHeight, d.documentElement.scrollHeight);
            if (real > h) h = Math.min(real, 1400);
            s.dataset.measured = h;
          }
        } catch (e) {}
      }
      if (s.dataset.measured) { h = +s.dataset.measured; f.setAttribute("height", h); }
      var avail = s.clientWidth;
      var k = avail < w ? avail / w : 1;
      f.style.transform = "scale(" + k + ")";
      s.style.height = Math.round(h * k) + "px";
    });
  }

  function spy() {
    var links = [].slice.call(document.querySelectorAll(".grp-i"));
    var best = -1;
    links.forEach(function (a, i) {
      var t = document.getElementById(a.getAttribute("href").slice(1));
      if (t && t.getBoundingClientRect().top <= 160) best = i;
    });
    links.forEach(function (a, i) { a.classList.toggle("on", i === best); });
  }

  function ready() {
    buildPanel();
    fit();
    paint();
    spy();
    document.querySelectorAll(".stage iframe").forEach(function (f) {
      f.addEventListener("load", function () {
        fit(); paint();
        /* React-rendered cards keep growing after load — re-measure. */
        [400, 1200, 2500].forEach(function (t) { window.setTimeout(fit, t); });
      });
    });
    var t = document.getElementById("tw-toggle");
    if (t) t.addEventListener("click", function () {
      document.body.classList.toggle("tw-open");
      setTimeout(fit, 260);
    });
    var r = document.getElementById("tw-reset");
    if (r) r.addEventListener("click", function () {
      state = {};
      buildPanel();
      paint();
    });
    var c = document.getElementById("tw-copy");
    if (c) c.addEventListener("click", function () {
      var text = exportCss();
      var out = document.getElementById("tw-out");
      if (out) { out.value = text; out.style.display = "block"; out.select(); }
      if (navigator.clipboard) navigator.clipboard.writeText(text).catch(function () {});
      c.textContent = "Copied";
      setTimeout(function () { c.textContent = "Export CSS"; }, 1400);
    });
    window.addEventListener("resize", function () { fit(); });
    window.addEventListener("scroll", spy, { passive: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", ready);
  else ready();
})();
