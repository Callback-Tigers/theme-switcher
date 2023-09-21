import React from "react";
import ColorContext from "./ColorContext";

const day = { 
     id: "day",
     color: "black",
     backgroundColor: "white",
     border: "1px solid black"
}

const ColorProvider = (props) => {
   const [theme, setTheme] = React.useState(day);

    return (
         <ColorContext.Provider value={{
            theme: theme, 
            day:  () => setTheme(day),
            night: () => setTheme({
                id: "night",
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            }),
          
          }}>
              {props.children}
         </ColorContext.Provider>
    )
}

export default ColorProvider;