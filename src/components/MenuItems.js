import "./MenuItems.css";

function MenuItems(props){
    return(
        <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
        </ul>
    );
}

export default MenuItems