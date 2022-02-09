
function SearchPList(props){
    return(<div className="searchPhase1 searchPhase3">
            <ul className="vehiclePart">
                <li dangerouslySetInnerHTML={{__html:props.vehicle.innerHTML}}></li>
                <li dangerouslySetInnerHTML={{__html:props.model.innerHTML}}></li>
                <li dangerouslySetInnerHTML={{__html:props.kind.innerHTML}}></li>
            </ul>
            <ul className="oilPart">
                <li><img src="https://roghankala.com/28-large_default/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D9%BE%D8%A7%D8%B1%D8%B3-%D8%B3%D9%88%D9%BE%D8%B1-%D9%BE%D8%A7%DB%8C%D8%A7-10w40-%DA%86%D9%87%D8%A7%D8%B1-%D9%84%D9%8A%D8%AA%D8%B1%D9%8A.jpg" />
                    <h4>روغن موتور 1</h4>
                    <strong>250.000 تومان</strong>
                </li>
                <li><img src="https://roghankala.com/28-large_default/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D9%BE%D8%A7%D8%B1%D8%B3-%D8%B3%D9%88%D9%BE%D8%B1-%D9%BE%D8%A7%DB%8C%D8%A7-10w40-%DA%86%D9%87%D8%A7%D8%B1-%D9%84%D9%8A%D8%AA%D8%B1%D9%8A.jpg" />
                    <h4>روغن موتور 2</h4>
                    <strong>270.000 تومان</strong>
                </li>
                <li><img src="https://roghankala.com/28-large_default/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D9%BE%D8%A7%D8%B1%D8%B3-%D8%B3%D9%88%D9%BE%D8%B1-%D9%BE%D8%A7%DB%8C%D8%A7-10w40-%DA%86%D9%87%D8%A7%D8%B1-%D9%84%D9%8A%D8%AA%D8%B1%D9%8A.jpg" />
                    <h4>روغن موتور 3</h4>
                    <strong>280.000 تومان</strong>
                </li>
                <li><img src="https://roghankala.com/28-large_default/%D8%B1%D9%88%D8%BA%D9%86-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D9%BE%D8%A7%D8%B1%D8%B3-%D8%B3%D9%88%D9%BE%D8%B1-%D9%BE%D8%A7%DB%8C%D8%A7-10w40-%DA%86%D9%87%D8%A7%D8%B1-%D9%84%D9%8A%D8%AA%D8%B1%D9%8A.jpg" />
                    <h4>روغن موتور 4</h4>
                    <strong>290.000 تومان</strong>
                </li>
                <div className="moreProductSearch"><a href="">...</a></div>
            </ul>
            
        </div>)
}
export default SearchPList