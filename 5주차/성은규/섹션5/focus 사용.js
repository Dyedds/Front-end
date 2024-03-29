import React, {useRef, useState} from "react";

const DiaryEditor = ()=>{

    const authorInput = useRef();
    const contentInput = useRef();
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });
    //State를 하나로 묶어줌

    const handleChangeState = (e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });

    }

    const handleSubmit = ()=>{
        if(state.author.length < 1){
            authorInput.current.focus();
            return ;
        }

        if(state.content.length < 5){
            contentInput.current.focus();
            return;
        }
        alert('저장 성공');
    }

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
            ref = {authorInput}
            name="author"
            value={state.author}
            onChange={handleChangeState}
            />
        </div>
        <div>
            <textarea
            ref = {contentInput}
            name="content"
            value={state.content}
            onChange={handleChangeState}
           
            />
        </div>
        <div>
            <span>오늘의 감정점수 : </span>
            <select 
            name="emotion"
            value={state.emotion}
            onChange={handleChangeState}
            >
                <option value={1}>매우 좋음</option>
                <option value={2}>좋음</option>
                <option value={3}>보통</option>
                <option value={4}>나쁨</option>
                <option value={5}>매우나쁨 ㅠ</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit} >일기 저장하기</button>
        </div>
    </div>
};
export default DiaryEditor;