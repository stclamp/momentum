export const quotes = ({ language, quotes }) => {
  const quotesBlock = document.querySelector(".quotes");
  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");
  const changeQuote = document.querySelector(".change-quote");
  !quotes
    ? quotesBlock.classList.add("hide")
    : quotesBlock.classList.remove("hide");
  async function getQuotes() {
    let quotes;
    language === "en"
      ? (quotes = "./assets/json/quotes.json")
      : (quotes = "./assets/json/quotesRu.json");
    const res = await fetch(quotes);
    const data = await res.json();

    function renderQuote() {
      const randomNumber =
        Math.floor(Math.random() * (data.length - 0 + 1)) + 0;
      quote.textContent = data[randomNumber].quote;
      author.textContent = data[randomNumber].source;
    }
    renderQuote();

    changeQuote.addEventListener("click", renderQuote);
  }
  getQuotes();
};
