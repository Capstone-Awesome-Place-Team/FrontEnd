import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import theme_font from "../../static/image/theme_font.svg";
import { actionCreators as mainActions } from "../../redux/modules/main";
import LoadMore from "./LoadMore";
const ThemeList: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme_list = useSelector((state: RootState) => state.main.list);
  const isLoading = useSelector((state: RootState) => state.main.isLoading);
  const LIMIT = 5;
  const [list, setList] = useState([]); //새로운 테마리스트 추가하기위한 변수
  const [Idx, setIdx] = useState(LIMIT);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    if (isLoading) {
      dispatch(mainActions.getThemeListDB());
    } else {
      setList(theme_list.slice(0, LIMIT));
    }
  }, [isLoading]);
  const loadMore = () => {
    const newIdx = Idx + LIMIT; // 클릭한다면 현재 Idx에서 +5한 인덱스를 넣어줌
    const newShowMore = newIdx <= theme_list.length - 1; // 더보기 클릭후 추가로 더보기가 있을지의 여부, 전체 리스트가 새로 불러오는 인덱스보다 1이상크다면 true 아니면 false
    const newList = list.concat(theme_list.slice(Idx, newIdx)); // list이름의 State배열에 새로운 인덱스까지의 값들을 추가
    setIdx(newIdx);
    setList(newList);
    setShowMore(newShowMore);
  };

  return (
    <>
      <div style={{ width: "fit-content", margin: "43px auto" }}>
        <img src={theme_font} alt=""></img>
      </div>
      {list.map((item: { theme_title: string; theme_img: string }, idx) => {
        return (
          <div
            style={{
              width: "460px",
              height: "130px",
              backgroundImage: `url(${item.theme_img})`,
              backgroundSize: "460px 130px",
              margin: "19px auto",
            }}
            onClick={() => navigate(`/theme_list/${item.theme_title}`)}
            key={idx}
          ></div>
        );
      })}
      {showMore && <LoadMore loadMore={loadMore}>더보기</LoadMore>}
    </>
  );
};

export default ThemeList;
