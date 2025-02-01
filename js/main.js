// UI Classini import et
import { API } from "./api.js";
import { UI } from "./ui.js";
// Api classini import ettik apileri cagirabilmek icin

//UI clasisnin ornegini al
const ui = new UI();

// API classinin ornegini al
const api = new API();

// Sayfanin yuklendigi ani izle
document.addEventListener("DOMContentLoaded", async () => {
  // Loaderi render et
  ui.renderLoader();
  //Api ya istek at, apiden gelen verileri arayuze renderla
  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.log(err);
    });
});

//Form gonderildiginde bunu izle ve bir fonk. calistir
ui.form.addEventListener("submit", (e) => {
  // Sayfa yenilemeyi engelle
  e.preventDefault();
  // form gonderildiginde input icerisindeki degere eris.
  const query = e.target[0].value;

  //Aratilan kelimenini basinda ve sonunda bulunan bosluklari kaldir. Eger query degeri yoksa uyari ver.

  if (!query.trim()) {
    return alert(`Lutfen gecerli bir arama islemi gerceklestiriniz`);
  }

  // Loaderi render et
  ui.renderLoader();

  // Title'i guncelle
  ui.updateTitle(query + " icin sonuclar");

  //Aratilan kelimeyle birlikte api istek at sonrasinda gelen veriyle ekrana cartlari render et

  api
    .searchMusic(query)
    .then((data) => ui.renderCards(data))
    .catch((err) => alert(err));
});

// Liste kismindaki play ikonuna tiklayinca arayuzu bu sarki verisine gore renderlayacak fonk.

ui.list.addEventListener("click", (e) => {
  // List icerisnde tiklanilan elemanin play butonu olup olmadigini kontrol et
  if (e.target.className == "play") {
    // Play butonunda kapsayiciya eris
    const card = e.target.closest(".card");
    // kapsayiciya  verilen dataset ozelliklerini al(itle,image,mp3)

    const data = card.dataset;
    //Player kismini render et
    ui.renderPlayer(data);
  }
});
