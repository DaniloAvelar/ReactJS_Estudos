
import React, {useState} from "react";

const [style, setStyle] = useState("title0");

const Events = () =>{

    return(
        <button onClick={HandleChangeColor}>Trocar a cor</button>
    );
};

const HandleChangeColor = () =>{
    setStyle("title2");
}

export default Events;