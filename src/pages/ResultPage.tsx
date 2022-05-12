import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchArea from "../components/main/SearchArea";
declare global{
    interface Window{
        kakao:any
    }
}
const {kakao} = window;
const ResultPage:React.FC = ()=>{
const [test, setTest] =useState(true);
 const Url = useParams().currentInput
 console.log(Url)
 useEffect(()=>{
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
       center: new kakao.maps.LatLng(37.566826004661, 126.978652258309), //지도의 중심좌표.
       level: 9 //지도의 레벨(확대, 축소 정도)
    }
    
    let map = new kakao.maps.Map(container, options);// 지도 생성 및 객체 리턴
    var geocoder = new kakao.maps.services.Geocoder();
if(test){
    var callback = function(result:any, status:string) {
        if (status === kakao.maps.services.Status.OK) {
    
            console.log(result[0])
          
            setTest(!test)
        }
    };
    
    geocoder.addressSearch('서울특별시', callback);
}
 },[test])


    return(<>
    <SearchArea></SearchArea>
    <div id="map" style={{ width:"500px",height:"400px"}}>카카오맵</div>
    </>)
}

export default ResultPage;