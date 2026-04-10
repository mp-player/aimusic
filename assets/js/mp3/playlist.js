/*!
 * Copyright (c) 2026 AI Music @ Playlist (JS)
 * Source (https://github.com/mp-player/aimusic/blob/master/assets/js/mp3/playlist.js)
 * Licensed under MIT (https://github.com/mp-player/aimusic/blob/master/LICENSE)
**/

function MP3_Playlist() {
  const playlist = [{
    artist: "Awie",
    title: "Tragedi Oktober",
    file: "Awie - Tragedi Oktober.mp3"
  }, {
    artist: "Jinbara",
    title: "Cinta Semalam",
    file: "Jinbara - Cinta Semalam.mp3"
  }, {
    artist: "Masa",
    title: "Patahnya Sayap Malam",
    file: "Masa - Patahnya Sayap Malam.mp3"
  }, {
    artist: "Elly Mazlein",
    title: "Bunga Bakawali",
    file: "Elly Mazlein - Bunga Bakawali.mp3"
  }, {
    artist: "Inka Christie",
    title: "Rela",
    file: "Inka Christie - Rela.mp3"
  }, {
    artist: "Nadia",
    title: "Salam Untuk Kekasih",
    file: "Nadia - Salam Untuk Kekasih.mp3"
  }, {
    artist: "Jaja Miharja",
    title: "Cinta Sabun Mandi",
    file: "Jaja Miharja - Cinta Sabun Mandi.mp3"
  }, {
    artist: "Fahmi Sahab",
    title: "Kopi Dangdut",
    file: "Fahmi Sahab - Kopi Dangdut.mp3"
  }, {
    artist: "Jamal Mirdad",
    title: "Jamilah",
    file: "Jamal Mirdad - Jamilah.mp3"
  }, {
    artist: "King Nassar",
    title: "Seperti Mati Lampu",
    file: "King Nassar - Seperti Mati Lampu.mp3"
  }, {
    artist: "D'lloyd",
    title: "Oh Tak Mungkin",
    file: "D'lloyd - Oh Tak Mungkin.mp3"
  }, {
    artist: "Bob Tutupoly",
    title: "Widuri",
    file: "Bob Tutupoly - Widuri.mp3"
  }, {
    artist: "Spring",
    title: "Pesanan Buat Kekasih",
    file: "Spring - Pesanan Buat Kekasih.mp3"
  }, {
    artist: "Nike Ardilla",
    title: "Bintang Kehidupan",
    file: "Nike Ardilla - Bintang Kehidupan.mp3"
  }, {
    artist: "Siti Nurhaliza",
    title: "Seribu Kemanisan",
    file: "Siti Nurhaliza - Seribu Kemanisan.mp3"
  }, {
    artist: "Haida",
    title: "Hajat",
    file: "Haida - Hajat.mp3"
  }, {
    artist: "Exists",
    title: "Rahsia Pohon Cemara",
    file: "Exists - Rahsia Pohon Cemara.mp3"
  }, {
    artist: "Rahmat Ekamatra",
    title: "Siapa Di Hatimu",
    file: "Rahmat Ekamatra - Siapa Di Hatimu.mp3"
  }, {
    artist: "Iyeth Bustami",
    title: "Laksmana Raja Di Laut",
    file: "Iyeth Bustami - Laksmana Raja Di Laut.mp3"
  }, {
    artist: "Rahim Maarof",
    title: "Istana Menanti",
    file: "Rahim Maarof - Istana Menanti.mp3"
  }, {
    artist: "Ari Lasso",
    title: "Hampa",
    file: "Ari Lasso - Hampa.mp3"
  }, {
    artist: "Kris",
    title: "Tiara",
    file: "Kris - Tiara.mp3"
  }, {
    artist: "Mamat",
    title: "Salju Di Danau Rindu",
    file: "Mamat - Salju Di Danau Rindu.mp3"
  }, {
    artist: "Fauziah Latiff",
    title: "Setia Ku Korbankan",
    file: "Fauziah Latiff - Setia Ku Korbankan.mp3"
  }, {
    artist: "New Boyz",
    title: "Sejarah Mungkin Berulang",
    file: "New Boyz - Sejarah Mungkin Berulang.mp3"
  }, {
    artist: "Amy Mastura",
    title: "Meniti Hari",
    file: "Amy Mastura - Meniti Hari.mp3"
  }, {
    artist: "Exists",
    title: "Masih Terserlah Ayumu",
    file: "Exists - Masih Terserlah Ayumu.mp3"
  }, {
    artist: "Thomas Arya",
    title: "Bunga Edelweis",
    file: "Thomas Arya - Bunga Edelweis.mp3"
  }, {
    artist: "Budak Kacamata",
    title: "Bintang",
    file: "Budak Kacamata - Bintang.mp3"
  }, {
    artist: "Nicky Astria",
    title: "Mengapa",
    file: "Nicky Astria - Mengapa.mp3"
  }, {
    artist: "Amuk",
    title: "Matahari",
    file: "Amuk - Matahari.mp3"
  }, {
    artist: "Stings",
    title: "Adakah Kau Setia",
    file: "Stings - Adakah Kau Setia.mp3"
  }, {
    artist: "Anis Suraya",
    title: "Cinta Tersimpul Rapi",
    file: "Anis Suraya - Cinta Tersimpul Rapi.mp3"
  }, {
    artist: "Wings",
    title: "Jerangkung Dalam Almari",
    file: "Wings - Jerangkung Dalam Almari.mp3"
  }, {
    artist: "Iyeth Bustami",
    title: "Ijuk",
    file: "Iyeth Bustami - Ijuk.mp3"
  }, {
    artist: "Bloodshed",
    title: "Srikandi Cintaku",
    file: "Bloodshed - Srikandi Cintaku.mp3"
  }, {
    artist: "Bill & Brod",
    title: "Singkong Dan Keju",
    file: "Bill & Brod - Singkong Dan Keju.mp3"
  }, {
    artist: "Cut Rani",
    title: "Salahmu Sendiri",
    file: "Cut Rani - Salahmu Sendiri.mp3"
  }, {
    artist: "Leon",
    title: "Balasan Janji Palsumu",
    file: "Leon - Balasan Janji Palsumu.mp3"
  }, {
    artist: "Yantzen",
    title: "Insan",
    file: "Yantzen - Insan.mp3"
  }, {
    artist: "New Boyz",
    title: "Meraung",
    file: "New Boyz - Meraung.mp3"
  }, {
    artist: "Wings",
    title: "Ranggi Metropolis",
    file: "Wings - Ranggi Metropolis.mp3"
  }, {
    artist: "Siti Sarah",
    title: "Kesetiaan",
    file: "Siti Sarah - Kesetiaan.mp3"
  }, {
    artist: "Kerispatih",
    title: "Tapi Bukan Aku",
    file: "Kerispatih - Tapi Bukan Aku.mp3"
  }, {
    artist: "Candy",
    title: "Akan Ku Tunggu",
    file: "Candy - Akan Ku Tunggu.mp3"
  }, {
    artist: "Desire",
    title: "Bias Cinta",
    file: "Desire - Bias Cinta.mp3"
  }, {
    artist: "Dinamik",
    title: "Biar Putih Tulang",
    file: "Dinamik - Biar Putih Tulang.mp3"
  }, {
    artist: "Thomas Arya",
    title: "Merayu",
    file: "Thomas Arya - Merayu.mp3"
  }, {
    artist: "Tejas Renjana",
    title: "Pintu",
    file: "Tejas Renjana - Pintu.mp3"
  }, {
    artist: "Axl’s",
    title: "Andai Dapat Ku Undurkan Masa",
    file: "Axl's - Andai Dapat Ku Undurkan Masa.mp3"
  }, {
    artist: "Tommy J Pisa",
    title: "Dibatas Kota Ini",
    file: "Tommy J Pisa - Dibatas Kota Ini.mp3"
  }, {
    artist: "Shiela Majid",
    title: "Sinaran",
    file: "Shiela Majid - Sinaran.mp3"
  }, {
    artist: "Poppy Mercury",
    title: "Hati Siapa Tak Luka",
    file: "Poppy Mercury - Hati Siapa Tak Luka.mp3"
  }, {
    artist: "Lukanegara",
    title: "Bertakhta Diatas Tanah Mereka",
    file: "Lukanegara - Bertakhta Diatas Tanah Mereka.mp3"
  }, {
    artist: "May",
    title: "Pelayaran",
    file: "May - Pelayaran.mp3"
  }, {
    artist: "Kamikaze",
    title: "Luhur",
    file: "Kamikaze - Luhur.mp3"
  }, {
    artist: "Awie & Search",
    title: "Nur Nilam Sari",
    file: "Awie & Search - Nur Nilam Sari.mp3"
  }, {
    artist: "Medicine",
    title: "Tika Dan Saat Ini",
    file: "Medicine - Tika Dan Saat Ini.mp3"
  }, {
    artist: "Spin",
    title: "Janji Kita",
    file: "Spin - Janji Kita.mp3"
  }, {
    artist: "Farah Dhiya",
    title: "Bertakhta Di Hati",
    file: "Farah Dhiya - Bertakhta Di Hati.mp3"
  }, {
    artist: "Izwan Pilus",
    title: "Kembali Senyum",
    file: "Izwan Pilus - Kembali Senyum.mp3"
  }, {
    artist: "Mutiara",
    title: "Mutiara",
    file: "Mutiara - Mutiara.mp3"
  }, {
    artist: "Ella",
    title: "Berlayar Tak Bertepian",
    file: "Ella - Berlayar Tak Bertepian.mp3"
  }, {
    artist: "Pretty Ugly",
    title: "Jika Diberikan Ku Satu Peluang",
    file: "Pretty Ugly - Jika Diberikan Ku Satu Peluang.mp3"
  }, {
    artist: "Haslinda",
    title: "Sehati Sejiwa",
    file: "Haslinda - Sehati Sejiwa.mp3"
  }, {
    artist: "Aan",
    title: "Cinta Melankolia",
    file: "Aan - Cinta Melankolia.mp3"
  }, {
    artist: "Exists",
    title: "Alasanmu",
    file: "Exists - Alasanmu.mp3"
  }, {
    artist: "Spider",
    title: "Laukku Cukup Masin",
    file: "Spider - Laukku Cukup Masin.mp3"
  }, {
    artist: "Maya",
    title: "Matahari",
    file: "Maya - Matahari.mp3"
  }, {
    artist: "Ella",
    title: "Sembilu",
    file: "Ella - Sembilu.mp3"
  }, {
    artist: "Kangen Band",
    title: "Kehilanganmu Berat Bagiku",
    file: "Kangen Band - Kehilanganmu Berat Bagiku.mp3"
  }, {
    artist: "Ziana Zain",
    title: "Madah Berhelah",
    file: "Ziana Zain - Madah Berhelah.mp3"
  }, {
    artist: "XPDC",
    title: "Hidup Bersama",
    file: "XPDC - Hidup Bersama.mp3"
  }, {
    artist: "Spin",
    title: "Malam Semakin Dingin",
    file: "Spin - Malam Semakin Dingin.mp3"
  }, {
    artist: "Slash",
    title: "Taman Astakona",
    file: "Slash - Taman Astakona.mp3"
  }, {
    artist: "Siti Nurhaliza",
    title: "Purnama Merindu",
    file: "Siti Nurhaliza - Purnama Merindu.mp3"
  }, {
    artist: "Rahmat Ekamatra",
    title: "Hanya Segenggam Setia",
    file: "Rahmat Ekamatra - Hanya Segenggam Setia.mp3"
  }, {
    artist: "New Boyz",
    title: "Marah Bukan Sifatku",
    file: "New Boyz - Marah Bukan Sifatku.mp3"
  }, {
    artist: "Mojack Hafiz, Zynakal ft. Zamir Harith",
    title: "Dalam Diam",
    file: "Mojack Hafiz, Zynakal ft. Zamir Harith - Dalam Diam.mp3"
  }, {
    artist: "M. Daud Kilau",
    title: "Cek Mek Molek",
    file: "M. Daud Kilau - Cek Mek Molek.mp3"
  }, {
    artist: "Lestari",
    title: "Mahligai Dari Air Mataku",
    file: "Lestari - Mahligai Dari Air Mataku.mp3"
  }, {
    artist: "Kristal",
    title: "Cinta Tiga Segi",
    file: "Kristal - Cinta Tiga Segi.mp3"
  }, {
    artist: "Jefrrydin",
    title: "Seruling Anak Gembala",
    file: "Jefrrydin - Seruling Anak Gembala.mp3"
  }, {
    artist: "Irwansyah",
    title: "Camelia",
    file: "Irwansyah - Camelia.mp3"
  }, {
    artist: "Azizah Maumere",
    title: "Aku Tak Berarti Bagimu",
    file: "Azizah Maumere - Aku Tak Berarti Bagimu.mp3"
  }, {
    artist: "Arief",
    title: "Tak Sedalam Ini",
    file: "Arief - Tak Sedalam Ini.mp3"
  }, {
    artist: "Jefrrydin",
    title: "Mas Mona",
    file: "Jefrrydin - Mas Mona.mp3"
  }];
  console.info(`Title: Ai Music (MP3 Playlist)\nCount: ${playlist.length}\nDescription: All Collection AI Music (Malay/Indo)`);
  return playlist;
}
