(async function () {
  const section = document.querySelector(".artist-videos");
  if (!section) return;

  const header = section.querySelector(".artist-videos__header");
  const embeds = Array.from(section.querySelectorAll(".yt-embed[data-youtube-url]"));

  async function fetchWithTimeout(url, ms = 5000) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), ms);
    try {
      return await fetch(url, { signal: ctrl.signal });
    } finally {
      clearTimeout(t);
    }
  }

  for (const el of embeds) {
    const videoUrl = el.dataset.youtubeUrl;
    const oembedUrl =
      "https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent(videoUrl);

    try {
      const res = await fetchWithTimeout(oembedUrl);

      if (!res.ok) {
        el.remove();
        continue;
      }

      const id = getYouTubeId(videoUrl);
      if (!id) {
        el.remove();
        continue;
      }

      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + id;
      iframe.loading = "lazy";
      iframe.allowFullscreen = true;
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

      el.appendChild(iframe);
    } catch (e) {
      el.remove();
    }
  }

  // remove header/section if nothing survived
  const remaining = section.querySelectorAll(".yt-embed iframe").length;

  if (remaining === 0) {
    section.remove();
  } else if (header) {
    header.style.display = "block";
  }

  function getYouTubeId(url) {
    try {
      const u = new URL(url);
      if (u.hostname === "youtu.be") return u.pathname.slice(1);
      if (u.hostname.includes("youtube.com")) {
        if (u.searchParams.get("v")) return u.searchParams.get("v");
        const m = u.pathname.match(/\/(embed|shorts)\/([^/?]+)/);
        if (m) return m[2];
      }
    } catch (_) {}
    return null;
  }
})();