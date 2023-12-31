const database = {
  fish: [
    {
      image: "",
      name: "Bart",
      food: "crustaceans",
      length: 3,
      species: "Spiny Fish",
      location: "Middle of Ocean",
    },
    {
      image: "",
      name: "Bertha",
      food: "Gnats",
      length: 5,
      species: "Scaly Fish",
      location: "The Crick",
    },
    {
      image: "",
      name: "Bob",
      food: "Molecules",
      length: 3,
      species: "Well-Rounded Fish",
      location: "Swimming Pool",
    },
    {
      image: "",
      name: "Petunia",
      food: "Jello",
      length: 16,
      species: "Lip Fish",
      location: "Frozen Lake",
    },
    {
      image: "",
      name: "Ralf",
      food: "Paper",
      length: 6,
      species: "Origmai Fish",
      location: "Coy Pond",
    },
    {
      image: "",
      name: "Bart",
      food: "Anxiety",
      length: 4,
      species: "Shocked Fish",
      location: "Tropical Oasis",
    },
  ],
};
export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
