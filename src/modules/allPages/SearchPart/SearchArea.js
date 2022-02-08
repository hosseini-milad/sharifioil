import { useState } from "react";
import SearchPhase2 from "./searchS2";
import SearchPhase3 from "./searchS3";

const { default: SearchPhase1 } = require("./searchS1");

function SearchArea(){
    const[vehicleKind, setVehicle] = useState(0);
    const[modelKind , setModel] = useState(0);
    return(
        <>
            {vehicleKind === 0&&<SearchPhase1 vehicleHandler={setVehicle}/>}
            {vehicleKind !== 0&&modelKind === 0&&<SearchPhase2 vehicle={vehicleKind} modelHandler={setModel}/>}
            {modelKind !== 0&&<SearchPhase3 vehicle={vehicleKind} model={modelKind}/>}
        </>
    )
}
export default SearchArea