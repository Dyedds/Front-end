import React from "react";

function Clock(props){
    return(
        <div>
            <h1>니가 몰 알아.</h1>
            <h2>지금은 {new Date().toLocaleTimeString()}이야. 알겟어?</h2>
        </div>
    );
}

export default Clock;