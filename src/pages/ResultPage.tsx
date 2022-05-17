import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchArea from "../components/main/SearchArea";
import Filter from "../components/resultpage/Filter";
import KakaoMap from "../components/resultpage/KakaoMap";
import ResultList from "../components/resultpage/ResultList";
import { RootState } from "../redux/configStore";


const ResultPage: React.FC = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  // const [resetPage, setResetPage]= useState(true)
  const result = useSelector((state: RootState)=>(state.main.search_list))
  // console.log(result)
  const Url = useParams().currentInput;
  console.log(Url);
  // useEffect(()=>{
  
  // },[])
  return (
    <>
    {openModal&&<Filter setOpenModal={setOpenModal} ></Filter>}
      <SearchArea></SearchArea>
      <KakaoMap></KakaoMap>
      <ResultList setOpenModal={setOpenModal}></ResultList>
    </>
  );
};

export default ResultPage;
