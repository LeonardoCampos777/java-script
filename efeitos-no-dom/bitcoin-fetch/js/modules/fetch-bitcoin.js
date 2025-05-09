export default function initFetchBitcoin() {
  try {
    const doeBtc = document.querySelector("[data-bitcoin]");
    async function fetchBitcoin(url) {
      const fetchResponse = await fetch(url);
      const bitcoinJSON = await fetchResponse.json();
      const bitcoinBRL = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
  
      doeBtc.innerHTML = bitcoinBRL;
    }
  
    fetchBitcoin("https://blockchain.info/ticker");
  } catch (erro) {
    console.log(erro);
  }
  
}

