export const quotes = () => {
  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");
  const changeQuote = document.querySelector(".change-quote");
  async function getQuotes() {
    const quotes = "../assets/json/quotes.json";
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
