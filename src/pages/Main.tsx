import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configStore";
import { actionCreators as mainActions } from "../redux/modules/main";
const Main: React.FC = (props) => {
  const dispatch = useDispatch();
  const theme_list = useSelector((state: RootState) => state.main.list);
  const theme_detail = useSelector(
    (state: RootState) => state.main.theme_detail
  );
  console.log(theme_detail);
  useEffect(() => {
    dispatch(mainActions.getThemeListDB());
  }, []);
  return (
    <div>
      메인 페이지
      <div
        style={{ width: "300px", height: "100px", background: "red" }}
        onClick={() =>
          dispatch(mainActions.getThemeDetail(theme_list[0].theme_title))
        }
      ></div>
      <div>{theme_detail.theme_title}</div>
      <div>{theme_detail.theme_content}</div>
      {theme_detail.restaurant_info.map((item: any) => (
        <div>
          {item.address}
          {item.img}
          {item.intro}
          </div>
      ))}
    </div>
  );
};

export default Main;
