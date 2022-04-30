import mark from "../../static/image/mark.svg";
const AreaInclude: React.FC<{ includedArea: string[]; selectOne: Function }> = (
  props
) => {
  const { includedArea, selectOne } = props;

  return (
    <>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "145px",
          top: "70px",
          visibility: includedArea.includes("은평구") ? "visible" : "hidden",
          cursor: "pointer",
        }}

        alt="mark"
        onClick={() => selectOne("은평구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "190px",
          top: "40px",
          visibility: includedArea.includes("강북구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("강북구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "200px",
          top: "20px",
          visibility: includedArea.includes("도봉구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("도봉구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "210px",
          top: "30px",
          visibility: includedArea.includes("노원구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("노원구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "-50px",
          top: "130px",
          visibility: includedArea.includes("강서구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("강서구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "110px",
          top: "90px",
          visibility: includedArea.includes("성북구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("성북구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "10px",
          top: "120px",
          visibility: includedArea.includes("서대문구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("서대문구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "-30px",
          top: "150px",
          visibility: includedArea.includes("마포구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("마포구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "0px",
          top: "170px",
          visibility: includedArea.includes("용산구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("용산구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "0px",
          top: "140px",
          visibility: includedArea.includes("중구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("중구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "25px",
          top: "110px",
          visibility: includedArea.includes("동대문구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("동대문구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "-10px",
          top: "150px",
          visibility: includedArea.includes("성동구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("성동구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "15px",
          top: "100px",
          visibility: includedArea.includes("중랑구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("중랑구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "-10px",
          top: "150px",
          visibility: includedArea.includes("광진구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("광진구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "-270px",
          top: "190px",
          visibility: includedArea.includes("양천구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("양천구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "-240px",
          top: "190px",
          visibility: includedArea.includes("영등포구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("영등포구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "170px",
          top: "170px",
          visibility: includedArea.includes("동작구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("동작구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "90px",
          top: "220px",
          visibility: includedArea.includes("금천구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("금천구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "110px",
          top: "220px",
          visibility: includedArea.includes("관악구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("관악구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "145px",
          top: "190px",
          visibility: includedArea.includes("서초구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("서초구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "170px",
          top: "180px",
          visibility: includedArea.includes("강남구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("강남구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "200px",
          top: "170px",
          visibility: includedArea.includes("송파구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("송파구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "210px",
          top: "120px",
          visibility: includedArea.includes("강동구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("강동구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "15px",
          top: "70px",
          visibility: includedArea.includes("종로구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("종로구")}
      ></img>
      <img
        src={mark}
        style={{
          position: "relative",
          left: "-120px",
          top: "180px",
          visibility: includedArea.includes("구로구") ? "visible" : "hidden",
          cursor: "pointer",
        }}
        alt="mark"
        onClick={() => selectOne("구로구")}
      ></img>
    </>
  );
};

export default AreaInclude;
