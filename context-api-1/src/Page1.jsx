import { useContext } from "react"
import { DateContext } from "./App";
import Page2 from "./Page2";

function Page1(){

    const {currentDate}=useContext(DateContext);
    return(
        <>
        <div>

        <h1>The current Date is: {currentDate}</h1>

        <Page2/>
    </div>

        </>
    )
}

export default Page1