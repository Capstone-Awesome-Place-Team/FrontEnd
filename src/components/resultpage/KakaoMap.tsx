import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;
const KakaoMap: React.FC = () => {
  useEffect(() => {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      center: new kakao.maps.LatLng(37.566826004661, 126.978652258309), //지도의 중심좌표.
      level: 9, //지도의 레벨(확대, 축소 정도)
    };

    let map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

    // if(test){
    //     var geocoder = new kakao.maps.services.Geocoder();
    //     var callback = function(result:any, status:string) {
    //         if (status === kakao.maps.services.Status.OK) {

    //             console.log(result[0])

    //             setTest(!test)
    //         }
    //     };

    //     geocoder.addressSearch('서울특별시', callback);
    // }
  }, []);

  return (
    <>
    {/* <div style={{ border:"1px solid black"}}> */}
      <div id="map" style={{ width: "400px", height: "300px", margin:"50px auto", border:"1px solid black" }}></div>
      <hr />
      {/* </div> */}
    </>
  );
};

export default KakaoMap;
