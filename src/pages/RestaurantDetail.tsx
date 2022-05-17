import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Review from "../components/restaurant_detail_page/Review";
import { RootState } from "../redux/configStore";
import { actionCreators as Actions } from "../redux/modules/main";
import heart from "../static/image/get_favorite_heart.svg";
import all_img from "../static/image/set_of_imgs.png";
const RestaurantDetail: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  let r_code: string = useParams().r_code!;
  const isLogin= localStorage.getItem("token");
//   console.log(test)
  const detail = useSelector(
    (state: RootState) => state.main.restaurant_detail
  );
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
  return (
    <>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <div>
          <PostImg img={detail.img_list[choose]}>
            <Arrow></Arrow>
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
            <div style={{ display: "flex" }} className="content_and_heart">
              <div className="content">
                <div className="res_name_and_star" style={{ display: "flex" }}>
                  <div className="res_name">{detail.restaurant_name}</div>
                  <div className="star">{detail.star}</div>
                </div>
                <div className="main_dish">
                  이 가게에서 많이 시켰어요! ({detail.price}원)
                </div>
                <div className="price"></div>
              </div>
              {isLogin===null?null:<div
                className="heart"
                style={{
                  backgroundImage: `url(${heart})`,
                  width: "40px",
                  height: "37px",
                }}
              ></div>}
            </div>
            <hr />
            <div className="address">주소: {detail.address}</div>
            <hr />
          </div>
          <Review />
        </div>
      )}
    </>
  );
};

const PostImg = styled.div`
  width: ${(props: { small: boolean }) => (props.small ? "100px" : "660px")};
  /* width: 660px; */
  height: ${(props: { small: boolean }) => (props.small ? "100px" : "379px")};
  background-image: ${(props: { img: string }) => `url(${props.img})`};
  /* background-size: contain; */
  background-size: ${(props: { small: boolean }) =>
    props.small ? "cover" : "contain"};
  background-repeat: no-repeat;
  background-position: center;
  /* border: 1px solid black; */
  margin: ${(props: { small: boolean }) =>
    props.small ? "15px 5px" : "0 auto"};
  background-color: ${(props: { small: boolean }) =>
    props.small ? "" : "#000"};
`;

const Arrow = styled.div`
  width: 48px;
  height: 70px;
  top: 40%;
  left: 90%;
  position: relative;
  background-position: -50px -190px; //이미지위치
  background-image: url(${all_img});
`;
export default RestaurantDetail;
