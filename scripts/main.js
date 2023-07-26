import { getFish, getQuote, getLocation, getTip } from "./database.js";
// Import the FishList function from the correct module
import { FishList } from "./fish.js";

// Import the FishList function from the correct module
import { QuoteList } from "./quotes.js";

// Import the FishList function from the correct module
import { LocationList } from "./locations.js";

// Import the FishList function from the correct module
import { TipList } from "./tips.js";

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector("#container");

parentHTMLElement.innerHTML = FishList();
const allFish = getFish();

const child1HTMLElement = document.querySelector("#container-two");

child1HTMLElement.innerHTML = QuoteList();
const allQuote = getQuote();

const child2HTMLElement = document.querySelector("#container-three");

child2HTMLElement.innerHTML = LocationList();
const allLocation = getLocation();

const child3HTMLElement = document.querySelector("#container-four");

child3HTMLElement.innerHTML = TipList();
const allTip = getTip();
