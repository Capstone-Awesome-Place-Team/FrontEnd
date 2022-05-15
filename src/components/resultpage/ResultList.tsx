import React from "react";
import { RootState } from "../../redux/configStore";
import { useSelector } from "react-redux";
import styled from "styled-components";
import filter from "../../static/image/filter.png";
type Restaurant = {
  address: string;
  comment_count: number;
  img: string;
  options: { takeout: boolean; parking: boolean };
  price: number;
  r_code: number;
  restaurant_name: string;
  star: number;
};
const ResultList: React.FC<{setOpenModal:Function}> = ({setOpenModal}) => {
  const result = useSelector((state: RootState) => state.main.search_list);
  console.log(result);
  return (
    <Div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Sorting>
          <String>댓글순</String>
          <span>|</span>
          <String>평점순</String>
          <span>|</span>
          <String>거리순</String>
        </Sorting>
        <img src={filter} alt="" style={{ marginRight: "40px" }} onClick={()=>setOpenModal(true)}></img>
      </div>
      <ListBody>
        {result.map((item: Restaurant, idx: string) => {
          return (
            <div key={idx}>
              <PostImg img={item.img}></PostImg>
              <AddressStarWrap>
                <div style={{ fontWeight: "bold" }}>{item.restaurant_name}</div>
                <div style={{ color: "#FFA069" }}>평점 {item.star}</div>
              </AddressStarWrap>
              <div style={{ margin: "0 0 20px 20px", fontSize: "15px",flexWrap: "wrap",width:"320px" }}>
                {item.address}
              </div>
              {/* <hr /> */}
            </div>
          );
        })}

        {/* <div className="post">
              <PostImg img={result[0].img}></PostImg>
              <AddressStarWrap>
                <div style={{ fontWeight: "bold" }}>{result[0].restaurant_name}</div>
                <div style={{ color: "#FFA069" }}>평점 {result[0].star}</div>
              </AddressStarWrap>
              <div style={{ margin: "0 0 20px 20px", fontSize: "15px" }}>
                {result[0].address}
              </div>
              <hr />
            </div> */}
      </ListBody>
    </Div>
  );
};

const Div = styled.div`
  margin: 20px 0;
`;

const ListBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
`;

const PostImg = styled.div`
  width: 300px;
  height: 200px;
  margin: 20px;
  background-image: ${(props: { img: string }) => `url(${props.img})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const AddressStarWrap = styled.div`
  display: flex;
  margin: 0 0 10px 20px;
  font-size: 18px;
  justify-content: space-between;
  width: 300px;
`;

const Sorting = styled.div`
  display: flex;
  margin: 0 0 0 40px;
  font-size: 23px;
  font-weight: bold;
`;

const String = styled.div`
  margin: 0px 5px;
`;
export default ResultList;
