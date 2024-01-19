import React, {useState, useEffect} from "react";
import useCounter from "./usecounter";

const max_capacity =10;

function Accommodate(props){
    const [isFull,setIsFull] = useState(false);
    const[count,increaseCount,decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect (() => {
        setIsFull(count>=max_capacity);
        console.log(`Current count value ${count}`);
    }, [count]);

    return (
        <div style = {{padding : 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled ={isFull}>
                선~ 수~ 입장~~~~~
            </button>
            <button onClick={decreaseCount}>선~ 수~ 퇴장~~~~~~~~!!!</button>

            {isFull && <p style ={{color:"red"}}>손꼽아 기다리던 프리덤~! 정원초과.</p>}
        </div>
    );
}

export default Accommodate;