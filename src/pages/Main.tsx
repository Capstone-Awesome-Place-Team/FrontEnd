import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import CategoryList from "../components/main/CategoryList";
import Entertains from "../components/main/Entertains";
import SearchArea from "../components/main/SearchArea";
import ThemeList from "../components/main/ThemeList";
import { RootState } from "../redux/configStore";

const Main: React.FC<{chooseGame:Function}> = (props) => {
  const info = useSelector((state:RootState )=>state.favorite.list)
  
  const {chooseGame} = props
 
  return (
    <div>
      <SearchArea></SearchArea>
      <Entertains chooseGame={chooseGame}/> 
      <hr />
      <CategoryList></CategoryList>
      <hr />
      <ThemeList></ThemeList>
    </div>
  );
};

export default Main;
