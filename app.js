const form = document.querySelector('#searchForm');
const quotes = document.querySelector('#quote');

const getAnimeQuote = async () => {
  try {
    const searchTerm = form.elements.query.value;
    const res = await fetch(
      `https://animechan.vercel.app/api/random/anime?title=${searchTerm}`
    );
    const response = await res.json();
    return `${response.quote} - ${response.character} from ${response.anime}`;
  } catch (e) {
    return 'Invalid quote!! Network Error';
  }
};

const addNewQuote = async () => {
  let quoteText = await getAnimeQuote();
  // console.log(quoteText);
  if (quoteText !== undefined) {
    const newLI = document.createElement('LI');
    newLI.append(quoteText);
    quotes.append(newLI);
  } else {
    quoteText = 'No data';
    console.log(quoteText);
    const newLI = document.createElement('LI');
    newLI.append(quoteText);
    quotes.append(newLI);
  }
};

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  addNewQuote();
  form.elements.query.value = '';
});
