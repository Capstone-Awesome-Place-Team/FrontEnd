import React from "react";
import main_background from "../../static/image/main_background.svg";
import main_search_font from "../../static/image/main_search_font.svg";
const SearchArea: React.FC<{}> = () => {
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
          <img src={main_search_font} alt=""></img>
         
          <input type="text" placeholder="지역, 식당, 음식으로 댕꿀맛집 찾기 GOGO!!"></input>
          </div>
        </div>
        
      </div>
    </>
  );
};
export default SearchArea;
