import React, {useState} from "react";
import Editprofile from "../components/mypage/EditProfile";
import FavoriteList from "../components/mypage/FavoriteList";
import FavoriteListMap from "../components/mypage/FavoriteListMap";

import MypageCategory from "../components/mypage/MypageCategory";


const Mypage =(props) =>{
const [category, setCategory] = useState('edit_profile');
    return(<div>
        <MypageCategory setCategory={setCategory}/>
        {category==='edit_profile'&&<Editprofile />}
        {category==='favorite_list'&&<FavoriteList />}
        {category==='favorite_list_map'&&<FavoriteListMap /> }
    </div>)
}

export default Mypage;