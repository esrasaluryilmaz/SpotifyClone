// UI Classini import et
import { API } from "./api.js";
import { UI } from "./ui.js";
// Api classini import ettik apileri cagirabilmek icin

//UI clasisnin ornegini al
const ui = new UI();

// API classinin ornegini al
const api = new API();

// Sayfanin yiklendigi ani izle
// document.addEventListener("DOMContentLoaded", async () => {
//api
//.getPopular()
//.then(() => {})
//.catch((err) => {
//console.log(err);
//});
//});

//Form gonderildiginde bunu izle ve bir fonk. calistir
ui.form.addEventListener("submit", (e) => {
  // Sayfa yenilemeyi engelle
  e.preventDefault();
  // form gonderildiginde input icerisindeki degere eris.
  const query = e.target[0].value;

  console.log(query);
  //Aratilan kelimenini basinda ve sonunda bulunan bosluklari kaldir. Eger query degeri yoksa uyari ver.

  if (!query.trim()) {
    return alert(`Lutfen gecerli bir arama islemi gerceklestiriniz`);
  }
  api.getPopular();
});
