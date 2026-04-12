/*!
 * Copyright (c) 2026 AI Music @ Script (JS)
 * Source (https://github.com/mp-player/aimusic/blob/master/assets/js/script.js)
 * Licensed under MIT (https://github.com/mp-player/aimusic/blob/master/LICENSE)
**/

(function () {
  "use strict";

  window.addEventListener("pageshow", () => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", openPage);
    } else {
      openPage();
    }
  });

  function openPage() {
    document.body.removeAttribute("hidden");
    if (!manageData().get("item-store")) {
      openDialog({
        text: "Selamat datang ke AI Music!",
        time: 5000
      }, true);
    }
  }

  window.addEventListener("online", checkNetworkStatus);
  window.addEventListener("offline", checkNetworkStatus);

  const modalDialog = document.getElementById("modalDialog");
  const modalMessage = document.getElementById("modalMessage");

  function checkNetworkStatus() {
    if (!navigator.onLine) {
      openDialog({
        text: "Sambungan gagal. Sila pastikan rangkaian internet anda telah tersambung",
        color: "#cc006d"
      }, true);
      modalDialog.classList.add("disabled");
      document.body.style.pointerEvents = "none";
    } else {
      openDialog({}, false);
      modalDialog.classList.remove("disabled");
      document.body.style.pointerEvents = "auto";
    }
  }
  checkNetworkStatus();

  function openDialog(msg, target) {
    if (!msg || target === undefined) {
      console.error('Open dialog is not defined.\nTo open it use: openDialog({text: "Text Message", color: "#ff00ff", time: 3000}, true) or openDialog({}, false).');
      return;
    }
    const {text = "", color = "#549", time} = msg;
    const isDialogOpen = window.getComputedStyle(modalDialog).display !== "none";
    if (target === true && !isDialogOpen) {
      modalMessage.textContent = text;
      modalMessage.style.color = color;
      modalDialog.showModal();
      if (time) {
        setTimeout(() => {
          modalDialog.close();
          modalMessage.textContent = "";
        }, time);
      }
      return true;
    }
    if (target === false && isDialogOpen) {
      modalDialog.close();
      modalMessage.textContent = "";
      return false;
    }
  }
	
  const playlistBtn = document.getElementById("playlist");
  const bookmarkBtn = document.getElementById("bookmark");
  const downloadBtn = document.getElementById("download");
  const playlistSong = document.getElementById("playlistSong");
  const playlistBookmark = document.getElementById("playlistBookmark");
  const audioPlayer = document.getElementById("audio");
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const repeatBtn = document.getElementById("repeatBtn");
  const progressBar = document.getElementById("progressBar");
  const progress = document.getElementById("progress");
  const currentTimeEl = document.getElementById("currentTime");
  const fullTimeEl = document.getElementById("fullTime");
  const currentSongEl = document.getElementById("currentSong");
  const overlay = document.getElementById("overlay");
  const downloadBox = document.getElementById("downloadBox");
  const labelSong = document.getElementById("labelSong");
  const downloadFile = document.getElementById("downloadFile");
  const canvas = document.getElementById("visualizer");

  audioPlayer.setAttribute("preload", "metadata");
  audioPlayer.setAttribute("crossorigin", "anonymous");

  let currentIndex = 0;
  let currentIndex2 = 0;
  let isPlaying = false;
  let isPaused = false;
  let isShuffle = false;
  let isRepeat = false;

  const playlist = MP3_Playlist();

  async function initPlaylist() {
    const itemList = await playlist;
    itemList.forEach((item, index) => {
      const {artist, title, album, file} = item;
      const list = document.createElement("div");
      const itemEl = document.createElement("div");
      const titleEl = document.createElement("span");
      const artistEl = document.createElement("span");
      const listedEl = document.createElement("div");
      list.classList.add("list");
      list.setAttribute("data-id", index);
      list.setAttribute("data-song", `${artist} - ${title}`);
      itemEl.classList.add("item");
      titleEl.classList.add("title");
      artistEl.classList.add("artist");
      titleEl.textContent = title;
      artistEl.textContent = artist;
      itemEl.appendChild(titleEl);
      itemEl.appendChild(artistEl);
      listedEl.classList.add("listed");
      listedEl.setAttribute("data-artist", artist);
      listedEl.setAttribute("data-title", title);
      listedEl.setAttribute("data-album", album);
      listedEl.setAttribute("data-file", file);
      listedEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M16 10.975v13.025l-6-5.269-6 5.269v-24h6.816c-1.123 1.168-1.816 2.752-1.816 4.5 0 3.736 3.162 6.768 7 6.475zm4-6.475c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"/></svg>';
      list.appendChild(itemEl);
      list.appendChild(listedEl);
      playlistSong.appendChild(list);
      list.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("listed")) {
          e.stopPropagation();
        } else {
          playerLoadSong(e.target, "playlist");
        }
      });
      listedEl.addEventListener("click", (e) => {
        e.preventDefault();
        const itemArtist = e.target.dataset.artist;
        const itemTitle = e.target.dataset.title;
        const itemAlbum = e.target.dataset.album;
        const itemFile = e.target.dataset.file;
        if (e.target.classList.contains("mark")) {
          e.target.classList.remove("mark");
          e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M16 10.975v13.025l-6-5.269-6 5.269v-24h6.816c-1.123 1.168-1.816 2.752-1.816 4.5 0 3.736 3.162 6.768 7 6.475zm4-6.475c0 2.485-2.018 4.5-4.5 4.5-2.484 0-4.5-2.015-4.5-4.5s2.016-4.5 4.5-4.5c2.482 0 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"/></svg>';
          manageData("delete", {title: itemTitle});
        } else {
          e.target.classList.add("mark");
          e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="orange"><path d="M16 10.975v13.025l-6-5.269-6 5.269v-24h6.816c-1.123 1.168-1.816 2.752-1.816 4.5 0 3.736 3.162 6.768 7 6.475zm4-6.475c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122l-1.414 1.414-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.415 1.414 1.414.708-.708-1.414-1.413 1.414-1.414-.708-.708z"/></svg>';
          manageData("push", {artist: itemArtist, title: itemTitle, album: itemAlbum, file: itemFile});
        }
      });
    });
    loadSong(currentIndex);
    updateBookmark();
    watcherBookmark();
  }
  initPlaylist();

  function updateBookmark() {
    const storage = localStorage.setItem;
    localStorage.setItem = function(key, value) {
      storage.apply(this, arguments);
      if (key.match("item-store")) {
        watcherBookmark();
        if (/\[\]/i.test(value) && value.length <= 2) {
          playlistBookmark.innerHTML = "";
          writerBookmark();
        }
      }
    }
  }

  function watcherBookmark() {
    const itemStore = manageData().get("item-store");
    const itemListed = document.querySelectorAll(".listed");
    const itemBookmark = document.querySelectorAll(".playlist-bookmark .list");
    if (itemStore) {
      itemStore.forEach((item, index) => {
        const {artist, title} = item;
        const list = document.createElement("div");
        const itemEl = document.createElement("div");
        const titleEl = document.createElement("span");
        const artistEl = document.createElement("span");
        list.classList.add("list");
        list.setAttribute("data-id", index);
        list.setAttribute("data-song", `${artist} - ${title}`);
        itemEl.classList.add("item");
        titleEl.classList.add("title");
        artistEl.classList.add("artist");
        titleEl.textContent = title.trim();
        artistEl.textContent = artist.trim();
        itemEl.appendChild(titleEl);
        itemEl.appendChild(artistEl);
        list.appendChild(itemEl);
        playlistBookmark.appendChild(list);
        list.addEventListener("click", (e) => {
          e.preventDefault();
          playerLoadSong(e.target, "bookmark");
        });
        itemListed.forEach((elem) => {
          const itemTitle = new RegExp(elem.dataset.title, "i");
          if (itemTitle.test(title)) {
            elem.classList.add("mark");
            elem.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="orange"><path d="M16 10.975v13.025l-6-5.269-6 5.269v-24h6.816c-1.123 1.168-1.816 2.752-1.816 4.5 0 3.736 3.162 6.768 7 6.475zm4-6.475c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122l-1.414 1.414-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.415 1.414 1.414.708-.708-1.414-1.413 1.414-1.414-.708-.708z"/></svg>';
          }
        });
        itemBookmark.forEach((elem) => {
          if (index) {
            const id = elem.dataset.id;
            if (id.match(index) === null) {
              elem.remove();
            }
          } else {
            if (elem) elem.remove();
          }
        });
      });
      writerBookmark();
    }
  }

  function writerBookmark() {
    const itemChild = playlistBookmark.children;
    if (itemChild.length <= 0) {
      playlistBookmark.innerHTML = '<div id="textMsg" style="postion:absolute;inset:0;width:fit-content;height:fit-content;margin:auto;text-align:center;"><span style="color:#f0ffff;font-size:1em;">Tiada lagu kegemaran disimpan.</span><br><br><small style="color:#bbb;font-size:0.85em;">Sila tambah lagu kegemaran anda di senarai main.</small></div>';
    } else if (itemChild.length >= 1) {
      const textMsg = document.getElementById("textMsg");
      if (textMsg) textMsg.remove();
    }
  }

  function manageData(action, item) {
    const itemStore = localStorage.getItem("item-store");
    if (action && item) {
      let data = JSON.parse(itemStore) || [];
      switch (action) {
        case "push": data.push({artist: item.artist, title: item.title, album: item.album, file: item.file});
          break;
        case "delete": data = data.filter(i => i.title !== item.title);
          break;
        default: break;
      }
      localStorage.setItem("item-store", JSON.stringify(data));
    } else {
      return {
        get: function(store) {
          if (store === "item-store") {
            return itemStore ? JSON.parse(itemStore) : [];
          }
        }
      }
    }
  }

  function playerLoadSong(target, list) {
    if (target && list) {
      if (list === "playlist") {
        currentIndex = (target.dataset.id) % playlist.length;
        getIndex(currentIndex);
      } else if (list === "bookmark") {
        const itemStore = manageData().get("item-store");
        currentIndex2 = (target.dataset.id) % itemStore.length;
        getIndex(currentIndex2);
      }
    } else {
      getIndex(target);
    }
  }

  function getIndex(index) {
    if (!audioPlayer.paused) audioPlayer.pause();
    loadSong(index);
  }

  function loadSong(index) {
    let artist, title, album, file;
    const itemStore = manageData().get("item-store");
    if (!playlistSong.classList.contains("hidden")) {
      if (index < 0 || index >= playlist.length) return;
      artist = playlist[index].artist;
      title = playlist[index].title;
      album = playlist[index].album;
      file = playlist[index].file;
    } else if (!playlistBookmark.classList.contains("hidden")) {
      if (index < 0 || index >= itemStore.length) return;
      artist = itemStore[index].artist;
      title = itemStore[index].title;
      album = itemStore[index].album;
      file = itemStore[index].file;
    }
    const currentSong = `${artist} - ${title}`;
    currentSongEl.setAttribute("data-playing", currentSong);
    currentSongEl.innerHTML = `<span>🎵 &nbsp; ${artist} - ${title}</span><span class="album">${album}</span>`;
    const itemList1 = document.querySelectorAll(".playlist-song .list");
    itemList1.forEach((list) => {
      if (list.dataset.song.match(currentSong)) {
        list.classList.add("active");
        list.scrollIntoView({block: "center", behavior: "smooth"});
      } else {
        list.classList.remove("active");
      }
    });
    const itemList2 = document.querySelectorAll(".playlist-bookmark .list");
    itemList2.forEach((list) => {
      if (list.dataset.song.match(currentSong)) {
        list.classList.add("active");
        list.scrollIntoView({block: "center", behavior: "smooth"});
      } else {
        list.classList.remove("active");
      }
    });
    const songUrl = `${window.atob("aHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL21wLXBsYXllci9haW11c2ljQG1hc3Rlci9hdWRpby9tdXNpYy8=")}${encodeURIComponent(file)}`;
    const baseUrl = new URL(`audio/music/${encodeURIComponent(file)}`, location.href).href;
    getSource(songUrl).then((isActive) => {
      const source = isActive ? songUrl : baseUrl;
      if (source) {
        audioLoad(source);
        labelSong.textContent = `${currentSong}.mp3`;
        downloadFile.setAttribute("data-src", source);
        downloadFile.setAttribute("data-title", `${currentSong}.mp3`);
      }
    });
  }

  async function getSource(url) {
    try {
      const response = await fetch(url, {method: "HEAD"});
      return response.ok ? true : false;
    } catch(err) {
      return false;
    }
  }

  function audioLoad(source) {
    audioPlayer.src = source;
    audioPlayer.addEventListener("loadstart", (e) => {
      e.target.currentTime = 0;
    }, {once: true});
    audioPlayer.addEventListener("canplaythrough", (e) => {
      canPlayAudio(e.target).then((allowed) => {
         if (allowed) e.target.play();
      });
    }, {once: true});
  }

  async function canPlayAudio(audio) {
    if (audio instanceof HTMLAudioElement) {
      try {
        await audio.play();
        audio.pause();
        return true;
      } catch(err) {
        return false;
      }
    }
  }

  function controlsPlayer(setCue) {
    const shuffle = localStorage.getItem("isShuffle");
    const repeat = localStorage.getItem("isRepeat");
    const defaultColor = "linear-gradient(150deg, #549, #548, #547, #546)";
    const activeColor = "rgb(255, 152, 0)";
    if (setCue === "shuffle") {
      isShuffle = !isShuffle;
      localStorage.setItem("isShuffle", isShuffle.toString());
      shuffleBtn.style.background = isShuffle ? activeColor : defaultColor;
      isRepeat = false;
      localStorage.setItem("isRepeat", "false");
      repeatBtn.style.background = defaultColor;
    } else if (setCue === "repeat") {
      isRepeat = !isRepeat;
      localStorage.setItem("isRepeat", isRepeat.toString());
      repeatBtn.style.background = isRepeat ? activeColor : defaultColor;
      isShuffle = false;
      localStorage.setItem("isShuffle", "false");
      shuffleBtn.style.background = defaultColor;
    } else {
      isShuffle = shuffle === "true";
      isRepeat = repeat === "true";
      shuffleBtn.style.background = isShuffle ? activeColor : defaultColor;
      repeatBtn.style.background = isRepeat ? activeColor : defaultColor;
    }
  }
  controlsPlayer();

  function elementActive(target) {
    const elemActive = document.querySelectorAll(".active");
    elemActive.forEach((elem) => {
      if (elem) {
        elem.scrollIntoView({block: "center", behavior: "smooth"});
      } else {
        target.scrollTo({top: 0, behavior: "instant"});
      }
    });
  }

  playlistBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (playlistSong.classList.contains("hidden")) {
      playlistSong.classList.remove("hidden");
      playlistBookmark.classList.add("hidden");
    }
    elementActive(playlistSong);
  });

  bookmarkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (playlistBookmark.classList.contains("hidden")) {
      playlistBookmark.classList.remove("hidden");
      playlistSong.classList.add("hidden");
    }
    elementActive(playlistBookmark);
  });

  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const allActive = document.querySelectorAll(".active");
    allActive.forEach((active) => {
      if (active) {
        active.scrollIntoView({block: "center", behavior: "smooth"});
      }
    });
    setTimeout(() => {
      downloadBox.classList.add("display");
      overlay.classList.add("display");
    }, 500);
  });

  downloadFile.addEventListener("click", (e) => {
    e.preventDefault();
    const file = e.target.dataset.src;
    const fileName = e.target.dataset.title;
    downloadContentFiles(file, fileName);
    setTimeout(() => {
      downloadBox.classList.remove("display");
      overlay.classList.remove("display");
    }, 5000);
  });

  async function downloadContentFiles(file, fileName) {
    try {
      let blob;
      if (file instanceof Blob) {
        blob = file;
      } else if (typeof file === "string") {
        const response = await fetch(file, {mode: "cors"});
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        blob = await response.blob();
      } else {
        throw new Error("Invalid file type. Must be a Blob or URL string.");
      }
      const blobURL = URL.createObjectURL(blob);
      const windowTab = window.open("", "_blank");
      if (!windowTab) {
        alert("Popup disekat! Sila benarkan popup untuk tapak ini.");
        URL.revokeObjectURL(blobURL);
        return;
      }
      windowTab.document.write(`
        <html>
          <body>
            <a id="dl" href="${blobURL}" download="${fileName}"></a>
            <script>
              document.getElementById("dl").click();
              window.close();
            <\/script>
          </body>
        </html>
      `);
      windowTab.document.close();
      setTimeout(() => {
        URL.revokeObjectURL(blobURL);
      }, 10000);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Gagal memuat turun fail audio: " + error.message);
    }
  }

  overlay.addEventListener("click", (e) => {
    e.preventDefault();
    downloadBox.classList.remove("display");
    overlay.classList.remove("display");
  });

  playBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (audioPlayer.src && audioPlayer.paused) audioPlayer.play();
  });

  pauseBtn.addEventListener("click", (e) => {
     e.preventDefault();
     if (!audioPlayer.paused) audioPlayer.pause();
  });

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!playlistSong.classList.contains("hidden")) {
      if (isShuffle) {
        currentIndex = Math.floor(Math.random() * playlist.length);
      } else {
        currentIndex = (currentIndex + 1) % playlist.length;
      }
      playerLoadSong(currentIndex);
    } else if (!playlistBookmark.classList.contains("hidden")) {
      const itemStore = manageData().get("item-store");
      if (isShuffle) {
        currentIndex2 = Math.floor(Math.random() * itemStore.length);
      } else {
        currentIndex2 = (currentIndex2 + 1) % itemStore.length;
      }
      playerLoadSong(currentIndex2);
    }
  });

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!playlistSong.classList.contains("hidden")) {
      if (isShuffle) {
        currentIndex = Math.floor(Math.random() * playlist.length);
      } else {
        currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
      }
      playerLoadSong(currentIndex);
    } else if (!playlistBookmark.classList.contains("hidden")) {
      const itemStore = manageData().get("item-store");
      if (isShuffle) {
        currentIndex2 = Math.floor(Math.random() * itemStore.length);
      } else {
        currentIndex2 = (currentIndex2 - 1 + itemStore.length) % itemStore.length;
      }
      playerLoadSong(currentIndex2);
    }
  });

  shuffleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    controlsPlayer("shuffle");
  });

  repeatBtn.addEventListener("click", (e) => {
    e.preventDefault();
    controlsPlayer("repeat");
  });

  audioPlayer.addEventListener("playing", () => {
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
  });

  audioPlayer.addEventListener("play", () => {
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
  });

  audioPlayer.addEventListener("pause", () => {
    playBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
  });

  audioPlayer.addEventListener("ended", () => {
    if (!audioPlayer.paused) audioPlayer.pause();
    if (isRepeat) {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    } else {
      nextBtn.click();
    }
  });

  audioPlayer.addEventListener("error", () => {
    if (!audioPlayer.paused) audioPlayer.pause();
    if (!playlistSong.classList.contains("hidden")) {
      if (isShuffle) {
        currentIndex = Math.floor(Math.random() * playlist.length);
      } else {
        currentIndex = (currentIndex + 1) % playlist.length;
      }
      playerLoadSong(currentIndex);
    } else if (!playlistBookmark.classList.contains("hidden")) {
      const itemStore = manageData().get("item-store");
      if (isShuffle) {
        currentIndex2 = Math.floor(Math.random() * itemStore.length);
      } else {
        currentIndex2 = (currentIndex2 + 1) % itemStore.length;
      }
      playerLoadSong(currentIndex2);
    }
    openDialog({
      text: "Ralat: Fail audio tidak dapat dimuatkan.",
      time: 3000
    }, true);
  });

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
  }

  audioPlayer.addEventListener("loadedmetadata", () => {
    fullTimeEl.textContent = formatTime(audioPlayer.duration);
  });

  audioPlayer.addEventListener("timeupdate", () => {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = percent + "%";
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
  });

  progressBar.addEventListener("click", (e) => {
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percent = offsetX / rect.width;
    audioPlayer.currentTime = percent * audioPlayer.duration;
  });

  let isBoostEnabled = false;
  let audioContext, sourceNode, lowShelf, highShelf, noiseGate, gainNode;
  
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  sourceNode = audioContext.createMediaElementSource(audioPlayer);

  function setupAudioSound() {
    if (isBoostEnabled) return;
    lowShelf = audioContext.createBiquadFilter();
    lowShelf.type = "lowshelf";
    lowShelf.frequency.value = 150;
    lowShelf.gain.value = 6;
    highShelf = audioContext.createBiquadFilter();
    highShelf.type = "highshelf";
    highShelf.frequency.value = 3000;
    highShelf.gain.value = 4;
    noiseGate = audioContext.createDynamicsCompressor();
    noiseGate.threshold.value = -100;
    noiseGate.knee.value = 40;
    noiseGate.ratio.value = 20;
    noiseGate.attack.value = 0.003;
    noiseGate.release.value = 0.25;
    gainNode = audioContext.createGain();
    gainNode.gain.value = 2;
    sourceNode.connect(noiseGate).connect(lowShelf).connect(highShelf).connect(gainNode).connect(audioContext.destination);
    isBoostEnabled = true;
    console.info("HQ Audio with 5.1 Surround Sound is Active.\nSee: https://en.wikipedia.org/wiki/5.1_surround_sound");
  }
  audioContext?.resume();
  setupAudioSound();

  const analyser = audioContext.createAnalyser();
  sourceNode.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  const ctx = canvas.getContext("2d");

  function equalDraw() {
    requestAnimationFrame(equalDraw);
    analyser.getByteFrequencyData(dataArray);
    ctx.fillStyle = "#1e1e1e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i] / 2;
      ctx.fillStyle = `rgb(${barHeight + 100}, 130, 355)`;
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
  }
  equalDraw();
})();
