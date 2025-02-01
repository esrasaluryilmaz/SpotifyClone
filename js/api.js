const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "04490b5cb1mshd7a153541966ecep19eecdjsn092fbc5d491e",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export class API {
  async getPopular() {
    // const url =
    // "https://shazam.p.rapidapi.com/search?term=lady%20gaga&locale=en-US&offset=0&limit=5";
    // Api'a istek at
    //const response = await fetch(url, options);

    // Api'dan gelen veriyi js. nesnesine cevir
    //const data = await response.json();

    //const formattedData = data.tracks.hits.map((item) => item.track);
    //return formattedData;

    const data = await this.searchMusic("layd gaga");

    const data1 = await this.searchMusic("apocalyptica");
    const data2 = await this.searchMusic("teoman");

    return [...data, ...data1, ...data2];
  }

  //Aratilan sarki verisini alan fonk.

  async searchMusic(query) {
    const url = `https://shazam.p.rapidapi.com/search?term=${query}`;
    // Aratilan deger ile api a destek at
    const res = await fetch(url, options);
    //Gelen veriyi js nesnesine cevir
    const data = await res.json();

    //Veriyi projeye uygun sekilde donustur
    const formattedData = data.tracks.hits.map((item) => item.track);

    return formattedData;
  }
}
