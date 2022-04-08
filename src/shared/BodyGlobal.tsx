import React from 'react';

const BodyGlobal: React.FC = (props)=>{
    return(<div style={{
        margin:"15vh 0px" // 모니터 화면에 맞게 윗여백 주기위해 vh 사용 요구 140px 과 같은 여백이라 넣음
    }}>
        {props.children}
    </div>)
}

export default BodyGlobal;