function BreadCrumb(props){
    return(<div className="breadCrumb">
        <strong>{"خانه >"}</strong>
        <span>{props.pName}</span>
        </div>
    )
}
export default BreadCrumb