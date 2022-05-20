import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CategoryList from "../components/main/CategoryList";
import Entertains from "../components/main/Entertains";
import SearchArea from "../components/main/SearchArea";
import ThemeList from "../components/main/ThemeList";
import { RootState } from "../redux/configStore";

const Main: React.FC<{ chooseGame: Function }> = (props) => {
  const info = useSelector((state: RootState) => state.favorite.list);

  const { chooseGame } = props;

  return (
    <Div>
      <SearchArea></SearchArea>
      <Entertains chooseGame={chooseGame} />
      <hr />
      <CategoryList></CategoryList>
      <hr />
      <ThemeList></ThemeList>
    </Div>
  );
};

const Div = styled.div`
  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`;
export default Main;
