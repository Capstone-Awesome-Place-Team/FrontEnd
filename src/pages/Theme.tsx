import react, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Spinner from "../components/Spinner";
import { RootState } from "../redux/configStore";
import { actionCreators as mainActions } from "../redux/modules/main";

const Theme = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const theme_detail_list = useSelector(
    (state: RootState) => state.main
  ).theme_detail;
  const theme_title = useParams().theme_title!;

  console.log();
  useEffect(() => {
    if (Object.keys(theme_detail_list).length===0) {
      dispatch(mainActions.getThemeDetail(theme_title));
      // setIsLoading(false)
    } 
    return (()=> dispatch(mainActions.deleteSearch()))
  }, []);

  // console.log(theme_detail_list.restaurant_info[0].options.takeout)
  return (
    <div>
      {Object.keys(theme_detail_list).length===0 ? (
        <Spinner />
      ) : (
        <div style={{ margin: "100px 0" }}>
          <p
            style={{
              width: "fit-content",
              margin: "auto",
              fontSize: "30px",
              color: "#E22F2F",
              fontFamily: "Black Han Sans",
            }}
          >
            {theme_detail_list.theme_title}
          </p>
          <p
            style={{
              width: "fit-content",
              margin: "auto",
              fontSize: "15px",
              color: "#7C7C7C",
              fontFamily: "KoreanPRJTR",
            }}
          >
            {theme_detail_list.theme_content}
          </p>
          {theme_detail_list.restaurant_info.map((item: any, idx: number) => {
            return (
              <div style={{ margin: "20px auto", width: "97%" }} key={idx}>
                <RestaurantImg
                  img={item.img}
                  onClick={() => navigate(`/restaurant/${item.r_code}`)}
                >
                  {item.options.takeout && <KeyWord>포장</KeyWord>}
                  {item.options.parking && <KeyWord>주차</KeyWord>}
                </RestaurantImg>

                <div style={{ display: "flex", margin: "10px 0" }}>
                  <p
                    style={{
                      margin: "0 15px 0 0px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.restaurant_name}
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#FFA069",
                    }}
                  >
                    평점 {item.star}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    margin: "0 0 10px 0",
                  }}
                >
                  주소: <span style={{ color: "#4f4f4f" }}>{item.address}</span>
                </p>
                <Intro>{item.intro}</Intro>
                <br />
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const RestaurantImg = styled.div`
  background-image: ${(props: { img: string }) => `url(${props.img})`};
  width: 100%;
  height: 295px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: end;
  align-items: end;
`;

const KeyWord = styled.div`
  display: flex;
  /* position: relative; */
  /* margin-bottom: 10px; */
  /* margin-left:250px; */
  flex-direction: end;
  left: 530px;
  width: 62px;
  height: 22px;
  background-color: #ff8a8a;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border-radius: 11px;
  color: white;
  /* margin: 0 7.5px 10px; */
  &:nth-child(1) {
    margin: 0 7.5px 10px;
  }
  &:nth-child(2) {
    margin: 0 20px 10px 7.5px;
  }
`;

const Intro = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: IBM Plex Sans KR;
  @media(max-width:576px){
    font-size:15px;
  }
`;

export default Theme;
