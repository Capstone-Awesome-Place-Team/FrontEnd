import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RestaurantMap from "../components/restaurant_detail_page/RestaurantMap";
import Review from "../components/restaurant_detail_page/Review";
import { RootState } from "../redux/configStore";
import { actionCreators as Actions } from "../redux/modules/restaurant";
import heart from "../static/image/get_favorite_heart.svg";
import red_heart from "../static/image/red_heart.svg";
import all_img from "../static/image/set_of_imgs.png";

const RestaurantDetail: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  let r_code: string = useParams().r_code!;
  const isLogin = localStorage.getItem("token");
  //   console.log(test)
  const detail = useSelector((state: RootState) => state.restaurant);
  // console.log(detail);
  const [choose, setChoose] = useState(0); //이미지 선택
  // console.log(r_code)
  //   useEffect(() => {
  //     if (Object.keys(detail).length === 0) {
  //       dispatch(Actions.getResInfoDB(r_code));
  //     }
  //   }, []);

  useEffect(() => {
    if (isLoading) {
      dispatch(Actions.getResInfoDB(r_code, setIsLoading));
    }
  }, []);

  const moveImage = (idx: number, step: string) => {
    if (step === "next") {
      if (choose === detail.img_list.length - 1) {
        return;
      } else {
        setChoose(choose + 1);
      }
    }
    if (step === "prev") {
      if (choose === 0) {
        return;
      }
      setChoose(choose - 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <div style={{ marginTop: "80px" }}>
          <PostImg img={detail.img_list[choose]}>
            <ArrowNext
              className="arrow"
              onClick={() => moveImage(choose, "next")}
            ></ArrowNext>
            <ArrowPrev
              className="arrow"
              onClick={() => moveImage(choose, "prev")}
            ></ArrowPrev>
          </PostImg>

          <div
            className="pic_list_wrap"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {detail.img_list.map((item: string, idx: number) => {
              return (
                <div
                  style={{
                    position: "relative",
                  }}
                  onClick={() => setChoose(idx)}
                  key={idx}
                >
                  <PostImg className="first" small img={item}></PostImg>
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "5px",
                      width: "100px",
                      height: "100px",
                      backgroundColor: choose === idx ? "" : "rgba(0,0,0, 0.4)",
                      border: choose === idx ? "3px solid #01AEF6" : "",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className="detail_info">
            <div
              style={{ display: "flex", margin: "30px" }}
              className="content_and_heart"
            >
              <div className="content">
                <div className="res_name_and_star" style={{ display: "flex" }}>
                  <div
                    className="res_name"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      marginRight: "15px",
                    }}
                  >
                    {detail.restaurant_name}
                  </div>
                  <div
                    className="star"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      color: "#FFA069",
                    }}
                  >
                    {detail.star}
                  </div>
                </div>
                <div
                  className="main_dish"
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    margin: "10px 0",
                  }}
                >
                  이 가게에서 많이 시켰어요! (
                  {detail.price.toLocaleString("ko-KR")}원)
                </div>
                <div
                  className="address"
                  style={{ width: "240px", fontSize: "15px" }}
                >
                  주소: {detail.address}
                </div>
                <div className="price"></div>
              </div>
              {isLogin === null ? null : detail.like ? (
                <div style={{ position: "relative", left: "300px" }}>
                  <div
                    className="heart"
                    style={{
                      backgroundImage: `url(${red_heart})`,
                      width: "40px",
                      height: "37px",
                      margin: "5px auto",
                    }}
                    onClick={() =>
                      dispatch(Actions.cancelFavoriteDB(detail.r_code))
                    }
                  ></div>
                  <div style={{ color: "#E22F2F" }}>찜목록 취소</div>
                </div>
              ) : (
                <div style={{ position: "relative", left: "300px" }}>
                  <div
                    className="heart"
                    style={{
                      backgroundImage: `url(${heart})`,
                      width: "40px",
                      height: "37px",
                      margin: "5px auto",
                    }}
                    onClick={() =>
                      dispatch(Actions.likeFavoriteDB(detail.r_code))
                    }
                  ></div>
                  <div>찜목록 추가</div>
                </div>
              )}
            </div>

            <hr />
          </div>
          <Review />
          <RestaurantMap />
        </div>
      )}
    </>
  );
};

const PostImg = styled.div`
  width: ${(props: { small: boolean }) => (props.small ? "100px" : "90%")};
  /* width: 660px; */
  height: ${(props: { small: boolean }) => (props.small ? "100px" : "379px")};
  background-image: ${(props: { img: string }) => `url(${props.img})`};
  /* background-size: contain; */
  background-size: ${(props: { small: boolean }) =>
    props.small ? "cover" : "contain"};
  background-repeat: no-repeat;
  background-position: center;
  margin: ${(props: { small: boolean }) =>
    props.small ? "15px 5px" : "0 auto"};
  background-color: ${(props: { small: boolean }) =>
    props.small ? "" : "#000"};
  :hover {
    .arrow {
      visibility: visible;
    }
  }

  @media(max-width:576px){
    height: ${(props: { small: boolean }) => (props.small ? "100px" : "200px")};
  }
`;

const ArrowNext = styled.div`
  width: 48px;
  height: 70px;
  top: 40%;
  left: 93%;
  position: relative;
  background-position: -50px -190px; //이미지위치
  background-image: url(${all_img});
  visibility: hidden;
  @media(max-width:576px){
    top: 30%;
  left: 90%;
  }
`;

const ArrowPrev = styled.div`
  width: 48px;
  height: 70px;
  top: 20%;
  left: 0%;
  position: relative;
  background-position: -0px -190px; //이미지위치
  background-image: url(${all_img});
  visibility: hidden;
  @media(max-width:576px){
    top: -5%;
  left: 0%;
  }
`;
export default RestaurantDetail;
