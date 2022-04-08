// enum 列舉

enum LiveStatus {
  streaming = 0,
  closed = 1,
  multiple = 2,
}

let liveStatus = 0;

if (liveStatus === LiveStatus.closed) {
  console.log("直播已結束");
}
