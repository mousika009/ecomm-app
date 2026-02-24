import { createContext, useEffect, useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";

export const DateContext=createContext();
function App(){

  //shared data
  const currentDate=new Date().toDateString();
  // const currentTime = new Date().toLocaleTimeString();
  //Timer
const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

useEffect(() => {
  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);
}, []);
  return(
    <>
    
  <DateContext.Provider value={{currentDate,currentTime}}>
    <Page1/>
     <Page2/>
  </DateContext.Provider>
    </>
  )
}


export default App