import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const BodyGlobal: React.FC = (props)=>{
    const location = useLocation().pathname;
    return(<Div location={location}>
        {props.children}
    </Div>)
}


const Div = styled.div` // 모니터 화면에 맞게 윗여백 주기위해 vh 사용 요구 140px 과 같은 여백이라 넣음
    margin: ${(props:any)=> props.location==='/'|| props.location.indexOf("list")!==-1 ? "0": "13vh 0 0 0" };
    @media (max-width:576px){
        margin:${(props:any)=> props.location==='/mypage' ? "9vh 0 0 0": "0" }; // 이거 로그인,회원가입 제외한 화면에서 적용되면 헤더때문에 제대로 적용되는게 아니기때문에 수정할것
    }
`;

export default BodyGlobal;