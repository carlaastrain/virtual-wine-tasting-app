export type Country =
  "Argentina" |
  "France" |
  "Chile" |
  "USA" |
  "South Africa" |
  "Australia" |
  "Italy" |
  "Spain" |
  "Portugal" |
  "Germany" |
  "Austria" |
  "Hungaria"

export type FruitFlavor = "Cherry" | "Black Raspberry" | "Pomegranate" |
  "Strawberry" | "Blood Orange" | "Plum" | "Blueberry" | "Plum Sauce" |
  "Huckleberry" | "Red Currant" | "Cherry" | "Red Plum" | "Blackberry" |
  "Cranberry" | "Raspberry" | "Boysenberry" | "Black Plum" | "Berry Jam" |
  "Red Cherry" | "Black Currant" | "Black Cherry" | "Acai Berry" | "Black Olive" |
  "Lemon Cest" | "Orange Cest" | "Tangerine" | "Mirabelle" | "White Nectarine" |
  "Lemon" | "Citrus Cest" | "Pink Grapefruit" | "Green Apple" | "Pear" |
  "Nectarine" | "Apricot" | "Guava" | "Mango" | "Green Papaya" |
  "Star Fruit" | "White Cherry" | "Sugar Plum" | "Lychee" | "Lime"

export type DryFruitFlavor = "Raisin" | "Prune" | "Fig" | "Fruit Cake" | "Dried Cranberry"

export type FloralFlavor = "Wild Iris" | "Iris" | "Violet" | "Hibiscus" | "Rose" | "Potpourri"
  | "Eucalyptus" | "Lavender" | "Jasmine"

export type HerbFlavor = "Sage" | "Yerba Mate" | "Dried Herbes"
  | "Bay Leafe" | "Sage" | "Anise" | "Mint" | "Oregano"
  | "Black Pepper" | "Dried Herbs" | "Jalapeño" | "Ginger"
  | "Thai Basil" | "Rosmary" | "Tarragon"

export type SpiceFlavor = "Cinnamon" | "Baking Spices" | "Milk Chocolate" |
  "Brown Sugar" | "Cola" | "Allspice" | "Toffee" | "Coffee" | "Cedar" |
  "Incense" | "Backing Spices" | "Chocolate" | "Vanilla" |
  "Mocha" | "Cocoa Nib" | "Vanilla" | "Nutmeg" | "Pipe Tabacco" |
  "Tabacco Leaf" | "Cardamom" | "Star Anis" | "Licorice" |
  "Clove" | "Espresso" | "Black Pepper" | "Exotic Spices"
  | "Honey" | "Red Bell Pepper" | "Cinamon" | "Candid Ginger" | "Green Peppercorn"

export type EarthFlavor = "Clay Pot" | "Truffle" |
  "Potting Soil" |
  "Dried Leaves" |
  "Tabacco" |
  "Gun Smoke" |
  "Cocoa" | "New Leather" | "Wet Gravel" | "Graphite" |
  "Pencil Lead" |
  "Clay Dust" |
  "Charcoal" | "Tar" | "Salt" | "Chalk" | "Wet Slate" | "Beeswax" | "Petroleum"

export type OtherFlavor = "Cream" | "Toasted Bread" | "Smoke" | "Leather" |
  "Bacon Fat" | "Cured Meat" | "Cigar Box" | "Oily" | "Creamy" | "Mushroom"

export interface PossibleFlavors {
  fruits: FruitFlavor[],
  dryFruits: DryFruitFlavor[],
  florals: FloralFlavor[],
  herbs: HerbFlavor[],
  spices: SpiceFlavor[],
  earthFlavors: EarthFlavor[],
  others: OtherFlavor[],
}

export type Flavor = FruitFlavor | DryFruitFlavor | FloralFlavor |
  HerbFlavor | SpiceFlavor | EarthFlavor | OtherFlavor

