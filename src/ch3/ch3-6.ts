// union 多種類型
let arr8: (string | boolean)[] = [];
arr8.push("123");
arr8.push(false);

let videoName: string | number;
videoName = "Rick";
videoName = 123;

// never
// if (typeof videoName === "string") {
//   videoName.split("");
// }

// 強制斷言
let videoName2 = "Rick";
let videoName3 = videoName2 as unknown as number;
