/*!
 * Copyright (c) 2026 AI Music @ Playlist (JS)
 * Source (https://github.com/mp-player/aimusic/blob/master/assets/js/mp3/playlist.js)
 * Licensed under MIT (https://github.com/mp-player/aimusic/blob/master/LICENSE)
**/

function MP3_Playlist() {
  const playlist = [{
    artist: "Awie",
    title: "Tragedi Oktober",
    album: "Ai Music (Psychedelic Rock)",
    file: "Awie - Tragedi Oktober.mp3"
  }, {
    artist: "Jinbara",
    title: "Cinta Semalam",
    album: "Ai Music (Metal)",
    file: "Jinbara - Cinta Semalam.mp3"
  }, {
    artist: "Masa",
    title: "Patahnya Sayap Malam",
    album: "Ai Music (Indie Pyschedelic Pop)",
    file: "Masa - Patahnya Sayap Malam.mp3"
  }, {
    artist: "Elly Mazlein",
    title: "Bunga Bakawali",
    album: "Ai Music (R&B Jazz Funk Rock)",
    file: "Elly Mazlein - Bunga Bakawali.mp3"
  }, {
    artist: "Inka Christie",
    title: "Rela",
    album: "Ai Music (Indie Pop R&B Psycho-Psychedelic)",
    file: "Inka Christie - Rela.mp3"
  }, {
    artist: "Nadia",
    title: "Salam Untuk Kekasih",
    album: "Ai Music (Modern Rock)",
    file: "Nadia - Salam Untuk Kekasih.mp3"
  }, {
    artist: "Jaja Miharja",
    title: "Cinta Sabun Mandi",
    album: "Ai Music (Rock Metal)",
    file: "Jaja Miharja - Cinta Sabun Mandi.mp3"
  }, {
    artist: "Fahmi Sahab",
    title: "Kopi Dangdut",
    album: "Ai Music (Mexican Flamenco)",
    file: "Fahmi Sahab - Kopi Dangdut.mp3"
  }, {
    artist: "Jamal Mirdad",
    title: "Jamilah",
    album: "Ai Music (Pop Fusion Saxophone)",
    file: "Jamal Mirdad - Jamilah.mp3"
  }, {
    artist: "King Nassar",
    title: "Seperti Mati Lampu",
    album: "Ai Music (Pop Rock)",
    file: "King Nassar - Seperti Mati Lampu.mp3"
  }, {
    artist: "D'lloyd",
    title: "Oh Tak Mungkin",
    album: "Ai Music (Progressive Rock)",
    file: "D'lloyd - Oh Tak Mungkin.mp3"
  }, {
    artist: "Bob Tutupoly",
    title: "Widuri",
    album: "Ai Music (Rock)",
    file: "Bob Tutupoly - Widuri.mp3"
  }, {
    artist: "Spring",
    title: "Pesanan Buat Kekasih",
    album: "Ai Music (Psychedelic Emo Rock)",
    file: "Spring - Pesanan Buat Kekasih.mp3"
  }, {
    artist: "Nike Ardilla",
    title: "Bintang Kehidupan",
    album: "Ai Music (SlowRock Renewal)",
    file: "Nike Ardilla - Bintang Kehidupan.mp3"
  }, {
    artist: "Siti Nurhaliza",
    title: "Seribu Kemanisan",
    album: "Ai Music (SlowRock Renewal)",
    file: "Siti Nurhaliza - Seribu Kemanisan.mp3"
  }, {
    artist: "Haida",
    title: "Hajat",
    album: "Ai Music (SlowRock Renewal)",
    file: "Haida - Hajat.mp3"
  }, {
    artist: "Exists",
    title: "Rahsia Pohon Cemara",
    album: "Ai Music (SlowRock Renewal)",
    file: "Exists - Rahsia Pohon Cemara.mp3"
  }, {
    artist: "Rahmat Ekamatra",
    title: "Siapa Di Hatimu",
    album: "Ai Music (Power Metal)",
    file: "Rahmat Ekamatra - Siapa Di Hatimu.mp3"
  }, {
    artist: "Iyeth Bustami",
    title: "Laksmana Raja Di Laut",
    album: "Ai Music (Arabic Metal-Epic Cinematic)",
    file: "Iyeth Bustami - Laksmana Raja Di Laut.mp3"
  }, {
    artist: "Rahim Maarof",
    title: "Istana Menanti",
    album: "Ai Music (Modern Rock Metal)",
    file: "Rahim Maarof - Istana Menanti.mp3"
  }, {
    artist: "Ari Lasso",
    title: "Hampa",
    album: "Ai Music (Indie Soundtrack)",
    file: "Ari Lasso - Hampa.mp3"
  }, {
    artist: "Kris",
    title: "Tiara",
    album: "Ai Music (Indie Psychedelic Rock-Alt)",
    file: "Kris - Tiara.mp3"
  }, {
    artist: "Mamat",
    title: "Salju Di Danau Rindu",
    album: "Ai Music (Psychedelic Rock)",
    file: "Mamat - Salju Di Danau Rindu.mp3"
  }, {
    artist: "Fauziah Latiff",
    title: "Setia Ku Korbankan",
    album: "Ai Music (Dreamy Funky)",
    file: "Fauziah Latiff - Setia Ku Korbankan.mp3"
  }, {
    artist: "New Boyz",
    title: "Sejarah Mungkin Berulang",
    album: "Ai Music (Power Metal-Epic Cinematic)",
    file: "New Boyz - Sejarah Mungkin Berulang.mp3"
  }, {
    artist: "Amy Mastura",
    title: "Meniti Hari",
    album: "Ai Music (Psychedelic Pop)",
    file: "Amy Mastura - Meniti Hari.mp3"
  }, {
    artist: "Exists",
    title: "Masih Terserlah Ayumu",
    album: "Ai Music (SlowRock Renewal)",
    file: "Exists - Masih Terserlah Ayumu.mp3"
  }, {
    artist: "Thomas Arya",
    title: "Bunga Edelweis",
    album: "Ai Music (Power Metal-Epic Emosional)",
    file: "Thomas Arya - Bunga Edelweis.mp3"
  }, {
    artist: "Budak Kacamata",
    title: "Bintang",
    album: "Ai Music (Indie Psychedelic Rock-Alt)",
    file: "Budak Kacamata - Bintang.mp3"
  }, {
    artist: "Nicky Astria",
    title: "Mengapa",
    album: "Ai Music (Shoegaze Psychedelic Pop)",
    file: "Nicky Astria - Mengapa.mp3"
  }, {
    artist: "Amuk",
    title: "Matahari",
    album: "Ai Music (Psychedelic Dream Pop)",
    file: "Amuk - Matahari.mp3"
  }, {
    artist: "Stings",
    title: "Adakah Kau Setia",
    album: "Ai Music (Power Metal)",
    file: "Stings - Adakah Kau Setia.mp3"
  }, {
    artist: "Anis Suraya",
    title: "Cinta Tersimpul Rapi",
    album: "Ai Music (Groovy Pop)",
    file: "Anis Suraya - Cinta Tersimpul Rapi.mp3"
  }, {
    artist: "Wings",
    title: "Jerangkung Dalam Almari",
    album: "Ai Music (Power Metal)",
    file: "Wings - Jerangkung Dalam Almari.mp3"
  }, {
    artist: "Iyeth Bustami",
    title: "Ijuk",
    album: "Ai Music (Arabic Metal-Epic Cinematic)",
    file: "Iyeth Bustami - Ijuk.mp3"
  }, {
    artist: "Bloodshed",
    title: "Srikandi Cintaku",
    album: "Ai Music (Shoegaze Psychedelic Pop)",
    file: "Bloodshed - Srikandi Cintaku.mp3"
  }, {
    artist: "Bill & Brod",
    title: "Singkong Dan Keju",
    album: "Ai Music (Rock)",
    file: "Bill & Brod - Singkong Dan Keju.mp3"
  }, {
    artist: "Cut Rani",
    title: "Salahmu Sendiri",
    album: "Ai Music (Power Metal)",
    file: "Cut Rani - Salahmu Sendiri.mp3"
  }, {
    artist: "Leon",
    title: "Balasan Janji Palsumu",
    album: "Ai Music (Power Metal-Epic Emosional)",
    file: "Leon - Balasan Janji Palsumu.mp3"
  }, {
    artist: "Yantzen",
    title: "Insan",
    album: "Ai Music (60s Indie Pop)",
    file: "Yantzen - Insan.mp3"
  }, {
    artist: "New Boyz",
    title: "Meraung",
    album: "Ai Music (Power Metal)",
    file: "New Boyz - Meraung.mp3"
  }, {
    artist: "Wings",
    title: "Ranggi Metropolis",
    album: "Ai Music (Psychedelic Rock)",
    file: "Wings - Ranggi Metropolis.mp3"
  }, {
    artist: "Siti Sarah",
    title: "Kesetiaan",
    album: "Ai Music (Indie Psychedelic)",
    file: "Siti Sarah - Kesetiaan.mp3"
  }, {
    artist: "Kerispatih",
    title: "Tapi Bukan Aku",
    album: "Ai Music (Modern Rock)",
    file: "Kerispatih - Tapi Bukan Aku.mp3"
  }, {
    artist: "Candy",
    title: "Akan Ku Tunggu",
    album: "Ai Music (Indie Psychedelic Pop)",
    file: "Candy - Akan Ku Tunggu.mp3"
  }, {
    artist: "Desire",
    title: "Bias Cinta",
    album: "Ai Music (Psychedelic Rock)",
    file: "Desire - Bias Cinta.mp3"
  }, {
    artist: "Dinamik",
    title: "Biar Putih Tulang",
    album: "Ai Music (Psychedelic Rock)",
    file: "Dinamik - Biar Putih Tulang.mp3"
  }, {
    artist: "Thomas Arya",
    title: "Merayu",
    album: "Ai Music (Power Metal)",
    file: "Thomas Arya - Merayu.mp3"
  }, {
    artist: "Tejas Renjana",
    title: "Pintu",
    album: "Ai Music (Rock) AI Generated",
    file: "Tejas Renjana - Pintu.mp3"
  }, {
    artist: "Axl’s",
    title: "Andai Dapat Ku Undurkan Masa",
    album: "Ai Music (Psychedelic)",
    file: "Axl's - Andai Dapat Ku Undurkan Masa.mp3"
  }, {
    artist: "Tommy J Pisa",
    title: "Dibatas Kota Ini",
    album: "Ai Music (Power Metal)",
    file: "Tommy J Pisa - Dibatas Kota Ini.mp3"
  }, {
    artist: "Shiela Majid",
    title: "Sinaran",
    album: "Ai Music (Psychedelic Rock)",
    file: "Shiela Majid - Sinaran.mp3"
  }, {
    artist: "Poppy Mercury",
    title: "Hati Siapa Tak Luka",
    album: "Ai Music (Power Metal)",
    file: "Poppy Mercury - Hati Siapa Tak Luka.mp3"
  }, {
    artist: "Lukanegara",
    title: "Bertakhta Diatas Tanah Mereka",
    album: "Ai Music (Power Metal)",
    file: "Lukanegara - Bertakhta Diatas Tanah Mereka.mp3"
  }, {
    artist: "May",
    title: "Pelayaran",
    album: "Ai Music (Thrash Metal)",
    file: "May - Pelayaran.mp3"
  }, {
    artist: "Kamikaze",
    title: "Luhur",
    album: "Ai Music (Rockwave Dream)",
    file: "Kamikaze - Luhur.mp3"
  }, {
    artist: "Awie & Search",
    title: "Nur Nilam Sari",
    album: "Ai Music (Rockwave Dream)",
    file: "Awie & Search - Nur Nilam Sari.mp3"
  }, {
    artist: "Medicine",
    title: "Tika Dan Saat Ini",
    album: "Ai Music (Psychedelic)",
    file: "Medicine - Tika Dan Saat Ini.mp3"
  }, {
    artist: "Spin",
    title: "Janji Kita",
    album: "Ai Music (Psychedelic Rock)",
    file: "Spin - Janji Kita.mp3"
  }, {
    artist: "Farah Dhiya",
    title: "Bertakhta Di Hati",
    album: "Ai Music (Psychedelic Rock)",
    file: "Farah Dhiya - Bertakhta Di Hati.mp3"
  }, {
    artist: "Izwan Pilus",
    title: "Kembali Senyum",
    album: "Ai Music (Psychedelic Rock)",
    file: "Izwan Pilus - Kembali Senyum.mp3"
  }, {
    artist: "Mutiara",
    title: "Mutiara",
    album: "Ai Music (Psychedelic Rock)",
    file: "Mutiara - Mutiara.mp3"
  }, {
    artist: "Ella",
    title: "Berlayar Tak Bertepian",
    album: "Ai Music (Psychedelic)",
    file: "Ella - Berlayar Tak Bertepian.mp3"
  }, {
    artist: "Pretty Ugly",
    title: "Jika Diberikan Ku Satu Peluang",
    album: "Ai Music (Psychedelic Indie Ballad)",
    file: "Pretty Ugly - Jika Diberikan Ku Satu Peluang.mp3"
  }, {
    artist: "Haslinda",
    title: "Sehati Sejiwa",
    album: "Ai Music (Psychedellic Ballad)",
    file: "Haslinda - Sehati Sejiwa.mp3"
  }, {
    artist: "Aan",
    title: "Cinta Melankolia",
    album: "Ai Music (Psychedelic)",
    file: "Aan - Cinta Melankolia.mp3"
  }, {
    artist: "Exists",
    title: "Alasanmu",
    album: "Ai Music (Laid-back Psychedelic)",
    file: "Exists - Alasanmu.mp3"
  }, {
    artist: "Spider",
    title: "Laukku Cukup Masin",
    album: "Ai Music (Psychedelic Indie)",
    file: "Spider - Laukku Cukup Masin.mp3"
  }, {
    artist: "Maya",
    title: "Matahari",
    album: "Ai Music (Psychedelic Dance)",
    file: "Maya - Matahari.mp3"
  }, {
    artist: "Ella",
    title: "Sembilu",
    album: "Ai Music (Psychedelic Rock)",
    file: "Ella - Sembilu.mp3"
  }, {
    artist: "Kangen Band",
    title: "Kehilanganmu Berat Bagiku",
    album: "Ai Music (Power Metal)",
    file: "Kangen Band - Kehilanganmu Berat Bagiku.mp3"
  }, {
    artist: "Ziana Zain",
    title: "Madah Berhelah",
    album: "Ai Music (Power Metal)",
    file: "Ziana Zain - Madah Berhelah.mp3"
  }, {
    artist: "XPDC",
    title: "Hidup Bersama",
    album: "Ai Music (Power Metal)",
    file: "XPDC - Hidup Bersama.mp3"
  }, {
    artist: "Spin",
    title: "Malam Semakin Dingin",
    album: "Ai Music (Power Metal)",
    file: "Spin - Malam Semakin Dingin.mp3"
  }, {
    artist: "Slash",
    title: "Taman Astakona",
    album: "Ai Music (Power Metal)",
    file: "Slash - Taman Astakona.mp3"
  }, {
    artist: "Siti Nurhaliza",
    title: "Purnama Merindu",
    album: "Ai Music (Rockchestra)",
    file: "Siti Nurhaliza - Purnama Merindu.mp3"
  }, {
    artist: "Rahmat Ekamatra",
    title: "Hanya Segenggam Setia",
    album: "Ai Music (Power Metal)",
    file: "Rahmat Ekamatra - Hanya Segenggam Setia.mp3"
  }, {
    artist: "New Boyz",
    title: "Marah Bukan Sifatku",
    album: "Ai Music (Orchestra Metal)",
    file: "New Boyz - Marah Bukan Sifatku.mp3"
  }, {
    artist: "Mojack Hafiz, Zynakal ft. Zamir Harith",
    title: "Dalam Diam",
    album: "Ai Music (Rockestra)",
    file: "Mojack Hafiz, Zynakal ft. Zamir Harith - Dalam Diam.mp3"
  }, {
    artist: "M. Daud Kilau",
    title: "Cek Mek Molek",
    album: "Ai Music (Rock)",
    file: "M. Daud Kilau - Cek Mek Molek.mp3"
  }, {
    artist: "Lestari",
    title: "Mahligai Dari Air Mataku",
    album: "Ai Music (Power Metal)",
    file: "Lestari - Mahligai Dari Air Mataku.mp3"
  }, {
    artist: "Kristal",
    title: "Cinta Tiga Segi",
    album: "Ai Music (Power Metal)",
    file: "Kristal - Cinta Tiga Segi.mp3"
  }, {
    artist: "Jefrrydin",
    title: "Seruling Anak Gembala",
    album: "Ai Music (Rock)",
    file: "Jefrrydin - Seruling Anak Gembala.mp3"
  }, {
    artist: "Irwansyah",
    title: "Camelia",
    album: "Ai Music (Power Metal-Epic Cinematic)",
    file: "Irwansyah - Camelia.mp3"
  }, {
    artist: "Azizah Maumere",
    title: "Aku Tak Berarti Bagimu",
    album: "Ai Music (Power Metal)",
    file: "Azizah Maumere - Aku Tak Berarti Bagimu.mp3"
  }, {
    artist: "Arief",
    title: "Tak Sedalam Ini",
    album: "Ai Music (Power Metal)",
    file: "Arief - Tak Sedalam Ini.mp3"
  }, {
    artist: "Jefrrydin",
    title: "Mas Mona",
    album: "Ai Music (Rock)",
    file: "Jefrrydin - Mas Mona.mp3"
  }];
  console.info(`Title: Ai Music (MP3 Playlist)\nCount: ${playlist.length}\nDescription: All Collection AI Music (Malay/Indo)`);
  return playlist;
}
