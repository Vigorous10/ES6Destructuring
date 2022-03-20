import animals, { useAnimals } from "./data";

// Destructuring Arrays
// console.log(animals);

const [cat, dog] = animals;
// console.log(cat);

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

//const {name,sound}=cat;

//const{name: catName,sound: catSound}=cat;

//const{name="fluffy",sound="Purr"}=cat;

// const{feedingRequirements:{food,water}}=cat;

// console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
