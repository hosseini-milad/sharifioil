import { useState } from "react";
import SearchPList from "./searchPList";
import SearchPhase1 from "./searchS1";
import SearchPhase2 from "./searchS2";
import SearchPhase3 from "./searchS3";

function QuickSearch(){
    const [step , setStep] = useState(1);
    const[vehicleKind, setVehicle] = useState(0);
    const[modelKind , setModel] = useState(0);
    const[carNames,setCarNames] = useState(0);
    const[carFinded , findCar] = useState(0);
    console.log(carFinded)
    return(
        <div >
            <div className="selectedField"><ul>
                {vehicleKind&&<li onClick={()=>{setStep(1);setVehicle(0);setModel(0);setCarNames(0)}}
                    dangerouslySetInnerHTML={{__html:vehicleKind.innerHTML}}></li>}
                {modelKind&&<li onClick={()=>{setStep(2);setModel(0);setCarNames(0)}}
                    dangerouslySetInnerHTML={{__html:modelKind.innerHTML}}></li>}
                {carNames&&<li onClick={()=>{setStep(3);setCarNames(0)}}
                    dangerouslySetInnerHTML={{__html:carNames.innerHTML}}></li>}
                {carNames&&<li onClick={()=>{setStep(4);findCar(0)}}
                    dangerouslySetInnerHTML={{__html:carFinded.innerHTML}}></li>}
                </ul></div>
            <div style={{display:step===1?"block":"none"}}>
                <SearchPhase1 vehicleHandler={setVehicle} setStep={setStep}/>
            </div>
            <div style={{display:step===2?"block":"none"}}>
                <SearchPhase2 modelHandler={setModel} carHandler={setCarNames} setStep={setStep}/>
            </div>
            <div style={{display:step===3?"block":"none"}}>
                {step===3&&<SearchPhase3 findCar={findCar} carName={carNames} setStep={setStep}/>}
            </div>
            <div style={{display:step===4?"block":"none"}}>
                {step===4&&<SearchPList vehicle={vehicleKind} model={modelKind}/>}
            </div>
        </div>
    )
}
export default QuickSearch