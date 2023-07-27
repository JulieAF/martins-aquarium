import { getLocation } from "./database.js";

export const LocationList = () => {
  // Invoke the function that you imported from the database module
  const locations = getLocation();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="locationList">';

  // Create HTML representations of each fish here
  for (const location of locations) {
    // Why is there a backtick used for this string?
    htmlString += `<section class="location-card">
              <div class="quote__id">${location.id}</div>
          </section>
  `;
  }
  htmlString += `</article>`;

  return htmlString;
};
