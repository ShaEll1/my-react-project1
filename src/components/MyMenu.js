


function MenuItems(props){
    return(
        <li>{props.info}</li>
    );
   
}

function MyMenu(){
    return(
        <ul>
        <MenuItems info="Home"/>
        <MenuItems info="About"/>
        <MenuItems info="Contact"/>
        </ul>
    );
}

export default MyMenu;