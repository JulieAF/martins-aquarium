import { getTip } from "./database.js";

export const TipList = () => {
  // Invoke the function that you imported from the database module
  const tips = getTip();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="tipList">';

  // Create HTML representations of each fish here
  for (const tip of tips) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="tip-card">
              <div class="tip__id">${tip.id}</div>
          </section>
  `;
  }
  htmlString += `</article>`;

  return htmlString;
};
