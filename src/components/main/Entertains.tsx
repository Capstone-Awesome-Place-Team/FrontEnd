import game_choose from "../../static/image/game_choose.svg";
import random_game from "../../static/image/random_game.jpg"
import random_game_font from "../../static/image/random_game_font.svg";
import game_choose_font from "../../static/image/game_choose_font.svg";
const Entertains: React.FC<{}>  = () => {
  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "#7C7C7C",
          fontFamily: "IBM Plex Sans KR",
          margin:"42px 0 0 0"
        }}
      >
        먹고싶은건 많은데 고르지 못하겠다구요?
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "30px",
          color: "#E22F2F",
          fontFamily: "IBM Plex Sans KR",
        }}
      >
        오늘 뭐먹지? 선택이 어려울때!
      </p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <img src={game_choose_font} alt="" style={{ margin: "0 0 15px 0",}}></img>
          <div
            style={{
              width: "170px",
              height: "163px",
              backgroundImage: `url(${game_choose})`,
              margin:"0 auto",
            }}
          ></div>
          
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={random_game_font} alt=""></img>
          <div
            style={{
              width: "170px",
              height: "163px",
              backgroundImage: `url(${random_game})`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Entertains;
