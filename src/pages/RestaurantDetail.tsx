import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Review from "../components/restaurant_detail_page/Review";
import { RootState } from "../redux/configStore";
import { actionCreators as Actions } from "../redux/modules/main";
import heart from "../static/image/get_favorite_heart.svg"
const RestaurantDetail: React.FC<{}> = () => {
  const dispatch = useDispatch();
  let r_code: string = useParams().r_code!;
  const detail = useSelector(
    (state: RootState) => state.main.restaurant_detail
  );
  console.log(detail);
  // console.log(r_code)
  useEffect(() => {
    dispatch(Actions.getResInfoDB(r_code));
  }, []);
  return (
    <>
      <PostImg img={detail.img_list[0]}>
        <Arrow></Arrow>
      </PostImg>

      <div
        className="pic_list_wrap"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <PostImg className="first" small img={detail.img_list[0]}></PostImg>
        <PostImg className="second" small img={detail.img_list[1]}></PostImg>
      </div>
      <div className="detail_info">
        <div style={{ display: "flex" }} className="content_and_heart">
            <div className="content">
             <div className="res_name_and_star" style={{ display: "flex" }}>
                 <div className="res_name">{detail.restaurant_name}</div>
                 <div className="star">{detail.star}</div>
             </div>
            <div className="main_dish">이 가게에서 많이 시켰어요! ({detail.price}원)</div>
            <div className="price"></div>
            </div>
          <div className="heart" style={{ backgroundImage:`url(${heart})`, width:"40px", height:"37px" }}></div>
        </div>
        <hr />
        <div className="address">주소: {detail.address}</div>
        <hr />
      </div>
      <Review />
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
  background-position: -50px -190px;
  background-image: url("https://t1.daumcdn.net/localimg/localimages/07/2018/pc/ico_detail_211026.png");
`;
export default RestaurantDetail;
