/*!
 * Copyright (c) 2026 AI Music @ MP3 Tags (JS)
 * Source (https://github.com/mp-player/aimusic/blob/master/assets/js/tool/mp3tag.js)
 * Licensed under MIT (https://github.com/mp-player/aimusic/blob/master/LICENSE)
 *
 * Universal MP3 tag reader (ID3v1 + ID3v2)
**/

function getMP3Tags(file, callback) {
  // Try ID3v2 (start of file)
  httpRangeRequest(file, 0, 10000, function(startBuffer) {
    const view = new DataView(startBuffer);
    if (getText(view, 0, 3) === "ID3") {
      const tags = parseID3v2(view, startBuffer);
      callback(tags);
    } else {
      // Try ID3v1 (last 128 bytes)
      getFileSize(file, function(size) {
        if (!size) return callback(null);
        httpRangeRequest(file, size - 128, size - 1, function(endBuffer) {
          const tags = parseID3v1(new DataView(endBuffer));
          callback(tags);
        });
      });
    }
  });
}

// Make a range request with XMLHttpRequest
function httpRangeRequest(file, start, end, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", file, true);
  xhr.responseType = "arraybuffer";
  xhr.setRequestHeader("Range", `bytes=${start}-${end}`);
  xhr.onload = () => {
    if (xhr.status === 206 || xhr.status === 200 || xhr.status === 0) {
      cb(xhr.response);
    } else {
      console.error("Range request failed:", xhr.status);
      cb(null);
    }
  };
  xhr.onerror = () => cb(null);
  xhr.send();
}

// Get file size via HEAD request
function getFileSize(file, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("HEAD", file, true);
  xhr.onload = () => {
    const len = xhr.getResponseHeader("Content-Length");
    cb(len ? parseInt(len, 10) : null);
  };
  xhr.onerror = () => cb(null);
  xhr.send();
}

// Parse ID3v1 tags
function parseID3v1(view) {
  if (getText(view, 0, 3) !== "TAG") return null;
  return {
    version: "ID3v1",
    title: getText(view, 3, 30),
    artist: getText(view, 33, 30),
    album: getText(view, 63, 30),
    year: getText(view, 93, 4)
  };
}

// Parse ID3v2 tags
function parseID3v2(view, buffer) {
  const version = `2.${view.getUint8(3)}.${view.getUint8(4)}`;
  const tagSize = readSynchsafeInt(view, 6);
  let offset = 10;
  const tags = {version};
  while (offset < tagSize) {
    const frameID = getText(view, offset, 4);
    const frameSize = readFrameSize(view, offset + 4);
    if (!frameID.trim() || frameSize <= 0) break;
    if (frameID[0] === "T") { // Text frame
      const encoding = view.getUint8(offset + 10);
      tags[frameID] = getText(view, offset + 11, frameSize - 1, encoding);
    } else if (frameID === "APIC") { // Album art
      const encoding = view.getUint8(offset + 10);
      let i = offset + 11;
      let mime = "";
      while (view.getUint8(i) !== 0) mime += String.fromCharCode(view.getUint8(i++));
      i++;
      const picType = view.getUint8(i++);
      let desc = "";
      while (view.getUint8(i) !== 0) desc += String.fromCharCode(view.getUint8(i++));
      i++;
      const imageData = buffer.slice(i, offset + 10 + frameSize);
      tags["APIC"] = {mime, description: desc, data: imageData};
    }
    offset += 10 + frameSize;
  }
  return tags;
}

// Helpers
function readSynchsafeInt(view, offset) {
  return (view.getUint8(offset) & 0x7f) << 21|(view.getUint8(offset + 1) & 0x7f) << 14|(view.getUint8(offset + 2) & 0x7f) << 7|(view.getUint8(offset + 3) & 0x7f);
}
function readFrameSize(view, offset) {
  return (view.getUint8(offset) << 24)|(view.getUint8(offset + 1) << 16)|(view.getUint8(offset + 2) << 8)|(view.getUint8(offset + 3));
}
function getText(view, offset, length, encoding = 0) {
  let text = "";
  if (encoding === 0) { // ISO-8859-1
    for (let i = offset; i < offset + length; i++) {
      try {
        if (view.getUint8(i) === 0) break;
        text += String.fromCharCode(view.getUint8(i));
      } catch(err) {
        console.error(err);
      }
    }
  } else if (encoding === 1) { // UTF-16
    const bom = view.getUint16(offset);
    const littleEndian = bom === 0xFFFE;
    for (let i = offset + 2; i < offset + length; i += 2) {
      const code = view.getUint16(i, littleEndian);
      if (code === 0) break;
      text += String.fromCharCode(code);
    }
  }
  return text.trim();
}
