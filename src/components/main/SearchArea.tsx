import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { actionCreators as searchActions } from "../../redux/modules/main";

import main_background from "../../static/image/main_background.svg";
import main_search_font from "../../static/image/main_search_font.svg";
import search_boundry from "../../static/image/search_boundry.svg";
import search_button from "../../static/image/search_button.svg";
const SearchArea: React.FC<{}> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = useRef<HTMLInputElement>(null);
  const searching = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentInput = search.current!.value;
    dispatch(searchActions.getSearchDB(currentInput, navigate));
  };

  return (
    <>
      <Searchbackground>
        <ContentWrap>
          <div>
            <SearchFont src={main_search_font} alt=""></SearchFont>
            <Div>
              <Searchboundary>
                <Form onSubmit={searching}>
                  <SearchInput type="text" ref={search}></SearchInput>
                  <input type="image" src={search_button} alt=""></input>
                </Form>
              </Searchboundary>
            </Div>
          </div>
        </ContentWrap>
      </Searchbackground>
    </>
  );
};

const Searchbackground = styled.div`
  height: 240px;
  background-image: url(${main_background});
  @media (max-width: 576px) {
    /* height:200px; */
    /* background-repeat:no-repeat; */
  }
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 88px 0;
`;

const SearchFont = styled.img`
  display: block;
  margin: 0 auto 10px auto;
  @media (max-width: 576px) {
    height: 54px;
  }
`;

const Searchboundary = styled.div`
  background-image: url(${search_boundry});
  width: 408px;
  @media (max-width: 576px) {
    width: 280px;
  }
`;
const SearchInput = styled.input.attrs({
  placeholder: "지역, 식당, 음식으로 댕꿀맛집 찾기!",
})`
  border: none;
  background-color: white;
  width: 250px;
  height: 31px;
  margin: 5px 24px;
  @media (max-width: 576px) {
    ::placeholder {
      font-size: 10px;
    }
  }
`;

const Div = styled.div`
  @media (max-width: 576px) {
    width: 300px;
  }
`;

const Form = styled.form`
  display: flex;
`;
export default SearchArea;
