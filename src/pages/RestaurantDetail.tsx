import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as Actions } from "../redux/modules/main";
const RestaurantDetail: React.FC<{}> = ()=>{
    const dispatch = useDispatch();
    let r_code:string = useParams().r_code!;
    console.log(r_code)
    useEffect(()=>{
        dispatch(Actions.getResInfoDB(r_code))
    },[])
    return(<>디테일</>)
}

export default RestaurantDetail;