import React from "react";

//expression function
export const concat = (...args) => {
  let result = "";
  args.forEach(element => (result += " " + element));
  return result;
};

//declaration function
export function concat2(...args) {
  let result = "";
  args.forEach(element => (result += " " + element));
  return result;
}

//high order functions
export const doMath = (elementOne, elementTwo) => {
  return elementOne + " " + elementTwo;
};

export const concat3 = (func, ...args) => {
  let result = "";
  args.forEach(element => (result = func(result, element)));
  return result;
};

export const concat4 = (func, func2) => {
  return (...args) => {
    return func2(func, ...args);
  };
};
