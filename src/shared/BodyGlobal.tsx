import React from 'react';
import styled from 'styled-components';

const BodyGlobal: React.FC = (props)=>{
    return(<Div>
        {props.children}
    </Div>)
}


const Div = styled.div` // 모니터 화면에 맞게 윗여백 주기위해 vh 사용 요구 140px 과 같은 여백이라 넣음
    margin: 13vh 0 0 0;
    @media (max-width:576px){
        margin:0px; // 이거 로그인,회원가입 제외한 화면에서 적용되면 헤더때문에 제대로 적용되는게 아니기때문에 수정할것
    }
`;

export default BodyGlobal;