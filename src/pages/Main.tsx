import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../components/main/CategoryList";
import Entertains from "../components/main/Entertains";
import ThemeList from "../components/main/ThemeList";
import { RootState } from "../redux/configStore";
import { actionCreators as mainActions } from "../redux/modules/main";
const Main: React.FC = (props) => {
  const dispatch = useDispatch();
  const theme_list = useSelector((state: RootState) => state.main.list);
  const theme_detail = useSelector(
    (state: RootState) => state.main.theme_detail
  );
 
  useEffect(() => {
    dispatch(mainActions.getThemeListDB());
  }, []);
  
  return (
    <div>
      <Entertains></Entertains>
      <hr />
      <CategoryList></CategoryList>
      <hr />
      <ThemeList></ThemeList>
    </div>
  );
};

export default Main;
