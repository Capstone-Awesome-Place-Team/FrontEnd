import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchArea from "../components/main/SearchArea";
import KakaoMap from "../components/resultpage/KakaoMap";


const ResultPage:React.FC = ()=>{
 const Url = useParams().currentInput
 console.log(Url)


    return(<>
    <SearchArea></SearchArea>
    <KakaoMap></KakaoMap>
    </>)
}

export default ResultPage;