let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我叫李贺
 * 下面我来展示一下我的功底
 * 首先准备一个div */
#div1{
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
/* 接下来画一个太极图
 * 先将div变成一个圆 */
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 太极图分阴阳两部
 * 一黑一白 */
#div1{
  background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加入两个神秘的小球 */
#div1::before{
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 50%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  background: #000;
  border-radius: 50%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;

let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    window.scrollTo(0, 99999)
    html.scrollTo(0, 99999)
    style.innerHTML = string.substring(0, n+1);
    n += 1;
    if (n < string.length) {
      step();
    }
  }, 50);
};

step();