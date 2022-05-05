import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCreators as searchActions } from "../../redux/modules/main";

import main_background from "../../static/image/main_background.svg";
import main_search_font from "../../static/image/main_search_font.svg";
import search_boundry from "../../static/image/search_boundry.svg";
import search_button from "../../static/image/search_button.svg";
const SearchArea: React.FC<{}> = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const search = useRef<HTMLInputElement>(null);
  const searching = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentInput = search.current!.value;
    console.log(currentInput);
    dispatch(searchActions.getSearchDB(currentInput, navigate)  )
  };

  return (
    <>
      <div
        style={{ height: "240px", backgroundImage: `url(${main_background})` }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "108px 0",
          }}
        >
          <div>
            <img
              src={main_search_font}
              alt=""
              style={{ display: "block", margin: "0 auto 10px auto" }}
            ></img>
            <div
              style={{
                backgroundImage: `url(${search_boundry})`,
                width: "408px",
                height: "41px",
              }}
            >
              <form onSubmit={searching} style={{ display: "flex" }}>
                <input
                  type="text"
                  placeholder="지역, 식당, 음식으로 댕꿀맛집 찾기 GOGO!!"
                  style={{
                    border: "none",
                    backgroundColor: "white",
                    width: "250px",
                    height: "31px",
                    margin: "5px 24px",
                    position: "relative",
                  }}
                  ref={search}
                ></input>
                <input type="image" src={search_button} alt=""></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchArea;
