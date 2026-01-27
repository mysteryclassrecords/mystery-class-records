(function () {
  const players = document.querySelectorAll('.mcr-player');

  function pauseAllExcept(currentAudio) {
    document.querySelectorAll('.mcr-player__audio').forEach(a => {
      if (a !== currentAudio) {
        a.pause();
        const p = a.closest('.mcr-player');
        if (p) p.querySelector('.mcr-player__btn').textContent = '▶';
      }
    });
  }

  players.forEach(player => {
    const src = player.getAttribute('data-src');
    const audio = player.querySelector('.mcr-player__audio');
    const btn = player.querySelector('.mcr-player__btn');
    const progress = player.querySelector('.mcr-player__progress');

    // Load source
    audio.src = src;

    btn.addEventListener('click', () => {
      if (audio.paused) {
        pauseAllExcept(audio);
        audio.play();
        player.classList.add('is-playing');
      } else {
        audio.pause();
        player.classList.remove('is-playing');
      }
    });

    audio.addEventListener('ended', () => {
    });
  });

  document.querySelectorAll(".mcr-player").forEach((player) => {
  const audio = player.querySelector(".mcr-player__audio");
  const labelBtn = player.querySelector(".mcr-player__label");

  // Ensure src is set from data-src
  if (!audio.src) audio.src = player.dataset.src;

  labelBtn.addEventListener("click", async () => {
    // If already playing, do nothing (one-way switch)
    if (!audio.paused) return;

    try {
      await audio.play();
      player.classList.add("is-playing");
    } catch (err) {
      console.warn("Playback failed:", err);
    }
  });

  // Keep class in sync if audio ends or is paused elsewhere
  audio.addEventListener("ended", () => player.classList.remove("is-playing"));
  audio.addEventListener("pause", () => player.classList.remove("is-playing"));
  audio.addEventListener("play", () => player.classList.add("is-playing"));
});

})();