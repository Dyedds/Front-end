import React from "react";
import Comment from "./comment";

const comments = [

    {   
        name: "허성지", 
        comment: "나에요. 나애교.",
    },
    
    {
        name: "나애교", 
        comment: "역시 너였어. 나애교...!"
    },

    {
        name: "천서진",
        comment: "은벼라!!!",
    },
    
    {
        name: "주단태",
        comment: "벌써 떨리는군 ...^^",
    }
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment)=>{
                return(
                <Comment name={comment.name} comment ={comment.comment}/>
                );
            })}

        </div>
    );
}

export default CommentList;