// API 호출
// 결과값의 포장지가 나옴
let response = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  console.log(res)
);


// 포장지에서 json 형태의 값을 가져옴
async function getData(){
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();