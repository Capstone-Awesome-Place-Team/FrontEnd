import react, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/configStore";

import { actionCreators as mainActions } from "../redux/modules/main";

const Theme = () => {
  const dispatch = useDispatch();
  const theme_detail_list = useSelector(
    (state: RootState) => state.main.theme_detail
  );
  const theme_title = useParams().theme_title!;
  console.log(theme_detail_list);
  useEffect(() => {
    dispatch(mainActions.getThemeDetail(theme_title));
  }, []);
  return (
    <div>
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
      {theme_detail_list.restaurant_info.map((item: any) => {
        return (
          <>
            <div style={{ margin: "20px auto", width: "690px"}}>
              <img src={item.img} width="690px" height="295px" alt="img"></img>
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
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
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
                주소: {item.address}
              </p>
              <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                {item.intro}
              </p>
              <br />
              <hr />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Theme;
