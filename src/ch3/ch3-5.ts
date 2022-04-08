// unknown
let name1: unknown = "Rick";
name1 = 999;

// 斷言
let name2: unknown = "Rick2";
let name3 = name2 as string;

// 斷言應用
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  console.log(data);
};

getData();

// any 與 unknown
// unknown 是比較安全的 any

const isLive = false;

const getLiveName = () => {
  let name: unknown;
  if (isLive) {
    name = "Rick Room";
  } else {
    name = null;
  }

  return name;
};

const liveName = getLiveName();
console.log(liveName);
if (typeof liveName === "string") {
  liveName.split("");
}
