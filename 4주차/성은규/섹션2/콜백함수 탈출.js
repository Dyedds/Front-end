function taskA(a, b, cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a + b;
        resolve(res);
      }, 3000);
    });
  }
  
  function taskB(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a * 2;
        resolve(res);
      }, 1000);
    });
  }
  
  function taskC(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = a * -1;
        resolve(res);
      }, 1000);
    });
  }
  
  taskA(5, 1)
    .then((a_res) => {
      console.log("A RESULT : ", a_res);
      return taskB(a_res);
    })
    .then((b_res) => {
      console.log("B RESULT : ", b_res);
      return taskC(b_res);
    })
    .then((c_res) => {
      console.log("C RESULT : ", c_res);
    });
    //promise 를 사용하여 콜백 지옥 해결(코드 간결, 중간에 코드 삽입 용이)
  
  // taskA(3, 4, (a_res) => {
  //   console.log("A RESULT : ", a_res);
  //   taskB(a_res, (b_res) => {
  //     console.log("B RESULT : ", b_res);
  //     taskC(b_res, (c_res) => {
  //       console.log("C RESULT : ", c_res);
  //     });
  //   });
  // });
  // 콜백 지옥
