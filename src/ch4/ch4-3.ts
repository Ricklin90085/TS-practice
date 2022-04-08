// type 跟 interface 哪裡不一樣
// 擴充
// type Animal = {
//   name: string;
//   age: number;
// };

// type Dog = Animal & {
//   color: string;
// };

// const black: Dog = {
//   name: "Black",
//   age: 1,
//   color: "Black",
// };

// type Cat = Animal;

// const red: Cat = {
//   name: "Red",
//   age: 1,
// };

// interface Animal {
//   name: string;
//   age: number;
// }

// interface Dog extends Animal {
//   color: string;
// }

// const white: Dog = {
//   name: "White",
//   age: 1,
//   color: "White",
// };

// 合併

interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const Dog: Animal = {
  name: "Black",
  age: 1,
};
