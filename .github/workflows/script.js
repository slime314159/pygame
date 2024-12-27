document.getElementById("clickMe").addEventListener("click", function() {
  alert("塊陶啊~~");
});

let i=0, imgArr=new Array();
imgArr[0]="https://img.kpopdata.com/upload/content/843/713/727466f4372defabc462.jpg";
imgArr[1]="https://today-obs.line-scdn.net/0h7I079axpaGYNTnptjt4XMTUYZBc-KHJvLyl1B30cZgZ3YigxNC87BSwcZEpwfCg4LSglVypMNgQneCo1Ng/w644";
imgArr[2]="https://media.vogue.com.tw/photos/67440f41e10f4641334c1f6c/master/w_1600%2Cc_limit/465978670_1072388551351635_34337.jpg";
  
function showImg() {
  document.getElementById("ico").src=imgArr[i];
  i=(i+1)%3;
}

function show() {
  setInterval(showImg, 2000);
}

let title = document.getElementById("title");
let content = document.getElementById("content");
let bb = document.getElementById("bb");
let list = document.getElementById("list");
bb.addEventListener("click", news);
function news(){
  list.innerHTML = list.innerHTML + `
  <div class="news">
    <h2>${title.value}</h2>
    <P>${content.value}</p><hr>
  `;
}