export interface Wine {
  grape: string[],
  style: "Red" | "White",
  drinkingTemperature: "Room Temperature" | "Cellar Temperature" | "Cold",
  countries: Country[],
  dominantFlavors: Flavor[],
  possibleFlavors: PossibleFlavors,
}


const malbec: Wine = {
  grape: ["Malbec"],
  style: "Red",
  drinkingTemperature: "Room Temperature",
  countries: [
    "Argentina",
    "France",
    "Chile",
    "USA",
    "South Africa",
    "Australia",
    "Italy",
  ],
  dominantFlavors: ["Plum", "Blueberry", "Vanilla", "Tabacco", "Cocoa"],
  possibleFlavors: {
    fruits: ["Cherry", "Black Raspberry"],
    dryFruits: ["Raisin", "Prune"],
    florals: ["Wild Iris"],
    herbs: ["Sage", "Yerba Mate"],
    spices: ["Cinnamon", "Baking Spices", "Milk Chocolate"],
    earthFlavors: ["Clay Pot"],
    others: [],
  },
};

const pinotnoir: Wine = {
  grape: ["Pinot Noir"],
  style: "Red",
  drinkingTemperature: "Cellar Temperature",
  countries: [
    "Argentina",
    "France",
    "Chile",
    "USA",
    "South Africa",
    "Australia",
    "Italy",
  ],
  dominantFlavors: ["Cranberry", "Cherry", "Raspberry", "Clove", "Mushroom"],
  possibleFlavors: {
    fruits: [
      "Pomegranate",
      "Strawberry",
      "Blood Orange",
      "Plum",
      "Blueberry",
      "Plum Sauce",
    ],
    dryFruits: [],
    florals: ["Iris", "Violet", "Hibiscus", "Rose", "Potpourri"],
    herbs: ["Dried Herbes"],
    spices: [
      "Cinnamon",
      "Baking Spices",
      "Milk Chocolate",
      "Brown Sugar",
      "Cola",
      "Allspice",
    ],
    earthFlavors: [
      "Truffle",
      "Potting Soil",
      "Dried Leaves",
      "Tabacco",
      "Gun Smoke",
      "Cocoa",
    ],
    others: ["Cream", "Toasted Bread"],
  },
};

const merlot: Wine = {
  grape: ["Merlot"],
  style: "Red",
  drinkingTemperature: "Room Temperature",
  countries: ["Spain", "France", "Chile", "USA", "Australia", "Italy"],
  dominantFlavors: [
    "Raspberry",
    "Black Cherry",
    "Sugar Plum",
    "Chocolate",
    "Cedar",
  ],
  possibleFlavors: {
    fruits: [
      "Huckleberry",
      "Red Currant",
      "Cherry",
      "Red Plum",
      "Blueberry",
      "Blackberry",
    ],
    dryFruits: ["Fig", "Fruit Cake"],
    florals: ["Violet"],
    herbs: ["Bay Leafe", "Sage", "Anise"],
    spices: [
      "Toffee",
      "Coffee",
      "Cedar",
      "Incense",
      "Backing Spices",
      "Chocolate",
      "Vanilla",
    ],
    earthFlavors: ["Clay Pot", "New Leather", "Potting Soil"],
    others: ["Cream"],
  },
};

const cabernetsauvignon: Wine = {
  grape: ["Cabernet Sauvignon"],
  style: "Red",
  drinkingTemperature: "Room Temperature",
  countries: [
    "France",
    "Chile",
    "USA",
    "Australia",
    "Spain",
    "Argentina",
    "Italy",
    "South Africa",
  ],
  dominantFlavors: [
    "Black Cherry",
    "Black Currant",
    "Red Bell Pepper",
    "Backing Spices",
    "Cedar",
  ],
  possibleFlavors: {
    fruits: [
      "Cranberry",
      "Red Currant",
      "Raspberry",
      "Boysenberry",
      "Black Plum",
      "Berry Jam",
    ],
    dryFruits: ["Prune", "Fig"],
    florals: ["Violet", "Eucalyptus"],
    herbs: ["Mint", "Oregano", "Black Pepper", "Dried Herbs", "Jalapeño"],
    spices: [
      "Coffee",
      "Mocha",
      "Cocoa Nib",
      "Vanilla",
      "Nutmeg",
      "Toffee",
      "Pipe Tabacco",
    ],
    earthFlavors: [
      "Wet Gravel",
      "Graphite",
      "Pencil Lead",
      "Clay Dust",
      "Charcoal",
    ],
    others: ["Smoke", "Leather"],
  },
};

