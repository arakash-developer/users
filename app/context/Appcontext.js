"use client";
import { createContext,useState } from "react";
export let Contex = createContext();
let Appcontext = ({children}) =>{
    let [isloging,setIsloging] = useState(false)
    return(
        <Contex.Provider value={{isloging,setIsloging}}>
            {children}
        </Contex.Provider>       
    );
}
export default Appcontext;