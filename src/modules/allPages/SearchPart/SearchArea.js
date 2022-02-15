import { useState } from "react";
import SearchPList from "./searchPList";
import SearchPhase2 from "./searchS2";
import SearchPhase3 from "./searchS3";

const { default: SearchPhase1 } = require("./searchS1");

function SearchArea(){
    const[vehicleKind, setVehicle] = useState(0);
    const[modelKind , setModel] = useState(0);
    const[carName,setCarName] = useState(0);
    const[oilKind , setOilKind] = useState(0);
    return(
        <>
            {vehicleKind === 0&&<SearchPhase1 vehicleHandler={setVehicle}/>}
            {vehicleKind !== 0&&modelKind === 0&&
                <SearchPhase2 vehicle={vehicleKind} modelHandler={setModel}
                              carHandler={setCarName}/>}
            {modelKind !== 0&&oilKind===0&&<SearchPhase3 vehicle={vehicleKind} 
                        model={modelKind} kindHandler={setOilKind} carName={carName}/>}
            {oilKind !== 0&&<SearchPList vehicle={vehicleKind} model={modelKind} kind={oilKind}/>}
        </>
    )
}
export default SearchArea