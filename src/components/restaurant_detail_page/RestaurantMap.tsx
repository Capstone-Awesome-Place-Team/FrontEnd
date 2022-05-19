import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";

import map_icon from "../../static/image/map_icon.svg"
const { kakao } = window;
const RestaurantMap: React.FC<{}> = (props) => {
  const detail = useSelector((state: RootState) => state.restaurant);
  console.log(detail.address);
  useEffect(() => {
    let restaurant_loctaion: any = {};

    //여기부터 마크, 주소 찾기위한 코드
    let imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; //교체가능

    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(detail.address, (result: any, status: string) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(status);
        restaurant_loctaion = {
          title: detail.restaurant_name,
          latlng: new kakao.maps.LatLng(result[0].y / 1, result[0].x / 1),
        };
        console.log(result[0]);
        // 마커 이미지의 이미지 크기 입니다

        let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        let options = {
          center: new kakao.maps.LatLng(result[0].y / 1, result[0].x / 1), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        let map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        let imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        console.log(restaurant_loctaion);
        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: restaurant_loctaion.latlng, // 마커를 표시할 위치
          title: restaurant_loctaion.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
 var iwContent = `<div style=" background-color: white; 
                  border: 1px solid black; 
                 margin: 0 0 95px 0;
                  width: fit-content; 
                  text-align: center; 
                  font-weight:bold;
                  padding:3px;
                  font-size:13px";
                  >${restaurant_loctaion.title}
                  </div>`,
                  iwPosition = new kakao.maps.LatLng(
                      restaurant_loctaion.latlng.Ma,
                      restaurant_loctaion.latlng.La
                  );
                  var customOverlay = new kakao.maps.CustomOverlay({
                    position: iwPosition,
                    content: iwContent,
                    map: map,
                  });

      }

    });
  }, []);
  return (
    <div style={{ margin: "50px 0",}}>
    <div style={{display:"flex", alignItems:"center", margin:"0 0 7px 30px"}}>
        <img src={map_icon} alt="" ></img>
    <span style={{margin:"0 5px", fontSize:"20px", fontWeight:"bold", color:"#747474"}}>지도</span>
    </div>
      <div
        className="map"
        id="map"
        style={{
          width: "660px",
          height: "413px",
          border: "1px solid black",
          margin: "0px auto",
         
        }}
      >
      </div>
    </div>
  );
};

export default RestaurantMap;
