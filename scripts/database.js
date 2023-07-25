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
};
export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