const syrah: Wine = {
  grape: ["Syrah"],
  style: "Red",
  drinkingTemperature: "Room Temperature",
  countries: [
    "France",
    "Australia",
    "Spain",
    "Argentina",
    "South Africa",
    "USA",
    "Italy",
    "Chile",
    "Portugal",
  ],
  dominantFlavors: [
    "Blueberry",
    "Plum",
    "Milk Chocolate",
    "Tabacco",
    "Green Peppercorn",
  ],
  possibleFlavors: {
    fruits: [
      "Red Plum",
      "Red Cherry",
      "Boysenberry",
      "Black Currant",
      "Black Cherry",
      "Black Raspberry",
      "Plum Sauce",
      "Acai Berry",
      "Black Olive",
    ],
    dryFruits: ["Fruit Cake", "Dried Cranberry"],
    florals: ["Lavender", "Eucalyptus"],
    herbs: ["Sage"],
    spices: [
      "Tabacco Leaf",
      "Cardamom",
      "Star Anis",
      "Licorice",
      "Clove",
      "Vanilla",
      "Milk Chocolate",
      "Allspice",
      "Espresso",
      "Black Pepper",
    ],
    earthFlavors: ["Tar", "Graphite"],
    others: [
      "Bacon Fat",
      "Cured Meat",
      "Leather",
      "Cream",
      "Smoke",
      "Cigar Box",
    ],
  },
};

const gewürztraminer: Wine = {
  grape: ["Gewürztraminer"],
  style: "White",
  drinkingTemperature: "Cold",
  countries: ["France", "Germany", "Italy", "Austria", "Australia", "Hungaria"],
  dominantFlavors: ["Lychee", "Rose", "Pink Grapefruit", "Tangerine", "Guava"],
  possibleFlavors: {
    fruits: [
      "Lemon Cest",
      "Orange Cest",
      "Tangerine",
      "Mirabelle",
      "White Nectarine",
    ],
    dryFruits: [],
    florals: [],
    herbs: ["Tarragon"],
    spices: ["Exotic Spices", "Honey", "Candid Ginger"],
    earthFlavors: ["Salt"],
    others: ["Smoke", "Oily", "Creamy"],
  },
};

const riesling: Wine = {
  grape: ["Riesling"],
  style: "White",
  drinkingTemperature: "Cold",
  countries: ["Germany", "USA", "Australia", "France", "Hungaria"],
  dominantFlavors: ["Lime", "Green Apple", "Beeswax", "Jasmine", "Petroleum"],
  possibleFlavors: {
    fruits: [
      "Lemon",
      "Citrus Cest",
      "Pink Grapefruit",
      "Green Apple",
      "Pear",
      "Nectarine",
      "Apricot",
      "Guava",
      "Mango",
      "Green Papaya",
      "Star Fruit",
      "White Cherry",
      "Strawberry",
    ],
    dryFruits: [],
    florals: ["Jasmine"],
    herbs: ["Ginger", "Thai Basil", "Rosmary"],
    spices: ["Cinamon", "Nutmeg", "Vanilla"],
    earthFlavors: ["Chalk", "Wet Slate"],
    others: [],
  },
};

const WineDB: { [key: string]: Wine } = {
  malbec: malbec,
  pinotnoir: pinotnoir,
  merlot: merlot,
  cabernetsauvignon: cabernetsauvignon,
  syrah: syrah,
  gewürztraminer: gewürztraminer,
  riesling: riesling,
};

export default WineDB;
