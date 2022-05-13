import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/configStore";
declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;
const KakaoMap: React.FC = () => {
  const result = useSelector((state: RootState)=>(state.main.search_list))
  const [test, setTest] = useState(true);
  const test_list = [
    { title: "동원참치", address: "서울특별시 종로구 인사동7길 37" },
    { title: "에코밥상", address: "서울특별시 종로구 사직로 127-14" },
    { title: "정선곤드레쌈밥", address: "서울특별시 종로구 평창문화로 152" },
    {
      title: "맹순이꽃게 아구전문점",
      address: "서울특별시 강서구 공항대로 272",
    },
  ];

  console.log(test);
  useEffect(() => {
    let test_done_list: any[] = [];
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      center: new kakao.maps.LatLng(37.566826004661, 126.978652258309), //지도의 중심좌표.
      level: 9, //지도의 레벨(확대, 축소 정도)
    };

    let map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

    if (test) {
      var geocoder = new kakao.maps.services.Geocoder();

      test_list.forEach((item, idx) => {
        geocoder.addressSearch(item.address, (result: any, status: string) => {
          if (status === kakao.maps.services.Status.OK) {
            // console.log(result[0].y, result[0].x);
            test_done_list = [
              ...test_done_list,
              {
                title: item.title,
                latlng: new kakao.maps.LatLng(result[0].y / 1, result[0].x / 1),
              },
            ];
            setTest(!test); //이것도 명확히 어떻게 동작되는지 다시볼것
          }
          // console.log(test_done_list);
        });
      });

      setTimeout(() => {
        //비동기처리때문에 setTimeout 일단 임시적으로 넣어서 확인, 나중에 완료되면 바로실행할수있게 바꿀것
        // console.log(test_done_list);
        for (let i = 0; i < test_done_list.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          let imageSize = new kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성합니다
          console.log("언제");
          let marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: test_done_list[i].latlng, // 마커를 표시할 위치
            title: test_done_list[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
        }
      }, 300);

      let imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; //교체가능
      console.log(test_done_list);

      // console.log(i)
    }
    // console.log(positions)
    // 마커 이미지의 이미지 주소입니다
  }, []);

  return (
    <>
    <h2 style={{ width:"fit-content", margin:"20px auto"}}>검색결과 음식점 리스트를 지도로 한눈에</h2>
      <div style={{ }}>
      <div
        id="map"
        style={{
          width: "400px",
          height: "300px",
          margin: "20px auto",
          border: "1px solid black",
        }}
      ></div>
      <hr />
      </div>
    </>
  );
};

export default KakaoMap;
