import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchArea from "../components/main/SearchArea";
import KakaoMap from "../components/resultpage/KakaoMap";
import ResultList from "../components/resultpage/ResultList";
import { RootState } from "../redux/configStore";

const ResultPage: React.FC = () => {
  const result = useSelector((state: RootState)=>(state.main.search_list))
  console.log(result)
  const Url = useParams().currentInput;
  console.log(Url);

  return (
    <>
      <SearchArea></SearchArea>
      
      <KakaoMap></KakaoMap>
      <ResultList></ResultList>
    </>
  );
};

export default ResultPage;
