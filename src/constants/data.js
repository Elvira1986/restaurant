import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Stone Delicious IPA ",
    price: "$11",
    tags: "CA | 16 oz",
  },
  {
    title: "Coronado Lager",
    price: "$10",
    tags: "CA | 16 oz",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "The freshest sushi adn seafood in San Diego",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Best Japanese cuisine, natural flavors",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Best atmosphere and the hospitality",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "San Diego the top Essential Sushi Bars",
  },
];

export default { wines, cocktails, awards };
