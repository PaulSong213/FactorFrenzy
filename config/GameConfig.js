export const gameTypes = {
  addingFraction: "addingFraction",
  subtractingFraction: "subtractingFraction",
  multiplyingFraction: "multiplyingFraction",
  dividingFraction: "dividingFraction",
};

export const gameDetails = {
  addingFraction: {
    title: "ADDING",
    route: "gameAddFraction",
    ionIconName: "add-circle",
    playButtonColor: "#009278",
  },
  subtractingFraction: {
    title: "SUBTRACTING",
    route: "gameSubtractFraction",
    ionIconName: "remove-circle",
    playButtonColor: "#E68A00",
  },
  multiplyingFraction: {
    title: "MULTIPLYING",
    route: "gameMultiplyFraction",
    ionIconName: "close-circle",
    playButtonColor: "#FF0000",
  },
  dividingFraction: {
    title: "DIVIDING",
    route: "gameDivideFraction",
    ionIconName: "remove-circle",
    playButtonColor: "#6200B3",
  },
};

export const operations = {
  addition: {
    symbol: "+",
    name: "addition",
  },
  subtraction: {
    symbol: "-",
    name: "subtraction",
  },
  multiplication: {
    symbol: "x",
    name: "multiplication",
  },
  division: {
    symbol: "÷",
    name: "division",
  },
};

export function isWithCommonDenominator(operation) {
  if (
    operation === operations.addition.name ||
    operation === operations.subtraction.name
  )
    return true;
  return false;
}
