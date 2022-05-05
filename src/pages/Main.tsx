import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryList from "../components/main/CategoryList";
import Entertains from "../components/main/Entertains";
import SearchArea from "../components/main/SearchArea";
import ThemeList from "../components/main/ThemeList";
import { RootState } from "../redux/configStore";
import { actionCreators as mainActions } from "../redux/modules/main";
const Main: React.FC = (props) => {
  const dispatch = useDispatch();

 

  return (
    <div>
      <SearchArea></SearchArea>
      <Entertains></Entertains>
      <hr />
      <CategoryList></CategoryList>
      <hr />
      <ThemeList></ThemeList>
    </div>
  );
};

export default Main;
