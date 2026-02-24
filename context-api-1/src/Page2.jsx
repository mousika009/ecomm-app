import { useContext } from "react";
import { DateContext } from "./App";


function Page2(){

    const {currentTime}=useContext(DateContext);
    return(
        <>
        <div>

        <h1>The current time is: {currentTime}</h1>
    </div>

        </>
    )
}

export default Page2