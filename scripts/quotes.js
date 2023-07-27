import { getQuote } from "./database.js";

export const QuoteList = () => {
  // Invoke the function that you imported from the database module
  const quotes = getQuote();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="quoteList">';

  // Create HTML representations of each fish here
  for (const quote of quotes) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="quote-card">
              <div class="quote__id">${quote.id}</div>
          </section>
  `;
  }
  htmlString += `</article>`;

  return htmlString;
};
