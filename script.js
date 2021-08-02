const günEl = document.getElementById("gün")
const saatEl = document.getElementById("saat")
const dakikaEl = document.getElementById("dakika")
const saniyeEl = document.getElementById("saniye")


// istediğin zamanı yaz 
const dogumGunum = "3 Jan 2022";

function gerisayim() {
    const dogumGunumtarih = new Date(dogumGunum);
    const suan = new Date();

    const toplamSaniye = (dogumGunumtarih - suan) / 1000;

    const gün = Math.floor(toplamSaniye / 3600 / 24);
    const saat = Math.floor(toplamSaniye / 3600) % 24;
    const dakika = Math.floor(toplamSaniye / 60) % 24;
    const saniye = Math.floor(toplamSaniye) % 60;

    günEl.innerHTML = gün;
    saatEl.innerHTML = formatTime(saat);
    dakikaEl.innerHTML = formatTime(dakika);
    saniyeEl.innerHTML = formatTime(saniye);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;

}

gerisayim();

setInterval(gerisayim, 1000)