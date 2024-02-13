const Container = ({children}) =>{
    // children에 Counter.js가 전달됨
    return (
    <div style = {{margin : 20, padding : 20, border: "1px solid gray"}}>
        {children}
    </div>
    );
};

export default Container;