import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SearchArea from "../components/main/SearchArea";
import Filter from "../components/resultpage/Filter";
import KakaoMap from "../components/resultpage/KakaoMap";
import ResultList from "../components/resultpage/ResultList";
import Spinner from "../components/Spinner";
import { RootState } from "../redux/configStore";
import { actionCreators as MainActions } from "../redux/modules/main";

const ResultPage: React.FC = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  // const [resetPage, setResetPage]= useState(true)
  const result = useSelector((state: RootState) => state.main.search_list);
  const navigate = useNavigate();
  const Url = useParams().currentInput!;

  useEffect(() => {
    dispatch(MainActions.postSearchDB(Url, navigate));

    return () => dispatch(MainActions.deleteSearch());
  }, []);
  return (
    <>
      {openModal && <Filter setOpenModal={setOpenModal}></Filter>}
      <SearchArea></SearchArea>
      <KakaoMap></KakaoMap>
      <ResultList setOpenModal={setOpenModal}></ResultList>
    </>
  );
};

export default ResultPage;
