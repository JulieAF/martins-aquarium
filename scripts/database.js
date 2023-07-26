const database = {
  fish: [
    {
      image:
        "https://friendlystock.com/wp-content/uploads/2020/03/9-cute-brown-fish-cartoon-clipart.jpg",
      name: "Bart",
      food: "Crustaceans",
      length: 3,
      species: "Spiny Fish",
      location: "Middle of Ocean",
    },
    {
      image:
        "https://www.caricatures-ireland.com/blog/wp-content/uploads/2018/10/fish-cartoon-clipart-free-700px.jpg",
      name: "Bertha",
      food: "Gnats",
      length: 5,
      species: "Scaly Fish",
      location: "The Crick",
    },
    {
      image:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjc4LTIzMi14LmpwZw.jpg",
      name: "Bob",
      food: "Molecules",
      length: 3,
      species: "Well-Rounded Fish",
      location: "Swimming Pool",
    },
    {
      image:
        "https://previews.123rf.com/images/julos/julos1607/julos160761431/82496317-cartoon-fish-with-big-lips.jpg",
      name: "Petunia",
      food: "Jello",
      length: 16,
      species: "Lip Fish",
      location: "Frozen Lake",
    },
    {
      image:
        "https://images.freeimages.com/images/premium/previews/4446/44467662-cartoon-funny-fish.jpg",
      name: "Ralf",
      food: "Paper",
      length: 6,
      species: "Origmai Fish",
      location: "Coy Pond",
    },
    {
      image:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjg0LTA3Ny14LmpwZw.jpg",
      name: "Grof",
      food: "Anxiety",
      length: 4,
      species: "Shocked Fish",
      location: "Tropical Oasis",
    },
  ],

  quote: [
    {
      id: `"Just keep swimming" - Dory`,
    },
    {
      id: `"I love the smell of fresh fish in the morning." - Anonymous`,
    },
    {
      id: `"I wish I was a Fish" - Gary Kazoo`,
    },
    {
      id: `"There are plenty of fish in the sea" - Unknown`,
    },
  ],

  location: [
    {
      id: "Middle of Ocean",
    },
    {
      id: "The Crick",
    },
    {
      id: "Swimming Pool",
    },
    {
      id: "Frozen Lake",
    },
    {
      id: "Coy Pond",
    },
    {
      id: "Tropical Oasis",
    },
  ],

  tip: [
    {
      id: "1. Acclimate your fish to the water.",
    },
    {
      id: "2. Float fish in their bag.",
    },
    {
      id: "3. Maintain pH balance and other chemical levels.",
    },
    {
      id: "4. Make sure water temperature is right.",
    },
    {
      id: "5. Change water regularly.",
    },
    {
      id: "6. Clean tank glass and other structures.",
    },
    {
      id: "7. Choose the right size for your tank.",
    },
    {
      id: "8. Pick compatible fish species.",
    },
  ],
};
export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
export const getQuote = () => {
  return database.quote.map((quote) => ({ ...quote }));
};
export const getLocation = () => {
  return database.location.map((location) => ({ ...location }));
};
export const getTip = () => {
  return database.tip.map((tip) => ({ ...tip }));
};
