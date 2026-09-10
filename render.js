/* ---------------------------------------------------------------
   GeoSum Web Apps - renderer
   Turns window.SITES into cards inside #frame-grid.
   Vanilla JS, no dependencies.
   --------------------------------------------------------------- */

(function () {
  "use strict";

  var grid = document.getElementById("frame-grid");
  var sites = window.SITES || [];

  // Inline SVG shown when an image is missing or fails to load.
  var FALLBACK_IMAGE =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180">' +
        '<rect width="100%" height="100%" fill="#d0d7de"/>' +
        '<text x="50%" y="50%" fill="#57606a" font-family="sans-serif" ' +
        'font-size="16" text-anchor="middle" dominant-baseline="middle">no image</text>' +
      "</svg>"
    );

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") { node.textContent = attrs[k]; }
      else { node.setAttribute(k, attrs[k]); }
    });
    (children || []).forEach(function (c) { node.appendChild(c); });
    return node;
  }

  function buildFrame(site) {
    var external = { href: site.url, target: "_blank", rel: "noopener noreferrer" };

    var img = el("img", {
      src: site.image || FALLBACK_IMAGE,
      alt: site.alt || site.title || "",
      loading: "lazy"
    });
    img.addEventListener("error", function () {
      if (img.src !== FALLBACK_IMAGE) { img.src = FALLBACK_IMAGE; }
    });

    var imageLink = el("a", Object.assign({ class: "frame-image-link" }, external), [img]);

    var titleLink = el("a", external);
    titleLink.textContent = site.title || site.url;

    var title = el("h2", { class: "frame-title" }, [titleLink]);
    var text = el("p", { class: "frame-text", text: site.text || "" });

    var body = el("div", { class: "frame-body" }, [title, text]);

    return el("article", { class: "frame" }, [imageLink, body]);
  }

  function render() {
    if (!grid) { return; }
    grid.textContent = "";
    if (!sites.length) {
      grid.appendChild(el("p", { text: "No sites configured yet. Edit sites.js." }));
      return;
    }
    var fragment = document.createDocumentFragment();
    sites.forEach(function (site) { fragment.appendChild(buildFrame(site)); });
    grid.appendChild(fragment);
  }

  render();
})();
