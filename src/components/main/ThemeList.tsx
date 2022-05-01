import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/configStore";
import { useNavigate } from "react-router-dom";
const ThemeList = () => {
  const navigate = useNavigate();
  const theme_list = useSelector((state: RootState) => state.main.list);
  return (
    <>
      <p style={{ textAlign: "center", fontSize: "15px", color: "#7C7C7C" }}>
        테마별 맛집 관련 추천 문구
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "30px",
          color: "#E22F2F",
          fontFamily: "Black Han Sans",
        }}
      >
        테마별 맛집 List !!
      </p>
      {theme_list.map((item: { theme_title: string; theme_img: string }) => {
        return (
          <div
            style={{
              width: "460px",
              height: "130px",
              backgroundImage: `url(${item.theme_img})`,
              backgroundSize: "460px 130px",
              margin: "19px auto",
            }}
            onClick={() => navigate(`/theme_list/${item.theme_title}`)}
          ></div>
        );
      })}
    </>
  );
};

export default ThemeList;
