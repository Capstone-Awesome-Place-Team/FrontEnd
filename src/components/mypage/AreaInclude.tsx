import styled from "styled-components";
import mark from "../../static/image/mark.svg";
const AreaInclude: React.FC<{ includedArea: string[]; selectOne: Function }> = (
  props
) => {
  const { includedArea, selectOne } = props;

  return (
    <>
      <Eunpyeong
        style={{}}
        alt="mark"
        onClick={() => selectOne("은평구")}
        includeArea={includedArea.includes("은평구")}
      ></Eunpyeong>
      <Gangbuk
        onClick={() => selectOne("강북구")}
        includeArea={includedArea.includes("강북구")}
      ></Gangbuk>
      <Dobong
        onClick={() => selectOne("도봉구")}
        includeArea={includedArea.includes("도봉구")}
      ></Dobong>
      <Nowon
        onClick={() => selectOne("노원구")}
        includeArea={includedArea.includes("노원구")}
      ></Nowon>
      <Gangseo
        onClick={() => selectOne("강서구")}
        includeArea={includedArea.includes("강서구")}
      ></Gangseo>
      <Seongbuk
        onClick={() => selectOne("성북구")}
        includeArea={includedArea.includes("성북구")}
      ></Seongbuk>
      <Seodeamon
        onClick={() => selectOne("서대문구")}
        includeArea={includedArea.includes("서대문구")}
      ></Seodeamon>
      <Mapo
        onClick={() => selectOne("마포구")}
        includeArea={includedArea.includes("마포구")}
      ></Mapo>
      <Youngsan
        onClick={() => selectOne("용산구")}
        includeArea={includedArea.includes("용산구")}
      ></Youngsan>
      <Joonggu
        onClick={() => selectOne("중구")}
        includeArea={includedArea.includes("중구")}
      ></Joonggu>
      <Dongdeamon
        onClick={() => selectOne("동대문구")}
        includeArea={includedArea.includes("동대문구")}
      ></Dongdeamon>
      <Seongdong
        onClick={() => selectOne("성동구")}
        includeArea={includedArea.includes("성동구")}
      ></Seongdong>
      <Joongrang
        onClick={() => selectOne("중랑구")}
        includeArea={includedArea.includes("중랑구")}
      ></Joongrang>
      <Gwangjin
        onClick={() => selectOne("광진구")}
        includeArea={includedArea.includes("광진구")}
      ></Gwangjin>
      <Yangcheon
        onClick={() => selectOne("양천구")}
        includeArea={includedArea.includes("양천구")}
      ></Yangcheon>
      <Yeongdeungpo
        onClick={() => selectOne("영등포구")}
        includeArea={includedArea.includes("영등포구")}
      ></Yeongdeungpo>
      <Dongjak
        onClick={() => selectOne("동작구")}
        includeArea={includedArea.includes("동작구")}
      ></Dongjak>
      <Geumcheon
        onClick={() => selectOne("금천구")}
        includeArea={includedArea.includes("금천구")}
      ></Geumcheon>
      <Gwanak
        onClick={() => selectOne("관악구")}
        includeArea={includedArea.includes("관악구")}
      ></Gwanak>
      <Seocho
        onClick={() => selectOne("서초구")}
        includeArea={includedArea.includes("서초구")}
      ></Seocho>
      <Gangnam
        onClick={() => selectOne("강남구")}
        includeArea={includedArea.includes("강남구")}
      ></Gangnam>
      <Songpa
        onClick={() => selectOne("송파구")}
        includeArea={includedArea.includes("송파구")}
      ></Songpa>
      <Gangdong
        onClick={() => selectOne("강동구")}
        includeArea={includedArea.includes("강동구")}
      ></Gangdong>
      <Jongro
        onClick={() => selectOne("종로구")}
        includeArea={includedArea.includes("종로구")}
      ></Jongro>
      <Guro
        onClick={() => selectOne("구로구")}
        includeArea={includedArea.includes("구로구")}
      ></Guro>
    </>
  );
};

const Eunpyeong = styled.img.attrs(() => ({
  src: mark,
}))`
  position: relative;
  left: 145px;
  top: 70px;
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  cursor: pointer;
  @media (max-width:576px) {
    left: 120px;
  top: 55px;
  width:15px;
  }
`;

const Gangbuk = styled.img.attrs(() => ({
  src: mark,
}))`
  position: relative;
  left: 190px;
  top: 40px;
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  cursor: pointer;
  @media (max-width:576px) {
    left: 160px;
  top: 35px;
  width:15px;
  }
`;

const Dobong = styled.img.attrs(() => ({
  src: mark,
}))`
  position: relative;
  left: 200px;
  top: 20px;
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  cursor: pointer;
  @media (max-width:576px) {
    left: 170px;
  top: 10px;
  width:15px;
  }
`;

