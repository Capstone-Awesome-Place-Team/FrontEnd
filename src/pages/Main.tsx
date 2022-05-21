import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CategoryList from "../components/main/CategoryList";
import Entertains from "../components/main/Entertains";
import SearchArea from "../components/main/SearchArea";
import ThemeList from "../components/main/ThemeList";
import { actionCreators as MainActions } from "../redux/modules/main";
import Spinner from "../components/Spinner";
import { RootState } from "../redux/configStore";

const Main: React.FC<{ chooseGame: Function }> = (props) => {
  const dispatch = useDispatch();
  const info = useSelector((state: RootState) => state.favorite.list);
  const isList = useSelector((state: RootState) => state.main).list;
  console.log(isList);
  const { chooseGame } = props;

  useEffect(() => {
    if (isList.length === 0) {
      dispatch(MainActions.getThemeListDB());
    }
    return (()=> dispatch(MainActions.deleteSearch()))
  }, []);
  return (
    <>
      {isList.length === 0 ? (
        <Spinner />
      ) : (
        <Div>
          <SearchArea></SearchArea>
          <Entertains chooseGame={chooseGame} />
          <hr />
          <CategoryList></CategoryList>
          <hr />
          <ThemeList></ThemeList>
        </Div>
      )}
    </>
  );
};

const Div = styled.div`
  @media (max-width: 576px) {
    margin-bottom: 80px;
  }
`;
export default Main;
