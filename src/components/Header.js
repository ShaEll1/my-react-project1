import Title from "./Title";
function Header(props){
    return (
        <>
            {/* <h2 style= {{color:"red", backgroundColor:"black"}}>
            {props.title}
            </h2> */}

            <h2 style= {headingStyle}>
            {props.title}
            </h2>
            <Title/>
        </>
    );
}

const headingStyle={
    color:"red", 
    backgroundColor:"black"
}

  export default Header;