const Nowon = styled.img.attrs(() => ({
  src: mark,
}))`
  position: relative;
  left: 210px;
  top: 30px;
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  cursor: pointer;
  @media (max-width:576px) {
    left: 190px;
  top: 30px;
  width:15px;
  }
`;

const Gangseo = styled.img.attrs(() => ({
  src: mark,
}))`
  position: relative;
  left: -50px;
  top: 130px;
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  cursor: pointer;
  @media (max-width:576px) {
    left: -30px;
  top: 110px;
  width:15px;
  }
`;
const Seongbuk = styled.img.attrs(() => ({
  src: mark,
}))`
  position: relative;
  left: 110px;
  top: 90px;
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  cursor: pointer;
  @media (max-width:576px) {
    left: 120px;
  top: 75px;
  width:15px;
  }
`;

const Seodeamon = styled.img.attrs(() => ({
  src: mark,
}))`
  position: relative;
  left: 10px;
  top: 120px;
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  cursor: pointer;
  @media (max-width:576px) {
    left:40px;
  top: 95px;
  width:15px;
  }
`;
const Mapo = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: -30px;
  top: 150px;
  cursor: pointer;
  @media (max-width:576px) {
    left:0px;
  top: 120px;
  width:15px;
  }
`;
const Youngsan = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 0px;
  top: 170px;
  cursor: pointer;
  @media (max-width:576px) {
    left: 40px;
  top: 140px;
  width:15px;
  }
`;
const Joonggu = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 0px;
  top: 140px;
  cursor: pointer;
  @media (max-width:576px) {
    left: 45px;
  top: 115px;
  width:15px;
  }
`;
const Dongdeamon = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 25px;
  top: 110px;
  cursor: pointer;
  @media (max-width:576px) {
    left: 70px;
  top: 90px;
  width:15px;
  }
`;
const Seongdong = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: -10px;
  top: 150px;
  /* visibility: includedArea.includes("성동구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left: 50px;
  top: 120px;
  width:15px;
  }
`;
const Joongrang = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 15px;
  top: 100px;
  /* visibility: includedArea.includes("중랑구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left: 70px;
  top: 75px;
  width:15px;
  }
`;
const Gwangjin = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: -10px;
  top: 150px;
  /* visibility: includedArea.includes("광진구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left: 50px;
  top: 120px;
  width:15px;
  }
`;
const Yangcheon = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: -270px;
  top: 180px;
  /* visibility: includedArea.includes("양천구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left: -140px;
  top: 150px;
  width:15px;
  }
`;
const Yeongdeungpo = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: -240px;
  top: 190px;
  /* visibility: includedArea.includes("영등포구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left: -120px;
  top: 150px;
  width:15px;
  }
`;
const Dongjak = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 170px;
  top: 170px;
  /* visibility: includedArea.includes("동작구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left:-100px;
  top: 170px;
  width:15px;
  }
`;
const Geumcheon = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 90px;
  top: 200px;
  /* visibility: includedArea.includes("금천구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left:-160px;
  top: 200px;
  width:15px;
  }
`;
const Gwanak = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 110px;
  top: 200px;
  /* visibility: includedArea.includes("관악구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left:-140px;
  top: 200px;
  width:15px;
  }
`;
const Seocho = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 145px;
  top: 180px;
  /* visibility: includedArea.includes("서초구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left:-100px;
  top: 180px;
  width:15px;
  }
`;
const Gangnam = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 170px;
  top: 170px;
  /* visibility: includedArea.includes("강남구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left:-80px;
  top: 180px;
  width:15px;
  }
`;
const Songpa = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 200px;
  top: 150px;
  /* visibility: includedArea.includes("송파구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left:-50px;
  top: 160px;
  width:15px;
  }
`;
const Gangdong = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 210px;
  top: 100px;
  /* visibility: includedArea.includes("강동구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left:300px;
  top: 90px;
  width:15px;
  }
`;
const Jongro = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: 15px;
  top: 70px;
  /* visibility: includedArea.includes("종로구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left:140px;
  top:50px;
  width:15px;
  }
`;

const Guro = styled.img.attrs(() => ({
  src: mark,
}))`
  visibility: ${(props: { includeArea: boolean }) =>
    props.includeArea ? `visible;` : `hidden;`};
  position: relative;
  left: -120px;
  top: 180px;
  /* visibility: includedArea.includes("구로구") ? "visible" : "hidden", */
  cursor: pointer;
  @media (max-width:576px) {
    left:20px;
  top: 150px;
  width:15px;
  }
`;

export default AreaInclude;
