export class UI {
  //Kurucu method
  constructor() {
    this.form = document.querySelector("form");
    this.list = document.querySelector(".list");
    this.title = document.querySelector("#title");
    this.player = document.querySelector(".player");
  }

  //yazilari duzenleyen fonk.
  sliceText(text) {
    // 15 karakteri ve daha uzunlukta olanlarin sonuna... eklenir. Bu metod sliceText adinda bir fonk. Bu fonk, bir stringin belirli bir uzunluktan sonra kisaltmasini saglar. Bu durumda, sarki isimleri ve alt isimleri 15 karakterin altinda ise... ile sonlandirilir.
    if (text.length > 15) {
      return text.slice(0, 15) + "...";
    }
    return text;
  }

  // Sarki verilerini render eden bir fonk. yaz
  renderCards(songs) {
    //Listeye bir sarki elemani eklemeden onceki verileri sifirla
    this.list.innerHTML = "";
    songs.forEach((song) => {
      //Bir tane div olustur
      const card = document.createElement("div");

      // Olusturulan bu elemana 'card' classi ekle
      card.className = "card";

      //Card elemanina sarki ile degerleri ata
      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.img = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

      // Card'in Htmlini belirle
      card.innerHTML = ` <figure>
           
                <img
                  src="${song.images.coverarthq}"
                  alt=""
                />
       
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>
            
              <div class="card-info">
                <h4>${this.sliceText(song.title)}</h4>
                <h4>${song.subtitle}</h4>
              </div>`;

      //Olusturulan  bu Html'i arayuze aktar
      this.list.appendChild(card);
      //Class ve obje yapilari icerisindeki bir degiskene bu yapilar icerisinde bulunan bir metotla erismek istersek bunlarin basina `this`koymamiz gerekir.Bunun sebebi class ve obje yapilarinin bu degeri kendi icerisinde oldugunu anlamasidir.
    });
  }

  //Loader Render eden fonk.
  renderLoader() {
    this.list.innerHTML = `
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>`;
  }

  //Title'i guncelleyen fonk.
  updateTitle(text) {
    this.title.textContent = text;
  }
  //Player kismini dinamik sekilde renderlayacak fonk.
  renderPlayer(song) {
    console.log(song);
    this.player.innerHTML = `      <div class="info">
        <img
          src="${song.img}"
          alt="
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>

      
      <audio
        src="${song.mp3}"
        controls
      ></audio>

      
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>`;
  }
}
