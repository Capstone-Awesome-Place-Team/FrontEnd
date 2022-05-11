import { useParams } from "react-router-dom";
const RestaurantDetail: React.FC<{}> = ()=>{
    const theme_title = useParams().r_code;
    console.log(theme_title)
    return(<>디테일</>)
}

export default RestaurantDetail;