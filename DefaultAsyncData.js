export const medalColors = {
  bronze: "#824013",
  silver: "#8b8b90",
  gold: "#ca963b",
};

const medalsStructure = [
  {
    title: "Completing Addition Fraction",
    color: medalColors.bronze,
  },
  {
    title: "Completing Subtraction Fraction",
    type: medalColors.silver,
  },
];

export const defaultGameData = {
  addition: {
    level: 1,
    score: 0,
    lives: 5,
  },
  subtraction: {
    level: 1,
    score: 0,
    lives: 5,
  },
  multiplication: {
    level: 1,
    score: 0,
    lives: 5,
  },
  division: {
    level: 1,
    score: 99999,
    lives: 5,
  },
};
