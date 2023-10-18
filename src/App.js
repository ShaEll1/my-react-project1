import React from 'react';
import img from "./image/7de3958d03096062ed531be20eebd0f7.jpg";
import './App.css';
import Header from './components/Header';
import MenuItems from './components/MenuItems';
import MyMenu from './components/MyMenu';

import Counter from './components/Counter';
import { useState } from 'react';


function App() {
    const [data,setData] = useState("React is Fun!!!");

    function handleClick(){
        setData("This is another value");

    }
    

    
    return (
        <div className="App">
              
            <MenuItems 
            item1="Hem" 
            item2="Om Oss" 
            item3="Produkter"
            />
           
            
            {/* <img src={img} alt="Description of the image" /> */}
            <Header title ="Hello!!!"/>
            {/* <MyMenu/> */}
          {data}

          <button onClick={handleClick}>Click Me</button>

          <Counter />




            
            
        </div>
    );
}

export default App;
