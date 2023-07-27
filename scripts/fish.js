// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";

export const FishList = () => {
  // Invoke the function that you imported from the database module
  const fishes = getFish();
  const holyFish = mostHolyFish();
  const soldiers = soldierFish();
  const regularFish = nonHolyFish();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="fishList">';

  // Create HTML representations of each fish here
  for (const fish of holyFish) {
    htmlString += createFishCard(fish);
  }
  for (const fish of soldiers) {
    htmlString += createFishCard(fish);
  }
  for (const fish of regularFish) {
    htmlString += createFishCard(fish);
  }
  htmlString += `</article>`;

  return htmlString;
};
export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = [];
  const fishData = getFish();

  for (const fish of fishData) {
    if (fish.length % 3 === 0) {
      holyFish.push(fish);
    }
  }

  return holyFish;
};

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const soldiers = [];
  const fishData = getFish();

  for (const fish of fishData) {
    if (fish.length % 5 === 0) {
      soldiers.push(fish);
    }
  }
  return soldiers;
};

export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  const regularFish = [];
  const fishData = getFish();

  for (const fish of fishData) {
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
      regularFish.push(fish);
    }
  }
  return regularFish;
};

// Why is there a backtick used for this string?
const createFishCard = (fish) => {
  return `<section class=card-container>
            <section class = "fish-card"
                <div><img  class="fish__image image--card" src="${fish.image}" /></div>
                <section>
                <div class="fish__name">Name: ${fish.name}</div>
                <div class="fish__species">Species: ${fish.species}</div>
                <div class="fish__length">Length: ${fish.length}</div>
                <div class="fish__location">Harvested: ${fish.location}</div>
                <div class="fish__diet">Food: ${fish.food}</div>
                </section>
            </section>
         </section>`;
};
