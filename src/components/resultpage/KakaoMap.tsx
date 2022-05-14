import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;
const KakaoMap: React.FC = () => {
  // const dispatch = useDispatch()
  const result = useSelector((state: RootState) => state.main.search_list);
  console.log(result);
  // let test_done_list: any[] = [];
  let [bigger, setBigger] = useState<boolean>(false);
  const [test, setTest] = useState(true);
  // const [resetPage, setResetPage]= useState(true)
  let array: any = [];
  // const test_list = [
  //   { title: "동원참치", address: "서울특별시 종로구 인사동7길 37" },
  //   { title: "에코밥상", address: "서울특별시 종로구 사직로 127-14" },
  //   { title: "정선곤드레쌈밥", address: "서울특별시 종로구 평창문화로 152" },
  //   {
  //     title: "맹순이꽃게 아구전문점",
  //     address: "서울특별시 강서구 공항대로 272",
  //   },
  // ];

  console.log(result);
  const res_list = result.map((item: any) => {
    return { title: item.restaurant_name, address: item.address };
  });
  console.log(res_list);
  useEffect(() => {
    let array: any = [];
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      center: new kakao.maps.LatLng(37.566826004661, 126.978652258309), //지도의 중심좌표.
      level: 9, //지도의 레벨(확대, 축소 정도)
    };

    let map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
    let imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; //교체가능
    if (test) {
      var geocoder = new kakao.maps.services.Geocoder();
      console.log(res_list);
      res_list.forEach((item: any) => {
        geocoder.addressSearch(item.address, (result: any, status: string) => {
          if (status === kakao.maps.services.Status.OK) {
            console.log(result[0].y, result[0].x);
            array = [
              ...array,
              {
                title: item.title,
                latlng: new kakao.maps.LatLng(result[0].y / 1, result[0].x / 1),
              },
            ];
            // setTest(!test); //이것도 명확히 어떻게 동작되는지 다시볼것
          }
          if (array.length === res_list.length) {
            // setTest(!test);
            for (let i = 0; i < array.length; i++) {
              // 마커 이미지의 이미지 크기 입니다
              let imageSize = new kakao.maps.Size(24, 35);

              // 마커 이미지를 생성합니다
              let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

              // 마커를 생성합니다
              console.log("언제");
              let marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: array[i].latlng, // 마커를 표시할 위치
                title: array[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage, // 마커 이미지
              });
            }
          }
        });
      });

      // setTimeout(() => {
      //   //비동기처리때문에 setTimeout 일단 임시적으로 넣어서 확인, 나중에 완료되면 바로실행할수있게 바꿀것
      //   // console.log(test_done_list);
      //   setTest_done_list(array);
      //   setTest(!test);
      //   for (let i = 0; i < array.length; i++) {
      //     // 마커 이미지의 이미지 크기 입니다
      //     let imageSize = new kakao.maps.Size(24, 35);

      //     // 마커 이미지를 생성합니다
      //     let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      //     // 마커를 생성합니다
      //     console.log("언제");
      //     let marker = new kakao.maps.Marker({
      //       map: map, // 마커를 표시할 지도
      //       position: array[i].latlng, // 마커를 표시할 위치
      //       title: array[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      //       image: markerImage, // 마커 이미지
      //     });
      //   }
      // }, 300);
    }
  }, [result]);

  return (
    <>
      <h2 style={{ width: "fit-content", margin: "20px auto 10px auto" }}>
        검색결과 음식점 리스트를 지도로 한눈에
      </h2>

      <div
        style={{
          overflow: "auto",
          height: bigger ? "490px" : "200px",
          border: "2px solid black",
          margin: "10px"
        }}
      >
        <div
          onClick={() => setBigger(!bigger)}
          style={{
            width: "120px",
            margin: "10px auto",
            textAlign: "center",
            fontSize: "22px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            border: "3px solid #FFAD7C",
            backgroundColor: "#FFA54E",
            borderRadius: "5px",
            boxShadow: "3px 3px 5px #af470a",
          }}
        >
          {bigger ? `맵 줄이기` : `맵 크게보기`}
        </div>
        <div
          id="map"
          style={{
            width: "400px",
            height: "400px",
            margin: "20px auto",
            border: "1px solid black",
          }}
        ></div>
        {/* <hr /> */}
      </div>
    </>
  );
};

export default KakaoMap;
