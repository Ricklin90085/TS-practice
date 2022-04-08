// 型別參數
function count(a: number, b: number) {
  return a + b;
}

// 可選參數
// 可選參數必須放在必須參數的最 後面
const count2 = (a: number, b?: number) => {
  if (typeof b !== "number") {
    return;
  }
  return a + b;
};

// 定義回傳型別
const count3 = (a: number, b: number): number => {
  return a + b;
};

// 自訂型別
type Info = {
  name: string;
  age: number;
};

function userInfo(info: Info): Info {
  console.log(info.name);
  return info;
}

// return never
// 代表 該 function 不會回傳任何值
function error(message: string): never {
  throw new Error(message);
}

// return void
function warn(message: string): void {
  console.log(message);
}

// return constructor
type Card = {
  suit: string;
  card: number;
};

type CardCreator = {
  new (name: string): Card;
};

function createCard(cardCreator: CardCreator): Card {
  return new cardCreator("name");
}

//  return array
function getArray(): (number | string)[] {
  return [1, 2, "3"];
}

// 如果不指定回傳型別，則如果陣列內的型別不一樣，則解構的值會變成 union
// 可以使用 Tuple 來指定個別值的型別
const [a, b, c] = getArray();
