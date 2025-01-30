export class UI {
  //Kurucu method
  constructor() {
    this.form = document.querySelector("form");
    this.list = document.querySelector(".list");
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
}
