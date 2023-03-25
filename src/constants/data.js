import images from "./images";

const wines = [
  {
    title: "Domaines Gueguen",
    price: "$72",
    tags: "Chablis | France | 2020 | Bottle",
  },
  {
    title: "Vionta",
    price: "$48",
    tags: "Albariño | Spain | 2021 | Bottle",
  },
  {
    title: "Weather",
    price: "$55",
    tags: "Pinot Noir | Sonoma, CA | 2020 | Bottle",
  },
  {
    title: "Harada ",
    price: "$62",
    tags: "Junmai 80 | Yamaguchi | Sake | Bottle",
  },
  {
    title: "Kurosawa ",
    price: "$10",
    tags: "Black Creek | Nagano | Sake | Bottle",
  },
];

const cocktails = [
  {
    title: "Azuki Mule",
    price: "$15",
    tags: "Haku Vodka | Pickled Ginger | Cucumber | Lime | Bitters",
  },
  {
    title: "Mami Umami",
    price: "$16",
    tags: "La Luna Mezcal | Grapefruit | Ginger | Lime | Shio Koji",
  },
  {
    title: "Yuzu Collins",
    price: "$15",
    tags: "Roku Gin | Paru Blue Chamomile Tea | Yuzu | Lime | Soda",
  },
  {
    title: "Saru Old Fashioned",
    price: "$18",
    tags: "Toki Whisky | Infinity Banana | Vanilla",
  },
  {
    title: "Emerald Negroni",
    price: "$17",
    tags: "London Dry Gin | Luxardo Bitter | Midori | Shiso ",
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
