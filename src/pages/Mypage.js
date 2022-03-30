import React, {useState, useEffect} from "react";
import styled from 'styled-components'

import Editprofile from "../components/mypage/EditProfile";
import FavoriteList from "../components/mypage/FavoriteList";
import FavoriteListMap from "../components/mypage/FavoriteListMap";

import MypageCategory from "../components/mypage/MypageCategory";



const Mypage =(props) =>{
const [category, setCategory] = useState('edit_profile');

useEffect(()=>{
    // 모든 정보 get 요청 해서 redux 에 저장해놓기
},[])
    return(<div>
        <Header>마이페이지</Header>
        <MypageCategory setCategory={setCategory} category={category}/>
        {category==='edit_profile'&&<Editprofile />}
        {category==='favorite_list'&&<FavoriteList />}
        {category==='favorite_list_map'&&<FavoriteListMap /> }
    </div>)
}

const Header = styled.div`
color: #e22f2f;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding: 19px 0px ;
`;

export default Mypage;