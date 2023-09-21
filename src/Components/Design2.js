import React,{useContext} from "react";
import ColorContext from "../context/ColorContext";
import { LiaBrushSolid } from "react-icons/lia";

const Design1 = () => {
  const {theme, day,night} = useContext(ColorContext);

  function toggle(){
    theme.id === "day" ? night() : day();
  }
  
  return(
    <div>
        <div style={{
            color: theme.color,
            backgroundColor: theme.backgroundColor,
            border: theme.border,
        }}>
            <h1>Sachin ramesh Tendulkar</h1>
            <h2>Crickter</h2>
            <h3>Color Theme</h3>
            <button>Vists Sachin Profile</button>

        </div>
        {/* <button onClick={day}> Day - <LiaBrushSolid /> </button>
        <button onClick={night}>  Night - <LiaBrushSolid /> </button> */}
        <button onClick={toggle}> <LiaBrushSolid /> </button>
    </div>
  )

}

export default Design1;