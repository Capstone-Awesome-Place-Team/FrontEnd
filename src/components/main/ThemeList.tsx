import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/configStore";
import { useNavigate } from "react-router-dom";
import theme_font from "../../static/image/theme_font.svg";
const ThemeList: React.FC<{}>  = () => {
  const navigate = useNavigate();
  const theme_list = useSelector((state: RootState) => state.main.list);
  return (
    <>
      <div style={{ width: "fit-content", margin: "43px auto" }}>
        <img src={theme_font} alt=""></img>
      </div>
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
