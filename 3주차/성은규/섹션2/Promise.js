function isPositive(number, resolve, reject) {
    setTimeout(() => {
      if (typeof number === "number") {
        //성공 -> resolve
        resolve((number) => (0 ? "양수" : "음수"));
      } else {
        //실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000);
  }
  
  function isPositiveP(number) {
    const executor = (resolve, reject) => {
      // executor : 비동기 작업을 실행해주는 함수
      setTimeout(() => {
        if (typeof number === "number") {
          //성공 -> resolve
          console.log(number);
          resolve(number >= 0 ? "양수" : "음수");
        } else {
          //실패 -> reject
          reject("주어진 값이 숫자형 값이 아닙니다");
        }
      }, 2000);
    };
    const asyncTask = new Promise(executor);
    return asyncTask;
  }
  const res = isPositiveP(101);
  
  res
    .then((res) => {
      console.log("작업 성공 : ", res);
    }) //resolve 함수를 then이 받음
    .catch((err) => {
      console.log("작업 실패 : ", err);
    }); //reject함수를 catch가 받음
  // isPositive(10,(res)=>{
  //   console.log("성공적으로 수행됨 : ",res);
  // },
  // (err) => {
  //   console.log("실패 하였음 : ", err);
  // }
  // );
  