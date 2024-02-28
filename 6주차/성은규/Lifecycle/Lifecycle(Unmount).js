import React, {useEffect, useState} from "react";

const UnmountTest = () =>{

    useEffect(()=>{
        console.log("Mount!");

        return ()=>{
            //Unmount 시점에 실행
            console.log("Unmount!");
        }
    }, []);
    return <div>UnmountTest Testing Component</div>
}
// 하나의 파일에 두개의 컴포넌트를 만들어도 됨 . -> 가독성 별로  
const Lifecycle = () =>{
    const [isVisible,setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);   

    return (<div style={{padding: 20}}>
        <button onClick = {toggle}>ON/OFF</button>
        {isVisible && <UnmountTest/>}
    </div>
    );
}

export default Lifecycle;
