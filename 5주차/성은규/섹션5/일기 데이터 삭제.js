import React, {useRef, useState} from "react";
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id:1,
//     author:"성은규",
//     content:"하이 1",
//     emotion:2,
//     created_date: new Date().getTime(), //Date객체(시간)를 밀리세컨드로 전환
//   },
//   {
//     id:2,
//     author:"허성지",
//     content:"하이 2",
//     emotion:3,
//     created_date: new Date().getTime(), //Date객체(시간)를 밀리세컨드로 전환
//   },
//   {
//     id:3,
//     author:"전현민",
//     content:"하이 3",
//     emotion:4,
//     created_date: new Date().getTime(), //Date객체(시간)를 밀리세컨드로 전환
//   },
//   {
//     id:4,
//     author:"황동현",
//     content:"하이 4",
//     emotion:1,
//     created_date: new Date().getTime(), //Date객체(시간)를 밀리세컨드로 전환
//   }
// ]

const App = () => {
  
  const [data,setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author, content, emotion) =>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it)=>it.id !== targetId);
    //targetId 요소를 제외한 나머지 데이터들로 새로운 배열을 만듦
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onDelete = {onDelete} diaryList={data}/>
    </div>
  );
};

export default App;
